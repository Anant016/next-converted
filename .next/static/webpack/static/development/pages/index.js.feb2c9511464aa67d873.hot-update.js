webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Item.js":
false,

/***/ "./components/ItemBox.js":
/*!*******************************!*\
  !*** ./components/ItemBox.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ItemBox; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");







var _jsxFileName = "E:\\thisisme\\next\\components\\ItemBox.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var ItemBox = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ItemBox, _React$Component);

  var _super = _createSuper(ItemBox);

  function ItemBox() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ItemBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      visible: false,
      phone: ""
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "hide", function () {
      _this.setState({
        visible: false
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleVisibleChange", function (visible) {
      _this.setState({
        visible: visible
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ItemBox, [{
    key: "copy",
    value: function copy() {
      var code = this.props.item.refercode;
      var tempInput = document.createElement("input");
      tempInput.value = code;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, e.target.name, e.target.value));
    }
  }, {
    key: "share",
    value: function share() {
      var item = this.props.item;
      console.log("This" + item);
      var msg = "Download ".concat(item.name, " - ").concat(item.description, ".\nUse the code: \"").concat(item.refercode, "\" to get: *").concat(item.reward, "* \nor just click on the link: ").concat(item.downloadurl, " ");
      var url = "https://api.whatsapp.com/send?phone=91".concat(this.state.phone, "&text=").concat(msg);
      var tempLink = document.createElement("a");
      tempLink.href = url;
      tempLink.target = "_blank";
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
      console.log(msg);
    }
  }, {
    key: "render",
    value: function render() {
      var contentphone = __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 7
        }
      }, __jsx("input", {
        type: "text",
        placeholder: "mobile no.",
        name: "phone",
        className: "form-control",
        onChange: this.onChange.bind(this),
        value: this.state.phone,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 9
        }
      }), __jsx("button", {
        style: {
          color: "white",
          backgroundColor: "#60BE92"
        },
        onClick: this.share.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 9
        }
      }, "Share"));

      var item = this.props.item;

      var content = __jsx("div", {
        itemProp: "description",
        style: {
          width: "120px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 7
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 9
        }
      }, item.description));

      return __jsx("article", {
        itemScope: true,
        itemType: "https://schema.org/Thing",
        className: "card mb-2 mt-2",
        style: {
          fontFamily: "Lato, sans-serif"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "d-flex flex-row ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "flex-col flex-fill d-flex align-items-center justify-content-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }
      }, __jsx("img", {
        itemProp: "image",
        src: item.imageurl,
        style: {
          border: "5px",
          borderRadius: "50%",
          width: "50px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 13
        }
      })), __jsx("div", {
        itemScope: true,
        itemType: "https://schema.org/Offer",
        className: "flex-col flex-fill d-flex align-items-center justify-content-left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Popover"], {
        itemProp: "offeredBy",
        content: content,
        style: {
          width: "20px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 13
        }
      }, " ", __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 15
        }
      }, item.name), " ", __jsx("div", {
        className: "text-muted",
        style: {
          fontSize: "70%"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 15
        }
      }, "category: ", item.category))), __jsx("div", {
        itemProp: "identifier",
        className: "flex-col flex-fill d-flex align-items-center justify-content-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }
      }, "Code:", " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Popover"], {
        content: __jsx("a", {
          onClick: this.hide,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 24
          }
        }, "Copied"),
        trigger: "click",
        visible: this.state.visible,
        onVisibleChange: this.handleVisibleChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 13
        }
      }, __jsx("div", {
        style: {
          cursor: "pointer"
        },
        onClick: this.copy.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 15
        }
      }, __jsx("b", {
        className: "mr-2",
        id: "code",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 17
        }
      }, " ", __jsx("strong", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 19
        }
      }, item.refercode)), " ", __jsx("img", {
        style: {
          width: "12%"
        },
        src: "https://img.icons8.com/dusk/64/000000/copy.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 17
        }
      })))), __jsx("div", {
        className: "flex-col flex-fill d-flex align-items-center justify-content-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }
      }, __jsx("img", {
        className: "justify-content-start",
        src: "https://img.icons8.com/bubbles/50/000000/right.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 13
        }
      }), __jsx("strong", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 13
        }
      }, __jsx("a", {
        itemProp: "url",
        href: item.downloadurl,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 15
        }
      }, __jsx("div", {
        itemProp: "disambiguatingDescription",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 17
        }
      }, item.reward)))), __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Popover"], {
        className: "hide",
        content: contentphone,
        placement: "left",
        trigger: "click",
        title: "Title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }
      }, __jsx("img", {
        style: {
          border: "5px",
          borderRadius: "50%",
          width: "50px"
        },
        src: "data:image/png;base64,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",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 13
        }
      }))));
    }
  }]);

  return ItemBox;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_ItemBox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/ItemBox */ "./components/ItemBox.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../config */ "./config.js");










var _jsxFileName = "E:\\thisisme\\next\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }













var config = _config__WEBPACK_IMPORTED_MODULE_21__["default"].firebaseConfig;

if (!firebase__WEBPACK_IMPORTED_MODULE_18__["apps"].length) {
  firebase__WEBPACK_IMPORTED_MODULE_18__["initializeApp"](config);
}

var db = firebase__WEBPACK_IMPORTED_MODULE_18__["firestore"]();
var db1 = firebase__WEBPACK_IMPORTED_MODULE_18__["database"]();

