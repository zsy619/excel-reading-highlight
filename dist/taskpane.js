/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ }),

/***/ "./src/taskpane/components/ReadingMode.ts":
/*!************************************************!*\
  !*** ./src/taskpane/components/ReadingMode.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReadingMode: function() { return /* binding */ ReadingMode; }
/* harmony export */ });
/* harmony import */ var _shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/ReadingModeCore */ "./src/shared/ReadingModeCore.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* global Excel Office console */

/**
 * ReadingMode — 选中单元格时高亮所在整行 + 所在整列 + 当前单元格(WPS 阅读模式)
 *
 * Excel 操作委托给 shared/ReadingModeCore:
 *   - computeHighlightPlan: 算出 rowAddr / colAddr / cellAddr
 *   - applyHighlight:       在当前 Excel.run context 里涂
 *   - clearHighlights:      清指定 sheet 的旧高亮
 *
 * 持久化:
 *   - enabled / crossColor / cellColor → "readingMode.state"
 *   - lastHighlights[]                 → "readingMode.lastHighlights"
 *
 * 性能:onSelectionChanged 用 80ms 节流,合并连续选区切换。
 *
 * 配色映射(任务窗格 UI 命名 → state):
 *   - rowColor    → crossColor(整行 + 整列共用,WPS 也是同色)
 *   - columnColor → cellColor(当前格单独色,跟十字区分)
 */



/** taskpane.ts 用的命名(保持 UI 文案不变)*/

