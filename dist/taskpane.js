/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/commands/controller.ts":
/*!************************************!*\
  !*** ./src/commands/controller.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   controller: function() { return /* binding */ controller; }
/* harmony export */ });
/* harmony import */ var _shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ReadingModeCore */ "./src/shared/ReadingModeCore.ts");
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
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* global window Office Excel console setTimeout clearTimeout */

/**
 * ReadingModeController — 阅读模式的唯一控制器(常驻 commands.html context)
 *
 * 职责:
 *   - 持有 enabled 状态、配色、lastHighlights(localStorage 持久化)
 *   - 注册 DocumentSelectionChanged handler(本 context 内单例)
 *   - 跨 sheet 切换时清旧视觉 + 恢复新 sheet 存储
 *   - 跨 context 同步:监听 window 'storage' 事件,taskpane 改色后自动重涂
 *
 * Ribbon 切换走 controller.toggle(),任务窗格改色走 localStorage write + storage event。
 * 这两条路径都汇集到这里 — 没有第二条事实源。
 */


var STORAGE_STATE_KEY = "readingMode.state";
var STORAGE_HIGHLIGHTS_KEY = "readingMode.lastHighlights";
var COMMAND_KEY = "readingMode.command";
var ReadingModeController = /*#__PURE__*/function () {
  function ReadingModeController() {
    var _this = this;
    _classCallCheck(this, ReadingModeController);
    _defineProperty(this, "_state", (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.loadState)());
    _defineProperty(this, "_lastHighlights", (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.loadHighlights)());
    _defineProperty(this, "_lastSheetName", "");
    _defineProperty(this, "_registered", false);
    // throttle — 连续选区切换合并
    _defineProperty(this, "_throttleMs", 80);
    _defineProperty(this, "_lastInvoke", 0);
    _defineProperty(this, "_pendingTimer", null);
    // 监听 cross-context 状态变化(taskpane 改 localStorage 后这里触发)
    window.addEventListener("storage", function (e) {
      if (!e.key) return;
      if (e.key === COMMAND_KEY) {
        var raw = e.newValue;
        if (!raw) return;
        try {
          var _ref = JSON.parse(raw),
            cmd = _ref.cmd;
          console.log("[RM] controller: command ".concat(cmd));
          if (cmd === "clearAll") void _this.clearAll();
        } catch (err) {
          console.warn("[RM] controller: bad command payload", err);
        }
        return;
      }
      if (e.key === STORAGE_STATE_KEY) {
        var prevEnabled = _this._state.enabled;
        _this._state = (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.loadState)();
        var enabledNow = _this._state.enabled;
        console.log("[RM] controller: state changed enabled=".concat(prevEnabled, "\u2192").concat(enabledNow));
        // 同步 Ribbon 按钮 label(无论 enabled 怎么变)
        void _this._updateRibbonLabel(enabledNow);
        if (!prevEnabled && enabledNow) {
          // taskpane 开关打开 → 注册 handler + 涂当前选区
          _this._registerHandler();
          void _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
            var _t;
            return _regenerator().w(function (_context2) {
              while (1) switch (_context2.p = _context2.n) {
                case 0:
                  _context2.p = 0;
                  _context2.n = 1;
                  return Excel.run(/*#__PURE__*/function () {
                    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(context) {
                      var ws;
                      return _regenerator().w(function (_context) {
                        while (1) switch (_context.n) {
                          case 0:
                            ws = context.workbook.worksheets.getActiveWorksheet();
                            ws.load("name");
                            _context.n = 1;
                            return context.sync();
                          case 1:
                            _this._lastSheetName = ws.name;
                          case 2:
                            return _context.a(2);
                        }
                      }, _callee);
                    }));
                    return function (_x) {
                      return _ref3.apply(this, arguments);
                    };
                  }());
                case 1:
                  _context2.n = 3;
                  break;
                case 2:
                  _context2.p = 2;
                  _t = _context2.v;
                  console.warn("[RM] storage handler: 读 sheetName 失败", _t);
                case 3:
                  _context2.n = 4;
                  return _this.applyCurrentSelection();
                case 4:
                  return _context2.a(2);
              }
            }, _callee2, null, [[0, 2]]);
          }))();
        } else if (prevEnabled && !enabledNow) {
          _this._clearPendingTimer();
          void _this.clearAll();
        } else if (enabledNow) {
          void _this.applyCurrentSelection();
        }
      } else if (e.key === STORAGE_HIGHLIGHTS_KEY) {
        _this._lastHighlights = (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.loadHighlights)();
      }
    });
    console.log("[RM] controller: init enabled=".concat(this._state.enabled, " cross=").concat(this._state.crossColor, " cell=").concat(this._state.cellColor));

    // 启动时根据 localStorage 里的 enabled 状态,同步 Ribbon 按钮 label
    void this._updateRibbonLabel(this._state.enabled);
  }

  // ─────────────── public API ───────────────

  /** 切换 enabled 状态 */
  return _createClass(ReadingModeController, [{
    key: "toggle",
    value: function () {
      var _toggle = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              console.log("=== RM DIAG: controller.toggle() enabled=" + this._state.enabled + " ===");
              if (!this._state.enabled) {
                _context3.n = 2;
                break;
              }
              _context3.n = 1;
              return this._disable();
            case 1:
              _context3.n = 3;
              break;
            case 2:
              _context3.n = 3;
              return this._enable();
            case 3:
              console.log("=== RM DIAG: controller.toggle() done ===");
            case 4:
              return _context3.a(2);
          }
        }, _callee3, this);
      }));
      function toggle() {
        return _toggle.apply(this, arguments);
      }
      return toggle;
    }() /** 幂等启用:仅在已 enabled 时重新涂当前选区,不切换状态 */
  }, {
    key: "ensureEnabled",
    value: (function () {
      var _ensureEnabled = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              if (this._state.enabled) {
                _context4.n = 1;
                break;
              }
              return _context4.a(2);
            case 1:
              console.log("[RM] controller: ensureEnabled");
              _context4.n = 2;
              return this.applyCurrentSelection();
            case 2:
              return _context4.a(2);
          }
        }, _callee4, this);
      }));
      function ensureEnabled() {
        return _ensureEnabled.apply(this, arguments);
      }
      return ensureEnabled;
    }() /** 设置行/列共用色 */)
  }, {
    key: "setCrossColor",
    value: (function () {
      var _setCrossColor = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(hex) {
        var next;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              next = hex.startsWith("#") ? hex.slice(1) : hex;
              if (!(next.toUpperCase() === this._state.crossColor.toUpperCase())) {
                _context5.n = 1;
                break;
              }
              return _context5.a(2);
            case 1:
              console.log("[RM] controller: crossColor ".concat(this._state.crossColor, " \u2192 ").concat(next));
              this._state.crossColor = next;
              (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.saveState)(this._state);
              if (!this._state.enabled) {
                _context5.n = 2;
                break;
              }
              _context5.n = 2;
              return this.applyCurrentSelection();
            case 2:
              return _context5.a(2);
          }
        }, _callee5, this);
      }));
      function setCrossColor(_x2) {
        return _setCrossColor.apply(this, arguments);
      }
      return setCrossColor;
    }() /** 设置当前单元格色 */)
  }, {
    key: "setCellColor",
    value: (function () {
      var _setCellColor = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(hex) {
        var next;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              next = hex.startsWith("#") ? hex.slice(1) : hex;
              if (!(next.toUpperCase() === this._state.cellColor.toUpperCase())) {
                _context6.n = 1;
                break;
              }
              return _context6.a(2);
            case 1:
              console.log("[RM] controller: cellColor ".concat(this._state.cellColor, " \u2192 ").concat(next));
              this._state.cellColor = next;
              (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.saveState)(this._state);
              if (!this._state.enabled) {
                _context6.n = 2;
                break;
              }
              _context6.n = 2;
              return this.applyCurrentSelection();
            case 2:
              return _context6.a(2);
          }
        }, _callee6, this);
      }));
      function setCellColor(_x3) {
        return _setCellColor.apply(this, arguments);
      }
      return setCellColor;
    }() /** 清所有 sheet 上的高亮(保留 enabled 状态) */)
  }, {
    key: "clearAll",
    value: (function () {
      var _clearAll = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var hls;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              hls = _toConsumableArray(this._lastHighlights);
              console.log("[RM] controller: clearAll, ".concat(hls.length, " \u9879"));
              _context7.n = 1;
              return (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.clearAllAcrossSheets)(hls);
            case 1:
              this._lastHighlights = [];
              (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.saveHighlights)(this._lastHighlights);
            case 2:
              return _context7.a(2);
          }
        }, _callee7, this);
      }));
      function clearAll() {
        return _clearAll.apply(this, arguments);
      }
      return clearAll;
    }() /** 读当前选区,计算 plan,涂上 — 不读不写状态 */)
  }, {
    key: "applyCurrentSelection",
    value: (function () {
      var _applyCurrentSelection = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              console.log("=== RM DIAG: applyCurrentSelection called ===");
              // 总是从 localStorage 重新读 _state。原因:
              //   1. 同窗口 storage 事件不 fire(MDN 规范),所以 taskpane 写完 localStorage
              //      后,同 context 的 controller 内存 _state 不会自动同步
              //   2. cross-context 命令链路 (commands.html controller) 在 storage 事件里
              //      已经 reload 过,这里再 reload 一次是冗余但安全
              this._state = (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.loadState)();
              console.log("=== RM DIAG: applyCurrentSelection: loaded state enabled=" + this._state.enabled + " ===");
              if (this._state.enabled) {
                _context8.n = 1;
                break;
              }
              console.log("=== RM DIAG: applyCurrentSelection: not enabled, skip ===");
              return _context8.a(2);
            case 1:
              // 顺带注册 selection handler — taskpane 单开路径(this method 被直接调)
              // 不会经过 _enable() / storage 事件,handler 必须在这里挂上,
              // 否则后续点其他格 DocumentSelectionChanged 没人接,高亮不跟随
              this._registerHandler();
              console.log("=== RM DIAG: applyCurrentSelection: calling _doHighlight ===");
              _context8.n = 2;
              return this._doHighlight();
            case 2:
              console.log("=== RM DIAG: applyCurrentSelection: done ===");
            case 3:
              return _context8.a(2);
          }
        }, _callee8, this);
      }));
      function applyCurrentSelection() {
        return _applyCurrentSelection.apply(this, arguments);
      }
      return applyCurrentSelection;
    }() // ─────────────── 内部 ───────────────
    )
  }, {
    key: "_enable",
    value: function () {
      var _enable2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
        var _this2 = this;
        var _t2;
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.p = _context0.n) {
            case 0:
              if (!this._state.enabled) {
                _context0.n = 1;
                break;
              }
              console.log("=== RM DIAG: _enable: already enabled, skip ===");
              return _context0.a(2);
            case 1:
              console.log("=== RM DIAG: _enable: starting ===");
              this._state.enabled = true;
              (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.saveState)(this._state);
              void this._updateRibbonLabel(true);
              this._registerHandler();
              _context0.p = 2;
              _context0.n = 3;
              return Excel.run(/*#__PURE__*/function () {
                var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(context) {
                  var ws;
                  return _regenerator().w(function (_context9) {
                    while (1) switch (_context9.n) {
                      case 0:
                        ws = context.workbook.worksheets.getActiveWorksheet();
                        ws.load("name");
                        _context9.n = 1;
                        return context.sync();
                      case 1:
                        _this2._lastSheetName = ws.name;
                      case 2:
                        return _context9.a(2);
                    }
                  }, _callee9);
                }));
                return function (_x4) {
                  return _ref4.apply(this, arguments);
                };
              }());
            case 3:
              _context0.n = 5;
              break;
            case 4:
              _context0.p = 4;
              _t2 = _context0.v;
              console.warn("[RM] enable: 读 sheetName 失败", _t2);
            case 5:
              console.log("=== RM DIAG: _enable: calling applyCurrentSelection ===");
              _context0.n = 6;
              return this.applyCurrentSelection();
            case 6:
              console.log("=== RM DIAG: _enable: completed === enabled=".concat(this._state.enabled));
            case 7:
              return _context0.a(2);
          }
        }, _callee0, this, [[2, 4]]);
      }));
      function _enable() {
        return _enable2.apply(this, arguments);
      }
      return _enable;
    }()
  }, {
    key: "_disable",
    value: function () {
      var _disable2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.n) {
            case 0:
              if (this._state.enabled) {
                _context1.n = 1;
                break;
              }
              return _context1.a(2);
            case 1:
              this._state.enabled = false;
              (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.saveState)(this._state);
              void this._updateRibbonLabel(false);
              this._clearPendingTimer();
              _context1.n = 2;
              return this.clearAll();
            case 2:
              console.log("[RM] controller: disabled");
            case 3:
              return _context1.a(2);
          }
        }, _callee1, this);
      }));
      function _disable() {
        return _disable2.apply(this, arguments);
      }
      return _disable;
    }()
  }, {
    key: "_registerHandler",
    value: function _registerHandler() {
      var _this3 = this;
      if (this._registered) return;
      Office.context.document.addHandlerAsync(Office.EventType.DocumentSelectionChanged, function () {
        // 同 applyCurrentSelection:每次 fire 都重新读 _state,避免
        // taskpane 改完 enabled 后内存 _state 还是旧值导致误判
        _this3._state = (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.loadState)();
        if (!_this3._state.enabled) return;
        _this3._throttle(function () {
          return void _this3._doHighlight();
        });
      }, function (result) {
        if (result.status === Office.AsyncResultStatus.Succeeded) {
          _this3._registered = true;
          console.log("[RM] controller: selection handler registered");
        } else {
          var _result$error;
          console.error("[RM] controller: register handler failed:", (_result$error = result.error) === null || _result$error === void 0 ? void 0 : _result$error.message);
        }
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
     * 核心:单 Excel.run 内原子完成 —
     *   读 sheetName + 读选区 + 读 usedRange + 兜底 clear + 算 plan + 涂新。
     *
     * 设计借鉴 welcome 项目(`applyDirectHighlightInContext` 的"一切在一个 run 里"模式):
     *   1. 把 phase1(读 sheetName)和 phase2(读选区+涂)合并成**一个** Excel.run,
     *      消除 phase1↔phase2 之间的 sync gap(原来跨两个 run,Mac Excel 上
     *      可能在 gap 内把 selection 改了,导致 phase2 涂到错的 cell)
     *   2. paint 前对整个 usedRange 做一次兜底 fill.clear()(welcome v8.2 经验):
     *      - 杜绝上次涂色的残留
     *      - 防止 Excel 内置表格样式 / 用户手动底色 shadow 新色,导致"调了但没涂上"
     *   3. paint 用 async applyHighlight(per-fill sync,见 ReadingModeCore.ts),
     *      每个 fill set 后立刻 sync,Mac Excel 不会 silent drop
     *
     * sheet 切换的旧 sheet 清视觉 移到 run 之后(避免 run 内嵌套 run),
     * 不影响主流程 — 用户感知不到这 ~10ms 延迟。
     *
     * 跨 sheet 时不删 lastHighlights 里的旧 sheet 条目;进入已有存储的 sheet 时直接恢复,
     * 不被当前选区覆盖。
     */
  }, {
    key: "_doHighlight",
    value: (function () {
      var _doHighlight2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12() {
        var _this5 = this;
        var sheetName, sheetChanged, oldSheet, plan, oldHls, _t5, _t6;
        return _regenerator().w(function (_context12) {
          while (1) switch (_context12.p = _context12.n) {
            case 0:
              console.log("=== RM DIAG: _doHighlight ENTER ===");
              sheetName = "";
              sheetChanged = false;
              oldSheet = "";
              plan = null;
              _context12.p = 1;
              console.log("=== RM DIAG: _doHighlight: before Excel.run ===");
              _context12.n = 2;
              return Excel.run(/*#__PURE__*/function () {
                var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(context) {
                  var sheet, range, stored, _ref6, _stored$cellAddr, totalRows, totalCols, usedRange, oldHlForThisSheet, _ref7, _newHl$cellAddr, newHl, _t3, _t4;
                  return _regenerator().w(function (_context10) {
                    while (1) switch (_context10.p = _context10.n) {
                      case 0:
                        console.log("=== RM DIAG: _doHighlight: INSIDE Excel.run ===");
                        // getSelectedRange() 永远落在 active sheet,直接拿 active worksheet
                        sheet = context.workbook.worksheets.getActiveWorksheet();
                        range = context.workbook.getSelectedRange();
                        sheet.load("name");
                        range.load(["rowIndex", "columnIndex", "rowCount", "columnCount"]);
                        _context10.n = 1;
                        return context.sync();
                      case 1:
                        console.log("=== RM DIAG: _doHighlight: after context.sync() sheet=" + sheet.name + " ===");
                        sheetName = sheet.name;
                        sheetChanged = sheetName !== _this5._lastSheetName;
                        oldSheet = _this5._lastSheetName;
                        _this5._lastSheetName = sheetName;

                        // 新 sheet 有存储 → 恢复,不让当前选区覆盖
                        if (!sheetChanged) {
                          _context10.n = 3;
                          break;
                        }
                        stored = _this5._lastHighlights.find(function (h) {
                          return h.sheetName === sheetName;
                        });
                        if (!stored) {
                          _context10.n = 3;
                          break;
                        }
                        plan = {
                          sheetName: sheetName,
                          cellAddr: stored.cellAddr,
                          rowAddr: stored.rowAddr,
                          colAddr: stored.colAddr,
                          isMultiCell: false
                        };
                        console.log("=== RM DIAG: _doHighlight: about to restore stored highlight ===");
                        _context10.n = 2;
                        return (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.applyHighlight)(context, sheet, plan, _this5._state);
                      case 2:
                        console.log("[RM] _doHighlight: \u6062\u590D ".concat(sheetName, " \u5B58\u50A8 \u2192 ").concat((_ref6 = (_stored$cellAddr = stored.cellAddr) !== null && _stored$cellAddr !== void 0 ? _stored$cellAddr : stored.rowAddr) !== null && _ref6 !== void 0 ? _ref6 : stored.colAddr));
                        console.log("=== RM DIAG: _doHighlight: restored, returning ===");
                        return _context10.a(2);
                      case 3:
                        if (!(range.rowCount > 1 && range.columnCount > 1)) {
                          _context10.n = 4;
                          break;
                        }
                        console.log("[RM] _doHighlight: \u771F\u591A\u9009 rowCount=".concat(range.rowCount, " colCount=").concat(range.columnCount, ", \u8DF3\u8FC7\u6D82"));
                        return _context10.a(2);
                      case 4:
                        totalRows = 100;
                        totalCols = 26;
                        _context10.p = 5;
                        usedRange = sheet.getUsedRangeOrNullObject();
                        usedRange.load(["isNullObject", "rowCount", "columnCount"]);
                        _context10.n = 6;
                        return context.sync();
                      case 6:
                        if (!usedRange.isNullObject) {
                          totalRows = Math.max(1, usedRange.rowCount || 100);
                          totalCols = Math.max(1, usedRange.columnCount || 26);
                        }
                        _context10.n = 8;
                        break;
                      case 7:
                        _context10.p = 7;
                        _t3 = _context10.v;
                        console.warn("[RM] _doHighlight: usedRange 读失败,用默认", _t3);
                      case 8:
                        // 精准清除:只清本插件在当前 sheet 涂过的格,不碰用户手动底色
                        oldHlForThisSheet = _this5._lastHighlights.filter(function (h) {
                          return h.sheetName === sheetName;
                        });
                        if (!(oldHlForThisSheet.length > 0)) {
                          _context10.n = 14;
                          break;
                        }
                        _context10.p = 9;
                        _context10.n = 10;
                        return (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.clearHighlights)(context, sheet, oldHlForThisSheet);
                      case 10:
                        _context10.n = 11;
                        return (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.clearBorders)(context, sheet, oldHlForThisSheet);
                      case 11:
                        _context10.n = 12;
                        return (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.clearHeaderFill)(context, sheet, oldHlForThisSheet);
                      case 12:
                        console.log("[RM] _doHighlight: \u7CBE\u51C6\u6E05\u9664 ".concat(sheetName, " \u65E7\u9AD8\u4EAE ").concat(oldHlForThisSheet.length, " \u6761"));
                        _context10.n = 14;
                        break;
                      case 13:
                        _context10.p = 13;
                        _t4 = _context10.v;
                        console.warn("[RM] _doHighlight: 精准清除旧高亮失败:", _t4);
                      case 14:
                        plan = (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.computeHighlightPlan)(range.rowIndex, range.columnIndex, range.rowCount, range.columnCount, sheet.name, totalRows, totalCols);
                        console.log("=== RM DIAG: _doHighlight: about to paint plan row=".concat(plan.rowAddr, " col=").concat(plan.colAddr, " cell=").concat(plan.cellAddr, " ==="));
                        _context10.n = 15;
                        return (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.applyHighlight)(context, sheet, plan, _this5._state);
                      case 15:
                        console.log("=== RM DIAG: _doHighlight: applyHighlight done, now borders ===");
                        _context10.n = 16;
                        return (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.applyBorders)(context, sheet, plan, _this5._state);
                      case 16:
                        _context10.n = 17;
                        return (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.applyHeaderFill)(context, sheet, plan, _this5._state);
                      case 17:
                        if (!plan.isMultiCell) {
                          newHl = (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.planToLastHighlight)(plan);
                          _this5._lastHighlights = [].concat(_toConsumableArray(_this5._lastHighlights.filter(function (h) {
                            return h.sheetName !== sheet.name;
                          })), [newHl]);
                          (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.saveHighlights)(_this5._lastHighlights);
                          console.log("[RM] _doHighlight: \u6D82\u5B8C ".concat((_ref7 = (_newHl$cellAddr = newHl.cellAddr) !== null && _newHl$cellAddr !== void 0 ? _newHl$cellAddr : newHl.rowAddr) !== null && _ref7 !== void 0 ? _ref7 : newHl.colAddr));
                        }
                      case 18:
                        return _context10.a(2);
                    }
                  }, _callee10, null, [[9, 13], [5, 7]]);
                }));
                return function (_x5) {
                  return _ref5.apply(this, arguments);
                };
              }());
            case 2:
              _context12.n = 4;
              break;
            case 3:
              _context12.p = 3;
              _t5 = _context12.v;
              console.error("=== RM DIAG: _doHighlight FAILED ===", _t5);
              return _context12.a(2);
            case 4:
              if (!(sheetChanged && oldSheet)) {
                _context12.n = 8;
                break;
              }
              oldHls = this._lastHighlights.filter(function (h) {
                return h.sheetName === oldSheet;
              });
              if (!(oldHls.length > 0)) {
                _context12.n = 8;
                break;
              }
              _context12.p = 5;
              _context12.n = 6;
              return Excel.run(/*#__PURE__*/function () {
                var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(context) {
                  var sheet;
                  return _regenerator().w(function (_context11) {
                    while (1) switch (_context11.n) {
                      case 0:
                        sheet = context.workbook.worksheets.getItem(oldSheet);
                        _context11.n = 1;
                        return (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.clearHighlights)(context, sheet, oldHls);
                      case 1:
                        _context11.n = 2;
                        return (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.clearBorders)(context, sheet, oldHls);
                      case 2:
                        _context11.n = 3;
                        return (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.clearHeaderFill)(context, sheet, oldHls);
                      case 3:
                        return _context11.a(2);
                    }
                  }, _callee11);
                }));
                return function (_x6) {
                  return _ref8.apply(this, arguments);
                };
              }());
            case 6:
              console.log("[RM] _doHighlight: \u5DF2\u6E05 ".concat(oldSheet, " \u89C6\u89C9+\u8FB9\u6846+\u8868\u5934,\u5B58\u50A8\u4FDD\u7559"));
              _context12.n = 8;
              break;
            case 7:
              _context12.p = 7;
              _t6 = _context12.v;
              console.error("[RM] _doHighlight: clear ".concat(oldSheet, " \u89C6\u89C9\u5931\u8D25"), _t6);
            case 8:
              return _context12.a(2);
          }
        }, _callee12, this, [[5, 7], [1, 3]]);
      }));
      function _doHighlight() {
        return _doHighlight2.apply(this, arguments);
      }
      return _doHighlight;
    }()
    /**
     * 同步 Ribbon 按钮 label,让用户能看出阅读模式开关状态。
     *
     * - enabled=true  → "关闭高亮" (暗示"再点一次就关")
     * - enabled=false → "开启高亮" (暗示"现在没开,点一下开")
     *
     * 失败不致命:Office.ribbon 在某些 host 上不存在 / 加载慢,console.warn 即可。
     */
    )
  }, {
    key: "_updateRibbonLabel",
    value: (function () {
      var _updateRibbonLabel2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(enabled) {
        var _Office, ribbon, _t7;
        return _regenerator().w(function (_context13) {
          while (1) switch (_context13.p = _context13.n) {
            case 0:
              _context13.p = 0;
              ribbon = (_Office = Office) === null || _Office === void 0 ? void 0 : _Office.ribbon;
              if (ribbon !== null && ribbon !== void 0 && ribbon.requestUpdate) {
                _context13.n = 1;
                break;
              }
              return _context13.a(2);
            case 1:
              _context13.n = 2;
              return ribbon.requestUpdate({
                tabs: [{
                  id: "TabReadingMode",
                  controls: [{
                    id: "ToggleReadingModeButton",
                    label: enabled ? "关闭高亮" : "开启高亮"
                  }]
                }]
              });
            case 2:
              console.log("[RM] ribbon label \u2192 ".concat(enabled ? "关闭高亮" : "开启高亮"));
              _context13.n = 4;
              break;
            case 3:
              _context13.p = 3;
              _t7 = _context13.v;
              console.warn("[RM] requestUpdate 失败(可能 Ribbon 未加载):", _t7);
            case 4:
              return _context13.a(2);
          }
        }, _callee13, null, [[0, 3]]);
      }));
      function _updateRibbonLabel(_x7) {
        return _updateRibbonLabel2.apply(this, arguments);
      }
      return _updateRibbonLabel;
    }())
  }]);
}();
/** 单例 */
var controller = new ReadingModeController();

