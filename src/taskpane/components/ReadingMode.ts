/* global Excel Office console */

/**
 * ReadingMode — 选中单元格时高亮所在整行 + 所在整列 + 当前单元格(WPS 阅读模式)
 *
 * Excel 操作委托给 shared/ReadingModeCore:
 *   - computeHighlightPlan: 算出 rowAddr / colAddr / cellAddr
 *   - applyHighlight:       在当前 Excel.run context 里涂
 *   - clearHighlights:      清指定 sheet 的旧高亮
 *
 * 持久化:
 *   - enabled / crossColor / cellColor → "readingMode.state"
 *   - lastHighlights[]                 → "readingMode.lastHighlights"
 *
 * 性能:onSelectionChanged 用 80ms 节流,合并连续选区切换。
 *
 * 配色映射(任务窗格 UI 命名 → state):
 *   - rowColor    → crossColor(整行 + 整列共用,WPS 也是同色)
 *   - columnColor → cellColor(当前格单独色,跟十字区分)
 */

import {
  applyHighlight,
  clearHighlights,
  clearAllAcrossSheets,
  loadState,
  saveState,
  loadHighlights,
  saveHighlights,
  computeHighlightPlan,
  planToLastHighlight,
  DEFAULT_STATE,
  ReadingModeState,
  LastHighlight,
} from "../../shared/ReadingModeCore";

/** taskpane.ts 用的命名(保持 UI 文案不变)*/
export interface ReadingModeSettings {
  rowColor: string;     // → crossColor
  columnColor: string;  // → cellColor
}

export class ReadingMode {
  private _state: ReadingModeState = { ...DEFAULT_STATE };
  private _registered = false;

  // 节流
  private _throttleMs = 80;
  private _lastInvoke = 0;
  private _pendingTimer: ReturnType<typeof setTimeout> | null = null;

  // 当前 sheet 名 — 切 sheet 时丢弃旧 sheet 的高亮记录
  private _lastSheetName = "";

  // 上次高亮位置(跨 context 保留,用于 disable 时清)
  private _lastHighlights: LastHighlight[] = [];

  get enabled(): boolean {
    return this._state.enabled;
  }

  constructor() {
    this._state = loadState();
    this._lastHighlights = loadHighlights();
    console.log(`[RM] init: enabled=${this._state.enabled} cross=${this._state.crossColor} cell=${this._state.cellColor} hls=${this._lastHighlights.length}`);
  }

  /**
   * 任务窗格颜色选择器入口。
   * rowColor → crossColor(行+列共用),columnColor → cellColor(当前格)。
   */
  updateSettings(settings: Partial<ReadingModeSettings>): void {
    let changed = false;
    if (settings.rowColor !== undefined) {
      const next = settings.rowColor.startsWith("#") ? settings.rowColor.slice(1) : settings.rowColor;
      if (next.toUpperCase() !== this._state.crossColor.toUpperCase()) {
        console.log(`[RM] updateSettings: crossColor ${this._state.crossColor} → ${next}`);
        this._state.crossColor = next;
        changed = true;
      }
    }
    if (settings.columnColor !== undefined) {
      const next = settings.columnColor.startsWith("#") ? settings.columnColor.slice(1) : settings.columnColor;
      if (next.toUpperCase() !== this._state.cellColor.toUpperCase()) {
        console.log(`[RM] updateSettings: cellColor ${this._state.cellColor} → ${next}`);
        this._state.cellColor = next;
        changed = true;
      }
    }
    if (changed) {
      saveState(this._state);
      if (this._state.enabled) {
        console.log(`[RM] updateSettings: 触发 refresh`);
        void this.refresh();
      } else {
        console.log(`[RM] updateSettings: enabled=false, 暂不 refresh,仅保存`);
      }
    }
  }

  async enable(): Promise<void> {
    if (this._state.enabled) return;
    this._state.enabled = true;
    saveState(this._state);
    try {
      await Excel.run(async (context) => {
        const ws = context.workbook.worksheets.getActiveWorksheet();
        ws.load("name");
        await context.sync();
        this._lastSheetName = ws.name;
      });
      if (!this._registered) this._registerEvents();
      await this.refresh();
      console.log("[RM] enable: 已激活");
    } catch (error) {
      console.error("[RM] enable error:", error);
      this._state.enabled = false;
      saveState(this._state);
    }
  }

  async disable(): Promise<void> {
    if (!this._state.enabled) return;
    this._state.enabled = false;
    saveState(this._state);
    this._clearPendingTimer();
    await clearAllAcrossSheets(this._lastHighlights);
    this._lastHighlights = [];
    saveHighlights(this._lastHighlights);
    console.log("[RM] disable: 已清空所有高亮");
  }

  /** 颜色变化时调用,重画当前选区 */
  async refresh(): Promise<void> {
    if (!this._state.enabled) return;
    await this._doHighlight();
  }

