/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/GlossaryTooltipsToolbar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/GlossaryTooltipsToolbar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      activeLocale: {
        value: 'all',
        title: __('All')
      },
      itemData: {},
      customTitle: null,
      glossaryEntries: [],
      activeType: 'entry',
      glossaryTypes: [{
        type: 'entry',
        title: __('Glossary')
      }, {
        type: 'custom',
        title: __('Custom')
      }],
      locales: [{
        value: 'all',
        title: __('All')
      }]
    };
  },
  props: {
    glossaryAttrs: Object
  },
  computed: {
    // Filter entries by selected locale
    filteredGlossaryEntries: function filteredGlossaryEntries() {
      var _this = this;
      if (this.activeLocale.value === 'all') return this.glossaryEntries;
      return this.glossaryEntries.filter(function (glossaryEntry) {
        return glossaryEntry.locale === _this.activeLocale.value;
      });
    },
    canCommit: function canCommit() {
      switch (this.activeType) {
        case 'entry':
          return this.itemData.title;
        case 'custom':
          return !(this.customTitle === '' || this.customTitle === null);
      }
    },
    // Truncate description for preview
    truncatedTitle: function truncatedTitle() {
      if (this.itemData.title) {
        var characterLimit = 200;
        var text = this.itemData.title;
        return text.length > characterLimit ? text.substring(0, characterLimit) + " …" : text;
      }
      return null;
    }
  },
  created: function created() {
    var _this2 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var res, _yield$res$json, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _this2.mountCurrentValues();

            // Get all entries in glossary collection
            _context.prev = 1;
            _context.next = 4;
            return fetch("/api/collections/glossary/entries");
          case 4:
            res = _context.sent;
            _context.next = 7;
            return res.json();
          case 7:
            _yield$res$json = _context.sent;
            data = _yield$res$json.data;
            _this2.glossaryEntries = data;
            _context.next = 15;
            break;
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](1);
            console.error(_context.t0);
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 12]]);
    }))();
  },
  watch: {
    glossaryEntries: function glossaryEntries() {
      if (this.glossaryEntries.length === 0) return;
      this.getLocales();
      this.setActiveLocale();
    }
  },
  methods: {
    // Filter all locales from glossary entries
    getLocales: function getLocales() {
      var _this3 = this;
      var entryLocales = this.glossaryEntries.map(function (item) {
        return item.locale;
      });
      entryLocales = _toConsumableArray(new Set(entryLocales));
      entryLocales.forEach(function (locale) {
        _this3.locales.push({
          value: locale,
          title: locale.toUpperCase()
        });
      });
    },
    setActiveLocale: function setActiveLocale() {
      var _this4 = this;
      if (!this.glossaryAttrs.locale) return;
      this.activeLocale = this.locales.filter(function (locale) {
        return locale.value === _this4.glossaryAttrs.locale;
      });
    },
    // Method is called if selected words already contain a defintion
    mountCurrentValues: function mountCurrentValues() {
      if (!this.glossaryAttrs.type) return;
      this.activeType = this.glossaryAttrs.type;
      switch (this.activeType) {
        case 'entry':
          this.itemData = {
            value: this.glossaryAttrs.value,
            title: this.glossaryAttrs.title,
            id: this.glossaryAttrs.id
          };
          this.customTitle = null;
          break;
        case 'custom':
          this.itemData = {}, this.customTitle = this.glossaryAttrs.title;
          break;
      }
    },
    setGlossaryType: function setGlossaryType(type) {
      this.activeType = type;
    },
    setLocale: function setLocale(value) {
      if (value !== null) {
        this.activeLocale = {
          value: value.value,
          title: value.title
        };
      }
    },
    setItemData: function setItemData(value) {
      if (value !== null) {
        this.itemData = {
          value: value.title,
          title: value.definition,
          // the description has to be stored in the title attribute due to a11y reasons
          id: value.id
        };
      } else {
        this.remove();
      }
    },
    remove: function remove() {
      this.itemData = {};
      this.customTitle = null;
      this.$emit('updated', {
        type: null,
        locale: null,
        value: null,
        title: null,
        id: null
      });
    },
    // Emit attributes of selected definition to parent component
    commit: function commit() {
      var _this$itemData$title, _this$itemData$id;
      if (this.activeType === 'entry' && Object.keys(this.itemData).length === 0 || this.activeType === 'custom' && this.customTitle === null) {
        return this.remove();
      }
      switch (this.activeType) {
        case 'entry':
          this.$emit('updated', {
            type: this.activeType,
            locale: this.activeLocale.value,
            value: this.itemData.value,
            title: (_this$itemData$title = this.itemData.title) !== null && _this$itemData$title !== void 0 ? _this$itemData$title : '',
            id: (_this$itemData$id = this.itemData.id) !== null && _this$itemData$id !== void 0 ? _this$itemData$id : ''
          });
          break;
        case 'custom':
          this.$emit('updated', {
            type: this.activeType,
            title: this.customTitle
          });
          break;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/GlossaryTooltipsToolbarButton.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/GlossaryTooltipsToolbarButton.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GlossaryTooltipsToolbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GlossaryTooltipsToolbar.vue */ "./resources/js/GlossaryTooltipsToolbar.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [BardToolbarButton],
  components: {
    GlossaryTooltipsToolbar: _GlossaryTooltipsToolbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      glossaryAttrs: null,
      showingToolbar: false
    };
  },
  computed: {
    attributesAreSet: function attributesAreSet() {
      return this.editor.getAttributes('glossaryTooltips').type ? true : false;
    }
  },
  methods: {
    toggleGlossaryToolbar: function toggleGlossaryToolbar() {
      this.showingToolbar = !this.showingToolbar;
      if (this.showingToolbar) {
        this.glossaryAttrs = this.editor.getAttributes('glossaryTooltips');
      } else {
        this.editor.view.dom.focus();
      }
    },
    close: function close() {
      this.showingToolbar = false;
      this.$refs.popover.close();
    },
    popoverClosed: function popoverClosed() {
      this.showingToolbar = false;
    },
    setDefinition: function setDefinition(attributes) {
      this.editor.commands.setDefinition(attributes);
      this.glossaryAttrs = null;
      this.close();
      this.editor.view.dom.focus();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/GlossaryTooltipsToolbar.vue?vue&type=template&id=7f64dc42&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/GlossaryTooltipsToolbar.vue?vue&type=template&id=7f64dc42& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$activeLocale$titl, _vm$itemData$value;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "bard-link-toolbar"
  }, [_c("div", {
    staticClass: "flex items-center px-4 py-2 border-b"
  }, _vm._l(_vm.glossaryTypes, function (glossaryType) {
    return _c("button", {
      key: glossaryType.type,
      staticClass: "button-tab",
      "class": {
        active: glossaryType.type === _vm.activeType
      },
      attrs: {
        "for": glossaryType.type,
        id: glossaryType.type
      },
      on: {
        click: function click($event) {
          return _vm.setGlossaryType(glossaryType.type);
        }
      }
    }, [_vm._v("\n            " + _vm._s(glossaryType.title) + "\n        ")]);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "px-4 py-4 border-b"
  }, [_vm.activeType === "entry" ? _c("div", {
    staticClass: "pb-4"
  }, [_c("label", {
    staticClass: "mb-1",
    attrs: {
      "for": "locale-select"
    }
  }, [_vm._v(_vm._s(_vm.__("Select language")) + ":")]), _vm._v(" "), _c("v-select", {
    attrs: {
      id: "locale-select",
      label: "title",
      options: _vm.locales,
      value: (_vm$activeLocale$titl = _vm.activeLocale.title) !== null && _vm$activeLocale$titl !== void 0 ? _vm$activeLocale$titl : "",
      searchable: false,
      multiple: false,
      clearable: false
    },
    on: {
      input: function input(value) {
        return _vm.setLocale(value);
      }
    },
    scopedSlots: _vm._u([{
      key: "no-options",
      fn: function fn() {
        return [_c("span", {
          staticClass: "p-1"
        }, [_vm._v(_vm._s(_vm.__("No options to choose from.")))])];
      },
      proxy: true
    }], null, false, 199591923),
    model: {
      value: _vm.activeLocale,
      callback: function callback($$v) {
        _vm.activeLocale = $$v;
      },
      expression: "activeLocale"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.activeType === "entry" ? _c("div", [_c("label", {
    staticClass: "my-1",
    attrs: {
      "for": "entrySelect"
    }
  }, [_vm._v(_vm._s(_vm.__("Select term")) + ":")]), _vm._v(" "), _c("v-select", {
    attrs: {
      id: "entrySelect",
      label: "title",
      options: _vm.filteredGlossaryEntries,
      value: (_vm$itemData$value = _vm.itemData.value) !== null && _vm$itemData$value !== void 0 ? _vm$itemData$value : "",
      multiple: false
    },
    on: {
      input: function input(value) {
        return _vm.setItemData(value);
      }
    },
    scopedSlots: _vm._u([{
      key: "no-options",
      fn: function fn() {
        return [_c("span", {
          staticClass: "p-1"
        }, [_vm._v(_vm._s(_vm.__("No options to choose from.")))])];
      },
      proxy: true
    }], null, false, 199591923)
  }), _vm._v(" "), _vm.truncatedTitle ? _c("p", {
    staticClass: "p-1 bg-gray-300 mt-1 border leading-tight text-xs rounded-md"
  }, [_vm._v("\n                " + _vm._s(_vm.truncatedTitle) + "\n            ")]) : _vm._e()], 1) : _c("div", [_c("label", {
    staticClass: "mb-1",
    attrs: {
      "for": "customTitle"
    }
  }, [_vm._v(_vm._s(_vm.__("Define definition")) + ":")]), _vm._v(" "), _c("div", {
    staticClass: "textarea-fieldtype"
  }, [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.customTitle,
      expression: "customTitle"
    }],
    staticClass: "input-text",
    attrs: {
      id: "customTitle",
      maxlength: "200"
    },
    domProps: {
      value: _vm.customTitle
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.customTitle = $event.target.value;
      }, function ($event) {
        _vm.itemData = {};
      }]
    }
  })])])]), _vm._v(" "), _c("footer", {
    staticClass: "bg-gray-100 rounded-b-md flex items-center justify-end space-x-3 font-normal p-2"
  }, [_c("button", {
    staticClass: "text-xs text-gray-600 hover:text-gray-800",
    on: {
      click: function click($event) {
        return _vm.$emit("canceled");
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.__("Cancel")) + "\n        ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm",
    attrs: {
      "aria-label": _vm.__("Remove")
    },
    on: {
      click: _vm.remove
    }
  }, [_vm._v("\n            " + _vm._s(_vm.__("Remove")) + "\n        ")]), _vm._v(" "), _c("button", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.__("Save"),
      expression: "__('Save')"
    }],
    staticClass: "btn btn-sm",
    attrs: {
      disabled: !_vm.canCommit,
      "aria-label": _vm.__("Save")
    },
    on: {
      click: _vm.commit
    }
  }, [_vm._v("\n            " + _vm._s(_vm.__("Save")) + "\n        ")])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/GlossaryTooltipsToolbarButton.vue?vue&type=template&id=054ddaf1&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/GlossaryTooltipsToolbarButton.vue?vue&type=template&id=054ddaf1& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("popover", {
    ref: "popover",
    attrs: {
      placement: "bottom-end",
      clickaway: true
    },
    on: {
      closed: _vm.popoverClosed
    },
    scopedSlots: _vm._u([{
      key: "trigger",
      fn: function fn() {
        return [_c("button", {
          directives: [{
            name: "tooltip",
            rawName: "v-tooltip",
            value: _vm.button.text,
            expression: "button.text"
          }],
          staticClass: "bard-toolbar-button",
          "class": {
            active: _vm.attributesAreSet
          },
          attrs: {
            "aria-label": _vm.button.text
          },
          on: {
            click: _vm.toggleGlossaryToolbar
          }
        }, [_c("svg", {
          staticClass: "w-4 h-4",
          attrs: {
            "aria-hidden": "true",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            width: "16",
            height: "16",
            "stroke-width": "2",
            stroke: "currentColor"
          }
        }, [_c("path", {
          attrs: {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
          }
        })])])];
      },
      proxy: true
    }, {
      key: "default",
      fn: function fn() {
        return [_vm.showingToolbar ? _c("glossary-tooltips-toolbar", {
          ref: "toolbar",
          staticClass: "w-80",
          attrs: {
            "glossary-attrs": _vm.glossaryAttrs
          },
          on: {
            updated: _vm.setDefinition,
            canceled: _vm.close
          }
        }) : _vm._e()];
      },
      proxy: true
    }])
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/GlossaryTooltips.js":
/*!******************************************!*\
  !*** ./resources/js/GlossaryTooltips.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Mark = Statamic.$bard.tiptap.core.Mark;
var GlossaryTooltips = Mark.create({
  name: 'glossaryTooltips',
  addAttributes: function addAttributes() {
    return {
      type: {
        "default": null
      },
      locale: {
        "default": null
      },
      title: {
        "default": null
      },
      value: {
        "default": null
      },
      id: {
        "default": null
      }
    };
  },
  // Defines how the selected text should be marked up in the bard itself
  renderHTML: function renderHTML(_ref) {
    var HTMLAttributes = _ref.HTMLAttributes;
    return ['span', _objectSpread(_objectSpread({}, HTMLAttributes), {}, {
      style: 'font-style: italic; text-decoration: underline;'
    })];
  },
  // Toggle selected text as a mark in tiptap
  addCommands: function addCommands() {
    var _this = this;
    return {
      setDefinition: function setDefinition(attributes) {
        return function (_ref2) {
          var chain = _ref2.chain;
          if (attributes.title) {
            return chain().setMark(_this.name, attributes).run();
          }
          return chain().unsetMark(_this.name, {
            extendEmptyMarkRange: true
          }).run();
        };
      }
    };
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlossaryTooltips);

/***/ }),

/***/ "./resources/js/GlossaryTooltipsToolbar.vue":
/*!**************************************************!*\
  !*** ./resources/js/GlossaryTooltipsToolbar.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GlossaryTooltipsToolbar_vue_vue_type_template_id_7f64dc42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GlossaryTooltipsToolbar.vue?vue&type=template&id=7f64dc42& */ "./resources/js/GlossaryTooltipsToolbar.vue?vue&type=template&id=7f64dc42&");
/* harmony import */ var _GlossaryTooltipsToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GlossaryTooltipsToolbar.vue?vue&type=script&lang=js& */ "./resources/js/GlossaryTooltipsToolbar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GlossaryTooltipsToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GlossaryTooltipsToolbar_vue_vue_type_template_id_7f64dc42___WEBPACK_IMPORTED_MODULE_0__.render,
  _GlossaryTooltipsToolbar_vue_vue_type_template_id_7f64dc42___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/GlossaryTooltipsToolbar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/GlossaryTooltipsToolbarButton.vue":
/*!********************************************************!*\
  !*** ./resources/js/GlossaryTooltipsToolbarButton.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GlossaryTooltipsToolbarButton_vue_vue_type_template_id_054ddaf1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GlossaryTooltipsToolbarButton.vue?vue&type=template&id=054ddaf1& */ "./resources/js/GlossaryTooltipsToolbarButton.vue?vue&type=template&id=054ddaf1&");
/* harmony import */ var _GlossaryTooltipsToolbarButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GlossaryTooltipsToolbarButton.vue?vue&type=script&lang=js& */ "./resources/js/GlossaryTooltipsToolbarButton.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GlossaryTooltipsToolbarButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GlossaryTooltipsToolbarButton_vue_vue_type_template_id_054ddaf1___WEBPACK_IMPORTED_MODULE_0__.render,
  _GlossaryTooltipsToolbarButton_vue_vue_type_template_id_054ddaf1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/GlossaryTooltipsToolbarButton.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/GlossaryTooltipsToolbar.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/GlossaryTooltipsToolbar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GlossaryTooltipsToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GlossaryTooltipsToolbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/GlossaryTooltipsToolbar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GlossaryTooltipsToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/GlossaryTooltipsToolbarButton.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/GlossaryTooltipsToolbarButton.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GlossaryTooltipsToolbarButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GlossaryTooltipsToolbarButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/GlossaryTooltipsToolbarButton.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GlossaryTooltipsToolbarButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/GlossaryTooltipsToolbar.vue?vue&type=template&id=7f64dc42&":
/*!*********************************************************************************!*\
  !*** ./resources/js/GlossaryTooltipsToolbar.vue?vue&type=template&id=7f64dc42& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GlossaryTooltipsToolbar_vue_vue_type_template_id_7f64dc42___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GlossaryTooltipsToolbar_vue_vue_type_template_id_7f64dc42___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GlossaryTooltipsToolbar_vue_vue_type_template_id_7f64dc42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GlossaryTooltipsToolbar.vue?vue&type=template&id=7f64dc42& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/GlossaryTooltipsToolbar.vue?vue&type=template&id=7f64dc42&");


/***/ }),

