/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/commands/commands.excel.ts":
/*!****************************************!*\
  !*** ./src/commands/commands.excel.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toggleReadingMode: function() { return /* binding */ toggleReadingMode; }
/* harmony export */ });
/* harmony import */ var _shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ReadingModeCore */ "./src/shared/ReadingModeCore.ts");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/*
 * commands.excel.ts — Ribbon ExecuteFunction 的实际业务
 *
 * 不依赖任务窗格,在 commands.html 的 JS context 里跑。
 * 状态读写全部走 localStorage(taskpane 那边也读写同一份 key)。
 */

/* global Excel Office console */



/**
 * Ribbon "切换高亮" 按钮的回调。
 * - 如果当前 enabled = false:启用 → 涂当前选区
 * - 如果当前 enabled = true:关闭 → 清掉所有高亮
 */
function toggleReadingMode() {
  return _toggleReadingMode.apply(this, arguments);
}
function _toggleReadingMode() {
  _toggleReadingMode = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    var state, hls, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          console.log("[RM] toggleReadingMode: enter");
          _context2.p = 1;
          state = (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.loadState)();
          if (!state.enabled) {
            _context2.n = 3;
            break;
          }
          // 关闭:清所有 sheet 上的旧高亮
          hls = (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.loadHighlights)();
          console.log("[RM] toggleReadingMode: disable, \u6E05 ".concat(hls.length, " \u9879"));
          _context2.n = 2;
          return (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.clearAllAcrossSheets)(hls);
        case 2:
          (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.saveHighlights)([]);
          state.enabled = false;
          (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.saveState)(state);
          (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.notifyTaskpane)({
            type: "STATE_CHANGED",
            enabled: false
          });
          console.log("[RM] toggleReadingMode: disabled");
          _context2.n = 5;
          break;
        case 3:
          // 启用
          state.enabled = true;
          (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.saveState)(state);
          console.log("[RM] toggleReadingMode: enable, cross=".concat(state.crossColor, " cell=").concat(state.cellColor));
          _context2.n = 4;
          return Excel.run(/*#__PURE__*/function () {
            var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(context) {
              var range, sheet, totalRows, totalCols, usedRange, plan, hls, _t;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.p = _context.n) {
                  case 0:
                    range = context.workbook.getSelectedRange();
                    range.load(["rowIndex", "columnIndex", "rowCount", "columnCount"]);
                    sheet = range.worksheet;
                    sheet.load("name");
                    _context.n = 1;
                    return context.sync();
                  case 1:
                    if (!(range.rowCount !== 1 || range.columnCount !== 1)) {
                      _context.n = 2;
                      break;
                    }
                    console.log("[RM] toggleReadingMode: \u591A\u9009,\u8DF3\u8FC7\u6D82");
                    return _context.a(2);
                  case 2:
                    // 算 usedRange
                    totalRows = 100;
                    totalCols = 26;
                    _context.p = 3;
                    usedRange = sheet.getUsedRangeOrNullObject();
                    usedRange.load(["isNullObject", "rowCount", "columnCount"]);
                    _context.n = 4;
                    return context.sync();
                  case 4:
                    if (!usedRange.isNullObject) {
                      totalRows = Math.max(1, usedRange.rowCount || 100);
                      totalCols = Math.max(1, usedRange.columnCount || 26);
                    }
                    _context.n = 6;
                    break;
                  case 5:
                    _context.p = 5;
                    _t = _context.v;
                    console.warn("[RM] toggleReadingMode: usedRange 失败", _t);
                  case 6:
                    plan = (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.computeHighlightPlan)(range.rowIndex, range.columnIndex, range.rowCount, range.columnCount, sheet.name, totalRows, totalCols);
                    (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.applyHighlight)(context, sheet, plan, state);
                    _context.n = 7;
                    return context.sync();
                  case 7:
                    hls = (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.loadHighlights)().filter(function (h) {
                      return h.sheetName !== sheet.name;
                    });
                    if (!plan.isMultiCell) hls.push((0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.planToLastHighlight)(plan));
                    (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.saveHighlights)(hls);
                  case 8:
                    return _context.a(2);
                }
              }, _callee, null, [[3, 5]]);
            }));
            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }());
        case 4:
          (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.notifyTaskpane)({
            type: "STATE_CHANGED",
            enabled: true
          });
          console.log("[RM] toggleReadingMode: enabled");
        case 5:
          _context2.n = 7;
          break;
        case 6:
          _context2.p = 6;
          _t2 = _context2.v;
          console.error("[RM] toggleReadingMode 失败:", _t2);
          throw _t2;
        case 7:
          return _context2.a(2);
      }
    }, _callee2, null, [[1, 6]]);
  }));
  return _toggleReadingMode.apply(this, arguments);
}

