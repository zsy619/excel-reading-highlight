/* global Excel Office console */

/**
 * ReadingModeCore — 阅读模式高亮的核心 Excel 操作 + 状态同步
 *
 * 被两个 context 复用:
 *   - taskpane:每次 onSelectionChanged 时调 apply / clear
 *   - commands (Ribbon ExecuteFunction):调 toggle() / apply / clear
 *
 * 状态走 localStorage(JSON 字符串),两个 context 都能读写。
 * 通知对方用 Office.context.ui.messageParent(payload)。
 *
 * 重要:每个 Excel.run 内只做一次 sync,避免"清旧"和"涂新"在同一个 context 里
 *      排队错位(之前症状:点其他单元格旧的没清掉,且新颜色不生效)。
 */

export interface ReadingModeState {
  enabled: boolean;
  crossColor: string;
  cellColor: string;
}

export interface LastHighlight {
  sheetName: string;
  rowAddr?: string;
  colAddr?: string;
  cellAddr?: string;
}

/** 不带 Excel 上下文也能算出来的"涂色计划" */
export interface HighlightPlan {
  sheetName: string;
  cellAddr?: string;
  rowAddr?: string;
  colAddr?: string;
  isMultiCell: boolean;
}

export const DEFAULT_STATE: ReadingModeState = {
  enabled: false,
  crossColor: "E3F2FD",
  cellColor: "FFF3B0",
};

const STORAGE_KEY = "readingMode.state";
const HIGHLIGHTS_KEY = "readingMode.lastHighlights";

// ───────────────────── state ─────────────────────

export function loadState(): ReadingModeState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_STATE };
    const parsed = JSON.parse(raw) as Partial<ReadingModeState>;
    return {
      enabled: !!parsed.enabled,
      crossColor: stripHash(parsed.crossColor ?? DEFAULT_STATE.crossColor),
      cellColor: stripHash(parsed.cellColor ?? DEFAULT_STATE.cellColor),
    };
  } catch (e) {
    console.warn("ReadingModeCore.loadState 失败,用默认:", e);
    return { ...DEFAULT_STATE };
  }
}

export function saveState(state: ReadingModeState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn("ReadingModeCore.saveState 失败:", e);
  }
}

// ───────────────────── lastHighlights 持久化 ─────────────────────

