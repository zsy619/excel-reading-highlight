/*
 * commands.excel.ts — Ribbon ExecuteFunction 的入口函数
 *
 * 实际逻辑都在 ./controller.ts,这里只是薄包装:
 *   - toggleReadingMode:  Ribbon "切换高亮" 按钮
 *   - ensureEnabled:      add-in 启动时自动恢复上次 enabled 状态
 *   - clearAll:           任务窗格"全 sheet 清高亮"按钮
 */
/* global console */

import { controller } from "./controller";

export async function toggleReadingMode(): Promise<void> {
  console.log("=== RM DIAG: toggleReadingMode called ===");
  try {
    await controller.toggle();
    console.log("=== RM DIAG: toggleReadingMode OK ===");
  } catch (e) {
    console.error("=== RM DIAG: toggleReadingMode FAILED ===", e);
  }
}

export async function ensureEnabled(): Promise<void> {
  await controller.ensureEnabled();
}

export async function clearAll(): Promise<void> {
  await controller.clearAll();
}