var ReadingMode = /*#__PURE__*/function () {
  function ReadingMode() {
    var _this = this;
    _classCallCheck(this, ReadingMode);
    _defineProperty(this, "_state", _objectSpread({}, _shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_STATE));
    _defineProperty(this, "_registered", false);
    // 节流
    _defineProperty(this, "_throttleMs", 80);
    _defineProperty(this, "_lastInvoke", 0);
    _defineProperty(this, "_pendingTimer", null);
    // 当前 sheet 名 — 切 sheet 时丢弃旧 sheet 的高亮记录
    _defineProperty(this, "_lastSheetName", "");
    // 上次高亮位置(跨 context 保留,用于 disable 时清)
    _defineProperty(this, "_lastHighlights", []);
    _defineProperty(this, "_onSelectionChangedHandler", function () {
      if (!_this._state.enabled) return;
      _this._throttle(function () {
        return void _this._doHighlight();
      });
    });
    this._state = (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.loadState)();
    this._lastHighlights = (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.loadHighlights)();
    console.log("[RM] init: enabled=".concat(this._state.enabled, " cross=").concat(this._state.crossColor, " cell=").concat(this._state.cellColor, " hls=").concat(this._lastHighlights.length));
  }

  /**
   * 任务窗格颜色选择器入口。
   * rowColor → crossColor(行+列共用),columnColor → cellColor(当前格)。
   */
  return _createClass(ReadingMode, [{
    key: "enabled",
    get: function get() {
      return this._state.enabled;
    }
  }, {
    key: "updateSettings",
    value: function updateSettings(settings) {
      var changed = false;
      if (settings.rowColor !== undefined) {
        var next = settings.rowColor.startsWith("#") ? settings.rowColor.slice(1) : settings.rowColor;
        if (next.toUpperCase() !== this._state.crossColor.toUpperCase()) {
          console.log("[RM] updateSettings: crossColor ".concat(this._state.crossColor, " \u2192 ").concat(next));
          this._state.crossColor = next;
          changed = true;
        }
      }
      if (settings.columnColor !== undefined) {
        var _next = settings.columnColor.startsWith("#") ? settings.columnColor.slice(1) : settings.columnColor;
        if (_next.toUpperCase() !== this._state.cellColor.toUpperCase()) {
          console.log("[RM] updateSettings: cellColor ".concat(this._state.cellColor, " \u2192 ").concat(_next));
          this._state.cellColor = _next;
          changed = true;
        }
      }
      if (changed) {
        (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.saveState)(this._state);
        if (this._state.enabled) {
          console.log("[RM] updateSettings: \u89E6\u53D1 refresh");
          void this.refresh();
        } else {
          console.log("[RM] updateSettings: enabled=false, \u6682\u4E0D refresh,\u4EC5\u4FDD\u5B58");
        }
      }
    }
  }, {
    key: "enable",
    value: function () {
      var _enable = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _this2 = this;
        var _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              if (!this._state.enabled) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2);
            case 1:
              this._state.enabled = true;
              (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.saveState)(this._state);
              _context2.p = 2;
              _context2.n = 3;
              return Excel.run(/*#__PURE__*/function () {
                var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(context) {
                  var ws;
                  return _regenerator().w(function (_context) {
                    while (1) switch (_context.n) {
                      case 0:
                        ws = context.workbook.worksheets.getActiveWorksheet();
                        ws.load("name");
                        _context.n = 1;
                        return context.sync();
                      case 1:
                        _this2._lastSheetName = ws.name;
                      case 2:
                        return _context.a(2);
                    }
                  }, _callee);
                }));
                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }());
            case 3:
              if (!this._registered) this._registerEvents();
              _context2.n = 4;
              return this.refresh();
            case 4:
              console.log("[RM] enable: 已激活");
              _context2.n = 6;
              break;
            case 5:
              _context2.p = 5;
              _t = _context2.v;
              console.error("[RM] enable error:", _t);
              this._state.enabled = false;
              (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.saveState)(this._state);
            case 6:
              return _context2.a(2);
          }
        }, _callee2, this, [[2, 5]]);
      }));
      function enable() {
        return _enable.apply(this, arguments);
      }
      return enable;
    }()
  }, {
    key: "disable",
    value: function () {
      var _disable = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              if (this._state.enabled) {
                _context3.n = 1;
                break;
              }
              return _context3.a(2);
            case 1:
              this._state.enabled = false;
              (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.saveState)(this._state);
              this._clearPendingTimer();
              _context3.n = 2;
              return (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.clearAllAcrossSheets)(this._lastHighlights);
            case 2:
              this._lastHighlights = [];
              (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.saveHighlights)(this._lastHighlights);
              console.log("[RM] disable: 已清空所有高亮");
            case 3:
              return _context3.a(2);
          }
        }, _callee3, this);
      }));
      function disable() {
        return _disable.apply(this, arguments);
      }
      return disable;
    }() /** 颜色变化时调用,重画当前选区 */
  }, {
    key: "refresh",
    value: (function () {
      var _refresh = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              if (this._state.enabled) {
                _context4.n = 1;
                break;
              }
              return _context4.a(2);
            case 1:
              _context4.n = 2;
              return this._doHighlight();
            case 2:
              return _context4.a(2);
          }
        }, _callee4, this);
      }));
      function refresh() {
        return _refresh.apply(this, arguments);
      }
      return refresh;
    }() // ─────────────────── 内部 ───────────────────
    )
  }, {
    key: "_registerEvents",
    value: function _registerEvents() {
      var _this3 = this;
      if (this._registered) return;
      Office.context.document.addHandlerAsync(Office.EventType.DocumentSelectionChanged, this._onSelectionChangedHandler, function (result) {
        if (result.status === Office.AsyncResultStatus.Failed) {
          console.error("[RM] 注册 selection handler 失败:", result.error.message);
          return;
        }
        _this3._registered = true;
      });
    }
  }, {
    key: "_throttle",
    value: function _throttle(fn) {
      var _this4 = this;
      var now = Date.now();
      if (now - this._lastInvoke >= this._throttleMs) {
        this._lastInvoke = now;
        fn();
        return;
      }
      if (this._pendingTimer) clearTimeout(this._pendingTimer);
      this._pendingTimer = setTimeout(function () {
        _this4._lastInvoke = Date.now();
        _this4._pendingTimer = null;
        fn();
      }, this._throttleMs);
    }
  }, {
    key: "_clearPendingTimer",
    value: function _clearPendingTimer() {
      if (this._pendingTimer) {
        clearTimeout(this._pendingTimer);
        this._pendingTimer = null;
      }
    }

    /**
     * WPS 阅读模式核心:
     *   run #1 — 读 sheetName + 清旧高亮
     *   run #2 — 读选区、算 rowAddr/colAddr/cellAddr、涂新
     *
     * 两个 run 用 sheet 名串起来,中间不共享 context,避免"清旧"和"涂新"排队错位。
     */
  }, {
    key: "_doHighlight",
    value: (function () {
      var _doHighlight2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        var _this5 = this;
        var sheetName, sheetHls, _t3, _t4, _t5;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.p = _context8.n) {
            case 0:
              // ── Phase 1: 读 sheetName + 清旧 ─────────────────
              sheetName = "";
              _context8.p = 1;
              _context8.n = 2;
              return Excel.run(/*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(context) {
                  var ws;
                  return _regenerator().w(function (_context5) {
                    while (1) switch (_context5.n) {
                      case 0:
                        ws = context.workbook.worksheets.getActiveWorksheet();
                        ws.load("name");
                        _context5.n = 1;
                        return context.sync();
                      case 1:
                        sheetName = ws.name;
                      case 2:
                        return _context5.a(2);
                    }
                  }, _callee5);
                }));
                return function (_x2) {
                  return _ref2.apply(this, arguments);
                };
              }());
            case 2:
              _context8.n = 4;
              break;
            case 3:
              _context8.p = 3;
              _t3 = _context8.v;
              console.error("[RM] _doHighlight: phase1 读 sheetName 失败", _t3);
              return _context8.a(2);
            case 4:
              if (sheetName !== this._lastSheetName) {
                this._lastSheetName = sheetName;
                this._lastHighlights = this._lastHighlights.filter(function (h) {
                  return h.sheetName !== sheetName;
                });
                (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.saveHighlights)(this._lastHighlights);
                console.log("[RM] _doHighlight: \u5207\u5230 ".concat(sheetName));
              }
              sheetHls = this._lastHighlights.filter(function (h) {
                return h.sheetName === sheetName;
              });
              if (!(sheetHls.length > 0)) {
                _context8.n = 8;
                break;
              }
              _context8.p = 5;
              _context8.n = 6;
              return Excel.run(/*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(context) {
                  var sheet;
                  return _regenerator().w(function (_context6) {
                    while (1) switch (_context6.n) {
                      case 0:
                        sheet = context.workbook.worksheets.getItem(sheetName);
                        _context6.n = 1;
                        return (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.clearHighlights)(context, sheet, sheetHls);
                      case 1:
                        return _context6.a(2);
                    }
                  }, _callee6);
                }));
                return function (_x3) {
                  return _ref3.apply(this, arguments);
                };
              }());
            case 6:
              this._lastHighlights = this._lastHighlights.filter(function (h) {
                return h.sheetName !== sheetName;
              });
              (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.saveHighlights)(this._lastHighlights);
              _context8.n = 8;
              break;
            case 7:
              _context8.p = 7;
              _t4 = _context8.v;
              console.error("[RM] _doHighlight: clear run \u5931\u8D25 (".concat(sheetName, ")"), _t4);
            case 8:
              _context8.p = 8;
              _context8.n = 9;
              return Excel.run(/*#__PURE__*/function () {
                var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(context) {
                  var range, sheet, totalRows, totalCols, usedRange, plan, newHl, _t2;
                  return _regenerator().w(function (_context7) {
                    while (1) switch (_context7.p = _context7.n) {
                      case 0:
                        range = context.workbook.getSelectedRange();
                        range.load(["rowIndex", "columnIndex", "rowCount", "columnCount"]);
                        sheet = range.worksheet;
                        sheet.load("name");
                        _context7.n = 1;
                        return context.sync();
                      case 1:
                        if (!(range.rowCount !== 1 || range.columnCount !== 1)) {
                          _context7.n = 2;
                          break;
                        }
                        console.log("[RM] _doHighlight: \u591A\u9009 rowCount=".concat(range.rowCount, " colCount=").concat(range.columnCount, ", \u8DF3\u8FC7\u6D82"));
                        return _context7.a(2);
                      case 2:
                        totalRows = 100;
                        totalCols = 26;
                        _context7.p = 3;
                        usedRange = sheet.getUsedRangeOrNullObject();
                        usedRange.load(["isNullObject", "rowCount", "columnCount"]);
                        _context7.n = 4;
                        return context.sync();
                      case 4:
                        if (!usedRange.isNullObject) {
                          totalRows = Math.max(1, usedRange.rowCount || 100);
                          totalCols = Math.max(1, usedRange.columnCount || 26);
                        }
                        _context7.n = 6;
                        break;
                      case 5:
                        _context7.p = 5;
                        _t2 = _context7.v;
                        console.warn("[RM] _doHighlight: usedRange 读失败,用默认", _t2);
                      case 6:
                        plan = (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.computeHighlightPlan)(range.rowIndex, range.columnIndex, range.rowCount, range.columnCount, sheet.name, totalRows, totalCols);
                        (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.applyHighlight)(context, sheet, plan, _this5._state);
                        _context7.n = 7;
                        return context.sync();
                      case 7:
                        if (!plan.isMultiCell) {
                          newHl = (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.planToLastHighlight)(plan);
                          _this5._lastHighlights = [].concat(_toConsumableArray(_this5._lastHighlights.filter(function (h) {
                            return h.sheetName !== sheet.name;
                          })), [newHl]);
                          (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.saveHighlights)(_this5._lastHighlights);
                          console.log("[RM] _doHighlight: \u6D82\u5B8C ".concat(newHl.cellAddr, " (row=").concat(newHl.rowAddr, ", col=").concat(newHl.colAddr, ")"));
                        }
                      case 8:
                        return _context7.a(2);
                    }
                  }, _callee7, null, [[3, 5]]);
                }));
                return function (_x4) {
                  return _ref4.apply(this, arguments);
                };
              }());
            case 9:
              _context8.n = 11;
              break;
            case 10:
              _context8.p = 10;
              _t5 = _context8.v;
              console.error("[RM] _doHighlight: phase2 apply 失败", _t5);
            case 11:
              return _context8.a(2);
          }
        }, _callee8, this, [[8, 10], [5, 7], [1, 3]]);
      }));
      function _doHighlight() {
        return _doHighlight2.apply(this, arguments);
      }
      return _doHighlight;
    }())
  }]);
}();