/***/ "./resources/js/GlossaryTooltipsToolbarButton.vue?vue&type=template&id=054ddaf1&":
/*!***************************************************************************************!*\
  !*** ./resources/js/GlossaryTooltipsToolbarButton.vue?vue&type=template&id=054ddaf1& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GlossaryTooltipsToolbarButton_vue_vue_type_template_id_054ddaf1___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GlossaryTooltipsToolbarButton_vue_vue_type_template_id_054ddaf1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GlossaryTooltipsToolbarButton_vue_vue_type_template_id_054ddaf1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GlossaryTooltipsToolbarButton.vue?vue&type=template&id=054ddaf1& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/GlossaryTooltipsToolbarButton.vue?vue&type=template&id=054ddaf1&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./resources/js/bard.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GlossaryTooltips__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GlossaryTooltips */ "./resources/js/GlossaryTooltips.js");
/* harmony import */ var _GlossaryTooltipsToolbarButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GlossaryTooltipsToolbarButton */ "./resources/js/GlossaryTooltipsToolbarButton.vue");


Statamic.$bard.addExtension(function () {
  return _GlossaryTooltips__WEBPACK_IMPORTED_MODULE_0__["default"];
});
Statamic.$bard.buttons(function () {
  return {
    name: 'glossarytooltips',
    text: __('Glossary'),
    html: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="16" height="16" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>',
    command: 'setDefinition',
    component: _GlossaryTooltipsToolbarButton__WEBPACK_IMPORTED_MODULE_1__["default"]
  };
});
})();

/******/ })()
;