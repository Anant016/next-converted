webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var _components_Item__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Item */ "./components/Item.js");
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
      console.log(inData);

      var menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Menu"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 7
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Menu"].Item, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 9
        }
      }, __jsx("a", {
        onClick: this.loadall.bind(this),
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 11
        }
      }, "No Filter")), __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Menu"].Item, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 9
        }
      }, __jsx("a", {
        onClick: this.loadshop.bind(this),
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 11
        }
      }, "Shopping")), __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Menu"].Item, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 9
        }
      }, __jsx("a", {
        onClick: this.loadprod.bind(this),
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 11
        }
      }, "Productivity")), __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Menu"].Item, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 9
        }
      }, __jsx("a", {
        onClick: this.loadtravel.bind(this),
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 11
        }
      }, "Travel")), __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Menu"].Item, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 9
        }
      }, __jsx("a", {
        onClick: this.loadpayment.bind(this),
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 11
        }
      }, "Payment")), __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Menu"].Item, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 9
        }
      }, __jsx("a", {
        onClick: this.loadother.bind(this),
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 11
        }
      }, "Miscallaneous")));

      var List = "";

      if (inData == null) {
        List = "Loaing...";
      } else {
        if (inData.length > 0) {
          List = inData.map(function (item) {
            return __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_17__["default"], {
              key: item.name,
              item: item,
              __self: _this9,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 204,
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
                lineNumber: 207,
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
          lineNumber: 213,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "container mt-2 mb-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 9
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 11
        }
      }, __jsx("meta", {
        charSet: "utf-8",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
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
          lineNumber: 217,
          columnNumber: 13
        }
      }), __jsx("link", {
        rel: "icon",
        href: "%PUBLIC_URL%/favicon.ico",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 13
        }
      }), __jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 13
        }
      }), __jsx("meta", {
        name: "theme-color",
        content: "#000000",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 13
        }
      }), __jsx("meta", {
        name: "description",
        content: "Grab Coupon code is coupon codes / referrals for new users. Grab Coupons and Save Money by online offers, deals, discount by our latest Promo codes.  ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 13
        }
      }), __jsx("meta", {
        name: "keyword",
        content: "grabon, grab on,grabcouponcode,grab coupon,coupon code,coupon, referral, earn money online, first users, new users, save money,save, Promo code, deals, discount,latest coupon, online shopping ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 13
        }
      }), __jsx("meta", {
        property: "og:description",
        content: "Find Latest Coupons & Offers For Online Shopping Sites. GrabOn Will Ensure You Get The Right Promo Codes, Deals & Discount E-Gift Cards For 2020 | SAVE ON EVERYTHING",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 13
        }
      }), __jsx("meta", {
        property: "og:type",
        content: "Website",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 13
        }
      }), __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 13
        }
      }, "Grab Coupon Code")), __jsx("div", {
        className: "row mb-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col col-12 col-lg-3 col-sm-12 col-md-12 mt-2 mb-2 justify-content-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 13
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Dropdown"], {
        overlay: menu,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246,
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
          lineNumber: 247,
          columnNumber: 17
        }
      }, "Categories ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_15__["default"], {
        type: "down",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 30
        }
      })))), __jsx("div", {
        className: "justify-content-center order-first  mt-2 mb-2  align-items-center col col-12 col-lg-5 col-sm-12 col-md-12 ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "col justify-content-center  align-items-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "d-flex flex-row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 17
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 19
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
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
          lineNumber: 257,
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
          lineNumber: 266,
          columnNumber: 23
        }
      }, __jsx("span", {
        className: "ml-2 mr-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274,
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
          lineNumber: 281,
          columnNumber: 17
        }
      }, "for new users only."))), __jsx("div", {
        className: "col col-12 col-lg-4 col-sm-12 col-md-12  mt-2 mb-2  justify-content-end",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292,
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
          lineNumber: 293,
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
          lineNumber: 296,
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
          lineNumber: 308,
          columnNumber: 11
        }
      }, " ", List), "."), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJmaXJlYmFzZUNvbmZpZyIsImZpcmViYXNlIiwibGVuZ3RoIiwiZGIiLCJkYjEiLCJJbmRleCIsImRhdGEiLCJzZWFyY2giLCJkYWF0YSIsIlJlZmVycmFscyIsImNvbGxlY3Rpb24iLCJnZXQiLCJ0aGVuIiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJkb2MiLCJjYXRlZ29yeSIsInB1c2giLCJzZXRTdGF0ZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic3RhdGUiLCJpbkRhdGEiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJtZW51IiwibG9hZGFsbCIsImJpbmQiLCJsb2Fkc2hvcCIsImxvYWRwcm9kIiwibG9hZHRyYXZlbCIsImxvYWRwYXltZW50IiwibG9hZG90aGVyIiwiTGlzdCIsIm1hcCIsIml0ZW0iLCJ3aWR0aCIsImhlaWdodCIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsImJhY2tncm91bmRDb2xvciIsImZvbnRXZWlnaHQiLCJkaXNwbGF5Iiwib25DaGFuZ2UiLCJtYXJnaW5Cb3R0b20iLCJyZWYiLCJvbiIsInNuYXBzaG90IiwidmFsIiwiZXJyb3JPYmplY3QiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsTUFBTSxHQUFHQyxnREFBYyxDQUFDQSxjQUE1Qjs7QUFDQSxJQUFJLENBQUNDLDhDQUFBLENBQWNDLE1BQW5CLEVBQTJCO0FBQ3pCRCx5REFBQSxDQUF1QkYsTUFBdkI7QUFDRDs7QUFFRCxJQUFNSSxFQUFFLEdBQUdGLG1EQUFBLEVBQVg7QUFD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TjtBQUZULGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaEJ3QnFELDZDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmYxZmVhMzYzMDQxZWJjZDlmNGM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIjtcclxuXHJcbmltcG9ydCB7IE1lbnUsIERyb3Bkb3duLCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XHJcbmltcG9ydCBJdGVtQm94IGZyb20gXCIuLi9jb21wb25lbnRzL0l0ZW1cIjtcclxuXHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9kYXRhYmFzZVwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IGZpcmViYXNlQ29uZmlnIGZyb20gXCIuLi9jb25maWdcIjtcclxuXHJcbnZhciBjb25maWcgPSBmaXJlYmFzZUNvbmZpZy5maXJlYmFzZUNvbmZpZztcclxuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcclxufVxyXG5cclxuY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcclxuY29uc3QgZGIxID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGRhdGE6IFtdLFxyXG4gICAgc2VhcmNoOiBcIlwiLFxyXG4gICAgbGVuZ3RoOiBcIlwiLFxyXG4gIH07XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7fSkge1xyXG4gICAgbGV0IGRhYXRhID0gW107XHJcbiAgICB2YXIgcmVmID0gYXdhaXQgZGIxLnJlZihcInJlZmVycmFsc1wiKTtcclxuICAgIHJlZi5vbihcclxuICAgICAgXCJ2YWx1ZVwiLFxyXG4gICAgICBmdW5jdGlvbiAoc25hcHNob3QpIHtcclxuICAgICAgICBkYWF0YS5wdXNoKHNuYXBzaG90LnZhbCgpKTtcclxuICAgICAgfSxcclxuICAgICAgZnVuY3Rpb24gKGVycm9yT2JqZWN0KSB7fVxyXG4gICAgKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGE6IGRhYXRhLFxyXG4gICAgICBsZW5ndGg6IGRhYXRhLmxlbmd0aCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBsb2Fkc2hvcCgpIHtcclxuICAgIGxldCBkYWF0YSA9IFtdO1xyXG4gICAgbGV0IFJlZmVycmFscyA9IGRiLmNvbGxlY3Rpb24oXCJyZWZlcnJhbHNcIik7XHJcbiAgICBSZWZlcnJhbHMuZ2V0KCkudGhlbigocXVlcnlTbmFwc2hvdCkgPT4ge1xyXG4gICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGlmIChkb2MuZGF0YSgpLmNhdGVnb3J5ID09IFwic2hvcHBpbmdcIikge1xyXG4gICAgICAgICAgZGFhdGEucHVzaChkb2MuZGF0YSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBkYXRhOiBkYWF0YSxcclxuICAgICAgICBsZW5ndGg6IGRhYXRhLmxlbmd0aCxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvYWRwcm9kKCkge1xyXG4gICAgbGV0IGRhYXRhID0gW107XHJcbiAgICBsZXQgUmVmZXJyYWxzID0gZGIuY29sbGVjdGlvbihcInJlZmVycmFsc1wiKTtcclxuICAgIFJlZmVycmFscy5nZXQoKS50aGVuKChxdWVyeVNuYXBzaG90KSA9PiB7XHJcbiAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgaWYgKGRvYy5kYXRhKCkuY2F0ZWdvcnkgPT0gXCJwcm9kdWN0aXZlXCIpIHtcclxuICAgICAgICAgIGRhYXRhLnB1c2goZG9jLmRhdGEoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZGF0YTogZGFhdGEsXHJcbiAgICAgICAgbGVuZ3RoOiBkYWF0YS5sZW5ndGgsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2Fkb3RoZXIoKSB7XHJcbiAgICBsZXQgZGFhdGEgPSBbXTtcclxuICAgIGxldCBSZWZlcnJhbHMgPSBkYi5jb2xsZWN0aW9uKFwicmVmZXJyYWxzXCIpO1xyXG4gICAgUmVmZXJyYWxzLmdldCgpLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBpZiAoZG9jLmRhdGEoKS5jYXRlZ29yeSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICBkYWF0YS5wdXNoKGRvYy5kYXRhKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGRhdGE6IGRhYXRhLFxyXG4gICAgICAgIGxlbmd0aDogZGFhdGEubGVuZ3RoLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZHBheW1lbnQoKSB7XHJcbiAgICBsZXQgZGFhdGEgPSBbXTtcclxuICAgIGxldCBSZWZlcnJhbHMgPSBkYi5jb2xsZWN0aW9uKFwicmVmZXJyYWxzXCIpO1xyXG4gICAgUmVmZXJyYWxzLmdldCgpLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBpZiAoZG9jLmRhdGEoKS5jYXRlZ29yeSA9PSBcInBheW1lbnRcIikge1xyXG4gICAgICAgICAgZGFhdGEucHVzaChkb2MuZGF0YSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBkYXRhOiBkYWF0YSxcclxuICAgICAgICBsZW5ndGg6IGRhYXRhLmxlbmd0aCxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgbG9hZHRyYXZlbCgpIHtcclxuICAgIGxldCBkYWF0YSA9IFtdO1xyXG4gICAgbGV0IFJlZmVycmFscyA9IGRiLmNvbGxlY3Rpb24oXCJyZWZlcnJhbHNcIik7XHJcbiAgICBSZWZlcnJhbHMuZ2V0KCkudGhlbigocXVlcnlTbmFwc2hvdCkgPT4ge1xyXG4gICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGlmIChkb2MuZGF0YSgpLmNhdGVnb3J5ID09IFwiVHJhdmVsXCIpIHtcclxuICAgICAgICAgIGRhYXRhLnB1c2goZG9jLmRhdGEoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZGF0YTogZGFhdGEsXHJcbiAgICAgICAgbGVuZ3RoOiBkYWF0YS5sZW5ndGgsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2FkYWxsKCkge1xyXG4gICAgbGV0IGRhYXRhID0gW107XHJcbiAgICBsZXQgUmVmZXJyYWxzID0gZGIuY29sbGVjdGlvbihcInJlZmVycmFsc1wiKTtcclxuICAgIFJlZmVycmFscy5nZXQoKS50aGVuKChxdWVyeVNuYXBzaG90KSA9PiB7XHJcbiAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgZGFhdGEucHVzaChkb2MuZGF0YSgpKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGRhdGE6IGRhYXRhLFxyXG4gICAgICAgIGxlbmd0aDogZGFhdGEubGVuZ3RoLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UoZSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICBsZXQgZGFhdGEgPSBbXTtcclxuICAgIGxldCBSZWZlcnJhbHMgPSBkYi5jb2xsZWN0aW9uKFwicmVmZXJyYWxzXCIpO1xyXG4gICAgUmVmZXJyYWxzLmdldCgpLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBkb2NcclxuICAgICAgICAgICAgLmRhdGEoKVxyXG4gICAgICAgICAgICAubmFtZS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgIC5pbmNsdWRlcyh0aGlzLnN0YXRlLnNlYXJjaC50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgZGFhdGEucHVzaChkb2MuZGF0YSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBkYXRhOiBkYWF0YSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCBpbkRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XHJcbiAgICBjb25zb2xlLmxvZyhpbkRhdGEpO1xyXG4gICAgY29uc3QgbWVudSA9IChcclxuICAgICAgPE1lbnU+XHJcbiAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMubG9hZGFsbC5iaW5kKHRoaXMpfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgIE5vIEZpbHRlclxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmxvYWRzaG9wLmJpbmQodGhpcyl9IHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgU2hvcHBpbmdcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgPGEgb25DbGljaz17dGhpcy5sb2FkcHJvZC5iaW5kKHRoaXMpfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgIFByb2R1Y3Rpdml0eVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmxvYWR0cmF2ZWwuYmluZCh0aGlzKX0gcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICBUcmF2ZWxcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgPGEgb25DbGljaz17dGhpcy5sb2FkcGF5bWVudC5iaW5kKHRoaXMpfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgIFBheW1lbnRcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgPGEgb25DbGljaz17dGhpcy5sb2Fkb3RoZXIuYmluZCh0aGlzKX0gcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICBNaXNjYWxsYW5lb3VzXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgIDwvTWVudT5cclxuICAgICk7XHJcblxyXG4gICAgbGV0IExpc3QgPSBcIlwiO1xyXG4gICAgaWYgKGluRGF0YSA9PSBudWxsKSB7XHJcbiAgICAgIExpc3QgPSBcIkxvYWluZy4uLlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGluRGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgTGlzdCA9IGluRGF0YS5tYXAoKGl0ZW0pID0+IDxJdGVtQm94IGtleT17aXRlbS5uYW1lfSBpdGVtPXtpdGVtfSAvPik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgTGlzdCA9IDxoNCBjbGFzc05hbWU9XCJtdC01XCI+TG9hZGluZy4uLjwvaDQ+O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXQtMiBtYi01XCI+XHJcbiAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICAgICAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtOWFJdDJuUnBDMTJVazlnUzliYURsNDExTlFBcEZtQzI2RXdBT0g4V2dabDVNWVl4RmZjK05jUGIxZEtHajdTa1wiXHJcbiAgICAgICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIiVQVUJMSUNfVVJMJS9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzAwMDAwMFwiIC8+XHJcbiAgICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICBjb250ZW50PVwiR3JhYiBDb3Vwb24gY29kZSBpcyBjb3Vwb24gY29kZXMgLyByZWZlcnJhbHMgZm9yIG5ldyB1c2Vycy4gR3JhYiBDb3Vwb25zIGFuZCBTYXZlIE1vbmV5IGJ5IG9ubGluZSBvZmZlcnMsIGRlYWxzLCBkaXNjb3VudCBieSBvdXIgbGF0ZXN0IFByb21vIGNvZGVzLiAgXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgICBuYW1lPVwia2V5d29yZFwiXHJcbiAgICAgICAgICAgICAgY29udGVudD1cImdyYWJvbiwgZ3JhYiBvbixncmFiY291cG9uY29kZSxncmFiIGNvdXBvbixjb3Vwb24gY29kZSxjb3Vwb24sIHJlZmVycmFsLCBlYXJuIG1vbmV5IG9ubGluZSwgZmlyc3QgdXNlcnMsIG5ldyB1c2Vycywgc2F2ZSBtb25leSxzYXZlLCBQcm9tbyBjb2RlLCBkZWFscywgZGlzY291bnQsbGF0ZXN0IGNvdXBvbiwgb25saW5lIHNob3BwaW5nIFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgY29udGVudD1cIkZpbmQgTGF0ZXN0IENvdXBvbnMgJmFtcDsgT2ZmZXJzIEZvciBPbmxpbmUgU2hvcHBpbmcgU2l0ZXMuIEdyYWJPbiBXaWxsIEVuc3VyZSBZb3UgR2V0IFRoZSBSaWdodCBQcm9tbyBDb2RlcywgRGVhbHMgJmFtcDsgRGlzY291bnQgRS1HaWZ0IENhcmRzIEZvciAyMDIwIHwgU0FWRSBPTiBFVkVSWVRISU5HXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIldlYnNpdGVcIiAvPlxyXG4gICAgICAgICAgICA8dGl0bGU+R3JhYiBDb3Vwb24gQ29kZTwvdGl0bGU+XHJcbiAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGNvbC0xMiBjb2wtbGctMyBjb2wtc20tMTIgY29sLW1kLTEyIG10LTIgbWItMiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duIG92ZXJsYXk9e21lbnV9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIyLjdlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICBDYXRlZ29yaWVzIDxJY29uIHR5cGU9XCJkb3duXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1jZW50ZXIgb3JkZXItZmlyc3QgIG10LTIgbWItMiAgYWxpZ24taXRlbXMtY2VudGVyIGNvbCBjb2wtMTIgY29sLWxnLTUgY29sLXNtLTEyIGNvbC1tZC0xMiBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyICBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjIxMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIlNyaXJhY2hhLCBjdXJzaXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJ1bi1Db3Vwb25cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiU3JpcmFjaGEsIGN1cnNpdmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1waWxsIGJvcmRlciBib3JkZXItZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMiBtci0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2luRGF0YS5sZW5ndGh9IG9mZmVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IG1sLTJcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiU3JpcmFjaGEsIGN1cnNpdmVcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgZm9yIG5ldyB1c2VycyBvbmx5LlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBjb2wtMTIgY29sLWxnLTQgY29sLXNtLTEyIGNvbC1tZC0xMiAgbXQtMiBtYi0yICBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGlkPVwic2VhcmNoXCIgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0+XHJcbiAgICAgICAgICAgICAgICBTZWFyY2hcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3t9fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01XCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjUwMHB4XCIgfX0+XHJcbiAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAge0xpc3R9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0FuYW50MDE2XCI+QGFuYW50MDE2PC9hPiAqL30uXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=