/***/ }),

/***/ "./src/taskpane/taskpane.css":
/*!***********************************!*\
  !*** ./src/taskpane/taskpane.css ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5a365c44a47e90ea4615.css";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"taskpane": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
!function() {
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./src/taskpane/taskpane.ts ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ReadingMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ReadingMode */ "./src/taskpane/components/ReadingMode.ts");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global document Office */



// 全局单例
var readingMode = new _components_ReadingMode__WEBPACK_IMPORTED_MODULE_0__.ReadingMode();

// DOM 元素引用
var toggleSwitch;
var rowColorInput;
var columnColorInput;
var rowColorHex;
var columnColorHex;
var statusText;
Office.onReady(function (info) {
  if (info.host === Office.HostType.Excel) {
    // 检测是否通过"切换高亮"按钮打开（携带 ?autoToggle 参数）
    var urlParams = new URLSearchParams(window.location.search);
    var autoToggle = urlParams.get("autoToggle") !== null;
    initUI();
    if (autoToggle) {
      onToggleClick();
    }
  }
});
function initUI() {
  toggleSwitch = document.getElementById("toggle-reading");
  rowColorInput = document.getElementById("row-color");
  columnColorInput = document.getElementById("column-color");
  rowColorHex = document.getElementById("row-color-hex");
  columnColorHex = document.getElementById("column-color-hex");
  statusText = document.getElementById("status-text");

  // 开关点击
  toggleSwitch.addEventListener("click", onToggleClick);
  toggleSwitch.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onToggleClick();
    }
  });

  // 颜色变化
  rowColorInput.addEventListener("input", function () {
    var color = rowColorInput.value;
    rowColorHex.textContent = color;
    var decoded = hexToRgb(color);
    readingMode.updateSettings({
      rowColor: decoded
    });
  });
  columnColorInput.addEventListener("input", function () {
    var color = columnColorInput.value;
    columnColorHex.textContent = color;
    var decoded = hexToRgb(color);
    readingMode.updateSettings({
      columnColor: decoded
    });
  });

  // 初始状态
  updateUI(false);
}
function onToggleClick() {
  return _onToggleClick.apply(this, arguments);
}
function _onToggleClick() {
  _onToggleClick = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          if (readingMode.enabled) {
            _context.n = 2;
            break;
          }
          _context.n = 1;
          return readingMode.enable();
        case 1:
          updateUI(true);
          setStatusText("状态: 已激活");
          _context.n = 4;
          break;
        case 2:
          _context.n = 3;
          return readingMode.disable();
        case 3:
          updateUI(false);
          setStatusText("状态: 未激活");
        case 4:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _onToggleClick.apply(this, arguments);
}
function updateUI(on) {
  toggleSwitch.setAttribute("aria-checked", on ? "true" : "false");
}
function setStatusText(text) {
  statusText.textContent = text;
}

