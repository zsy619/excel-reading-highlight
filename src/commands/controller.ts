/* global window Office Excel console setTimeout clearTimeout */

/**
 * ReadingModeController — 阅读模式的唯一控制器(常驻 commands.html context)
 *
 * 职责:
 *   - 持有 enabled 状态、配色、lastHighlights(localStorage 持久化)
 *   - 注册 DocumentSelectionChanged handler(本 context 内单例)
 *   - 跨 sheet 切换时清旧视觉 + 恢复新 sheet 存储
 *   - 跨 context 同步:监听 window 'storage' 事件,taskpane 改色后自动重涂
 *
 * Ribbon 切换走 controller.toggle(),任务窗格改色走 localStorage write + storage event。
 * 这两条路径都汇集到这里 — 没有第二条事实源。
 */

import {
  applyHighlight,
  applyBorders,
  applyHeaderFill,
  clearHighlights,
  clearBorders,
  clearHeaderFill,
  clearAllAcrossSheets,
  loadState,
  saveState,
  loadHighlights,
  saveHighlights,
  computeHighlightPlan,
  planToLastHighlight,
  ReadingModeState,
  LastHighlight,
  HighlightPlan,
} from "../shared/ReadingModeCore";

const STORAGE_STATE_KEY = "readingMode.state";
const STORAGE_HIGHLIGHTS_KEY = "readingMode.lastHighlights";
const COMMAND_KEY = "readingMode.command";

class ReadingModeController {
  private _state: ReadingModeState = loadState();
  private _lastHighlights: LastHighlight[] = loadHighlights();
  private _lastSheetName = "";
  private _registered = false;

  // throttle — 连续选区切换合并
  private _throttleMs = 80;
  private _lastInvoke = 0;
  private _pendingTimer: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    // 监听 cross-context 状态变化(taskpane 改 localStorage 后这里触发)
    window.addEventListener("storage", (e) => {
      if (!e.key) return;
      if (e.key === COMMAND_KEY) {
        const raw = e.newValue;
        if (!raw) return;
        try {
          const { cmd } = JSON.parse(raw) as { cmd: string; ts: number };
          console.log(`[RM] controller: command ${cmd}`);
          if (cmd === "clearAll") void this.clearAll();
        } catch (err) {
          console.warn("[RM] controller: bad command payload", err);
        }
        return;
      }
      if (e.key === STORAGE_STATE_KEY) {
        const prevEnabled = this._state.enabled;
        this._state = loadState();
        const enabledNow = this._state.enabled;
        console.log(`[RM] controller: state changed enabled=${prevEnabled}→${enabledNow}`);
        // 同步 Ribbon 按钮 label(无论 enabled 怎么变)
        void this._updateRibbonLabel(enabledNow);
        if (!prevEnabled && enabledNow) {
          // taskpane 开关打开 → 注册 handler + 涂当前选区
          this._registerHandler();
          void (async () => {
            try {
              await Excel.run(async (context) => {
                const ws = context.workbook.worksheets.getActiveWorksheet();
                ws.load("name");
                await context.sync();
                this._lastSheetName = ws.name;
              });
            } catch (err) {
              console.warn("[RM] storage handler: 读 sheetName 失败", err);
            }
            await this.applyCurrentSelection();
          })();
        } else if (prevEnabled && !enabledNow) {
          this._clearPendingTimer();
          void this.clearAll();
        } else if (enabledNow) {
          void this.applyCurrentSelection();
        }
      } else if (e.key === STORAGE_HIGHLIGHTS_KEY) {
        this._lastHighlights = loadHighlights();
      }
    });

    console.log(
      `[RM] controller: init enabled=${this._state.enabled} cross=${this._state.crossColor} cell=${this._state.cellColor}`
    );