/***/ }),

/***/ "./src/shared/ReadingModeCore.ts":
/*!***************************************!*\
  !*** ./src/shared/ReadingModeCore.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_STATE: function() { return /* binding */ DEFAULT_STATE; },
/* harmony export */   applyBorders: function() { return /* binding */ applyBorders; },
/* harmony export */   applyHeaderFill: function() { return /* binding */ applyHeaderFill; },
/* harmony export */   applyHighlight: function() { return /* binding */ applyHighlight; },
/* harmony export */   clearAllAcrossSheets: function() { return /* binding */ clearAllAcrossSheets; },
/* harmony export */   clearBorders: function() { return /* binding */ clearBorders; },
/* harmony export */   clearHeaderFill: function() { return /* binding */ clearHeaderFill; },
/* harmony export */   clearHighlights: function() { return /* binding */ clearHighlights; },
/* harmony export */   colIndexToLetter: function() { return /* binding */ colIndexToLetter; },
/* harmony export */   computeHighlightPlan: function() { return /* binding */ computeHighlightPlan; },
/* harmony export */   loadHighlights: function() { return /* binding */ loadHighlights; },
/* harmony export */   loadState: function() { return /* binding */ loadState; },
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
/* global Excel console localStorage */

/**
 * ReadingModeCore — 阅读模式高亮的核心 Excel 操作 + 状态同步
 *
 * 被两个 context 复用:
 *   - taskpane:每次 onSelectionChanged 时调 apply / clear
 *   - commands (Ribbon ExecuteFunction):调 toggle() / apply / clear
 *
 * 状态走 localStorage(JSON 字符串),两个 context 都能读写。
 * 跨 context 通知走 window 'storage' 事件 — 不同 iframe 间的 localStorage
 * 修改会触发同 origin 的 storage 事件,所以 taskpane 改色 / 触发命令都靠这个,
 * 不要再用 Office.context.ui.messageParent(那是给 Dialog API 用的)。
 *
 * 重要:每个 Excel.run 内只做一次 sync,避免"清旧"和"涂新"在同一个 context 里
 *      排队错位(之前症状:点其他单元格旧的没清掉,且新颜色不生效)。
 */