var Index = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _React$Component);

  var _super = _createSuper(Index);

  function Index() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      data: [],
      search: "",
      length: ""
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, [{
    key: "loadshop",
    value: function loadshop() {
      var _this2 = this;

      var daata = [];
      var Referrals = db.collection("referrals");
      Referrals.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          if (doc.data().category == "shopping") {
            daata.push(doc.data());
          }
        });

        _this2.setState({
          data: daata,
          length: daata.length
        });
      });
    }
  }, {
    key: "loadprod",
    value: function loadprod() {
      var _this3 = this;

      var daata = [];
      var Referrals = db.collection("referrals");
      Referrals.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          if (doc.data().category == "productive") {
            daata.push(doc.data());
          }
        });

        _this3.setState({
          data: daata,
          length: daata.length
        });
      });
    }
  }, {
    key: "loadother",
    value: function loadother() {
      var _this4 = this;

      var daata = [];
      var Referrals = db.collection("referrals");
      Referrals.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          if (doc.data().category == "") {
            daata.push(doc.data());
          }
        });

        _this4.setState({
          data: daata,
          length: daata.length
        });
      });
    }
  }, {
    key: "loadpayment",
    value: function loadpayment() {
      var _this5 = this;

      var daata = [];
      var Referrals = db.collection("referrals");
      Referrals.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          if (doc.data().category == "payment") {
            daata.push(doc.data());
          }
        });

        _this5.setState({
          data: daata,
          length: daata.length
        });
      });
    }
  }, {
    key: "loadtravel",
    value: function loadtravel() {
      var _this6 = this;

      var daata = [];
      var Referrals = db.collection("referrals");
      Referrals.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          if (doc.data().category == "Travel") {
            daata.push(doc.data());
          }
        });

        _this6.setState({
          data: daata,
          length: daata.length
        });
      });
    }
  }, {
    key: "loadall",
    value: function loadall() {
      var _this7 = this;

      var daata = [];
      var Referrals = db.collection("referrals");
      Referrals.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          daata.push(doc.data());
        });

        _this7.setState({
          data: daata,
          length: daata.length
        });
      });
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      var _this8 = this;

      this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, e.target.name, e.target.value));
      var daata = [];
      var Referrals = db.collection("referrals");
      Referrals.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          if (doc.data().name.toLowerCase().includes(_this8.state.search.toLowerCase())) {
            daata.push(doc.data());
          }
        });

        _this8.setState({
          data: daata
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this9 = this;

      var inData = this.props.data;

      var menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Menu"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 7
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Menu"].Item, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 9
        }
      }, __jsx("a", {
        onClick: this.loadall.bind(this),
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 11
        }
      }, "No Filter")), __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Menu"].Item, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 9
        }
      }, __jsx("a", {
        onClick: this.loadshop.bind(this),
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 11
        }
      }, "Shopping")), __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Menu"].Item, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 9
        }
      }, __jsx("a", {
        onClick: this.loadprod.bind(this),
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 11
        }
      }, "Productivity")), __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Menu"].Item, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 9
        }
      }, __jsx("a", {
        onClick: this.loadtravel.bind(this),
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 11
        }
      }, "Travel")), __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Menu"].Item, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 9
        }
      }, __jsx("a", {
        onClick: this.loadpayment.bind(this),
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 11
        }
      }, "Payment")), __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Menu"].Item, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 9
        }
      }, __jsx("a", {
        onClick: this.loadother.bind(this),
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 11
        }
      }, "Miscallaneous")));

      var List = "";

      if (inData == null) {
        List = "Loaing...";
      } else {
        if (inData.length > 0) {
          List = inData.map(function (item) {
            return __jsx(_components_ItemBox__WEBPACK_IMPORTED_MODULE_17__["default"], {
              key: item.name,
              item: item,
              __self: _this9,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 37
              }
            });
          });
        } else {
          {
            List = __jsx("h4", {
              className: "mt-5",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 18
              }
            }, "Loading...");
          }
        }
      }

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "container mt-2 mb-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 9
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 11
        }
      }, __jsx("meta", {
        charSet: "utf-8",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 13
        }
      }), __jsx("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
        integrity: "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",
        crossorigin: "anonymous",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 13
        }
      }), __jsx("link", {
        rel: "icon",
        href: "%PUBLIC_URL%/favicon.ico",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 13
        }
      }), __jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 13
        }
      }), __jsx("meta", {
        name: "theme-color",
        content: "#000000",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 13
        }
      }), __jsx("meta", {
        name: "description",
        content: "Grab Coupon code is coupon codes / referrals for new users. Grab Coupons and Save Money by online offers, deals, discount by our latest Promo codes.  ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 13
        }
      }), __jsx("meta", {
        name: "keyword",
        content: "grabon, grab on,grabcouponcode,grab coupon,coupon code,coupon, referral, earn money online, first users, new users, save money,save, Promo code, deals, discount,latest coupon, online shopping ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 13
        }
      }), __jsx("meta", {
        property: "og:description",
        content: "Find Latest Coupons & Offers For Online Shopping Sites. GrabOn Will Ensure You Get The Right Promo Codes, Deals & Discount E-Gift Cards For 2020 | SAVE ON EVERYTHING",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 13
        }
      }), __jsx("meta", {
        property: "og:type",
        content: "Website",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 13
        }
      }), __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 13
        }
      }, "Grab Coupon Code")), __jsx("div", {
        className: "row mb-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col col-12 col-lg-3 col-sm-12 col-md-12 mt-2 mb-2 justify-content-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 13
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Dropdown"], {
        overlay: menu,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 15
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Button"], {
        style: {
          width: "100%",
          height: "2.7em"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 17
        }
      }, "Categories ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_15__["default"], {
        type: "down",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 30
        }
      })))), __jsx("div", {
        className: "justify-content-center order-first  mt-2 mb-2  align-items-center col col-12 col-lg-5 col-sm-12 col-md-12 ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "col justify-content-center  align-items-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "d-flex flex-row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 17
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 19
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 21
        }
      }, __jsx("b", {
        style: {
          fontSize: "210%",
          fontFamily: "Sriracha, cursive"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 23
        }
      }, "Run-Coupon"), __jsx("span", {
        style: {
          fontSize: "50%",
          fontFamily: "Sriracha, cursive",
          backgroundColor: "white"
        },
        className: "rounded-pill border border-danger",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 23
        }
      }, __jsx("span", {
        className: "ml-2 mr-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 25
        }
      }, inData.length, " offers"))))), __jsx("div", {
        className: "d-flex flex-row ml-2",
        style: {
          fontWeight: "bold",
          fontFamily: "Sriracha, cursive"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 17
        }
      }, "for new users only."))), __jsx("div", {
        className: "col col-12 col-lg-4 col-sm-12 col-md-12  mt-2 mb-2  justify-content-end",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 13
        }
      }, __jsx("label", {
        id: "search",
        style: {
          display: "none"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 15
        }
      }, "Search"), __jsx("input", {
        id: "search",
        style: {},
        className: "form-control",
        placeholder: "Search",
        type: "text",
        name: "search",
        onChange: this.onChange.bind(this),
        value: this.state.search,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 15
        }
      }))), __jsx("div", {
        className: "mb-5",
        style: {
          marginBottom: "500px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307,
          columnNumber: 11
        }
      }, " ", List), "."), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313,
          columnNumber: 9
        }
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var daata, ref;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref);

                daata = [];
                _context.next = 4;
                return db1.ref("referrals");

              case 4:
                ref = _context.sent;
                ref.on("value", function (snapshot) {
                  daata.push(snapshot.val());
                }, function (errorObject) {});
                return _context.abrupt("return", {
                  data: daata,
                  length: daata.length
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0l0ZW1Cb3guanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSXRlbUJveCIsInZpc2libGUiLCJwaG9uZSIsInNldFN0YXRlIiwiY29kZSIsInByb3BzIiwiaXRlbSIsInJlZmVyY29kZSIsInRlbXBJbnB1dCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInZhbHVlIiwiYm9keSIsImFwcGVuZENoaWxkIiwic2VsZWN0IiwiZXhlY0NvbW1hbmQiLCJyZW1vdmVDaGlsZCIsImUiLCJ0YXJnZXQiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsIm1zZyIsImRlc2NyaXB0aW9uIiwicmV3YXJkIiwiZG93bmxvYWR1cmwiLCJ1cmwiLCJzdGF0ZSIsInRlbXBMaW5rIiwiaHJlZiIsImNsaWNrIiwiY29udGVudHBob25lIiwib25DaGFuZ2UiLCJiaW5kIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzaGFyZSIsImNvbnRlbnQiLCJ3aWR0aCIsImZvbnRGYW1pbHkiLCJpbWFnZXVybCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImZvbnRTaXplIiwiY2F0ZWdvcnkiLCJoaWRlIiwiaGFuZGxlVmlzaWJsZUNoYW5nZSIsImN1cnNvciIsImNvcHkiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbmZpZyIsImZpcmViYXNlQ29uZmlnIiwiZmlyZWJhc2UiLCJsZW5ndGgiLCJkYiIsImRiMSIsIkluZGV4IiwiZGF0YSIsInNlYXJjaCIsImRhYXRhIiwiUmVmZXJyYWxzIiwiY29sbGVjdGlvbiIsImdldCIsInRoZW4iLCJxdWVyeVNuYXBzaG90IiwiZm9yRWFjaCIsImRvYyIsInB1c2giLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiaW5EYXRhIiwibWVudSIsImxvYWRhbGwiLCJsb2Fkc2hvcCIsImxvYWRwcm9kIiwibG9hZHRyYXZlbCIsImxvYWRwYXltZW50IiwibG9hZG90aGVyIiwiTGlzdCIsIm1hcCIsImhlaWdodCIsImZvbnRXZWlnaHQiLCJkaXNwbGF5IiwibWFyZ2luQm90dG9tIiwicmVmIiwib24iLCJzbmFwc2hvdCIsInZhbCIsImVycm9yT2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7OztnTkFDWDtBQUNOQyxhQUFPLEVBQUUsS0FESDtBQUVOQyxXQUFLLEVBQUU7QUFGRCxLOzsrTUFJRCxZQUFNO0FBQ1gsWUFBS0MsUUFBTCxDQUFjO0FBQ1pGLGVBQU8sRUFBRTtBQURHLE9BQWQ7QUFHRCxLOzs4TkFFcUIsVUFBQ0EsT0FBRCxFQUFhO0FBQ2pDLFlBQUtFLFFBQUwsQ0FBYztBQUFFRixlQUFPLEVBQVBBO0FBQUYsT0FBZDtBQUNELEs7Ozs7Ozs7MkJBQ007QUFDTCxVQUFJRyxJQUFJLEdBQUcsS0FBS0MsS0FBTCxDQUFXQyxJQUFYLENBQWdCQyxTQUEzQjtBQUNBLFVBQUlDLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWhCO0FBQ0FGLGVBQVMsQ0FBQ0csS0FBVixHQUFrQlAsSUFBbEI7QUFDQUssY0FBUSxDQUFDRyxJQUFULENBQWNDLFdBQWQsQ0FBMEJMLFNBQTFCO0FBQ0FBLGVBQVMsQ0FBQ00sTUFBVjtBQUNBTCxjQUFRLENBQUNNLFdBQVQsQ0FBcUIsTUFBckI7QUFDQU4sY0FBUSxDQUFDRyxJQUFULENBQWNJLFdBQWQsQ0FBMEJSLFNBQTFCO0FBQ0Q7Ozs2QkFDUVMsQyxFQUFHO0FBQ1YsV0FBS2QsUUFBTCwrRkFDR2MsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLElBRFosRUFDbUJGLENBQUMsQ0FBQ0MsTUFBRixDQUFTUCxLQUQ1QjtBQUdEOzs7NEJBRU87QUFDTixVQUFJTCxJQUFJLEdBQUcsS0FBS0QsS0FBTCxDQUFXQyxJQUF0QjtBQUNBYyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFTZixJQUFyQjtBQUNBLFVBQUln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RkgsQ0E5RkYsTUFERixFQXFHRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFyR0YsQ0FERjtBQXlHRDs7Ozs7Ozs7Ozs7O0FBNVJLbkIscUIsR0FBUSxFOzt1QkFDSUosR0FBRyxDQUFDNkIsR0FBSixDQUFRLFdBQVIsQzs7O0FBQVpBLG1CO0FBQ0pBLG1CQUFHLENBQUNDLEVBQUosQ0FDRSxPQURGLEVBRUUsVUFBVUMsUUFBVixFQUFvQjtBQUNsQjNCLHVCQUFLLENBQUNRLElBQU4sQ0FBV21CLFFBQVEsQ0FBQ0MsR0FBVCxFQUFYO0FBQ0QsaUJBSkgsRUFLRSxVQUFVQyxXQUFWLEVBQXVCLENBQUUsQ0FMM0I7aURBT087QUFDTC9CLHNCQUFJLEVBQUVFLEtBREQ7QUFFTE4sd0JBQU0sRUFBRU0sS0FBSyxDQUFDTjtBQUZULGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaEJ3QkwsNkNBQUssQ0FBQ0MsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZmViMmM5NTExNDY0YWE2N2Q4NzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUG9wb3ZlciB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtQm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgcGhvbmU6IFwiXCIsXHJcbiAgfTtcclxuICBoaWRlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlVmlzaWJsZUNoYW5nZSA9ICh2aXNpYmxlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdmlzaWJsZSB9KTtcclxuICB9O1xyXG4gIGNvcHkoKSB7XHJcbiAgICB2YXIgY29kZSA9IHRoaXMucHJvcHMuaXRlbS5yZWZlcmNvZGU7XHJcbiAgICB2YXIgdGVtcElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgdGVtcElucHV0LnZhbHVlID0gY29kZTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGVtcElucHV0KTtcclxuICAgIHRlbXBJbnB1dC5zZWxlY3QoKTtcclxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGVtcElucHV0KTtcclxuICB9XHJcbiAgb25DaGFuZ2UoZSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNoYXJlKCkge1xyXG4gICAgdmFyIGl0ZW0gPSB0aGlzLnByb3BzLml0ZW07XHJcbiAgICBjb25zb2xlLmxvZyhcIlRoaXNcIiArIGl0ZW0pO1xyXG4gICAgdmFyIG1zZyA9IGBEb3dubG9hZCAke2l0ZW0ubmFtZX0gLSAke2l0ZW0uZGVzY3JpcHRpb259LlxcblVzZSB0aGUgY29kZTogXCIke2l0ZW0ucmVmZXJjb2RlfVwiIHRvIGdldDogKiR7aXRlbS5yZXdhcmR9KiBcXG5vciBqdXN0IGNsaWNrIG9uIHRoZSBsaW5rOiAke2l0ZW0uZG93bmxvYWR1cmx9IGA7XHJcblxyXG4gICAgdmFyIHVybCA9IGBodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT05MSR7dGhpcy5zdGF0ZS5waG9uZX0mdGV4dD0ke21zZ31gO1xyXG4gICAgdmFyIHRlbXBMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICB0ZW1wTGluay5ocmVmID0gdXJsO1xyXG4gICAgdGVtcExpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGVtcExpbmspO1xyXG4gICAgdGVtcExpbmsuY2xpY2soKTtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRlbXBMaW5rKTtcclxuICAgIGNvbnNvbGUubG9nKG1zZyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBjb250ZW50cGhvbmUgPSAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIm1vYmlsZSBuby5cIlxyXG4gICAgICAgICAgbmFtZT1cInBob25lXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGhvbmV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiIzYwQkU5MlwiIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNoYXJlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgU2hhcmVcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gICAgY29uc3QgaXRlbSA9IHRoaXMucHJvcHMuaXRlbTtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSAoXHJcbiAgICAgIDxkaXYgaXRlbVByb3A9XCJkZXNjcmlwdGlvblwiIHN0eWxlPXt7IHdpZHRoOiBcIjEyMHB4XCIgfX0+XHJcbiAgICAgICAgPHA+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YXJ0aWNsZVxyXG4gICAgICAgIGl0ZW1TY29wZVxyXG4gICAgICAgIGl0ZW1UeXBlPVwiaHR0cHM6Ly9zY2hlbWEub3JnL1RoaW5nXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJjYXJkIG1iLTIgbXQtMlwiXHJcbiAgICAgICAgc3R5bGU9e3sgZm9udEZhbWlseTogXCJMYXRvLCBzYW5zLXNlcmlmXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWNvbCBmbGV4LWZpbGwgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBpdGVtUHJvcD1cImltYWdlXCJcclxuICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1hZ2V1cmx9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjVweFwiLCBib3JkZXJSYWRpdXM6IFwiNTAlXCIsIHdpZHRoOiBcIjUwcHhcIiB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGl0ZW1TY29wZVxyXG4gICAgICAgICAgICBpdGVtVHlwZT1cImh0dHBzOi8vc2NoZW1hLm9yZy9PZmZlclwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtY29sIGZsZXgtZmlsbCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1sZWZ0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFBvcG92ZXJcclxuICAgICAgICAgICAgICBpdGVtUHJvcD1cIm9mZmVyZWRCeVwiXHJcbiAgICAgICAgICAgICAgY29udGVudD17Y29udGVudH1cclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyMHB4XCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICA8Yj57aXRlbS5uYW1lfTwvYj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiNzAlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeToge2l0ZW0uY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBpdGVtUHJvcD1cImlkZW50aWZpZXJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LWNvbCBmbGV4LWZpbGwgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQ29kZTp7XCIgXCJ9XHJcbiAgICAgICAgICAgIDxQb3BvdmVyXHJcbiAgICAgICAgICAgICAgY29udGVudD17PGEgb25DbGljaz17dGhpcy5oaWRlfT5Db3BpZWQ8L2E+fVxyXG4gICAgICAgICAgICAgIHRyaWdnZXI9XCJjbGlja1wiXHJcbiAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS52aXNpYmxlfVxyXG4gICAgICAgICAgICAgIG9uVmlzaWJsZUNoYW5nZT17dGhpcy5oYW5kbGVWaXNpYmxlQ2hhbmdlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19IG9uQ2xpY2s9e3RoaXMuY29weS5iaW5kKHRoaXMpfT5cclxuICAgICAgICAgICAgICAgIDxiIGNsYXNzTmFtZT1cIm1yLTJcIiBpZD1cImNvZGVcIj5cclxuICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPntpdGVtLnJlZmVyY29kZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgIDwvYj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyJVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vZHVzay82NC8wMDAwMDAvY29weS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb2wgZmxleC1maWxsIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LXN0YXJ0XCJcclxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2J1YmJsZXMvNTAvMDAwMDAwL3JpZ2h0LnBuZ1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgICAgPGEgaXRlbVByb3A9XCJ1cmxcIiBocmVmPXtpdGVtLmRvd25sb2FkdXJsfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgaXRlbVByb3A9XCJkaXNhbWJpZ3VhdGluZ0Rlc2NyaXB0aW9uXCI+e2l0ZW0ucmV3YXJkfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9zdHJvbmc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxQb3BvdmVyXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGVcIlxyXG4gICAgICAgICAgICBjb250ZW50PXtjb250ZW50cGhvbmV9XHJcbiAgICAgICAgICAgIHBsYWNlbWVudD1cImxlZnRcIlxyXG4gICAgICAgICAgICB0cmlnZ2VyPVwiY2xpY2tcIlxyXG4gICAgICAgICAgICB0aXRsZT1cIlRpdGxlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCI1cHhcIiwgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLCB3aWR0aDogXCI1MHB4XCIgfX1cclxuICAgICAgICAgICAgICBzcmM9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU1nQUFBRElDQU1BQUFDYWhsNnNBQUFBNFZCTVZFWC8vLzlndnBJZklTdjgvUDBnSXl3dU1Ea2pKQzRvS2pQMTlmWXFMRFpmdTVBd01qdGNzNHRUVkZ6dzhQR2RucU9BZ1laUWxuaVdsNXVscHFwQWNGK1NrNWhsWjI3QndjUzF0cmttTXpjaUtURjVlNEZiWEdSQVFrdm82T2t4UzBmVzF0aEVSazQ0T2tOU20zdkp5c3phMnR4eGNuZ25OVGdrTGpTM3VMdEZmV2M1WVZVdVJFSXFQVDJLaTVCa1pXeFhxWVU4YUZyTjJkV2VzYXRUYTJkY2RXOUJWbFF6VWt0SWhXMU1UVlYwaklVeVFrT09wSjVuZjNuQzBjczJXRkNzM2NiajlPeDZ5YVNsdkxTbDJzRmVuNE9DbTVOS1lsMmRyYXJZNHQ0N1RVMVFoYWw2QUFBTnkwbEVRVlI0bk8xZDZYYmlPaElPWmJHRDJjSHNPeGdJVzhoQ1FwTHVtYjdUdDhQN1A5Qllnc1NTSmJOSnBydlA4ZmNQRWlTWFZMdEs1WnNiSHo1OCtQRGh3NGNQSHo1OCtQRGh3NGNQSHo1OCtQRGh3OGRmaWtqUHlGYm55WFk4R0FZSUIrUHRaTEdhTlZxUjMvMWM1eURTS3hUcjRJSjZzZEQ3RzZqUmVyUG5rQnNSbndnbEN6M3Rkei9wSVdpbFFmd1lFWitJVjB0L0tpMnRORTFGcUYxTXAwYTlma08zR0NtaU4vcTlVU3BkYk5PN0ZVKzNmdmN6ODlCeVNmc0oyNE9jbTFSSFdya0JKVC9KM0orMUxYcTI4N1hNQTBNLyt1ODVtd1U3MmFQL2ZqVkVzc0g5VXdVSG94TlhXT3Q5TVdKMDltZVFvbVgzVHhTcUdXZnhpV2JVOWhJVFQvMEJERGJhYzN3MDNULy94LzEwZFBmcmVrbjlrNTJGUm0yL3BwZHl1bDdZNytlOG9mYkp6b0tXMmkxb3NDQmhxeU9GbllSRmZ4OS83YmNqVkpVVVZqMjlrNVhhYjlvVVk3ZVN0UXRrdzRuV3pnakZEZm1oem9ZMjIzR1ZLME5vZDZ1WCs4Zk5abWdpTUN2RHplUDkyNjg3Vis3SjdVU2xlblgyYWlRUGNZTytldGdna1llRk5nOHI4VS8yZkpxOE1udTFpQ1VQWjBVTCtQNjJKVVNVbTVOeHB0dGRKR0tCUkdMUnpZeVhUMFB5c0kvZi95TWFNeGNtbHI3bDdaT3pLQkZ0VlJmTTJYalo0SVcveldjU0FRRVNtWHl6TWcwRS92dGRvT2QycXhPOW9rbkprUldmODhycXg2UDFGM09TaVltSStFU00vSFh5K0lQN3VVN1lLNVM3QmcwWU9jSWdNNDZ0Zm15dHZXaXVEMUx4Qll2TE5xL09JYlQwTlNsSkVhbmxKbnUxZU1yTUN4bEt5R1I1MHlKbHhRMU9OanQxRFRySWZvUkdqbS92SHM4aWc3RFl1R3dKdmxQdVI4UTRYbUZQY25paXNFTWc5VGZMVm94UDR5bUdGSE1hK01mQlg2WHdWYmlyUk9qb3NWK3VMSWFmbkxVYlg2Ull4UC9QSWZVOVFvbkh1cXNmNUNmUjNnQ20zVXZJMktFQ0Q2d3VKb3NWYlhsSlI2UER5OGZIRmxEK2JLNmlNRWF3dVdPR0hHR0o3M2hvNDdVa3IxSldKcFFsdGdPald3YVRWVjlFb1NTOTg3dXF4SDR3WC8xRTBMeElPbWdrbnNEOHpneEw3RW5hS3pvTVlzK1pkYkxFSXk5TEJzWjZIV0FvMFlpTmQrcDRSV2hnVDd0RCt5WGFBNkN4Q2pvSS9xRW4wM0VxSU9pSm1CQUJDYmZvYi80RnRGWkdSMkI1VDI5MkM2dXVtaGRpa3VJRS9RRXFHWFYwQk1wd3o4M25nVjFzWU0rOVJuL3pCa2dsSFlGdUJkN284ZWZZbXFobnJwcVRaMzhxNVN1TURJSVhldW13OFoycnBtUGszT2dWQW5WeXZzY1lFRzFQaURWUjdLcG9kUWRqZlpocTlDNkxQRlFvRzAvVVMxMnR2R2V4YTBMbGZiUXROTlhURVFnOHdZYnl1MXBJZFd3U2lUc003UU9VcGUyNUNJa2hQRkRUWUZjaXJ2TEVzWUFsblRLRkswQ2NmeFViMzFhZ1lwcE5LVlhXUlVDSmlZNVZaVUVkSFhxUUhVOGY4Z0t5R0g0bHI2U1VRQjVNYXNYSUNxcmJrcXhqaHg5ZzZ2VGJ1eVk4ai9RYlRXK2tFRnJJVUhKTE01ZU9lVHFyaWc2dHc0NTJoOERKV0lzeUZEOHBUY09URENGZGhON3R1ZkNXZEZRcExxelBvOVIrYjJIaW1EdzJwZHdpUFN5M0pSUFkyblBwT081VmxkdE9zaXJyRlV5bnhwcEFteUowQUVzWlFoSW12TnFENGNna3FZYU9sc09HYkRocHprQ1lQbHZvZ1NrVCtsb0dmbU1QMXNmcVE4SEp4YzF1VFNpanZ1SWZjK3FReDJlUThzSmlaVm9GMTFURmlscWM1ZEt0WUVNYzRwaURXeGxDMkMzQmNXbGNoYmlYMklGKzhCdlNkTG9Sa1NCSWlYdk1CRHZYcFFVVnVZNERhNXlxL2ZHUnM0VUpGSExtNWRPY1hqc1BlWGgwZllCTFFUakxYcEFQaEp3cWE4M0dXeGg5cUVpSmU2SUNIMStEbGRUd1ZvOGQ1b1czZGt1QjZVMUtCaXRQVkloRmVLc2xUUWcrOHh6WUh6ZThRbW9LT05pQXFSUWhhMXJjaTBvOHgyZEdaNzBMVE1SUW9PWXRocFJLUDFyaWJ2c3BPUlUyTVlLek1yWXN2d21rMkFSQndjQk1VdHduVkNLaWdTMnlyQXVNUmFSdGY5d0NIMjBnRUVpaXJMaG5hTjdDY1hhUG4rTXNGQmdSMFhtZGhZOEZSS3RWbCtRdGhPeDlIaWp3NVl0TThtUWxNdGxERUNTZklsRTVtMmlGSmJhYmdvV2tLRWxJaDFGOUQ2TFV5YTFvMjFPU1hvcGxFKzM0Q3J1dGRUazZJcXljYlFRaVlza2xuK2hvQkVYL2VRNW9JWWtnYVdsblpWMURJTWlkakdrN3MvL0hwRnlVYUNFR3lOWWhkV21UYUREY2VRZGx3WlFMM29FWUtNZ1dsY0hPMWMybHc4UXNFd3lzeEZtNXFWTklDbENSUEkwTFlJZkJsdmEwdE5xcU1xbStGN0dWeXp1YzA1eVNOUDJFY3JkUzBnNXdrVGtBdXhlN2dnc0kwN2JkaWtaVXBMZkgxSEhKU0ZyL0pobWIrdWlpaXA2WWZlOUpPb3g3WktpWXBDZnRiZFdaeUgvallxMHpFS2UycEJHcXlObkNIYnBVVnFqUE9rb1hBRWRWdHQzZXVGbnJXK2JRdWdqZkZCQ3lvQXdKZGhzN1VvUUVHZCszN0VaSUJzS1VtOUlJeTFyREhTSERyeEYxbkFLV0lnVG4rV3lUYW9yc0ljRVRZeFN6S2c0ZEVtQitEWWdkakxBVUlmaWtSYU0rdWJubWl3b2RKbHFHWFo2NUxOTnVENGhMM2E1Q2lLVXM2VktDZmxRdVJhZWVFSmExS3E2c2hlV2RacTZjNENUb1RLaGxyVGdqN080eVFwaUw5b2FxMG1LaVZ0ZzdqUG9kSGdxV3hzd3h2Q1VtdDNLVWRKV3EzOU1NNGc1UFRJV1Yzb0dtVk5TdTFpQTZYWlJESXB3b001NUtRNUlTdFM1S2tRa0VYSnhHZStvUTdjLzMzU2pwTHZNbmFBTGFhVFNrbmNZMDQ4YS9IVG1LV2tLY3prTllsRXdGUWpYR1J6ZlRvd1hiYXQxNE5yQjZQUmJBTnVHWkRxMzdiVEE1WnlXRFlEYXpsTWp3U0oydzJzREtZQXAwM21GNG1KREVsSTNmSTNPdXhHNWhZZ2RUeTdXUFZXNDdRMTI1dXNBV28vZTBReGFSZWt3SzJSRGMwdXdWdS8wOC94MVppcVN5ZEIwdkFSV1Z5UWNOSFU4SE1iQVloMDBPbFRwUW9jcUNsNVFyMDZ0WnBManRDcE1PQ2xrZWltVHlsMTJMKytPMVRXdmtxTi9UcmJoLytLbTIxNnhpTzBES1VtMkN6cEV5ZlQyaHVHbk1YV1hvdFQrMVZOZEpKU0hGRkNsMTFTblRGSlBFYmdBNmJ1UHlFSExrb0RURDJ0aHlQbUZKRUgvUWpFbmg5em1oT29uZFk3MmM0MEt5bzhSWkhhb1piVkk0TkJlZEJZNEV5akJEMTNHb09GYlFRb3piS0RybzRURVdMV0JwSG8ybmhSS3JRWVViUXZsQkQvRzI3UFVWSGIySktFSG5YSTJNZ09rY1FQM1JHem5wb1FUdEpONnl0Rk1Ga2lmZjRPM3ppVEFQRGtPeDZvdmFxL3QyWWpUZUxaOStOWExFZXo1TjljZlRKTGFpQ2dhZ2NscThsTGlGVU9FMDlwb0ppaW1ROG9JQmtzZW1IQ2kraE1NRnNTV0M1RW4xU1cyT1hiMG80U0FMRXJWMWhxQ294ZzJaTW9SUHVMTGY0QTZBbWFLYVNGQ0I4c1VnRlkyVWhlUHJ6bHlSK0dZWm9hTUhOQU5PcGVkcEkySW9xMnFjc1lWbnJ6QThQWUx0VGdHZUR6Zm5NTUJaQW1sdGlCZUZaODVTUU8yTUxiRXdOaTJITCtmT1lLTXdONXhYcFlERUpsTFN0dUtMTXc4aE5oNENoQWRpTHRjS2lBdWZFOHlHVk5VVlp4SXVEVFBsc21kV2thNmJWbGpUbWJXNGtmdEpRSndTbk5BcVMybTVMQkYzeXJTK283UHpvWXY4Rk1jVU02YXRWcU1hRXNUMFhVRFUxUXVsQmN5bmxKUWZSM2RpNHNUbnZGRHFSMjRpalY1dWpnRHhOM3hqVS9xQ0VxbktWM2Z4Z2xTb1U3RzRxTWovQk1TNnl5bFFRTjhFeWFJOERLa2xtNEhhZXhkNFMraWk4bC9DeW9GVHNGZ3ZtOE1LVk1xM2s3RklaVmd4UDNXWm1seTdVRmJqZjhOZmhERzh1YzlEMHE3MHpUZmxGMkZJeEV0bGtRZnFMNHJ0MElRdEpkbmtVcVhhdGdrcEpsRm5lY1FxRHFCNTVNRzB2ZDdkWmJHMjJzdGljMlpwV2hlTHlHRTRydStSdTZGcXIrOXBZY1pQeUVwV1hycGdqZUFuTlNtNWl5cWJCWEtneE9aU2F2SkhuUUk0TG9hU20rQ3FyN2pPR0c4ckVoS1VhTXJUVVdGdTdoR1ZyL3pTY1p0eGVFcXk5WW9pV0h6MXIrZlh3SEZpaVVyOHBUMjQzVG9HZUtDZldzZituZktMK1k3RWttUkpyd2g1WUsrQWU5UXFZY0I0dnczSksxUThFaytBZmpJemV0TzhnbHdoc1FPam5IUUZxUU1acnAwSXNTRHEyNG5nV0Rkb2oxcGsvWlBGdUZtV2FmQVN5eVBZZmpBVEdsalFQV2p3d21aTk5lb0NWU3d6S1JPUC9QS1dPemc5OGNDdXZXY3RkOWc4OW1mSllxeWJ2eVd0Y1FiR3J5RWc5OVBBUTBoTUFJYlhhb0lVWVU4V0NqaGlYNHlmS25pNldyYUZ2OU1mTG0xTEJlak40YWJ2MmxKNTBiRnh4THJ3U1ZoT1NLQlhUNWZzWjNqZkFwVFBJNFgwUEh1OGM4eG1lTmNvck1wb1FwMzBWZ3NXYzA1WlhLbHAzVWJvOEtaMVc1MXhwaHNoNU5KalhNTmQ2TkMzd3kwQjl6eTFmckxXWTh1UjRXa3p2YjdqNEt0eDRBRG54eU1jYjIrWXlFd3MrVUx1N1EwOTZtaWFBK0J2VExyaVk5ZHdzdW5TY0RLV1dSSlZ0M241NEgrN2F6Z1o5S3BwMi96Y1JNYjcyNjZQNmZCcE9WNTNGNGxFSUpaWWRMdVo4YVJKakE3YXZyMkxmcmNURDg5YWdHclJDdzYrR3EvM213b0lnSnV5aWxuVDg2YXNqb1AyMDZHOXYrSTJ1VVBUc2hYbWNMTjl2SDlaSFdpVHUrdmw3R0diWE1jVlYyL3cyYmpZb3habkJPd1ZWdzc5MUx5ZGxtMGxYYjFDSzJuZG1vTzdycjVIcEpRbWVnYkNNaTNzUDl2bmU5emNHNStOUEF1KzEzcUZKTlZqT1Y2NHVOMzYvaTBBUlk5YkwrUGdjT2I4c3BFckJzR0JjUFdpQnZqaDNhL2JubmNyN29EamJOamlwemI5L1BOVTZ1dVZCQWVPQ2dXSUdMWFAvZlMrWmJ5amdLT1ZyWVVwS3RvejhqS1VTUGJyZlErRDBvbTBhS1hCNTZiR3MxZDQxUTNPa3UyVDE3b3g2RkJFeEFlVS94dXhYOXNSNXYxaURqUnJkbEpYZVdNUDN2d2M5K2FkVUxMUWNqQ0RabEF2VXVrTVVxZStTT1c4RjJSY0R0S1RKRmVNVWx0UnI0N0VEOW1mMFRzR25WbzZhK0JYMitqN1Y5c1lxZlM4VG5lVGoxL3lnZ3dKUWloRWk3bERjMnU5YWdkT1JMeDYxUmNuRlNsK2VwNmRNbldya0F5N1AvNStLSjQxdlVaL3I0ODZKN3g1NXd0YUwxV3N1N3pNS2xRdlpuL0xDN242eFdod255bzVEMXJmeUtZSHlYWW5hTEZuOU85OFJab1BIejU4K1BEaHc0Y1BIejU4K1BEaHc0Y1BIejU4K1BEaGc4Yi9BUVZQSTlqTjk2dkZBQUFBQUVsRlRrU3VRbUNDXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9hcnRpY2xlPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCI7XHJcblxyXG5pbXBvcnQgeyBNZW51LCBEcm9wZG93biwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcblxyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5pbXBvcnQgSXRlbUJveCBmcm9tIFwiLi4vY29tcG9uZW50cy9JdGVtQm94XCI7XHJcblxyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvZGF0YWJhc2VcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCBmaXJlYmFzZUNvbmZpZyBmcm9tIFwiLi4vY29uZmlnXCI7XHJcblxyXG52YXIgY29uZmlnID0gZmlyZWJhc2VDb25maWcuZmlyZWJhc2VDb25maWc7XHJcbmlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcclxuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XHJcbn1cclxuXHJcbmNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcbmNvbnN0IGRiMSA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBkYXRhOiBbXSxcclxuICAgIHNlYXJjaDogXCJcIixcclxuICAgIGxlbmd0aDogXCJcIixcclxuICB9O1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoe30pIHtcclxuICAgIGxldCBkYWF0YSA9IFtdO1xyXG4gICAgdmFyIHJlZiA9IGF3YWl0IGRiMS5yZWYoXCJyZWZlcnJhbHNcIik7XHJcbiAgICByZWYub24oXHJcbiAgICAgIFwidmFsdWVcIixcclxuICAgICAgZnVuY3Rpb24gKHNuYXBzaG90KSB7XHJcbiAgICAgICAgZGFhdGEucHVzaChzbmFwc2hvdC52YWwoKSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bmN0aW9uIChlcnJvck9iamVjdCkge31cclxuICAgICk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkYXRhOiBkYWF0YSxcclxuICAgICAgbGVuZ3RoOiBkYWF0YS5sZW5ndGgsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbG9hZHNob3AoKSB7XHJcbiAgICBsZXQgZGFhdGEgPSBbXTtcclxuICAgIGxldCBSZWZlcnJhbHMgPSBkYi5jb2xsZWN0aW9uKFwicmVmZXJyYWxzXCIpO1xyXG4gICAgUmVmZXJyYWxzLmdldCgpLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBpZiAoZG9jLmRhdGEoKS5jYXRlZ29yeSA9PSBcInNob3BwaW5nXCIpIHtcclxuICAgICAgICAgIGRhYXRhLnB1c2goZG9jLmRhdGEoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZGF0YTogZGFhdGEsXHJcbiAgICAgICAgbGVuZ3RoOiBkYWF0YS5sZW5ndGgsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2FkcHJvZCgpIHtcclxuICAgIGxldCBkYWF0YSA9IFtdO1xyXG4gICAgbGV0IFJlZmVycmFscyA9IGRiLmNvbGxlY3Rpb24oXCJyZWZlcnJhbHNcIik7XHJcbiAgICBSZWZlcnJhbHMuZ2V0KCkudGhlbigocXVlcnlTbmFwc2hvdCkgPT4ge1xyXG4gICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGlmIChkb2MuZGF0YSgpLmNhdGVnb3J5ID09IFwicHJvZHVjdGl2ZVwiKSB7XHJcbiAgICAgICAgICBkYWF0YS5wdXNoKGRvYy5kYXRhKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGRhdGE6IGRhYXRhLFxyXG4gICAgICAgIGxlbmd0aDogZGFhdGEubGVuZ3RoLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZG90aGVyKCkge1xyXG4gICAgbGV0IGRhYXRhID0gW107XHJcbiAgICBsZXQgUmVmZXJyYWxzID0gZGIuY29sbGVjdGlvbihcInJlZmVycmFsc1wiKTtcclxuICAgIFJlZmVycmFscy5nZXQoKS50aGVuKChxdWVyeVNuYXBzaG90KSA9PiB7XHJcbiAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgaWYgKGRvYy5kYXRhKCkuY2F0ZWdvcnkgPT0gXCJcIikge1xyXG4gICAgICAgICAgZGFhdGEucHVzaChkb2MuZGF0YSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBkYXRhOiBkYWF0YSxcclxuICAgICAgICBsZW5ndGg6IGRhYXRhLmxlbmd0aCxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvYWRwYXltZW50KCkge1xyXG4gICAgbGV0IGRhYXRhID0gW107XHJcbiAgICBsZXQgUmVmZXJyYWxzID0gZGIuY29sbGVjdGlvbihcInJlZmVycmFsc1wiKTtcclxuICAgIFJlZmVycmFscy5nZXQoKS50aGVuKChxdWVyeVNuYXBzaG90KSA9PiB7XHJcbiAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgaWYgKGRvYy5kYXRhKCkuY2F0ZWdvcnkgPT0gXCJwYXltZW50XCIpIHtcclxuICAgICAgICAgIGRhYXRhLnB1c2goZG9jLmRhdGEoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZGF0YTogZGFhdGEsXHJcbiAgICAgICAgbGVuZ3RoOiBkYWF0YS5sZW5ndGgsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGxvYWR0cmF2ZWwoKSB7XHJcbiAgICBsZXQgZGFhdGEgPSBbXTtcclxuICAgIGxldCBSZWZlcnJhbHMgPSBkYi5jb2xsZWN0aW9uKFwicmVmZXJyYWxzXCIpO1xyXG4gICAgUmVmZXJyYWxzLmdldCgpLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBpZiAoZG9jLmRhdGEoKS5jYXRlZ29yeSA9PSBcIlRyYXZlbFwiKSB7XHJcbiAgICAgICAgICBkYWF0YS5wdXNoKGRvYy5kYXRhKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGRhdGE6IGRhYXRhLFxyXG4gICAgICAgIGxlbmd0aDogZGFhdGEubGVuZ3RoLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZGFsbCgpIHtcclxuICAgIGxldCBkYWF0YSA9IFtdO1xyXG4gICAgbGV0IFJlZmVycmFscyA9IGRiLmNvbGxlY3Rpb24oXCJyZWZlcnJhbHNcIik7XHJcbiAgICBSZWZlcnJhbHMuZ2V0KCkudGhlbigocXVlcnlTbmFwc2hvdCkgPT4ge1xyXG4gICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGRhYXRhLnB1c2goZG9jLmRhdGEoKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBkYXRhOiBkYWF0YSxcclxuICAgICAgICBsZW5ndGg6IGRhYXRhLmxlbmd0aCxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgbGV0IGRhYXRhID0gW107XHJcbiAgICBsZXQgUmVmZXJyYWxzID0gZGIuY29sbGVjdGlvbihcInJlZmVycmFsc1wiKTtcclxuICAgIFJlZmVycmFscy5nZXQoKS50aGVuKChxdWVyeVNuYXBzaG90KSA9PiB7XHJcbiAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgZG9jXHJcbiAgICAgICAgICAgIC5kYXRhKClcclxuICAgICAgICAgICAgLm5hbWUudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAuaW5jbHVkZXModGhpcy5zdGF0ZS5zZWFyY2gudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGRhYXRhLnB1c2goZG9jLmRhdGEoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZGF0YTogZGFhdGEsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgaW5EYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xyXG4gICAgY29uc3QgbWVudSA9IChcclxuICAgICAgPE1lbnU+XHJcbiAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMubG9hZGFsbC5iaW5kKHRoaXMpfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgIE5vIEZpbHRlclxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmxvYWRzaG9wLmJpbmQodGhpcyl9IHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgU2hvcHBpbmdcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgPGEgb25DbGljaz17dGhpcy5sb2FkcHJvZC5iaW5kKHRoaXMpfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgIFByb2R1Y3Rpdml0eVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmxvYWR0cmF2ZWwuYmluZCh0aGlzKX0gcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICBUcmF2ZWxcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgPGEgb25DbGljaz17dGhpcy5sb2FkcGF5bWVudC5iaW5kKHRoaXMpfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgIFBheW1lbnRcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgPGEgb25DbGljaz17dGhpcy5sb2Fkb3RoZXIuYmluZCh0aGlzKX0gcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICBNaXNjYWxsYW5lb3VzXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgIDwvTWVudT5cclxuICAgICk7XHJcblxyXG4gICAgbGV0IExpc3QgPSBcIlwiO1xyXG4gICAgaWYgKGluRGF0YSA9PSBudWxsKSB7XHJcbiAgICAgIExpc3QgPSBcIkxvYWluZy4uLlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGluRGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgTGlzdCA9IGluRGF0YS5tYXAoKGl0ZW0pID0+IDxJdGVtQm94IGtleT17aXRlbS5uYW1lfSBpdGVtPXtpdGVtfSAvPik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgTGlzdCA9IDxoNCBjbGFzc05hbWU9XCJtdC01XCI+TG9hZGluZy4uLjwvaDQ+O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXQtMiBtYi01XCI+XHJcbiAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICAgICAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtOWFJdDJuUnBDMTJVazlnUzliYURsNDExTlFBcEZtQzI2RXdBT0g4V2dabDVNWVl4RmZjK05jUGIxZEtHajdTa1wiXHJcbiAgICAgICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIiVQVUJMSUNfVVJMJS9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzAwMDAwMFwiIC8+XHJcbiAgICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICBjb250ZW50PVwiR3JhYiBDb3Vwb24gY29kZSBpcyBjb3Vwb24gY29kZXMgLyByZWZlcnJhbHMgZm9yIG5ldyB1c2Vycy4gR3JhYiBDb3Vwb25zIGFuZCBTYXZlIE1vbmV5IGJ5IG9ubGluZSBvZmZlcnMsIGRlYWxzLCBkaXNjb3VudCBieSBvdXIgbGF0ZXN0IFByb21vIGNvZGVzLiAgXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgICBuYW1lPVwia2V5d29yZFwiXHJcbiAgICAgICAgICAgICAgY29udGVudD1cImdyYWJvbiwgZ3JhYiBvbixncmFiY291cG9uY29kZSxncmFiIGNvdXBvbixjb3Vwb24gY29kZSxjb3Vwb24sIHJlZmVycmFsLCBlYXJuIG1vbmV5IG9ubGluZSwgZmlyc3QgdXNlcnMsIG5ldyB1c2Vycywgc2F2ZSBtb25leSxzYXZlLCBQcm9tbyBjb2RlLCBkZWFscywgZGlzY291bnQsbGF0ZXN0IGNvdXBvbiwgb25saW5lIHNob3BwaW5nIFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgY29udGVudD1cIkZpbmQgTGF0ZXN0IENvdXBvbnMgJmFtcDsgT2ZmZXJzIEZvciBPbmxpbmUgU2hvcHBpbmcgU2l0ZXMuIEdyYWJPbiBXaWxsIEVuc3VyZSBZb3UgR2V0IFRoZSBSaWdodCBQcm9tbyBDb2RlcywgRGVhbHMgJmFtcDsgRGlzY291bnQgRS1HaWZ0IENhcmRzIEZvciAyMDIwIHwgU0FWRSBPTiBFVkVSWVRISU5HXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIldlYnNpdGVcIiAvPlxyXG4gICAgICAgICAgICA8dGl0bGU+R3JhYiBDb3Vwb24gQ29kZTwvdGl0bGU+XHJcbiAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGNvbC0xMiBjb2wtbGctMyBjb2wtc20tMTIgY29sLW1kLTEyIG10LTIgbWItMiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duIG92ZXJsYXk9e21lbnV9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIyLjdlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICBDYXRlZ29yaWVzIDxJY29uIHR5cGU9XCJkb3duXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1jZW50ZXIgb3JkZXItZmlyc3QgIG10LTIgbWItMiAgYWxpZ24taXRlbXMtY2VudGVyIGNvbCBjb2wtMTIgY29sLWxnLTUgY29sLXNtLTEyIGNvbC1tZC0xMiBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyICBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjIxMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIlNyaXJhY2hhLCBjdXJzaXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJ1bi1Db3Vwb25cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiU3JpcmFjaGEsIGN1cnNpdmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1waWxsIGJvcmRlciBib3JkZXItZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMiBtci0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2luRGF0YS5sZW5ndGh9IG9mZmVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IG1sLTJcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiU3JpcmFjaGEsIGN1cnNpdmVcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgZm9yIG5ldyB1c2VycyBvbmx5LlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBjb2wtMTIgY29sLWxnLTQgY29sLXNtLTEyIGNvbC1tZC0xMiAgbXQtMiBtYi0yICBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGlkPVwic2VhcmNoXCIgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0+XHJcbiAgICAgICAgICAgICAgICBTZWFyY2hcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3t9fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01XCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjUwMHB4XCIgfX0+XHJcbiAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAge0xpc3R9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0FuYW50MDE2XCI+QGFuYW50MDE2PC9hPiAqL30uXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=