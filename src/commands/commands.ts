/*
 * commands.ts — Ribbon ExecuteFunction 入口 + 启动时自动恢复
 *
 * 注册的动作:
 *   - toggleReadingMode: Ribbon "切换高亮" 按钮
 *   - clearAll:          任务窗格"全 sheet 清高亮"按钮(也可未来加 Ribbon)
 *
 * 启动:
 *   - Excel 加载完成 + 上次 enabled=true → poll 等 workbook ready 再调 ensureEnabled
 */

import { toggleReadingMode, ensureEnabled, clearAll } from "./commands.excel";
import { loadState } from "../shared/ReadingModeCore";

/* global Office Excel setTimeout console */

const AUTO_RESUME_TIMEOUT_MS = 10_000;
const AUTO_RESUME_POLL_MS = 200;

Office.onReady((info) => {
  Office.actions.associate("toggleReadingMode", () => toggleReadingMode());
  Office.actions.associate("clearAll", () => clearAll());

  if (info && info.host === Office.HostType.Excel) {
    // 上次 enabled=true 才需要等 workbook ready 后自动恢复
    // 否则啥都不做,toggle 留给用户手动触发
    if (loadState().enabled) {
      void autoResumeWhenReady();
    }
  }
});

/**
 * Poll 等 workbook 真正 ready(>= 1 个 sheet)再调 ensureEnabled。
 *
 * 为什么需要 poll 而不是 setTimeout 硬编码 1s:
 *   - Mac Excel cold start 经常 2-3s,1s 一到 `Excel.run` 里
 *     `getSelectedRange()` 直接抛"no workbook",catch 静默吞掉,
 *     用户感知不到"开关开了但没高亮"。
 *   - poll 重试直到 worksheets.items.length > 0,或超时(10s)放弃。
 */
async function autoResumeWhenReady(): Promise<void> {
  const start = Date.now();
  let attempt = 0;
  while (Date.now() - start < AUTO_RESUME_TIMEOUT_MS) {
    attempt++;
    try {
      let hasSheets = false;
      await Excel.run(async (context) => {
        const worksheets = context.workbook.worksheets;
        worksheets.load("items");
        // 这里 sync 在 loop 内是**故意**的:每 200ms 重新查 workbook 是否 ready
        // eslint-disable-next-line office-addins/no-context-sync-in-loop
        await context.sync();
        hasSheets = worksheets.items.length > 0;
      });
      if (hasSheets) {
        console.log(`[RM] auto-resume: workbook ready (attempt ${attempt}), 调 ensureEnabled`);
        await ensureEnabled();
        return;
      }
    } catch (e) {
      // workbook 还没 ready,继续 poll
      console.log(`[RM] auto-resume: attempt ${attempt} 失败,继续 poll`, e);
    }
    await new Promise((r) => setTimeout(r, AUTO_RESUME_POLL_MS));
  }
  console.warn(`[RM] auto-resume: 超时 ${AUTO_RESUME_TIMEOUT_MS}ms,放弃 ensureEnabled`);
}
