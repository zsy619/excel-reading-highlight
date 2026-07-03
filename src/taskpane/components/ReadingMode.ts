/* global Excel Office console */

/**
 * ReadingMode - 选中 Excel 单元格时自动高亮行/列表头
 *
 * 策略：
 * - 行表头：选中行号那一格（A 列左边），填充颜色
 * - 列表头：选中列字母那一行（第 1 行），填充颜色
 * - 性能：onSelectionChanged 用 throttle 控频，批量 context.sync()
 */

export interface ReadingModeSettings {
  rowColor: string;
  columnColor: string;
}

// 上次高亮的信息，用于清除
interface LastHighlight {
  address: string; // 示例: "Sheet1!A5" or "Sheet1!B1"
  isRow: boolean;  // true=行表头, false=列表头
}

export class ReadingMode {
  private _enabled = false;
  private _rowColor = "#E3F2FD";
  private _columnColor = "#E8F5E9";
  private _registered = false;

  // 节流
  private _throttleMs = 80;
  private _lastInvoke = 0;
  private _pendingTimer: ReturnType<typeof setTimeout> | null = null;

  // 记录当前高亮
  private _lastHighlights: LastHighlight[] = [];

  get enabled(): boolean {
    return this._enabled;
  }

  updateSettings(settings: Partial<ReadingModeSettings>): void {
    if (settings.rowColor !== undefined) {
      this._rowColor = settings.rowColor;
      if (this._enabled) {
        this.refresh();
      }
    }
    if (settings.columnColor !== undefined) {
      this._columnColor = settings.columnColor;
      if (this._enabled) {
        this.refresh();
      }
    }
  }

  async enable(): Promise<void> {
    if (this._enabled) return;
    this._enabled = true;
    try {
      await Excel.run(async (context) => {
        const worksheet = context.workbook.worksheets.getActiveWorksheet();
        worksheet.load("name");
        await context.sync();
        this._sheetName = worksheet.name;
      });
      if (!this._registered) {
        this._registerEvents();
      }
      // 立刻高亮当前选中
      await this.refresh();
    } catch (error) {
      console.error("ReadingMode.enable error:", error);
      this._enabled = false;
    }
  }

  async disable(): Promise<void> {
    this._enabled = false;
    await this._clearAllHighlights();
    this._throttleTimer();
  }

  async refresh(): Promise<void> {
    if (!this._enabled) return;
    await this._doHighlight();
  }

  // ── 内部 ──

  private set _sheetName(name: string) {
    this._lastSheetName = name;
  }
  private _lastSheetName = "";

  private _registerEvents(): void {
    if (this._registered) return;
    // 监听工作表级别的 onSelectionChanged
    // 注意: Office.js 的 onSelectionChanged 事件在选中区域改变时触发
    // 它是一个基于事件订阅的机制
    Office.context.document.addHandlerAsync(
      Office.EventType.DocumentSelectionChanged,
      this._onSelectionChangedHandler,
      (result) => {
        if (result.status === Office.AsyncResultStatus.Failed) {
          console.error("Failed to register selection handler:", result.error.message);
          return;
        }
        this._registered = true;
        console.log("ReadingMode: Selection handler registered");
      }
    );
  }

  private _onSelectionChangedHandler = (): void => {
    if (!this._enabled) return;
    this._throttle(() => this._doHighlight());
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

  private _throttleTimer(): void {
    if (this._pendingTimer) {
      clearTimeout(this._pendingTimer);
      this._pendingTimer = null;
    }
  }

  /**
   * 核心高亮: 读取选中单元格的行列，染色对应格
   */
  private async _doHighlight(): Promise<void> {
    try {
      await Excel.run(async (context) => {
        const range = context.workbook.getSelectedRange();
        range.load("rowIndex,columnIndex,rowCount,columnCount");
        const sheet = range.worksheet;
        sheet.load("name");
        await context.sync();

        const currentSheet = sheet.name;
        if (currentSheet !== this._lastSheetName) {
          this._lastSheetName = currentSheet;
          this._lastHighlights = [];
        }

        if (range.rowCount !== 1 || range.columnCount !== 1) {
          await this._clearHighlightsOnCurrentSheet(sheet, context);
          return;
        }

        const rowIdx = range.rowIndex;
        const colIdx = range.columnIndex;

        const rowHeaderRange = sheet.getCell(rowIdx, 0);
        rowHeaderRange.load("address");
        const colHeaderRange = sheet.getCell(0, colIdx);
        colHeaderRange.load("address");
        await context.sync();

        await this._clearHighlightsOnCurrentSheet(sheet, context);

        rowHeaderRange.format.fill.color = this._rowColor;
        colHeaderRange.format.fill.color = this._columnColor;

        this._lastHighlights = [
          { address: rowHeaderRange.address, isRow: true },
          { address: colHeaderRange.address, isRow: false },
        ];

        await context.sync();
      });
    } catch (error) {
      console.error("ReadingMode._doHighlight error:", error);
    }
  }

  private async _clearHighlightsOnCurrentSheet(sheet: Excel.Worksheet, context: Excel.RequestContext): Promise<void> {
    while (this._lastHighlights.length > 0) {
      const hl = this._lastHighlights.shift()!;
      try {
        const parts = hl.address.split("!");
        const address = parts.length > 1 ? parts[1] : parts[0];
        const range = sheet.getRange(address);
        range.format.fill.reset();
      } catch (e) {
        console.warn("ReadingMode: clear highlight failed", e);
      }
    }
  }

  private async _clearAllHighlights(): Promise<void> {
    try {
      await Excel.run(async (context) => {
        if (this._lastHighlights.length > 0) {
          const sheet = context.workbook.worksheets.getActiveWorksheet();
          await this._clearHighlightsOnCurrentSheet(sheet, context);
        }
        this._lastHighlights = [];
        await context.sync();
      });
    } catch (error) {
      console.error("ReadingMode._clearAllHighlights error:", error);
    } finally {
      this._lastHighlights = [];
    }
  }
}

function normalizeColor(color: string): string {
  return color.startsWith("#") ? color : `#${color}`;
}