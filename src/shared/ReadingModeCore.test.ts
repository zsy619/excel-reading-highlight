/* global Excel */
/**
 * ReadingModeCore 纯函数测试 — 不碰 Excel / Office API
 *
 * 覆盖:
 *   - colIndexToLetter: 0/25/26/27/701 边界
 *   - stripHash: 带/不带 # 的两种输入
 *   - computeHighlightPlan: 1×1 / 1×N 整行 / N×1 整列 / M×N 真多选
 *   - applyHighlight: color 必须带 # 前缀,pattern 必须是 Solid(防 Mac Excel
 *     静默 set 但渲染丢弃)
 */

import { describe, it, expect } from "vitest";
import {
  colIndexToLetter,
  stripHash,
  computeHighlightPlan,
  applyHighlight,
  HighlightPlan,
  ReadingModeState,
} from "./ReadingModeCore";

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

// ─────────────── applyHighlight(Excel.js 交互) ───────────────
// 关键防呆:color 必须带 # 前缀 + pattern 必须设 Solid。
// 不带 # 或 pattern=None,某些 Excel.js 版本会 set 成功但 Excel 渲染时丢弃。
//
// applyHighlight 现在是 async:每个 fill set 后立刻 await context.sync()
// (借鉴 welcome 项目 — Mac Excel 上一次 sync 多个 fill 会 silent drop)。
// 所以测试里要把 ctx 换成带 sync mock 的对象,并 await applyHighlight。