/***/ }),

/***/ "./src/shared/ReadingModeCore.ts":
/*!***************************************!*\
  !*** ./src/shared/ReadingModeCore.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_STATE: function() { return /* binding */ DEFAULT_STATE; },
/* harmony export */   applyHighlight: function() { return /* binding */ applyHighlight; },
/* harmony export */   clearAllAcrossSheets: function() { return /* binding */ clearAllAcrossSheets; },
/* harmony export */   clearHighlights: function() { return /* binding */ clearHighlights; },
/* harmony export */   colIndexToLetter: function() { return /* binding */ colIndexToLetter; },
/* harmony export */   computeHighlightPlan: function() { return /* binding */ computeHighlightPlan; },
/* harmony export */   loadHighlights: function() { return /* binding */ loadHighlights; },
/* harmony export */   loadState: function() { return /* binding */ loadState; },
/* harmony export */   notifyTaskpane: function() { return /* binding */ notifyTaskpane; },
/* harmony export */   planToLastHighlight: function() { return /* binding */ planToLastHighlight; },
/* harmony export */   saveHighlights: function() { return /* binding */ saveHighlights; },
/* harmony export */   saveState: function() { return /* binding */ saveState; },
/* harmony export */   stripHash: function() { return /* binding */ stripHash; }
/* harmony export */ });
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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

/** 不带 Excel 上下文也能算出来的"涂色计划" */

var DEFAULT_STATE = {
  enabled: false,
  crossColor: "E3F2FD",
  cellColor: "FFF3B0"
};
var STORAGE_KEY = "readingMode.state";
var HIGHLIGHTS_KEY = "readingMode.lastHighlights";

// ───────────────────── state ─────────────────────

function loadState() {
  try {
    var _parsed$crossColor, _parsed$cellColor;
    var raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return _objectSpread({}, DEFAULT_STATE);
    var parsed = JSON.parse(raw);
    return {
      enabled: !!parsed.enabled,
      crossColor: stripHash((_parsed$crossColor = parsed.crossColor) !== null && _parsed$crossColor !== void 0 ? _parsed$crossColor : DEFAULT_STATE.crossColor),
      cellColor: stripHash((_parsed$cellColor = parsed.cellColor) !== null && _parsed$cellColor !== void 0 ? _parsed$cellColor : DEFAULT_STATE.cellColor)
    };
  } catch (e) {
    console.warn("ReadingModeCore.loadState 失败,用默认:", e);
    return _objectSpread({}, DEFAULT_STATE);
  }
}
function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn("ReadingModeCore.saveState 失败:", e);
  }
}

// ───────────────────── lastHighlights 持久化 ─────────────────────