  // ─────────────────── 内部 ───────────────────

  private _registerEvents(): void {
    if (this._registered) return;
    Office.context.document.addHandlerAsync(
      Office.EventType.DocumentSelectionChanged,
      this._onSelectionChangedHandler,
      (result) => {
        if (result.status === Office.AsyncResultStatus.Failed) {
          console.error("[RM] 注册 selection handler 失败:", result.error.message);
          return;
        }
        this._registered = true;
      }
    );
  }

  private _onSelectionChangedHandler = (): void => {
    if (!this._state.enabled) return;
    this._throttle(() => void this._doHighlight());
  };

  private _throttle(fn: () => void): void {
    const now = Date.now();
    if (now - this._lastInvoke >= this._throttleMs) {
      this._lastInvoke = now;
      fn();
      return;
    }
    if (this._pendingTimer) clearTimeout(this._pendingTimer);
    this._pendingTimer = setTimeout(() => {
      this._lastInvoke = Date.now();
      this._pendingTimer = null;
      fn();
    }, this._throttleMs);
  }

  private _clearPendingTimer(): void {
    if (this._pendingTimer) {
      clearTimeout(this._pendingTimer);
      this._pendingTimer = null;
    }
  }

  /**
   * WPS 阅读模式核心:
   *   run #1 — 读 sheetName + 清旧高亮
   *   run #2 — 读选区、算 rowAddr/colAddr/cellAddr、涂新
   *
   * 两个 run 用 sheet 名串起来,中间不共享 context,避免"清旧"和"涂新"排队错位。
   */
  private async _doHighlight(): Promise<void> {
    // ── Phase 1: 读 sheetName + 清旧 ─────────────────
    let sheetName = "";
    try {
      await Excel.run(async (context) => {
        const ws = context.workbook.worksheets.getActiveWorksheet();
        ws.load("name");
        await context.sync();
        sheetName = ws.name;
      });
    } catch (e) {
      console.error("[RM] _doHighlight: phase1 读 sheetName 失败", e);
      return;
    }

    if (sheetName !== this._lastSheetName) {
      this._lastSheetName = sheetName;
      this._lastHighlights = this._lastHighlights.filter(h => h.sheetName !== sheetName);
      saveHighlights(this._lastHighlights);
      console.log(`[RM] _doHighlight: 切到 ${sheetName}`);
    }

    const sheetHls = this._lastHighlights.filter(h => h.sheetName === sheetName);
    if (sheetHls.length > 0) {
      try {
        await Excel.run(async (context) => {
          const sheet = context.workbook.worksheets.getItem(sheetName);
          await clearHighlights(context, sheet, sheetHls);
        });
        this._lastHighlights = this._lastHighlights.filter(h => h.sheetName !== sheetName);
        saveHighlights(this._lastHighlights);
      } catch (e) {
        console.error(`[RM] _doHighlight: clear run 失败 (${sheetName})`, e);
      }
    }

    // ── Phase 2: 读选区 + 算地址 + 涂新 ─────────────────
    try {
      await Excel.run(async (context) => {
        const range = context.workbook.getSelectedRange();
        range.load(["rowIndex", "columnIndex", "rowCount", "columnCount"]);
        const sheet = range.worksheet;
        sheet.load("name");
        await context.sync();

        if (range.rowCount !== 1 || range.columnCount !== 1) {
          console.log(`[RM] _doHighlight: 多选 rowCount=${range.rowCount} colCount=${range.columnCount}, 跳过涂`);
          return;
        }

        let totalRows = 100;
        let totalCols = 26;
        try {
          const usedRange = sheet.getUsedRangeOrNullObject();
          usedRange.load(["isNullObject", "rowCount", "columnCount"]);
          await context.sync();
          if (!usedRange.isNullObject) {
            totalRows = Math.max(1, usedRange.rowCount || 100);
            totalCols = Math.max(1, usedRange.columnCount || 26);
          }
        } catch (e) {
          console.warn("[RM] _doHighlight: usedRange 读失败,用默认", e);
        }

        const plan = computeHighlightPlan(
          range.rowIndex,
          range.columnIndex,
          range.rowCount,
          range.columnCount,
          sheet.name,
          totalRows,
          totalCols
        );
        applyHighlight(context, sheet, plan, this._state);
        await context.sync();

        if (!plan.isMultiCell) {
          const newHl = planToLastHighlight(plan);
          this._lastHighlights = [
            ...this._lastHighlights.filter(h => h.sheetName !== sheet.name),
            newHl,
          ];
          saveHighlights(this._lastHighlights);
          console.log(`[RM] _doHighlight: 涂完 ${newHl.cellAddr} (row=${newHl.rowAddr}, col=${newHl.colAddr})`);
        }
      });
    } catch (e) {
      console.error("[RM] _doHighlight: phase2 apply 失败", e);
    }
  }
}