/** 不带 Excel 上下文也能算出来的"涂色计划" */

var DEFAULT_STATE = {
  enabled: false,
  crossColor: "#FFC000",
  cellColor: "#FFE08A",
  borderColor: "#4472C4",
  headerColor: "#D9E2F3",
  showBorder: false,
  borderStyle: "Continuous"
};
var STORAGE_KEY = "readingMode.state";
var HIGHLIGHTS_KEY = "readingMode.lastHighlights";

// ───────────────────── state ─────────────────────

function loadState() {
  try {
    var _parsed$crossColor, _parsed$cellColor, _parsed$borderColor, _parsed$headerColor, _parsed$showBorder, _parsed$borderStyle;
    var raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return _objectSpread({}, DEFAULT_STATE);
    var parsed = JSON.parse(raw);
    return {
      enabled: !!parsed.enabled,
      crossColor: stripHash((_parsed$crossColor = parsed.crossColor) !== null && _parsed$crossColor !== void 0 ? _parsed$crossColor : DEFAULT_STATE.crossColor),
      cellColor: stripHash((_parsed$cellColor = parsed.cellColor) !== null && _parsed$cellColor !== void 0 ? _parsed$cellColor : DEFAULT_STATE.cellColor),
      borderColor: stripHash((_parsed$borderColor = parsed.borderColor) !== null && _parsed$borderColor !== void 0 ? _parsed$borderColor : DEFAULT_STATE.borderColor),
      headerColor: stripHash((_parsed$headerColor = parsed.headerColor) !== null && _parsed$headerColor !== void 0 ? _parsed$headerColor : DEFAULT_STATE.headerColor),
      showBorder: (_parsed$showBorder = parsed.showBorder) !== null && _parsed$showBorder !== void 0 ? _parsed$showBorder : DEFAULT_STATE.showBorder,
      borderStyle: (_parsed$borderStyle = parsed.borderStyle) !== null && _parsed$borderStyle !== void 0 ? _parsed$borderStyle : DEFAULT_STATE.borderStyle
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
  var maxPaintRow = Math.min(totalRows + 20, 1000);
  var maxPaintCol = Math.min(totalCols + 5, 100);
  var lastColLetter = colIndexToLetter(Math.max(0, maxPaintCol - 1));

  // 全选整列(1×N):只涂列,不涂单元格
  if (rowCount === 1 && columnCount > 1) {
    var _rowNum = rowIndex + 1;
    var _rowAddr = "A".concat(_rowNum, ":").concat(lastColLetter).concat(_rowNum);
    console.log("[RM] plan: sheet=".concat(sheetName, " \u6574\u884C row=").concat(_rowAddr));
    return {
      sheetName: sheetName,
      rowAddr: _rowAddr,
      isMultiCell: false
    };
  }
  // 全选整行(N×1):只涂行,不涂单元格
  if (columnCount === 1 && rowCount > 1) {
    var _colLetter = colIndexToLetter(columnIndex);
    var _colAddr = "".concat(_colLetter, "1:").concat(_colLetter).concat(maxPaintRow);
    console.log("[RM] plan: sheet=".concat(sheetName, " \u6574\u5217 col=").concat(_colAddr));
    return {
      sheetName: sheetName,
      colAddr: _colAddr,
      isMultiCell: false
    };
  }
  // 真正的多选(M×N):跳过
  if (rowCount > 1 && columnCount > 1) {
    return {
      sheetName: sheetName,
      isMultiCell: true
    };
  }

  // 1×1 单格:WPS 十字交叉
  var rowNum = rowIndex + 1;
  var colLetter = colIndexToLetter(columnIndex);
  var cellAddr = "".concat(colLetter).concat(rowNum);
  var rowAddr = "A".concat(rowNum, ":").concat(lastColLetter).concat(rowNum);
  var colAddr = "".concat(colLetter, "1:").concat(colLetter).concat(maxPaintRow);
  console.log("[RM] plan: sheet=".concat(sheetName, " cell=").concat(cellAddr, " row=").concat(rowAddr, " col=").concat(colAddr));
  return {
    sheetName: sheetName,
    cellAddr: cellAddr,
    rowAddr: rowAddr,
    colAddr: colAddr,
    isMultiCell: false
  };
}
function planToLastHighlight(plan) {
  var _plan$rowAddr$match$, _plan$rowAddr$match, _plan$colAddr$match$, _plan$colAddr$match;
  return {
    sheetName: plan.sheetName,
    rowAddr: plan.rowAddr,
    colAddr: plan.colAddr,
    cellAddr: plan.cellAddr,
    headerRowAddr: plan.rowAddr ? "A".concat((_plan$rowAddr$match$ = (_plan$rowAddr$match = plan.rowAddr.match(/\d+/)) === null || _plan$rowAddr$match === void 0 ? void 0 : _plan$rowAddr$match[0]) !== null && _plan$rowAddr$match$ !== void 0 ? _plan$rowAddr$match$ : "") : undefined,
    headerColAddr: plan.colAddr ? "".concat((_plan$colAddr$match$ = (_plan$colAddr$match = plan.colAddr.match(/^[A-Z]+/)) === null || _plan$colAddr$match === void 0 ? void 0 : _plan$colAddr$match[0]) !== null && _plan$colAddr$match$ !== void 0 ? _plan$colAddr$match$ : "", "1") : undefined
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
 *
 * **Color format**:state 里存的是无 `#` 的 6 位 hex(全项目 canonical),
 * 但 Excel.js 在某些平台(尤其 Mac / 某些 Excel.js 版本)对不带 `#` 的
 * 颜色字符串会 set 成功但 Excel 渲染时丢弃 — 看起来"调了但没涂上"。
 * 所以这里统一加 `#` 再赋值,确保跨平台一致。
 *
 * **Fill pattern**:只 set color 不设 pattern,某些版本 pattern 留在 None,
 * color 被忽略。一并设 Solid,Excel 才会真的渲染填色。
 *
 * **Per-fill sync**:每个 range set 完立刻 await context.sync()(借鉴 welcome
 * 项目的经验,welcome 注释:Mac Excel 上 "set 多个 fill 后只 sync 一次"
 * 会导致前面的 set 被 silent drop,只有最后一个被 commit)。
 * 单 fill 同步 = 每个 fill 单独落地,即使 Mac 丢一个,另两个还在。
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
function applyHighlight(_x4, _x5, _x6, _x7) {
  return _applyHighlight.apply(this, arguments);
}

/**
 * 全表清高亮(关闭时用):每个 sheet 单独一个 Excel.run,互不干扰。
 * 同时清除 fills、borders 和 header fills。
 */
function _applyHighlight() {
  _applyHighlight = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(context, sheet, plan, state) {
    var crossColorHex, cellColorHex, range, _range, _range2, _t2, _t3, _t4;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          if (!plan.isMultiCell) {
            _context2.n = 1;
            break;
          }
          console.log("[RM] apply: \u591A\u9009/\u5408\u5E76,\u8DF3\u8FC7\u6D82");
          return _context2.a(2);
        case 1:
          console.log("[RM] apply: sheet=".concat(plan.sheetName, " crossColor=").concat(state.crossColor, " cellColor=").concat(state.cellColor));
          // 统一 #RRGGBB 格式(state 应当是无 # canonical 形式,loadState 调 stripHash)。
          // 防御性:万一调用方传了带 # 的,不叠成 ##(Excel.js 会把 ## 视为非法色)
          crossColorHex = state.crossColor.startsWith("#") ? state.crossColor : "#" + state.crossColor;
          cellColorHex = state.cellColor.startsWith("#") ? state.cellColor : "#" + state.cellColor;
          if (!plan.rowAddr) {
            _context2.n = 5;
            break;
          }
          _context2.p = 2;
          range = sheet.getRange(plan.rowAddr);
          range.format.fill.pattern = "Solid";
          range.format.fill.color = crossColorHex;
          _context2.n = 3;
          return context.sync();
        case 3:
          _context2.n = 5;
          break;
        case 4:
          _context2.p = 4;
          _t2 = _context2.v;
          console.warn("[RM] apply: row ".concat(plan.rowAddr, " \u5931\u8D25"), _t2);
        case 5:
          if (!plan.colAddr) {
            _context2.n = 9;
            break;
          }
          _context2.p = 6;
          _range = sheet.getRange(plan.colAddr);
          _range.format.fill.pattern = "Solid";
          _range.format.fill.color = crossColorHex;
          _context2.n = 7;
          return context.sync();
        case 7:
          _context2.n = 9;
          break;
        case 8:
          _context2.p = 8;
          _t3 = _context2.v;
          console.warn("[RM] apply: col ".concat(plan.colAddr, " \u5931\u8D25"), _t3);
        case 9:
          if (!plan.cellAddr) {
            _context2.n = 13;
            break;
          }
          _context2.p = 10;
          _range2 = sheet.getRange(plan.cellAddr);
          _range2.format.fill.pattern = "Solid";
          _range2.format.fill.color = cellColorHex;
          _context2.n = 11;
          return context.sync();
        case 11:
          _context2.n = 13;
          break;
        case 12:
          _context2.p = 12;
          _t4 = _context2.v;
          console.warn("[RM] apply: cell ".concat(plan.cellAddr, " \u5931\u8D25"), _t4);
        case 13:
          return _context2.a(2);
      }
    }, _callee2, null, [[10, 12], [6, 8], [2, 4]]);
  }));
  return _applyHighlight.apply(this, arguments);
}
function clearAllAcrossSheets(_x8) {
  return _clearAllAcrossSheets.apply(this, arguments);
}

