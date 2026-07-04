/*
 * commands.excel.ts — Ribbon ExecuteFunction 的实际业务
 *
 * 不依赖任务窗格,在 commands.html 的 JS context 里跑。
 * 状态读写全部走 localStorage(taskpane 那边也读写同一份 key)。
 */

/* global Excel Office console */

import {
  applyHighlight,
  clearAllAcrossSheets,
  loadState,
  saveState,
  loadHighlights,
  saveHighlights,
  notifyTaskpane,
  computeHighlightPlan,
  planToLastHighlight,
  LastHighlight,
} from "../shared/ReadingModeCore";

/**
 * Ribbon "切换高亮" 按钮的回调。
 * - 如果当前 enabled = false:启用 → 涂当前选区
 * - 如果当前 enabled = true:关闭 → 清掉所有高亮
 */
export async function toggleReadingMode(): Promise<void> {
  console.log("[RM] toggleReadingMode: enter");
  try {
    const state = loadState();
    if (state.enabled) {
      // 关闭:清所有 sheet 上的旧高亮
      const hls = loadHighlights();
      console.log(`[RM] toggleReadingMode: disable, 清 ${hls.length} 项`);
      await clearAllAcrossSheets(hls);
      saveHighlights([] as LastHighlight[]);
      state.enabled = false;
      saveState(state);
      notifyTaskpane({ type: "STATE_CHANGED", enabled: false });
      console.log(`[RM] toggleReadingMode: disabled`);
    } else {
      // 启用
      state.enabled = true;
      saveState(state);
      console.log(`[RM] toggleReadingMode: enable, cross=${state.crossColor} cell=${state.cellColor}`);
      await Excel.run(async (context) => {
        const range = context.workbook.getSelectedRange();
        range.load(["rowIndex", "columnIndex", "rowCount", "columnCount"]);
        const sheet = range.worksheet;
        sheet.load("name");
        await context.sync();

        if (range.rowCount !== 1 || range.columnCount !== 1) {
          console.log(`[RM] toggleReadingMode: 多选,跳过涂`);
          return;
        }

        // 算 usedRange
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
          console.warn("[RM] toggleReadingMode: usedRange 失败", e);
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
        applyHighlight(context, sheet, plan, state);
        await context.sync();

        const hls = loadHighlights().filter(h => h.sheetName !== sheet.name);
        if (!plan.isMultiCell) hls.push(planToLastHighlight(plan));
        saveHighlights(hls);
      });
      notifyTaskpane({ type: "STATE_CHANGED", enabled: true });
      console.log(`[RM] toggleReadingMode: enabled`);
    }
  } catch (error) {
    console.error("[RM] toggleReadingMode 失败:", error);
    throw error;
  }
}