describe("applyHighlight", () => {
  // 每个 range 的 format.fill 对象带 setter,记录 set 的值
  function makeRangeRecorder() {
    const rec: { color: string; pattern: string } = { color: "", pattern: "" };
    const fill = {
      get color() {
        return rec.color;
      },
      set color(v: string) {
        rec.color = v;
      },
      get pattern() {
        return rec.pattern;
      },
      set pattern(v: string) {
        rec.pattern = v;
      },
    };
    return {
      format: { fill },
      _rec: rec,
    };
  }

  function makeSheetMock() {
    const ranges = new Map<string, ReturnType<typeof makeRangeRecorder>>();
    return {
      getRange: (addr: string) => {
        if (!ranges.has(addr)) ranges.set(addr, makeRangeRecorder());
        return ranges.get(addr)!;
      },
      _ranges: ranges,
    };
  }

  // 计数 sync 调用次数 + 返回 Promise(per-fill sync 必须落地的证据)
  function makeContextMock() {
    const ctx = {
      _syncCalls: 0,
      sync: () => {
        ctx._syncCalls++;
        return Promise.resolve();
      },
    };
    return ctx;
  }

  it("1×1 plan: 三个 range 的 color 都带 # 前缀 + pattern=Solid + 三次 sync", async () => {
    const sheet = makeSheetMock();
    const ctx = makeContextMock();
    const plan: HighlightPlan = {
      sheetName: "Sheet1",
      cellAddr: "K30",
      rowAddr: "A30:AE30",
      colAddr: "K1:K120",
      isMultiCell: false,
    };
    const state: ReadingModeState = {
      enabled: true,
      crossColor: "ff9300",
      cellColor: "5a1c00",
      borderColor: "0078D4",
      headerColor: "E8F5E9",
      showBorder: false,
      borderStyle: "Continuous" as Excel.BorderLineStyle,
    };
    await applyHighlight(
      ctx as unknown as Excel.RequestContext,
      sheet as unknown as Excel.Worksheet,
      plan,
      state
    );

    // row 用 crossColor,带 # 前缀
    expect(sheet._ranges.get("A30:AE30")!._rec.color).toBe("#ff9300");
    expect(sheet._ranges.get("A30:AE30")!._rec.pattern).toBe("Solid");
    // col 用 crossColor,带 # 前缀
    expect(sheet._ranges.get("K1:K120")!._rec.color).toBe("#ff9300");
    expect(sheet._ranges.get("K1:K120")!._rec.pattern).toBe("Solid");
    // cell 用 cellColor,带 # 前缀
    expect(sheet._ranges.get("K30")!._rec.color).toBe("#5a1c00");
    expect(sheet._ranges.get("K30")!._rec.pattern).toBe("Solid");
    // ★per-fill sync:每个 fill 都 sync 一次(3 个 fill = 3 次 sync)
    expect(ctx._syncCalls).toBe(3);
  });

  it("整行 plan(只有 rowAddr): 只涂行 + sync 一次", async () => {
    const sheet = makeSheetMock();
    const ctx = makeContextMock();
    const plan: HighlightPlan = {
      sheetName: "Sheet1",
      rowAddr: "A5:AE5",
      isMultiCell: false,
    };
    const state: ReadingModeState = {
      enabled: true,
      crossColor: "E3F2FD",
      cellColor: "FFF3B0",
      borderColor: "0078D4",
      headerColor: "E8F5E9",
      showBorder: false,
      borderStyle: "Continuous" as Excel.BorderLineStyle,
    };
    await applyHighlight(
      ctx as unknown as Excel.RequestContext,
      sheet as unknown as Excel.Worksheet,
      plan,
      state
    );

    expect(sheet._ranges.size).toBe(1);
    expect(sheet._ranges.get("A5:AE5")!._rec.color).toBe("#E3F2FD");
    expect(sheet._ranges.get("A5:AE5")!._rec.pattern).toBe("Solid");
    expect(ctx._syncCalls).toBe(1);
  });

  it("多选 plan(isMultiCell=true): 啥都不涂 + 0 sync", async () => {
    const sheet = makeSheetMock();
    const ctx = makeContextMock();
    const plan: HighlightPlan = { sheetName: "Sheet1", isMultiCell: true };
    const state: ReadingModeState = {
      enabled: true,
      crossColor: "ff9300",
      cellColor: "5a1c00",
      borderColor: "0078D4",
      headerColor: "E8F5E9",
      showBorder: false,
      borderStyle: "Continuous" as Excel.BorderLineStyle,
    };
    await applyHighlight(
      ctx as unknown as Excel.RequestContext,
      sheet as unknown as Excel.Worksheet,
      plan,
      state
    );

    // 没有任何 range 被访问,也没有 sync(直接 return)
    expect(sheet._ranges.size).toBe(0);
    expect(ctx._syncCalls).toBe(0);
  });

  it("state 已经带 # 时(异常输入): 不会叠成 ##", async () => {
    // stripHash 应该在 loadState 时去掉 #,但万一调用方传了带 # 的,
    // 不能给 Excel.js 喂 ##ff9300
    const sheet = makeSheetMock();
    const ctx = makeContextMock();
    const plan: HighlightPlan = {
      sheetName: "Sheet1",
      cellAddr: "A1",
      rowAddr: "A1:F1",
      colAddr: "A1:A70",
      isMultiCell: false,
    };
    const state: ReadingModeState = {
      enabled: true,
      crossColor: "#ff9300",
      cellColor: "#5a1c00",
      borderColor: "0078D4",
      headerColor: "E8F5E9",
      showBorder: false,
      borderStyle: "Continuous" as Excel.BorderLineStyle,
    };
    await applyHighlight(
      ctx as unknown as Excel.RequestContext,
      sheet as unknown as Excel.Worksheet,
      plan,
      state
    );

    // A1 是 cell,用 cellColor=#5a1c00(不是 crossColor)。要验证的是没有叠成 ##。
    expect(sheet._ranges.get("A1")!._rec.color).toBe("#5a1c00");
    expect(sheet._ranges.get("A1:F1")!._rec.color).toBe("#ff9300");
    // 关键:任何 range 都不应该出现 ##
    for (const r of Array.from(sheet._ranges.values())) {
      expect(r._rec.color).not.toContain("##");
    }
  });
});