/**
 * 给行/列范围加边框(十字交叉的边框效果)。
 * 行加 top+bottom 边框;列加 left+right 边框。
 */
function _clearAllAcrossSheets() {
  _clearAllAcrossSheets = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(hls) {
    var grouped, _iterator2, _step2, hl, arr, tasks;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          if (!(hls.length === 0)) {
            _context4.n = 1;
            break;
          }
          return _context4.a(2);
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
              var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(context) {
                var sheet, _t5;
                return _regenerator().w(function (_context3) {
                  while (1) switch (_context3.p = _context3.n) {
                    case 0:
                      _context3.p = 0;
                      sheet = context.workbook.worksheets.getItem(sheetName);
                      _context3.n = 1;
                      return clearHighlights(context, sheet, groupHls);
                    case 1:
                      _context3.n = 2;
                      return clearBorders(context, sheet, groupHls);
                    case 2:
                      _context3.n = 3;
                      return clearHeaderFill(context, sheet, groupHls);
                    case 3:
                      console.log("[RM] clearAll: ".concat(sheetName, " done"));
                      _context3.n = 5;
                      break;
                    case 4:
                      _context3.p = 4;
                      _t5 = _context3.v;
                      console.warn("[RM] clearAll: \u5207\u5230 ".concat(sheetName, " \u5931\u8D25(\u53EF\u80FD\u5DF2\u5220\u9664)"), _t5);
                    case 5:
                      return _context3.a(2);
                  }
                }, _callee3, null, [[0, 4]]);
              }));
              return function (_x21) {
                return _ref.apply(this, arguments);
              };
            }()).catch(function (e) {
              console.warn("[RM] clearAll: ".concat(sheetName, " Excel.run \u5931\u8D25"), e);
            }));
          });
          _context4.n = 2;
          return Promise.all(tasks);
        case 2:
          return _context4.a(2);
      }
    }, _callee4);
  }));
  return _clearAllAcrossSheets.apply(this, arguments);
}
function applyBorders(_x9, _x0, _x1, _x10) {
  return _applyBorders.apply(this, arguments);
}