function loadHighlights() {
  try {
    var raw = localStorage.getItem(HIGHLIGHTS_KEY);
    if (!raw) return [];
    var parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (_unused) {
    return [];
  }
}
function saveHighlights(hls) {
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
function computeHighlightPlan(rowIndex, columnIndex, rowCount, columnCount, sheetName, totalRows, totalCols) {
  if (rowCount !== 1 || columnCount !== 1) {
    return {
      sheetName: sheetName,
      isMultiCell: true
    };
  }
  var maxPaintRow = Math.min(totalRows + 20, 1000);
  var maxPaintCol = Math.min(totalCols + 5, 100);
  var rowNum = rowIndex + 1;
  var colLetter = colIndexToLetter(columnIndex);
  var cellAddr = "".concat(colLetter).concat(rowNum);
  var rowAddr = "A".concat(rowNum, ":").concat(colIndexToLetter(maxPaintCol - 1)).concat(rowNum);
  var colAddr = "".concat(colLetter, "1:").concat(colLetter).concat(maxPaintRow);
  console.log("[RM] plan: sheet=".concat(sheetName, " cell=").concat(cellAddr, " row=").concat(rowAddr, " col=").concat(colAddr, " cross=", "?", " cellC=", "?"));
  return {
    sheetName: sheetName,
    cellAddr: cellAddr,
    rowAddr: rowAddr,
    colAddr: colAddr,
    isMultiCell: false
  };
}
function planToLastHighlight(plan) {
  return {
    sheetName: plan.sheetName,
    rowAddr: plan.rowAddr,
    colAddr: plan.colAddr,
    cellAddr: plan.cellAddr
  };
}

// ───────────────────── Excel 操作:每个 Excel.run 只做一件事 ─────────────────────

/**
 * 清掉指定 sheet 上的若干高亮记录。
 * RangeFill 只有 clear() — 没有 reset()。两次 clear 是幂等的,这里只调一次。
 * 必须传 sheet 引用,跨 context 的 worksheet 引用会失效。
 * 调用方负责包一个 Excel.run。
 */
function clearHighlights(_x, _x2, _x3) {
  return _clearHighlights.apply(this, arguments);
}

/**
 * 涂新:必须在独立的 Excel.run 里调,确保之前的 clear 完全落地后再涂。
 */
function _clearHighlights() {
  _clearHighlights = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(context, sheet, hls) {
    var _iterator, _step, hl, _i, _arr, addr, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          if (!(hls.length === 0)) {
            _context.n = 1;
            break;
          }
          return _context.a(2);
        case 1:
          console.log("[RM] clear: ".concat(hls.length, " entries"), hls.map(function (h) {
            return "".concat(h.sheetName, "/").concat(h.cellAddr);
          }));
          _iterator = _createForOfIteratorHelper(hls);
          _context.p = 2;
          _iterator.s();
        case 3:
          if ((_step = _iterator.n()).done) {
            _context.n = 8;
            break;
          }
          hl = _step.value;
          _i = 0, _arr = [hl.rowAddr, hl.colAddr, hl.cellAddr];
        case 4:
          if (!(_i < _arr.length)) {
            _context.n = 7;
            break;
          }
          addr = _arr[_i];
          if (addr) {
            _context.n = 5;
            break;
          }
          return _context.a(3, 6);
        case 5:
          try {
            sheet.getRange(addr).format.fill.clear();
          } catch (e) {
            console.warn("[RM] clear: ".concat(addr, " \u5931\u8D25"), e);
          }
        case 6:
          _i++;
          _context.n = 4;
          break;
        case 7:
          _context.n = 3;
          break;
        case 8:
          _context.n = 10;
          break;
        case 9:
          _context.p = 9;
          _t = _context.v;
          _iterator.e(_t);
        case 10:
          _context.p = 10;
          _iterator.f();
          return _context.f(10);
        case 11:
          _context.n = 12;
          return context.sync();
        case 12:
          console.log("[RM] clear: done");
        case 13:
          return _context.a(2);
      }
    }, _callee, null, [[2, 9, 10, 11]]);
  }));
  return _clearHighlights.apply(this, arguments);
}
function applyHighlight(context, sheet, plan, state) {
  if (plan.isMultiCell) {
    console.log("[RM] apply: \u591A\u9009/\u5408\u5E76,\u8DF3\u8FC7\u6D82");
    return;
  }
  console.log("[RM] apply: sheet=".concat(plan.sheetName, " crossColor=").concat(state.crossColor, " cellColor=").concat(state.cellColor));
  if (plan.rowAddr) {
    try {
      sheet.getRange(plan.rowAddr).format.fill.color = state.crossColor;
    } catch (e) {
      console.warn("[RM] apply: row ".concat(plan.rowAddr, " \u5931\u8D25"), e);
    }
  }
  if (plan.colAddr) {
    try {
      sheet.getRange(plan.colAddr).format.fill.color = state.crossColor;
    } catch (e) {
      console.warn("[RM] apply: col ".concat(plan.colAddr, " \u5931\u8D25"), e);
    }
  }
  if (plan.cellAddr) {
    try {
      sheet.getRange(plan.cellAddr).format.fill.color = state.cellColor;
    } catch (e) {
      console.warn("[RM] apply: cell ".concat(plan.cellAddr, " \u5931\u8D25"), e);
    }
  }
}

