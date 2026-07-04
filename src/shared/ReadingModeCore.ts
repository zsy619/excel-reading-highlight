/* global Excel console localStorage */

/**
 * ReadingModeCore — 阅读模式高亮的核心 Excel 操作 + 状态同步
 *
 * 被两个 context 复用:
 *   - taskpane:每次 onSelectionChanged 时调 apply / clear
 *   - commands (Ribbon ExecuteFunction):调 toggle() / apply / clear
 *
 * 状态走 localStorage(JSON 字符串),两个 context 都能读写。
 * 跨 context 通知走 window 'storage' 事件 — 不同 iframe 间的 localStorage
 * 修改会触发同 origin 的 storage 事件,所以 taskpane 改色 / 触发命令都靠这个,
 * 不要再用 Office.context.ui.messageParent(那是给 Dialog API 用的)。
 *
 * 重要:每个 Excel.run 内只做一次 sync,避免"清旧"和"涂新"在同一个 context 里
 *      排队错位(之前症状:点其他单元格旧的没清掉,且新颜色不生效)。
 */

export interface ReadingModeState {
  enabled: boolean;
  crossColor: string;
  cellColor: string;
  /** 边框颜色(当 showBorder=true 时生效) */
  borderColor: string;
  /** 表头高亮颜色(A 列 + 第 1 行的单元格) */
  headerColor: string;
  /** 是否在行/列交叉区域显示边框 */
  showBorder: boolean;
  /** 边框样式 */
  borderStyle: Excel.BorderLineStyle;
}

export interface LastHighlight {
  sheetName: string;
  rowAddr?: string;
  colAddr?: string;
  cellAddr?: string;
  /** A 列行表头单元格地址(如 "A5") — 单独用 headerColor 填充 */
  headerRowAddr?: string;
  /** 第 1 行列表头单元格地址(如 "C1") — 单独用 headerColor 填充 */
  headerColAddr?: string;
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
  crossColor: "#FFC000",
  cellColor: "#FFE08A",
  borderColor: "#4472C4",
  headerColor: "#D9E2F3",
  showBorder: false,
  borderStyle: "Continuous" as Excel.BorderLineStyle,
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
      borderColor: stripHash(parsed.borderColor ?? DEFAULT_STATE.borderColor),
      headerColor: stripHash(parsed.headerColor ?? DEFAULT_STATE.headerColor),
      showBorder: parsed.showBorder ?? DEFAULT_STATE.showBorder,
      borderStyle: parsed.borderStyle ?? DEFAULT_STATE.borderStyle,
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
  const maxPaintRow = Math.min(totalRows + 20, 1000);
  const maxPaintCol = Math.min(totalCols + 5, 100);
  const lastColLetter = colIndexToLetter(Math.max(0, maxPaintCol - 1));

  // 全选整列(1×N):只涂列,不涂单元格
  if (rowCount === 1 && columnCount > 1) {
    const rowNum = rowIndex + 1;
    const rowAddr = `A${rowNum}:${lastColLetter}${rowNum}`;
    console.log(`[RM] plan: sheet=${sheetName} 整行 row=${rowAddr}`);
    return { sheetName, rowAddr, isMultiCell: false };
  }
  // 全选整行(N×1):只涂行,不涂单元格
  if (columnCount === 1 && rowCount > 1) {
    const colLetter = colIndexToLetter(columnIndex);
    const colAddr = `${colLetter}1:${colLetter}${maxPaintRow}`;
    console.log(`[RM] plan: sheet=${sheetName} 整列 col=${colAddr}`);
    return { sheetName, colAddr, isMultiCell: false };
  }
  // 真正的多选(M×N):跳过
  if (rowCount > 1 && columnCount > 1) {
    return { sheetName, isMultiCell: true };
  }

  // 1×1 单格:WPS 十字交叉
  const rowNum = rowIndex + 1;
  const colLetter = colIndexToLetter(columnIndex);
  const cellAddr = `${colLetter}${rowNum}`;
  const rowAddr = `A${rowNum}:${lastColLetter}${rowNum}`;
  const colAddr = `${colLetter}1:${colLetter}${maxPaintRow}`;
  console.log(`[RM] plan: sheet=${sheetName} cell=${cellAddr} row=${rowAddr} col=${colAddr}`);
  return { sheetName, cellAddr, rowAddr, colAddr, isMultiCell: false };
}