/**
 * 清除指定记录上的边框。
 */
function _applyBorders() {
  _applyBorders = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(context, sheet, plan, state) {
    var borderColor, style, rng, _rng, _t6, _t7;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          if (!(plan.isMultiCell || !state.showBorder)) {
            _context5.n = 1;
            break;
          }
          return _context5.a(2);
        case 1:
          borderColor = state.borderColor.startsWith("#") ? state.borderColor : "#" + state.borderColor;
          style = state.borderStyle;
          if (!plan.rowAddr) {
            _context5.n = 5;
            break;
          }
          _context5.p = 2;
          rng = sheet.getRange(plan.rowAddr); // 清除旧边框再设新边框,避免叠加
          rng.format.borders.getItem("EdgeTop").color = borderColor;
          rng.format.borders.getItem("EdgeTop").style = style;
          rng.format.borders.getItem("EdgeBottom").color = borderColor;
          rng.format.borders.getItem("EdgeBottom").style = style;
          _context5.n = 3;
          return context.sync();
        case 3:
          _context5.n = 5;
          break;
        case 4:
          _context5.p = 4;
          _t6 = _context5.v;
          console.warn("[RM] borders: row ".concat(plan.rowAddr, " \u5931\u8D25"), _t6);
        case 5:
          if (!plan.colAddr) {
            _context5.n = 9;
            break;
          }
          _context5.p = 6;
          _rng = sheet.getRange(plan.colAddr);
          _rng.format.borders.getItem("EdgeLeft").color = borderColor;
          _rng.format.borders.getItem("EdgeLeft").style = style;
          _rng.format.borders.getItem("EdgeRight").color = borderColor;
          _rng.format.borders.getItem("EdgeRight").style = style;
          _context5.n = 7;
          return context.sync();
        case 7:
          _context5.n = 9;
          break;
        case 8:
          _context5.p = 8;
          _t7 = _context5.v;
          console.warn("[RM] borders: col ".concat(plan.colAddr, " \u5931\u8D25"), _t7);
        case 9:
          return _context5.a(2);
      }
    }, _callee5, null, [[6, 8], [2, 4]]);
  }));
  return _applyBorders.apply(this, arguments);
}
function clearBorders(_x11, _x12, _x13) {
  return _clearBorders.apply(this, arguments);
}

