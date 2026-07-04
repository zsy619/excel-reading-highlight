/**
 * ReadingModeCore 纯函数测试 — 不碰 Excel / Office API
 *
 * 覆盖:
 *   - colIndexToLetter: 0/25/26/27/701 边界
 *   - stripHash: 带/不带 # 的两种输入
 *   - computeHighlightPlan: 1×1 / 1×N 整行 / N×1 整列 / M×N 真多选
 */

import { describe, it, expect } from "vitest";
import { colIndexToLetter, stripHash, computeHighlightPlan } from "./ReadingModeCore";

describe("colIndexToLetter", () => {
  it("0 → A", () => expect(colIndexToLetter(0)).toBe("A"));
  it("25 → Z", () => expect(colIndexToLetter(25)).toBe("Z"));
  it("26 → AA", () => expect(colIndexToLetter(26)).toBe("AA"));
  it("27 → AB", () => expect(colIndexToLetter(27)).toBe("AB"));
  it("701 → ZZ", () => expect(colIndexToLetter(701)).toBe("ZZ"));
  it("702 → AAA", () => expect(colIndexToLetter(702)).toBe("AAA"));
  it("负数 → A(回退)", () => expect(colIndexToLetter(-1)).toBe("A"));
});

describe("stripHash", () => {
  it("带 # → 去 #", () => expect(stripHash("#E3F2FD")).toBe("E3F2FD"));
  it("无 # → 不动", () => expect(stripHash("E3F2FD")).toBe("E3F2FD"));
  it("空字符串", () => expect(stripHash("")).toBe(""));
});

describe("computeHighlightPlan", () => {
  const sheetName = "Sheet1";

  it("1×1 单格 → 完整 WPS 十字 (cellAddr + rowAddr + colAddr)", () => {
    // totalCols=26 → maxPaintCol = min(31, 100) = 31 → last col = AE
    // totalRows=100 → maxPaintRow = min(120, 1000) = 120
    const plan = computeHighlightPlan(4, 2, 1, 1, sheetName, 100, 26);
    expect(plan.isMultiCell).toBe(false);
    expect(plan.cellAddr).toBe("C5");
    expect(plan.rowAddr).toBe("A5:AE5");
    expect(plan.colAddr).toBe("C1:C120");
  });

  it("1×N 整行选中 → 只涂行,无 cellAddr / colAddr", () => {
    const plan = computeHighlightPlan(4, 0, 1, 5, sheetName, 100, 26);
    expect(plan.isMultiCell).toBe(false);
    expect(plan.cellAddr).toBeUndefined();
    expect(plan.colAddr).toBeUndefined();
    expect(plan.rowAddr).toBe("A5:AE5");
  });

  it("N×1 整列选中 → 只涂列,无 cellAddr / rowAddr", () => {
    const plan = computeHighlightPlan(0, 2, 10, 1, sheetName, 100, 26);
    expect(plan.isMultiCell).toBe(false);
    expect(plan.cellAddr).toBeUndefined();
    expect(plan.rowAddr).toBeUndefined();
    expect(plan.colAddr).toBe("C1:C120");
  });

  it("M×N 真多选 → 跳过(isMultiCell=true)", () => {
    const plan = computeHighlightPlan(0, 0, 3, 3, sheetName, 100, 26);
    expect(plan.isMultiCell).toBe(true);
    expect(plan.cellAddr).toBeUndefined();
    expect(plan.rowAddr).toBeUndefined();
    expect(plan.colAddr).toBeUndefined();
  });

  it("totalCols=1 时 rowAddr 仍会扩展 5 列(totalCols+5 缓冲)", () => {
    // maxPaintCol = min(1+5, 100) = 6 → last col = F
    // maxPaintRow = min(50+20, 1000) = 70
    const plan = computeHighlightPlan(0, 0, 1, 1, sheetName, 50, 1);
    expect(plan.rowAddr).toBe("A1:F1");
    expect(plan.colAddr).toBe("A1:A70");
  });

  it("maxPaintCol 上限 100 列(totalCols=200 时截到 ZZ+5 ≈ 100)", () => {
    // maxPaintCol = min(200+5, 100) = 100 → colIndexToLetter(99) = CV
    const plan = computeHighlightPlan(0, 0, 1, 1, sheetName, 50, 200);
    expect(plan.rowAddr).toBe("A1:CV1");
  });
});