/** #E3F2FD → "E3F2FD" (strip #) */
function hexToRgb(hex) {
  return hex.replace("#", "");
}
}();
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
!function() {
/*!************************************!*\
  !*** ./src/taskpane/taskpane.html ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
// Imports
var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./taskpane.css */ "./src/taskpane/taskpane.css"), __webpack_require__.b);
// Module
var code = "<!DOCTYPE html>\n<html>\n\n<head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <title>阅读模式高亮设置</title>\n\n    <!-- Office JavaScript API -->\n    <" + "script type=\"text/javascript\" src=\"https://appsforoffice.microsoft.com/lib/1/hosted/office.js\"><" + "/script>\n\n    <!-- Fabric UI styles -->\n    <link rel=\"stylesheet\" href=\"https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/office-ui-fabric-core/11.1.0/css/fabric.min.css\"/>\n\n    <link href=\"" + ___HTML_LOADER_IMPORT_0___ + "\" rel=\"stylesheet\" type=\"text/css\" />\n</head>\n\n<body class=\"ms-font-m ms-welcome ms-Fabric\">\n    <main id=\"app-body\" class=\"ms-welcome__main\">\n        <h2 class=\"ms-font-xl reading-header\">阅读模式</h2>\n        <p class=\"ms-font-s description\">选中单元格时自动高亮所在整行、整列与当前单元格</p>\n\n        <!-- 开关 -->\n        <div class=\"toggle-row\">\n            <label class=\"ms-font-m toggle-label\" for=\"toggle-reading\">高亮开关</label>\n            <div class=\"toggle-switch\" id=\"toggle-reading\" role=\"switch\" aria-checked=\"false\" tabindex=\"0\">\n                <div class=\"toggle-thumb\"></div>\n            </div>\n        </div>\n\n        <!-- 颜色选择区域 -->\n        <div class=\"settings-section\">\n            <h3 class=\"ms-font-s section-title\">颜色设置</h3>\n\n            <div class=\"color-row\">\n                <label class=\"ms-font-s color-label\" for=\"row-color\">行/列高亮颜色</label>\n                <div class=\"color-picker-wrapper\">\n                    <input type=\"color\" id=\"row-color\" class=\"color-picker\" value=\"#E3F2FD\" />\n                    <span class=\"color-hex\" id=\"row-color-hex\">#E3F2FD</span>\n                </div>\n            </div>\n\n            <div class=\"color-row\">\n                <label class=\"ms-font-s color-label\" for=\"column-color\">当前单元格颜色</label>\n                <div class=\"color-picker-wrapper\">\n                    <input type=\"color\" id=\"column-color\" class=\"color-picker\" value=\"#FFF3B0\" />\n                    <span class=\"color-hex\" id=\"column-color-hex\">#FFF3B0</span>\n                </div>\n            </div>\n        </div>\n\n        <!-- 状态信息 -->\n        <div class=\"status-section\">\n            <span class=\"ms-font-s status-text\" id=\"status-text\">状态: 未激活</span>\n        </div>\n    </main>\n</body>\n\n</html>";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);
}();
/******/ })()
;
//# sourceMappingURL=taskpane.js.map