/**
 * 给表头单元格(A 列行表头 + 第 1 行列表头)施加 headerColor 填充。
 * headerRow = 行表头(如 A5),headerCol = 列表头(如 C1)。
 * 如果该单元格已在 crossColor 覆盖范围内,headerColor 覆盖上去。
 */
function _clearBorders() {
  _clearBorders = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(context, sheet, hls) {
    var _iterator3, _step3, hl, rng, _rng2;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.n) {
        case 0:
          if (!(hls.length === 0)) {
            _context6.n = 1;
            break;
          }
          return _context6.a(2);
        case 1:
          _iterator3 = _createForOfIteratorHelper(hls);
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              hl = _step3.value;
              if (hl.rowAddr) {
                try {
                  rng = sheet.getRange(hl.rowAddr);
                  rng.format.borders.getItem("EdgeTop").style = "None";
                  rng.format.borders.getItem("EdgeBottom").style = "None";
                } catch (e) {
                  console.warn("[RM] clearBorders: row ".concat(hl.rowAddr, " \u5931\u8D25"), e);
                }
              }
              if (hl.colAddr) {
                try {
                  _rng2 = sheet.getRange(hl.colAddr);
                  _rng2.format.borders.getItem("EdgeLeft").style = "None";
                  _rng2.format.borders.getItem("EdgeRight").style = "None";
                } catch (e) {
                  console.warn("[RM] clearBorders: col ".concat(hl.colAddr, " \u5931\u8D25"), e);
                }
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          _context6.n = 2;
          return context.sync();
        case 2:
          return _context6.a(2);
      }
    }, _callee6);
  }));
  return _clearBorders.apply(this, arguments);
}
function applyHeaderFill(_x14, _x15, _x16, _x17) {
  return _applyHeaderFill.apply(this, arguments);
}

/**
 * 清除表头单元格的 headerColor 填充。
 */