    // 启动时根据 localStorage 里的 enabled 状态,同步 Ribbon 按钮 label
    void this._updateRibbonLabel(this._state.enabled);
  }

  // ─────────────── public API ───────────────

  /** 切换 enabled 状态 */
  async toggle(): Promise<void> {
    console.log("=== RM DIAG: controller.toggle() enabled=" + this._state.enabled + " ===");
    if (this._state.enabled) {
      await this._disable();
    } else {
      await this._enable();
    }
    console.log("=== RM DIAG: controller.toggle() done ===");
  }

  /** 幂等启用:仅在已 enabled 时重新涂当前选区,不切换状态 */
  async ensureEnabled(): Promise<void> {
    if (!this._state.enabled) return;
    console.log(`[RM] controller: ensureEnabled`);
    await this.applyCurrentSelection();
  }

  /** 设置行/列共用色 */
  async setCrossColor(hex: string): Promise<void> {
    const next = hex.startsWith("#") ? hex.slice(1) : hex;
    if (next.toUpperCase() === this._state.crossColor.toUpperCase()) return;
    console.log(`[RM] controller: crossColor ${this._state.crossColor} → ${next}`);
    this._state.crossColor = next;
    saveState(this._state);
    if (this._state.enabled) await this.applyCurrentSelection();
  }

  /** 设置当前单元格色 */
  async setCellColor(hex: string): Promise<void> {
    const next = hex.startsWith("#") ? hex.slice(1) : hex;
    if (next.toUpperCase() === this._state.cellColor.toUpperCase()) return;
    console.log(`[RM] controller: cellColor ${this._state.cellColor} → ${next}`);
    this._state.cellColor = next;
    saveState(this._state);
    if (this._state.enabled) await this.applyCurrentSelection();
  }

  /** 清所有 sheet 上的高亮(保留 enabled 状态) */
  async clearAll(): Promise<void> {
    const hls = [...this._lastHighlights];
    console.log(`[RM] controller: clearAll, ${hls.length} 项`);
    await clearAllAcrossSheets(hls);
    this._lastHighlights = [];
    saveHighlights(this._lastHighlights);
  }

  /** 读当前选区,计算 plan,涂上 — 不读不写状态 */
  async applyCurrentSelection(): Promise<void> {
    console.log("=== RM DIAG: applyCurrentSelection called ===");
    // 总是从 localStorage 重新读 _state。原因:
    //   1. 同窗口 storage 事件不 fire(MDN 规范),所以 taskpane 写完 localStorage
    //      后,同 context 的 controller 内存 _state 不会自动同步
    //   2. cross-context 命令链路 (commands.html controller) 在 storage 事件里
    //      已经 reload 过,这里再 reload 一次是冗余但安全
    this._state = loadState();
    console.log(
      "=== RM DIAG: applyCurrentSelection: loaded state enabled=" + this._state.enabled + " ==="
    );
    if (!this._state.enabled) {
      console.log("=== RM DIAG: applyCurrentSelection: not enabled, skip ===");
      return;
    }
    // 顺带注册 selection handler — taskpane 单开路径(this method 被直接调)
    // 不会经过 _enable() / storage 事件,handler 必须在这里挂上,
    // 否则后续点其他格 DocumentSelectionChanged 没人接,高亮不跟随
    this._registerHandler();
    console.log("=== RM DIAG: applyCurrentSelection: calling _doHighlight ===");
    await this._doHighlight();
    console.log("=== RM DIAG: applyCurrentSelection: done ===");
  }

  // ─────────────── 内部 ───────────────

  private async _enable(): Promise<void> {
    if (this._state.enabled) {
      console.log("=== RM DIAG: _enable: already enabled, skip ===");
      return;
    }
    console.log("=== RM DIAG: _enable: starting ===");
    this._state.enabled = true;
    saveState(this._state);
    void this._updateRibbonLabel(true);
    this._registerHandler();
    try {
      await Excel.run(async (context) => {
        const ws = context.workbook.worksheets.getActiveWorksheet();
        ws.load("name");
        await context.sync();
        this._lastSheetName = ws.name;
      });
    } catch (e) {
      console.warn("[RM] enable: 读 sheetName 失败", e);
    }
    console.log("=== RM DIAG: _enable: calling applyCurrentSelection ===");
    await this.applyCurrentSelection();
    console.log(`=== RM DIAG: _enable: completed === enabled=${this._state.enabled}`);
  }

  private async _disable(): Promise<void> {
    if (!this._state.enabled) return;
    this._state.enabled = false;
    saveState(this._state);
    void this._updateRibbonLabel(false);
    this._clearPendingTimer();
    await this.clearAll();
    console.log(`[RM] controller: disabled`);
  }

  private _registerHandler(): void {
    if (this._registered) return;
    Office.context.document.addHandlerAsync(
      Office.EventType.DocumentSelectionChanged,
      () => {
        // 同 applyCurrentSelection:每次 fire 都重新读 _state,避免
        // taskpane 改完 enabled 后内存 _state 还是旧值导致误判
        this._state = loadState();
        if (!this._state.enabled) return;
        this._throttle(() => void this._doHighlight());
      },
      (result) => {
        if (result.status === Office.AsyncResultStatus.Succeeded) {
          this._registered = true;
          console.log("[RM] controller: selection handler registered");
        } else {
          console.error("[RM] controller: register handler failed:", result.error?.message);
        }
      }
    );
  }

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
   * 核心:单 Excel.run 内原子完成 —
   *   读 sheetName + 读选区 + 读 usedRange + 兜底 clear + 算 plan + 涂新。
   *
   * 设计借鉴 welcome 项目(`applyDirectHighlightInContext` 的"一切在一个 run 里"模式):
   *   1. 把 phase1(读 sheetName)和 phase2(读选区+涂)合并成**一个** Excel.run,
   *      消除 phase1↔phase2 之间的 sync gap(原来跨两个 run,Mac Excel 上
   *      可能在 gap 内把 selection 改了,导致 phase2 涂到错的 cell)
   *   2. paint 前对整个 usedRange 做一次兜底 fill.clear()(welcome v8.2 经验):
   *      - 杜绝上次涂色的残留
   *      - 防止 Excel 内置表格样式 / 用户手动底色 shadow 新色,导致"调了但没涂上"
   *   3. paint 用 async applyHighlight(per-fill sync,见 ReadingModeCore.ts),
   *      每个 fill set 后立刻 sync,Mac Excel 不会 silent drop
   *
   * sheet 切换的旧 sheet 清视觉 移到 run 之后(避免 run 内嵌套 run),
   * 不影响主流程 — 用户感知不到这 ~10ms 延迟。
   *
   * 跨 sheet 时不删 lastHighlights 里的旧 sheet 条目;进入已有存储的 sheet 时直接恢复,
   * 不被当前选区覆盖。
   */
  private async _doHighlight(): Promise<void> {
    console.log("=== RM DIAG: _doHighlight ENTER ===");
    let sheetName = "";
    let sheetChanged = false;
    let oldSheet = "";
    let plan: HighlightPlan | null = null;

    try {
      console.log("=== RM DIAG: _doHighlight: before Excel.run ===");
      await Excel.run(async (context) => {
        console.log("=== RM DIAG: _doHighlight: INSIDE Excel.run ===");
        // getSelectedRange() 永远落在 active sheet,直接拿 active worksheet
        const sheet = context.workbook.worksheets.getActiveWorksheet();
        const range = context.workbook.getSelectedRange();
        sheet.load("name");
        range.load(["rowIndex", "columnIndex", "rowCount", "columnCount"]);
        await context.sync();
        console.log("=== RM DIAG: _doHighlight: after context.sync() sheet=" + sheet.name + " ===");

        sheetName = sheet.name;
        sheetChanged = sheetName !== this._lastSheetName;
        oldSheet = this._lastSheetName;
        this._lastSheetName = sheetName;

        // 新 sheet 有存储 → 恢复,不让当前选区覆盖
        if (sheetChanged) {
          const stored = this._lastHighlights.find((h) => h.sheetName === sheetName);
          if (stored) {
            plan = {
              sheetName,
              cellAddr: stored.cellAddr,
              rowAddr: stored.rowAddr,
              colAddr: stored.colAddr,
              isMultiCell: false,
            };
            console.log("=== RM DIAG: _doHighlight: about to restore stored highlight ===");
            await applyHighlight(context, sheet, plan, this._state);
            console.log(
              `[RM] _doHighlight: 恢复 ${sheetName} 存储 → ${stored.cellAddr ?? stored.rowAddr ?? stored.colAddr}`
            );
            console.log("=== RM DIAG: _doHighlight: restored, returning ===");
            return;
          }
        }

        // computeHighlightPlan 自己处理 1×N / N×1;只跳过 M×N 真多选
        if (range.rowCount > 1 && range.columnCount > 1) {
          console.log(
            `[RM] _doHighlight: 真多选 rowCount=${range.rowCount} colCount=${range.columnCount}, 跳过涂`
          );
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

        // 精准清除:只清本插件在当前 sheet 涂过的格,不碰用户手动底色
        const oldHlForThisSheet = this._lastHighlights.filter((h) => h.sheetName === sheetName);
        if (oldHlForThisSheet.length > 0) {
          try {
            await clearHighlights(context, sheet, oldHlForThisSheet);
            await clearBorders(context, sheet, oldHlForThisSheet);
            await clearHeaderFill(context, sheet, oldHlForThisSheet);
            console.log(
              `[RM] _doHighlight: 精准清除 ${sheetName} 旧高亮 ${oldHlForThisSheet.length} 条`
            );
          } catch (e) {
            console.warn("[RM] _doHighlight: 精准清除旧高亮失败:", e);
          }
        }

        plan = computeHighlightPlan(
          range.rowIndex,
          range.columnIndex,
          range.rowCount,
          range.columnCount,
          sheet.name,
          totalRows,
          totalCols
        );
        console.log(
          `=== RM DIAG: _doHighlight: about to paint plan row=${plan.rowAddr} col=${plan.colAddr} cell=${plan.cellAddr} ===`
        );
        await applyHighlight(context, sheet, plan, this._state);
        console.log("=== RM DIAG: _doHighlight: applyHighlight done, now borders ===");
        await applyBorders(context, sheet, plan, this._state);
        await applyHeaderFill(context, sheet, plan, this._state);

        if (!plan.isMultiCell) {
          const newHl = planToLastHighlight(plan);
          this._lastHighlights = [
            ...this._lastHighlights.filter((h) => h.sheetName !== sheet.name),
            newHl,
          ];
          saveHighlights(this._lastHighlights);
          console.log(
            `[RM] _doHighlight: 涂完 ${newHl.cellAddr ?? newHl.rowAddr ?? newHl.colAddr}`
          );
        }
      });
    } catch (e) {
      console.error("=== RM DIAG: _doHighlight FAILED ===", e);
      return;
    }

    // run 之后再清旧 sheet 视觉(避免 run 内嵌 run)
    if (sheetChanged && oldSheet) {
      const oldHls = this._lastHighlights.filter((h) => h.sheetName === oldSheet);
      if (oldHls.length > 0) {
        try {
          await Excel.run(async (context) => {
            const sheet = context.workbook.worksheets.getItem(oldSheet);
            await clearHighlights(context, sheet, oldHls);
            await clearBorders(context, sheet, oldHls);
            await clearHeaderFill(context, sheet, oldHls);
          });
          console.log(`[RM] _doHighlight: 已清 ${oldSheet} 视觉+边框+表头,存储保留`);
        } catch (e) {
          console.error(`[RM] _doHighlight: clear ${oldSheet} 视觉失败`, e);
        }
      }
    }
  }

  /**
   * 同步 Ribbon 按钮 label,让用户能看出阅读模式开关状态。
   *
   * - enabled=true  → "关闭高亮" (暗示"再点一次就关")
   * - enabled=false → "开启高亮" (暗示"现在没开,点一下开")
   *
   * 失败不致命:Office.ribbon 在某些 host 上不存在 / 加载慢,console.warn 即可。
   */
  private async _updateRibbonLabel(enabled: boolean): Promise<void> {
    try {
      const ribbon = (
        Office as unknown as {
          ribbon?: { requestUpdate: (u: unknown) => Promise<void> };
        }
      )?.ribbon;
      if (!ribbon?.requestUpdate) return;
      await ribbon.requestUpdate({
        tabs: [
          {
            id: "TabReadingMode",
            controls: [
              {
                id: "ToggleReadingModeButton",
                label: enabled ? "关闭高亮" : "开启高亮",
              },
            ],
          },
        ],
      });
      console.log(`[RM] ribbon label → ${enabled ? "关闭高亮" : "开启高亮"}`);
    } catch (e) {
      console.warn("[RM] requestUpdate 失败(可能 Ribbon 未加载):", e);
    }
  }
}

/** 单例 */
export const controller = new ReadingModeController();