/**
 * 全表清高亮(关闭时用):每个 sheet 单独一个 Excel.run,互不干扰。
 */
function clearAllAcrossSheets(_x4) {
  return _clearAllAcrossSheets.apply(this, arguments);
}

// ───────────────────── 通知 ─────────────────────
function _clearAllAcrossSheets() {
  _clearAllAcrossSheets = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(hls) {
    var grouped, _iterator2, _step2, hl, arr, tasks;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          if (!(hls.length === 0)) {
            _context3.n = 1;
            break;
          }
          return _context3.a(2);
        case 1:
          grouped = new Map();
          _iterator2 = _createForOfIteratorHelper(hls);
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              hl = _step2.value;
              arr = grouped.get(hl.sheetName) || [];
              arr.push(hl);
              grouped.set(hl.sheetName, arr);
            }
            // 用 forEach 替代 for...of entries — 避免 TS2802 downlevelIteration 报错
            // 同时也减少 async/await 在外层的耦合,这里 sequential 已经够用了
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          tasks = [];
          grouped.forEach(function (groupHls, sheetName) {
            tasks.push(Excel.run(/*#__PURE__*/function () {
              var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(context) {
                var sheet, _t2;
                return _regenerator().w(function (_context2) {
                  while (1) switch (_context2.p = _context2.n) {
                    case 0:
                      _context2.p = 0;
                      sheet = context.workbook.worksheets.getItem(sheetName);
                      _context2.n = 1;
                      return clearHighlights(context, sheet, groupHls);
                    case 1:
                      console.log("[RM] clearAll: ".concat(sheetName, " done"));
                      _context2.n = 3;
                      break;
                    case 2:
                      _context2.p = 2;
                      _t2 = _context2.v;
                      console.warn("[RM] clearAll: \u5207\u5230 ".concat(sheetName, " \u5931\u8D25(\u53EF\u80FD\u5DF2\u5220\u9664)"), _t2);
                    case 3:
                      return _context2.a(2);
                  }
                }, _callee2, null, [[0, 2]]);
              }));
              return function (_x5) {
                return _ref.apply(this, arguments);
              };
            }()).catch(function (e) {
              console.warn("[RM] clearAll: ".concat(sheetName, " Excel.run \u5931\u8D25"), e);
            }));
          });
          _context3.n = 2;
          return Promise.all(tasks);
        case 2:
          return _context3.a(2);
      }
    }, _callee3);
  }));
  return _clearAllAcrossSheets.apply(this, arguments);
}
function notifyTaskpane(payload) {
  try {
    var _Office;
    var json = JSON.stringify(payload);
    if ((_Office = Office) !== null && _Office !== void 0 && (_Office = _Office.context) !== null && _Office !== void 0 && (_Office = _Office.ui) !== null && _Office !== void 0 && _Office.messageParent) {
      Office.context.ui.messageParent(json);
    }
  } catch (e) {
    console.warn("[RM] notifyTaskpane 失败(可能 taskpane 未打开):", e);
  }
}

// ───────────────────── helpers ─────────────────────

function stripHash(color) {
  return color.startsWith("#") ? color.slice(1) : color;
}
function colIndexToLetter(idx) {
  if (idx < 0) return "A";
  var result = "";
  var n = idx;
  while (n >= 0) {
    result = String.fromCharCode(65 + n % 26) + result;
    n = Math.floor(n / 26) - 1;
  }
  return result;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
!function() {
/*!**********************************!*\
  !*** ./src/commands/commands.ts ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _commands_excel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commands.excel */ "./src/commands/commands.excel.ts");
/*
 * commands.ts — Ribbon ExecuteFunction 入口
 *
 * 唯一注册:FunctionName="toggleReadingMode" → commands.excel.ts 里的实现。
 * 切换阅读模式时不需要打开任务窗格,所以走 ExecuteFunction 而不是 ShowTaskpane。
 */



/* global Office */

Office.onReady(function () {
  Office.actions.associate("toggleReadingMode", function () {
    return (0,_commands_excel__WEBPACK_IMPORTED_MODULE_0__.toggleReadingMode)();
  });
});
}();
/******/ })()
;
//# sourceMappingURL=commands.js.map