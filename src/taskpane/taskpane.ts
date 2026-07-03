/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global document Office */

import { ReadingMode, ReadingModeSettings } from "./components/ReadingMode";

// 全局单例
const readingMode = new ReadingMode();

// DOM 元素引用
let toggleSwitch: HTMLElement;
let rowColorInput: HTMLInputElement;
let columnColorInput: HTMLInputElement;
let rowColorHex: HTMLElement;
let columnColorHex: HTMLElement;
let statusText: HTMLElement;

Office.onReady((info) => {
  if (info.host === Office.HostType.Excel) {
    // 检测是否通过"切换高亮"按钮打开（携带 ?autoToggle 参数）
    const urlParams = new URLSearchParams(window.location.search);
    const autoToggle = urlParams.get("autoToggle") !== null;

    initUI();

    if (autoToggle) {
      onToggleClick();
    }
  }
});

function initUI(): void {
  toggleSwitch = document.getElementById("toggle-reading")!;
  rowColorInput = document.getElementById("row-color") as HTMLInputElement;
  columnColorInput = document.getElementById("column-color") as HTMLInputElement;
  rowColorHex = document.getElementById("row-color-hex")!;
  columnColorHex = document.getElementById("column-color-hex")!;
  statusText = document.getElementById("status-text")!;

  // 开关点击
  toggleSwitch.addEventListener("click", onToggleClick);
  toggleSwitch.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onToggleClick();
    }
  });

  // 颜色变化
  rowColorInput.addEventListener("input", () => {
    const color = rowColorInput.value;
    rowColorHex.textContent = color;
    const decoded = hexToRgb(color);
    readingMode.updateSettings({ rowColor: decoded });
  });

  columnColorInput.addEventListener("input", () => {
    const color = columnColorInput.value;
    columnColorHex.textContent = color;
    const decoded = hexToRgb(color);
    readingMode.updateSettings({ columnColor: decoded });
  });

  // 初始状态
  updateUI(false);
}

async function onToggleClick(): Promise<void> {
  if (!readingMode.enabled) {
    await readingMode.enable();
    updateUI(true);
    setStatusText("状态: 已激活");
  } else {
    await readingMode.disable();
    updateUI(false);
    setStatusText("状态: 未激活");
  }
}

function updateUI(on: boolean): void {
  toggleSwitch.setAttribute("aria-checked", on ? "true" : "false");
}

function setStatusText(text: string): void {
  statusText.textContent = text;
}

/** #E3F2FD → "E3F2FD" (strip #) */
function hexToRgb(hex: string): string {
  return hex.replace("#", "");
}