export function planToLastHighlight(plan: HighlightPlan): LastHighlight {
  return {
    sheetName: plan.sheetName,
    rowAddr: plan.rowAddr,
    colAddr: plan.colAddr,
    cellAddr: plan.cellAddr,
    headerRowAddr: plan.rowAddr ? `A${plan.rowAddr.match(/\d+/)?.[0] ?? ""}` : undefined,
    headerColAddr: plan.colAddr ? `${plan.colAddr.match(/^[A-Z]+/)?.[0] ?? ""}1` : undefined,
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
  console.log(
    `[RM] clear: ${hls.length} entries`,
    hls.map((h) => `${h.sheetName}/${h.cellAddr}`)
  );
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
 *
 * **Color format**:state 里存的是无 `#` 的 6 位 hex(全项目 canonical),
 * 但 Excel.js 在某些平台(尤其 Mac / 某些 Excel.js 版本)对不带 `#` 的
 * 颜色字符串会 set 成功但 Excel 渲染时丢弃 — 看起来"调了但没涂上"。
 * 所以这里统一加 `#` 再赋值,确保跨平台一致。
 *
 * **Fill pattern**:只 set color 不设 pattern,某些版本 pattern 留在 None,
 * color 被忽略。一并设 Solid,Excel 才会真的渲染填色。
 *
 * **Per-fill sync**:每个 range set 完立刻 await context.sync()(借鉴 welcome
 * 项目的经验,welcome 注释:Mac Excel 上 "set 多个 fill 后只 sync 一次"
 * 会导致前面的 set 被 silent drop,只有最后一个被 commit)。
 * 单 fill 同步 = 每个 fill 单独落地,即使 Mac 丢一个,另两个还在。
 */
export async function applyHighlight(
  context: Excel.RequestContext,
  sheet: Excel.Worksheet,
  plan: HighlightPlan,
  state: ReadingModeState
): Promise<void> {
  if (plan.isMultiCell) {
    console.log(`[RM] apply: 多选/合并,跳过涂`);
    return;
  }
  console.log(
    `[RM] apply: sheet=${plan.sheetName} crossColor=${state.crossColor} cellColor=${state.cellColor}`
  );
  // 统一 #RRGGBB 格式(state 应当是无 # canonical 形式,loadState 调 stripHash)。
  // 防御性:万一调用方传了带 # 的,不叠成 ##(Excel.js 会把 ## 视为非法色)
  const crossColorHex = state.crossColor.startsWith("#")
    ? state.crossColor
    : "#" + state.crossColor;
  const cellColorHex = state.cellColor.startsWith("#") ? state.cellColor : "#" + state.cellColor;
  if (plan.rowAddr) {
    try {
      const range = sheet.getRange(plan.rowAddr);
      range.format.fill.pattern = "Solid";
      range.format.fill.color = crossColorHex;
      await context.sync(); // ★ per-fill sync:Mac Excel 不会 silent drop
    } catch (e) {
      console.warn(`[RM] apply: row ${plan.rowAddr} 失败`, e);
    }
  }
  if (plan.colAddr) {
    try {
      const range = sheet.getRange(plan.colAddr);
      range.format.fill.pattern = "Solid";
      range.format.fill.color = crossColorHex;
      await context.sync();
    } catch (e) {
      console.warn(`[RM] apply: col ${plan.colAddr} 失败`, e);
    }
  }
  if (plan.cellAddr) {
    try {
      const range = sheet.getRange(plan.cellAddr);
      range.format.fill.pattern = "Solid";
      range.format.fill.color = cellColorHex;
      await context.sync();
    } catch (e) {
      console.warn(`[RM] apply: cell ${plan.cellAddr} 失败`, e);
    }
  }
}

/**
 * 全表清高亮(关闭时用):每个 sheet 单独一个 Excel.run,互不干扰。
 * 同时清除 fills、borders 和 header fills。
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
          await clearBorders(context, sheet, groupHls);
          await clearHeaderFill(context, sheet, groupHls);
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

/**
 * 给行/列范围加边框(十字交叉的边框效果)。
 * 行加 top+bottom 边框;列加 left+right 边框。
 */
export async function applyBorders(
  context: Excel.RequestContext,
  sheet: Excel.Worksheet,
  plan: HighlightPlan,
  state: ReadingModeState
): Promise<void> {
  if (plan.isMultiCell || !state.showBorder) return;
  const borderColor = state.borderColor.startsWith("#")
    ? state.borderColor
    : "#" + state.borderColor;
  const style: Excel.BorderLineStyle = state.borderStyle;

  if (plan.rowAddr) {
    try {
      const rng = sheet.getRange(plan.rowAddr);
      // 清除旧边框再设新边框,避免叠加
      rng.format.borders.getItem("EdgeTop").color = borderColor;
      rng.format.borders.getItem("EdgeTop").style = style;
      rng.format.borders.getItem("EdgeBottom").color = borderColor;
      rng.format.borders.getItem("EdgeBottom").style = style;
      await context.sync();
    } catch (e) {
      console.warn(`[RM] borders: row ${plan.rowAddr} 失败`, e);
    }
  }
  if (plan.colAddr) {
    try {
      const rng = sheet.getRange(plan.colAddr);
      rng.format.borders.getItem("EdgeLeft").color = borderColor;
      rng.format.borders.getItem("EdgeLeft").style = style;
      rng.format.borders.getItem("EdgeRight").color = borderColor;
      rng.format.borders.getItem("EdgeRight").style = style;
      await context.sync();
    } catch (e) {
      console.warn(`[RM] borders: col ${plan.colAddr} 失败`, e);
    }
  }
}

/**
 * 清除指定记录上的边框。
 */
export async function clearBorders(
  context: Excel.RequestContext,
  sheet: Excel.Worksheet,
  hls: LastHighlight[]
): Promise<void> {
  if (hls.length === 0) return;
  for (const hl of hls) {
    if (hl.rowAddr) {
      try {
        const rng = sheet.getRange(hl.rowAddr);
        rng.format.borders.getItem("EdgeTop").style = "None";
        rng.format.borders.getItem("EdgeBottom").style = "None";
      } catch (e) {
        console.warn(`[RM] clearBorders: row ${hl.rowAddr} 失败`, e);
      }
    }
    if (hl.colAddr) {
      try {
        const rng = sheet.getRange(hl.colAddr);
        rng.format.borders.getItem("EdgeLeft").style = "None";
        rng.format.borders.getItem("EdgeRight").style = "None";
      } catch (e) {
        console.warn(`[RM] clearBorders: col ${hl.colAddr} 失败`, e);
      }
    }
  }
  await context.sync();
}

/**
 * 给表头单元格(A 列行表头 + 第 1 行列表头)施加 headerColor 填充。
 * headerRow = 行表头(如 A5),headerCol = 列表头(如 C1)。
 * 如果该单元格已在 crossColor 覆盖范围内,headerColor 覆盖上去。
 */
export async function applyHeaderFill(
  context: Excel.RequestContext,
  sheet: Excel.Worksheet,
  plan: HighlightPlan,
  state: ReadingModeState
): Promise<void> {
  if (plan.isMultiCell) return;
  const headerColorHex = state.headerColor.startsWith("#")
    ? state.headerColor
    : "#" + state.headerColor;

  // 行表头: A{rowNum} — 从 rowAddr 中提取行号
  if (plan.rowAddr) {
    const rowNum = plan.rowAddr.match(/\d+/)?.[0];
    if (rowNum) {
      try {
        const range = sheet.getRange(`A${rowNum}`);
        range.format.fill.pattern = "Solid";
        range.format.fill.color = headerColorHex;
        await context.sync();
      } catch (e) {
        console.warn(`[RM] headerFill: row A${rowNum} 失败`, e);
      }
    }
  }
  // 列表头: {colLetter}1 — 从 colAddr 中提取列字母
  if (plan.colAddr) {
    const colLetter = plan.colAddr.match(/^[A-Z]+/)?.[0];
    if (colLetter) {
      try {
        const range = sheet.getRange(`${colLetter}1`);
        range.format.fill.pattern = "Solid";
        range.format.fill.color = headerColorHex;
        await context.sync();
      } catch (e) {
        console.warn(`[RM] headerFill: col ${colLetter}1 失败`, e);
      }
    }
  }
}

/**
 * 清除表头单元格的 headerColor 填充。
 */
export async function clearHeaderFill(
  context: Excel.RequestContext,
  sheet: Excel.Worksheet,
  hls: LastHighlight[]
): Promise<void> {
  if (hls.length === 0) return;
  for (const hl of hls) {
    if (hl.headerRowAddr) {
      try {
        sheet.getRange(hl.headerRowAddr).format.fill.clear();
      } catch (e) {
        console.warn(`[RM] clearHeaderFill: ${hl.headerRowAddr} 失败`, e);
      }
    }
    if (hl.headerColAddr) {
      try {
        sheet.getRange(hl.headerColAddr).format.fill.clear();
      } catch (e) {
        console.warn(`[RM] clearHeaderFill: ${hl.headerColAddr} 失败`, e);
      }
    }
  }
  await context.sync();
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
