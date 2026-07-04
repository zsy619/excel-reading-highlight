/*
 * taskpane.ts - 任务窗格 UI(显示 + 把用户操作写回 localStorage + 直接调 controller)
 *
 * 单一事实源在 commands.html 的 controller.ts。这里通过:
 *   - localStorage 读状态、配色
 *   - storage 事件听控制器状态变化(用于跨 sheet 后状态同步,虽然 taskpane 通常不感知)
 *   - "readingMode.command" key 触发一次性命令(clearAll)
 *   - **直接 import controller**(P5 修的 bug):
 *     同窗口 storage 事件不 fire(MDN 规范),光靠 storage 事件不行 —
 *     taskpane 改色 / 开关后必须显式调 controller.applyCurrentSelection,
 *     否则 controller 内存 _state 不会同步,apply 也会用过期值
 *
 * 引入 controller 同时也保证:**taskpane 单开** 不依赖 commands.html lazy load。
 * 之前用户只开 taskpane 时,commands.html 永远不加载,controller 不存在,
 * 任何 toggle/换色都不生效。
 */
/* global Excel HTMLSelectElement */

import { loadState, ReadingModeState, saveState } from "../shared/ReadingModeCore";
import { controller } from "../commands/controller";

/* global document Office window localStorage setTimeout URLSearchParams HTMLInputElement HTMLButtonElement HTMLElement */

/** 跟控制器通信的命令 key */
const COMMAND_KEY = "readingMode.command";

let rowColorInput: HTMLInputElement;
let columnColorInput: HTMLInputElement;
let rowColorHex: HTMLElement;
let columnColorHex: HTMLElement;
let toggleSwitch: HTMLElement;
let statusText: HTMLElement;

// border/header controls
let borderToggle: HTMLElement;
let borderColorInput: HTMLInputElement;
let headerColorInput: HTMLInputElement;
let borderColorHex: HTMLElement;
let headerColorHex: HTMLElement;
let borderStyleSelect: HTMLSelectElement;

let currentState: ReadingModeState = {
  enabled: false,
  crossColor: "E3F2FD",
  cellColor: "FFF3B0",
  borderColor: "0078D4",
  headerColor: "E8F5E9",
  showBorder: true,
  borderStyle: "Continuous" as Excel.BorderLineStyle,
};

Office.onReady((info) => {
  if (info.host === Office.HostType.Excel) {
    const urlParams = new URLSearchParams(window.location.search);
    const autoToggle = urlParams.get("autoToggle") !== null;
    initUI();
    if (autoToggle) onToggleClick();

    if (currentState.enabled) {
      void controller.applyCurrentSelection();
    }
  }
});

