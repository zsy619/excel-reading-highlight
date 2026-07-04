/*
 * commands.ts — Ribbon ExecuteFunction 入口
 *
 * 唯一注册:FunctionName="toggleReadingMode" → commands.excel.ts 里的实现。
 * 切换阅读模式时不需要打开任务窗格,所以走 ExecuteFunction 而不是 ShowTaskpane。
 */

import { toggleReadingMode } from "./commands.excel";

/* global Office */

Office.onReady(() => {
  Office.actions.associate("toggleReadingMode", () => toggleReadingMode());
});