export function loadHighlights(): LastHighlight[] {
  try {
    const raw = localStorage.getItem(HIGHLIGHTS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveHighlights(hls: LastHighlight[]): void {
  try {
    localStorage.setItem(HIGHLIGHTS_KEY, JSON.stringify(hls));
  } catch (e) {
    console.warn("ReadingModeCore.saveHighlights 失败:", e);
  }
}

// ───────────────────── 纯计算:不碰 Excel ─────────────────────

/**
 * 根据选区坐标 + usedRange 规模算出 row/col/cell 地址。
 * 任何 sheet 切换、多选、合并都只看入参,不读 Excel。
 */
export function computeHighlightPlan(
  rowIndex: number,
  columnIndex: number,
  rowCount: number,
  columnCount: number,
  sheetName: string,
  totalRows: number,
  totalCols: number
): HighlightPlan {
  if (rowCount !== 1 || columnCount !== 1) {
    return { sheetName, isMultiCell: true };
  }
  const maxPaintRow = Math.min(totalRows + 20, 1000);
  const maxPaintCol = Math.min(totalCols + 5, 100);
  const rowNum = rowIndex + 1;
  const colLetter = colIndexToLetter(columnIndex);
  const cellAddr = `${colLetter}${rowNum}`;
  const rowAddr = `A${rowNum}:${colIndexToLetter(maxPaintCol - 1)}${rowNum}`;
  const colAddr = `${colLetter}1:${colLetter}${maxPaintRow}`;
  console.log(`[RM] plan: sheet=${sheetName} cell=${cellAddr} row=${rowAddr} col=${colAddr} cross=${"?"} cellC=${"?"}`);
  return { sheetName, cellAddr, rowAddr, colAddr, isMultiCell: false };
}

export function planToLastHighlight(plan: HighlightPlan): LastHighlight {
  return {
    sheetName: plan.sheetName,
    rowAddr: plan.rowAddr,
    colAddr: plan.colAddr,
    cellAddr: plan.cellAddr,
  };
}

// ───────────────────── Excel 操作:每个 Excel.run 只做一件事 ─────────────────────

/**
 * 清掉指定 sheet 上的若干高亮记录。
 * RangeFill 只有 clear() — 没有 reset()。两次 clear 是幂等的,这里只调一次。
 * 必须传 sheet 引用,跨 context 的 worksheet 引用会失效。
 * 调用方负责包一个 Excel.run。
 */
export async function clearHighlights(
  context: Excel.RequestContext,
  sheet: Excel.Worksheet,
  hls: LastHighlight[]
): Promise<void> {
  if (hls.length === 0) return;
  console.log(`[RM] clear: ${hls.length} entries`, hls.map(h => `${h.sheetName}/${h.cellAddr}`));
  for (const hl of hls) {
    for (const addr of [hl.rowAddr, hl.colAddr, hl.cellAddr]) {
      if (!addr) continue;
      try {
        sheet.getRange(addr).format.fill.clear();
      } catch (e) {
        console.warn(`[RM] clear: ${addr} 失败`, e);
      }
    }
  }
  await context.sync();
  console.log(`[RM] clear: done`);
}

/**
 * 涂新:必须在独立的 Excel.run 里调,确保之前的 clear 完全落地后再涂。
 */
export function applyHighlight(
  context: Excel.RequestContext,
  sheet: Excel.Worksheet,
  plan: HighlightPlan,
  state: ReadingModeState
): void {
  if (plan.isMultiCell) {
    console.log(`[RM] apply: 多选/合并,跳过涂`);
    return;
  }
  console.log(`[RM] apply: sheet=${plan.sheetName} crossColor=${state.crossColor} cellColor=${state.cellColor}`);
  if (plan.rowAddr) {
    try { sheet.getRange(plan.rowAddr).format.fill.color = state.crossColor; }
    catch (e) { console.warn(`[RM] apply: row ${plan.rowAddr} 失败`, e); }
  }
  if (plan.colAddr) {
    try { sheet.getRange(plan.colAddr).format.fill.color = state.crossColor; }
    catch (e) { console.warn(`[RM] apply: col ${plan.colAddr} 失败`, e); }
  }
  if (plan.cellAddr) {
    try { sheet.getRange(plan.cellAddr).format.fill.color = state.cellColor; }
    catch (e) { console.warn(`[RM] apply: cell ${plan.cellAddr} 失败`, e); }
  }
}

/**
 * 全表清高亮(关闭时用):每个 sheet 单独一个 Excel.run,互不干扰。
 */
export async function clearAllAcrossSheets(hls: LastHighlight[]): Promise<void> {
  if (hls.length === 0) return;
  const grouped = new Map<string, LastHighlight[]>();
  for (const hl of hls) {
    const arr = grouped.get(hl.sheetName) || [];
    arr.push(hl);
    grouped.set(hl.sheetName, arr);
  }
  // 用 forEach 替代 for...of entries — 避免 TS2802 downlevelIteration 报错
  // 同时也减少 async/await 在外层的耦合,这里 sequential 已经够用了
  const tasks: Promise<void>[] = [];
  grouped.forEach((groupHls, sheetName) => {
    tasks.push(
      Excel.run(async (context) => {
        try {
          const sheet = context.workbook.worksheets.getItem(sheetName);
          await clearHighlights(context, sheet, groupHls);
          console.log(`[RM] clearAll: ${sheetName} done`);
        } catch (e) {
          console.warn(`[RM] clearAll: 切到 ${sheetName} 失败(可能已删除)`, e);
        }
      }).catch((e) => {
        console.warn(`[RM] clearAll: ${sheetName} Excel.run 失败`, e);
      })
    );
  });
  await Promise.all(tasks);
}

// ───────────────────── 通知 ─────────────────────

export function notifyTaskpane(payload: Record<string, unknown>): void {
  try {
    const json = JSON.stringify(payload);
    if (Office?.context?.ui?.messageParent) {
      Office.context.ui.messageParent(json);
    }
  } catch (e) {
    console.warn("[RM] notifyTaskpane 失败(可能 taskpane 未打开):", e);
  }
}

// ───────────────────── helpers ─────────────────────

export function stripHash(color: string): string {
  return color.startsWith("#") ? color.slice(1) : color;
}

export function colIndexToLetter(idx: number): string {
  if (idx < 0) return "A";
  let result = "";
  let n = idx;
  while (n >= 0) {
    result = String.fromCharCode(65 + (n % 26)) + result;
    n = Math.floor(n / 26) - 1;
  }
  return result;
}