function _applyHeaderFill() {
  _applyHeaderFill = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(context, sheet, plan, state) {
    var headerColorHex, _plan$rowAddr$match2, rowNum, range, _plan$colAddr$match2, colLetter, _range3, _t8, _t9;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.p = _context7.n) {
        case 0:
          if (!plan.isMultiCell) {
            _context7.n = 1;
            break;
          }
          return _context7.a(2);
        case 1:
          headerColorHex = state.headerColor.startsWith("#") ? state.headerColor : "#" + state.headerColor; // 行表头: A{rowNum} — 从 rowAddr 中提取行号
          if (!plan.rowAddr) {
            _context7.n = 5;
            break;
          }
          rowNum = (_plan$rowAddr$match2 = plan.rowAddr.match(/\d+/)) === null || _plan$rowAddr$match2 === void 0 ? void 0 : _plan$rowAddr$match2[0];
          if (!rowNum) {
            _context7.n = 5;
            break;
          }
          _context7.p = 2;
          range = sheet.getRange("A".concat(rowNum));
          range.format.fill.pattern = "Solid";
          range.format.fill.color = headerColorHex;
          _context7.n = 3;
          return context.sync();
        case 3:
          _context7.n = 5;
          break;
        case 4:
          _context7.p = 4;
          _t8 = _context7.v;
          console.warn("[RM] headerFill: row A".concat(rowNum, " \u5931\u8D25"), _t8);
        case 5:
          if (!plan.colAddr) {
            _context7.n = 9;
            break;
          }
          colLetter = (_plan$colAddr$match2 = plan.colAddr.match(/^[A-Z]+/)) === null || _plan$colAddr$match2 === void 0 ? void 0 : _plan$colAddr$match2[0];
          if (!colLetter) {
            _context7.n = 9;
            break;
          }
          _context7.p = 6;
          _range3 = sheet.getRange("".concat(colLetter, "1"));
          _range3.format.fill.pattern = "Solid";
          _range3.format.fill.color = headerColorHex;
          _context7.n = 7;
          return context.sync();
        case 7:
          _context7.n = 9;
          break;
        case 8:
          _context7.p = 8;
          _t9 = _context7.v;
          console.warn("[RM] headerFill: col ".concat(colLetter, "1 \u5931\u8D25"), _t9);
        case 9:
          return _context7.a(2);
      }
    }, _callee7, null, [[6, 8], [2, 4]]);
  }));
  return _applyHeaderFill.apply(this, arguments);
}
function clearHeaderFill(_x18, _x19, _x20) {
  return _clearHeaderFill.apply(this, arguments);
}

// ───────────────────── helpers ─────────────────────
function _clearHeaderFill() {
  _clearHeaderFill = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(context, sheet, hls) {
    var _iterator4, _step4, hl;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.n) {
        case 0:
          if (!(hls.length === 0)) {
            _context8.n = 1;
            break;
          }
          return _context8.a(2);
        case 1:
          _iterator4 = _createForOfIteratorHelper(hls);
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              hl = _step4.value;
              if (hl.headerRowAddr) {
                try {
                  sheet.getRange(hl.headerRowAddr).format.fill.clear();
                } catch (e) {
                  console.warn("[RM] clearHeaderFill: ".concat(hl.headerRowAddr, " \u5931\u8D25"), e);
                }
              }
              if (hl.headerColAddr) {
                try {
                  sheet.getRange(hl.headerColAddr).format.fill.clear();
                } catch (e) {
                  console.warn("[RM] clearHeaderFill: ".concat(hl.headerColAddr, " \u5931\u8D25"), e);
                }
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
          _context8.n = 2;
          return context.sync();
        case 2:
          return _context8.a(2);
      }
    }, _callee8);
  }));
  return _clearHeaderFill.apply(this, arguments);
}
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

/***/ "./src/taskpane/taskpane.css":
/*!***********************************!*\
  !*** ./src/taskpane/taskpane.css ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "78d0d4e2f3fa6b24cb68.css";

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
/* harmony import */ var _shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ReadingModeCore */ "./src/shared/ReadingModeCore.ts");
/* harmony import */ var _commands_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../commands/controller */ "./src/commands/controller.ts");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
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




/* global document Office window localStorage setTimeout URLSearchParams HTMLInputElement HTMLButtonElement HTMLElement */

/** 跟控制器通信的命令 key */
var COMMAND_KEY = "readingMode.command";
var rowColorInput;
var columnColorInput;
var rowColorHex;
var columnColorHex;
var toggleSwitch;
var statusText;