function initUI(): void {
  currentState = loadState();

  rowColorInput = document.getElementById("row-color") as HTMLInputElement;
  columnColorInput = document.getElementById("column-color") as HTMLInputElement;
  rowColorHex = document.getElementById("row-color-hex")!;
  columnColorHex = document.getElementById("column-color-hex")!;
  toggleSwitch = document.getElementById("toggle-reading")!;
  statusText = document.getElementById("status-text")!;
  borderToggle = document.getElementById("toggle-border")!;
  borderColorInput = document.getElementById("border-color") as HTMLInputElement;
  headerColorInput = document.getElementById("header-color") as HTMLInputElement;
  borderColorHex = document.getElementById("border-color-hex")!;
  headerColorHex = document.getElementById("header-color-hex")!;
  borderStyleSelect = document.getElementById("border-style") as HTMLSelectElement;
  const clearAllBtn = document.getElementById("clear-all") as HTMLButtonElement | null;

  // 控件初值
  rowColorInput.value = "#" + currentState.crossColor;
  rowColorHex.textContent = "#" + currentState.crossColor;
  columnColorInput.value = "#" + currentState.cellColor;
  columnColorHex.textContent = "#" + currentState.cellColor;
  borderColorInput.value = "#" + currentState.borderColor;
  borderColorHex.textContent = "#" + currentState.borderColor;
  headerColorInput.value = "#" + currentState.headerColor;
  headerColorHex.textContent = "#" + currentState.headerColor;
  borderStyleSelect.value = currentState.borderStyle || "Continuous";
  updateToggle(borderToggle, currentState.showBorder);
  updateUI(currentState.enabled);
  setStatusText(currentState.enabled ? "状态: 已激活" : "状态: 未激活");

  // 开关
  toggleSwitch.addEventListener("click", onToggleClick);
  toggleSwitch.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onToggleClick();
    }
  });

  // 行/列色
  rowColorInput.addEventListener("input", () => {
    const color = rowColorInput.value;
    rowColorHex.textContent = color;
    currentState.crossColor = stripHash(color);
    saveState(currentState);
    void controller.applyCurrentSelection();
  });
  columnColorInput.addEventListener("input", () => {
    const color = columnColorInput.value;
    columnColorHex.textContent = color;
    currentState.cellColor = stripHash(color);
    saveState(currentState);
    void controller.applyCurrentSelection();
  });

  // 边框相关
  borderToggle.addEventListener("click", () => {
    const next = !currentState.showBorder;
    currentState.showBorder = next;
    saveState(currentState);
    updateToggle(borderToggle, next);
    void controller.applyCurrentSelection();
  });
  borderToggle.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      borderToggle.click();
    }
  });
  borderColorInput.addEventListener("input", () => {
    const color = borderColorInput.value;
    borderColorHex.textContent = color;
    currentState.borderColor = stripHash(color);
    saveState(currentState);
    void controller.applyCurrentSelection();
  });
  headerColorInput.addEventListener("input", () => {
    const color = headerColorInput.value;
    headerColorHex.textContent = color;
    currentState.headerColor = stripHash(color);
    saveState(currentState);
    void controller.applyCurrentSelection();
  });
  borderStyleSelect.addEventListener("change", () => {
    currentState.borderStyle = borderStyleSelect.value as Excel.BorderLineStyle;
    saveState(currentState);
    void controller.applyCurrentSelection();
  });

  // 全 sheet 清高亮
  clearAllBtn?.addEventListener("click", () => {
    invokeCommand("clearAll");
    setStatusText("状态: 已清空所有高亮");
    void controller.clearAll();
  });

  // 跨 context 状态同步
  window.addEventListener("storage", (e) => {
    if (e.key !== "readingMode.state") return;
    currentState = loadState();
    updateUI(currentState.enabled);
    rowColorInput.value = "#" + currentState.crossColor;
    rowColorHex.textContent = "#" + currentState.crossColor;
    columnColorInput.value = "#" + currentState.cellColor;
    columnColorHex.textContent = "#" + currentState.cellColor;
    borderColorInput.value = "#" + currentState.borderColor;
    borderColorHex.textContent = "#" + currentState.borderColor;
    headerColorInput.value = "#" + currentState.headerColor;
    headerColorHex.textContent = "#" + currentState.headerColor;
    borderStyleSelect.value = currentState.borderStyle || "Continuous";
    updateToggle(borderToggle, currentState.showBorder);
    setStatusText(currentState.enabled ? "状态: 已激活" : "状态: 未激活");
  });
}

async function onToggleClick(): Promise<void> {
  const next = !currentState.enabled;
  currentState.enabled = next;
  saveState(currentState);
  updateUI(next);
  setStatusText(next ? "状态: 已激活" : "状态: 未激活");
  // 直接调 controller:toggling on 涂当前选区,off 清所有高亮
  if (next) {
    void controller.applyCurrentSelection();
  } else {
    void controller.clearAll();
  }
}

function updateUI(on: boolean): void {
  toggleSwitch.setAttribute("aria-checked", on ? "true" : "false");
}

function updateToggle(el: HTMLElement, on: boolean): void {
  el.setAttribute("aria-checked", on ? "true" : "false");
}

function setStatusText(text: string): void {
  statusText.textContent = text;
}

/** 通过 localStorage 触发一次命令(同 origin 的 commands.html context 会通过 storage 事件收到) */
function invokeCommand(cmd: string): void {
  // 用时间戳让每次都是新值,确保 storage 事件一定 fire
  localStorage.setItem(COMMAND_KEY, JSON.stringify({ cmd, ts: Date.now() }));
  // 50ms 后清掉,免得以后同值不 fire
  setTimeout(() => {
    if (localStorage.getItem(COMMAND_KEY) !== null) {
      localStorage.removeItem(COMMAND_KEY);
    }
  }, 50);
}

function stripHash(hex: string): string {
  return hex.startsWith("#") ? hex.slice(1) : hex;
}