// border/header controls
var borderToggle;
var borderColorInput;
var headerColorInput;
var borderColorHex;
var headerColorHex;
var borderStyleSelect;
var currentState = {
  enabled: false,
  crossColor: "E3F2FD",
  cellColor: "FFF3B0",
  borderColor: "0078D4",
  headerColor: "E8F5E9",
  showBorder: true,
  borderStyle: "Continuous"
};
Office.onReady(function (info) {
  if (info.host === Office.HostType.Excel) {
    var urlParams = new URLSearchParams(window.location.search);
    var autoToggle = urlParams.get("autoToggle") !== null;
    initUI();
    if (autoToggle) onToggleClick();
    if (currentState.enabled) {
      void _commands_controller__WEBPACK_IMPORTED_MODULE_1__.controller.applyCurrentSelection();
    }
  }
});
function initUI() {
  currentState = (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.loadState)();
  rowColorInput = document.getElementById("row-color");
  columnColorInput = document.getElementById("column-color");
  rowColorHex = document.getElementById("row-color-hex");
  columnColorHex = document.getElementById("column-color-hex");
  toggleSwitch = document.getElementById("toggle-reading");
  statusText = document.getElementById("status-text");
  borderToggle = document.getElementById("toggle-border");
  borderColorInput = document.getElementById("border-color");
  headerColorInput = document.getElementById("header-color");
  borderColorHex = document.getElementById("border-color-hex");
  headerColorHex = document.getElementById("header-color-hex");
  borderStyleSelect = document.getElementById("border-style");
  var clearAllBtn = document.getElementById("clear-all");

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
  toggleSwitch.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onToggleClick();
    }
  });

  // 行/列色
  rowColorInput.addEventListener("input", function () {
    var color = rowColorInput.value;
    rowColorHex.textContent = color;
    currentState.crossColor = stripHash(color);
    (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.saveState)(currentState);
    void _commands_controller__WEBPACK_IMPORTED_MODULE_1__.controller.applyCurrentSelection();
  });
  columnColorInput.addEventListener("input", function () {
    var color = columnColorInput.value;
    columnColorHex.textContent = color;
    currentState.cellColor = stripHash(color);
    (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.saveState)(currentState);
    void _commands_controller__WEBPACK_IMPORTED_MODULE_1__.controller.applyCurrentSelection();
  });

  // 边框相关
  borderToggle.addEventListener("click", function () {
    var next = !currentState.showBorder;
    currentState.showBorder = next;
    (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.saveState)(currentState);
    updateToggle(borderToggle, next);
    void _commands_controller__WEBPACK_IMPORTED_MODULE_1__.controller.applyCurrentSelection();
  });
  borderToggle.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      borderToggle.click();
    }
  });
  borderColorInput.addEventListener("input", function () {
    var color = borderColorInput.value;
    borderColorHex.textContent = color;
    currentState.borderColor = stripHash(color);
    (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.saveState)(currentState);
    void _commands_controller__WEBPACK_IMPORTED_MODULE_1__.controller.applyCurrentSelection();
  });
  headerColorInput.addEventListener("input", function () {
    var color = headerColorInput.value;
    headerColorHex.textContent = color;
    currentState.headerColor = stripHash(color);
    (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.saveState)(currentState);
    void _commands_controller__WEBPACK_IMPORTED_MODULE_1__.controller.applyCurrentSelection();
  });
  borderStyleSelect.addEventListener("change", function () {
    currentState.borderStyle = borderStyleSelect.value;
    (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.saveState)(currentState);
    void _commands_controller__WEBPACK_IMPORTED_MODULE_1__.controller.applyCurrentSelection();
  });

  // 全 sheet 清高亮
  clearAllBtn === null || clearAllBtn === void 0 || clearAllBtn.addEventListener("click", function () {
    invokeCommand("clearAll");
    setStatusText("状态: 已清空所有高亮");
    void _commands_controller__WEBPACK_IMPORTED_MODULE_1__.controller.clearAll();
  });

  // 跨 context 状态同步
  window.addEventListener("storage", function (e) {
    if (e.key !== "readingMode.state") return;
    currentState = (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.loadState)();
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
function onToggleClick() {
  return _onToggleClick.apply(this, arguments);
}
function _onToggleClick() {
  _onToggleClick = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var next;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          next = !currentState.enabled;
          currentState.enabled = next;
          (0,_shared_ReadingModeCore__WEBPACK_IMPORTED_MODULE_0__.saveState)(currentState);
          updateUI(next);
          setStatusText(next ? "状态: 已激活" : "状态: 未激活");
          // 直接调 controller:toggling on 涂当前选区,off 清所有高亮
          if (next) {
            void _commands_controller__WEBPACK_IMPORTED_MODULE_1__.controller.applyCurrentSelection();
          } else {
            void _commands_controller__WEBPACK_IMPORTED_MODULE_1__.controller.clearAll();
          }
        case 1:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _onToggleClick.apply(this, arguments);
}
function updateUI(on) {
  toggleSwitch.setAttribute("aria-checked", on ? "true" : "false");
}
function updateToggle(el, on) {
  el.setAttribute("aria-checked", on ? "true" : "false");
}
function setStatusText(text) {
  statusText.textContent = text;
}

/** 通过 localStorage 触发一次命令(同 origin 的 commands.html context 会通过 storage 事件收到) */
function invokeCommand(cmd) {
  // 用时间戳让每次都是新值,确保 storage 事件一定 fire
  localStorage.setItem(COMMAND_KEY, JSON.stringify({
    cmd: cmd,
    ts: Date.now()
  }));
  // 50ms 后清掉,免得以后同值不 fire
  setTimeout(function () {
    if (localStorage.getItem(COMMAND_KEY) !== null) {
      localStorage.removeItem(COMMAND_KEY);
    }
  }, 50);
}
function stripHash(hex) {
  return hex.startsWith("#") ? hex.slice(1) : hex;
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
var code = "<!DOCTYPE html>\n<html>\n\n<head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <title>阅读模式高亮设置</title>\n\n    <!-- Office JavaScript API -->\n    <" + "script type=\"text/javascript\" src=\"https://appsforoffice.microsoft.com/lib/1/hosted/office.js\"><" + "/script>\n\n    <!-- Fabric UI styles -->\n    <link rel=\"stylesheet\" href=\"https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/office-ui-fabric-core/11.1.0/css/fabric.min.css\"/>\n\n    <link href=\"" + ___HTML_LOADER_IMPORT_0___ + "\" rel=\"stylesheet\" type=\"text/css\" />\n</head>\n\n<body class=\"ms-font-m ms-welcome ms-Fabric\">\n    <main id=\"app-body\" class=\"ms-welcome__main\">\n        <h2 class=\"ms-font-xl reading-header\">阅读模式</h2>\n        <p class=\"ms-font-s description\">选中单元格时自动高亮所在整行、整列与当前单元格</p>\n\n        <!-- 开关 -->\n        <div class=\"toggle-row\">\n            <label class=\"ms-font-m toggle-label\" for=\"toggle-reading\">高亮开关</label>\n            <div class=\"toggle-switch\" id=\"toggle-reading\" role=\"switch\" aria-checked=\"false\" tabindex=\"0\">\n                <div class=\"toggle-thumb\"></div>\n            </div>\n        </div>\n\n        <!-- 填充颜色区域 -->\n        <div class=\"settings-section\">\n            <h3 class=\"ms-font-s section-title\">填充颜色</h3>\n\n            <div class=\"color-row\">\n                <label class=\"ms-font-s color-label\" for=\"row-color\">行/列高亮颜色</label>\n                <div class=\"color-picker-wrapper\">\n                    <input type=\"color\" id=\"row-color\" class=\"color-picker\" value=\"#E3F2FD\" />\n                    <span class=\"color-hex\" id=\"row-color-hex\">#E3F2FD</span>\n                </div>\n            </div>\n\n            <div class=\"color-row\">\n                <label class=\"ms-font-s color-label\" for=\"column-color\">当前单元格颜色</label>\n                <div class=\"color-picker-wrapper\">\n                    <input type=\"color\" id=\"column-color\" class=\"color-picker\" value=\"#FFF3B0\" />\n                    <span class=\"color-hex\" id=\"column-color-hex\">#FFF3B0</span>\n                </div>\n            </div>\n        </div>\n\n        <!-- 边框 + 表头区域 -->\n        <div class=\"settings-section\">\n            <h3 class=\"ms-font-s section-title\">边框 &amp; 表头</h3>\n\n            <div class=\"toggle-row\">\n                <label class=\"ms-font-s toggle-label\" for=\"toggle-border\">显示边框</label>\n                <div class=\"toggle-switch toggle-sm\" id=\"toggle-border\" role=\"switch\" aria-checked=\"true\" tabindex=\"0\">\n                    <div class=\"toggle-thumb\"></div>\n                </div>\n            </div>\n\n            <div class=\"color-row\">\n                <label class=\"ms-font-s color-label\" for=\"border-color\">边框颜色</label>\n                <div class=\"color-picker-wrapper\">\n                    <input type=\"color\" id=\"border-color\" class=\"color-picker\" value=\"#0078D4\" />\n                    <span class=\"color-hex\" id=\"border-color-hex\">#0078D4</span>\n                </div>\n            </div>\n\n            <div class=\"color-row\">\n                <label class=\"ms-font-s color-label\" for=\"header-color\">表头填充颜色</label>\n                <div class=\"color-picker-wrapper\">\n                    <input type=\"color\" id=\"header-color\" class=\"color-picker\" value=\"#E8F5E9\" />\n                    <span class=\"color-hex\" id=\"header-color-hex\">#E8F5E9</span>\n                </div>\n            </div>\n\n            <div class=\"select-row\">\n                <label class=\"ms-font-s color-label\" for=\"border-style\">边框样式</label>\n                <select id=\"border-style\" class=\"style-select\">\n                    <option value=\"Continuous\">实线</option>\n                    <option value=\"Dash\">虚线</option>\n                    <option value=\"Dot\">点线</option>\n                    <option value=\"DashDot\">短划线-点</option>\n                    <option value=\"DashDotDot\">短划线-点-点</option>\n                </select>\n            </div>\n        </div>\n\n        <!-- 状态信息 -->\n        <div class=\"status-section\">\n            <span class=\"ms-font-s status-text\" id=\"status-text\">状态: 未激活</span>\n        </div>\n\n        <!-- 操作按钮 -->\n        <div class=\"actions-section\">\n            <button class=\"ms-font-s clear-all-btn\" id=\"clear-all\" type=\"button\">全 sheet 清高亮</button>\n        </div>\n    </main>\n</body>\n\n</html>";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);
}();
/******/ })()
;
//# sourceMappingURL=taskpane.js.map