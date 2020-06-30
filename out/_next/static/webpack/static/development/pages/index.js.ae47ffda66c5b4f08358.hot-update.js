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
      console.log(this.props.data);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJmaXJlYmFzZUNvbmZpZyIsImZpcmViYXNlIiwibGVuZ3RoIiwiZGIiLCJkYjEiLCJJbmRleCIsImRhdGEiLCJzZWFyY2giLCJkYWF0YSIsIlJlZmVycmFscyIsImNvbGxlY3Rpb24iLCJnZXQiLCJ0aGVuIiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJkb2MiLCJjYXRlZ29yeSIsInB1c2giLCJzZXRTdGF0ZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic3RhdGUiLCJpbkRhdGEiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJtZW51IiwibG9hZGFsbCIsImJpbmQiLCJsb2Fkc2hvcCIsImxvYWRwcm9kIiwibG9hZHRyYXZlbCIsImxvYWRwYXltZW50IiwibG9hZG90aGVyIiwiTGlzdCIsIm1hcCIsIml0ZW0iLCJ3aWR0aCIsImhlaWdodCIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsImJhY2tncm91bmRDb2xvciIsImZvbnRXZWlnaHQiLCJkaXNwbGF5Iiwib25DaGFuZ2UiLCJtYXJnaW5Cb3R0b20iLCJyZWYiLCJvbiIsInNuYXBzaG90IiwidmFsIiwiZXJyb3JPYmplY3QiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsTUFBTSxHQUFHQyxnREFBYyxDQUFDQSxjQUE1Qjs7QUFDQSxJQUFJLENBQUNDLDhDQUFBLENBQWNDLE1BQW5CLEVBQTJCO0FBQ3pCRCx5REFBQSxDQUF1QkYsTUFBdkI7QUFDRDs7QUFFRCxJQUFNSSxFQUFFLEdBQUdGLG1EQUFBLEVBQVg7QUFD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QUFNLEVBQUVNLEtBQUssQ0FBQ047QUFGVCxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWhCd0JxRCw2Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5hZTQ3ZmZkYTY2YzViNGYwODM1OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCI7XHJcblxyXG5pbXBvcnQgeyBNZW51LCBEcm9wZG93biwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcblxyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5pbXBvcnQgSXRlbUJveCBmcm9tIFwiLi4vY29tcG9uZW50cy9JdGVtXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvZGF0YWJhc2VcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCBmaXJlYmFzZUNvbmZpZyBmcm9tIFwiLi4vY29uZmlnXCI7XHJcblxyXG52YXIgY29uZmlnID0gZmlyZWJhc2VDb25maWcuZmlyZWJhc2VDb25maWc7XHJcbmlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcclxuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XHJcbn1cclxuXHJcbmNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcbmNvbnN0IGRiMSA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBkYXRhOiBbXSxcclxuICAgIHNlYXJjaDogXCJcIixcclxuICAgIGxlbmd0aDogXCJcIixcclxuICB9O1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoe30pIHtcclxuICAgIGxldCBkYWF0YSA9IFtdO1xyXG4gICAgdmFyIHJlZiA9IGF3YWl0IGRiMS5yZWYoXCJyZWZlcnJhbHNcIik7XHJcbiAgICByZWYub24oXHJcbiAgICAgIFwidmFsdWVcIixcclxuICAgICAgZnVuY3Rpb24gKHNuYXBzaG90KSB7XHJcbiAgICAgICAgZGFhdGEucHVzaChzbmFwc2hvdC52YWwoKSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bmN0aW9uIChlcnJvck9iamVjdCkge31cclxuICAgICk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkYXRhOiBkYWF0YSxcclxuICAgICAgbGVuZ3RoOiBkYWF0YS5sZW5ndGgsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbG9hZHNob3AoKSB7XHJcbiAgICBsZXQgZGFhdGEgPSBbXTtcclxuICAgIGxldCBSZWZlcnJhbHMgPSBkYi5jb2xsZWN0aW9uKFwicmVmZXJyYWxzXCIpO1xyXG4gICAgUmVmZXJyYWxzLmdldCgpLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBpZiAoZG9jLmRhdGEoKS5jYXRlZ29yeSA9PSBcInNob3BwaW5nXCIpIHtcclxuICAgICAgICAgIGRhYXRhLnB1c2goZG9jLmRhdGEoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZGF0YTogZGFhdGEsXHJcbiAgICAgICAgbGVuZ3RoOiBkYWF0YS5sZW5ndGgsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2FkcHJvZCgpIHtcclxuICAgIGxldCBkYWF0YSA9IFtdO1xyXG4gICAgbGV0IFJlZmVycmFscyA9IGRiLmNvbGxlY3Rpb24oXCJyZWZlcnJhbHNcIik7XHJcbiAgICBSZWZlcnJhbHMuZ2V0KCkudGhlbigocXVlcnlTbmFwc2hvdCkgPT4ge1xyXG4gICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGlmIChkb2MuZGF0YSgpLmNhdGVnb3J5ID09IFwicHJvZHVjdGl2ZVwiKSB7XHJcbiAgICAgICAgICBkYWF0YS5wdXNoKGRvYy5kYXRhKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGRhdGE6IGRhYXRhLFxyXG4gICAgICAgIGxlbmd0aDogZGFhdGEubGVuZ3RoLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZG90aGVyKCkge1xyXG4gICAgbGV0IGRhYXRhID0gW107XHJcbiAgICBsZXQgUmVmZXJyYWxzID0gZGIuY29sbGVjdGlvbihcInJlZmVycmFsc1wiKTtcclxuICAgIFJlZmVycmFscy5nZXQoKS50aGVuKChxdWVyeVNuYXBzaG90KSA9PiB7XHJcbiAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgaWYgKGRvYy5kYXRhKCkuY2F0ZWdvcnkgPT0gXCJcIikge1xyXG4gICAgICAgICAgZGFhdGEucHVzaChkb2MuZGF0YSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBkYXRhOiBkYWF0YSxcclxuICAgICAgICBsZW5ndGg6IGRhYXRhLmxlbmd0aCxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvYWRwYXltZW50KCkge1xyXG4gICAgbGV0IGRhYXRhID0gW107XHJcbiAgICBsZXQgUmVmZXJyYWxzID0gZGIuY29sbGVjdGlvbihcInJlZmVycmFsc1wiKTtcclxuICAgIFJlZmVycmFscy5nZXQoKS50aGVuKChxdWVyeVNuYXBzaG90KSA9PiB7XHJcbiAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgaWYgKGRvYy5kYXRhKCkuY2F0ZWdvcnkgPT0gXCJwYXltZW50XCIpIHtcclxuICAgICAgICAgIGRhYXRhLnB1c2goZG9jLmRhdGEoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZGF0YTogZGFhdGEsXHJcbiAgICAgICAgbGVuZ3RoOiBkYWF0YS5sZW5ndGgsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGxvYWR0cmF2ZWwoKSB7XHJcbiAgICBsZXQgZGFhdGEgPSBbXTtcclxuICAgIGxldCBSZWZlcnJhbHMgPSBkYi5jb2xsZWN0aW9uKFwicmVmZXJyYWxzXCIpO1xyXG4gICAgUmVmZXJyYWxzLmdldCgpLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBpZiAoZG9jLmRhdGEoKS5jYXRlZ29yeSA9PSBcIlRyYXZlbFwiKSB7XHJcbiAgICAgICAgICBkYWF0YS5wdXNoKGRvYy5kYXRhKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGRhdGE6IGRhYXRhLFxyXG4gICAgICAgIGxlbmd0aDogZGFhdGEubGVuZ3RoLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZGFsbCgpIHtcclxuICAgIGxldCBkYWF0YSA9IFtdO1xyXG4gICAgbGV0IFJlZmVycmFscyA9IGRiLmNvbGxlY3Rpb24oXCJyZWZlcnJhbHNcIik7XHJcbiAgICBSZWZlcnJhbHMuZ2V0KCkudGhlbigocXVlcnlTbmFwc2hvdCkgPT4ge1xyXG4gICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGRhYXRhLnB1c2goZG9jLmRhdGEoKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBkYXRhOiBkYWF0YSxcclxuICAgICAgICBsZW5ndGg6IGRhYXRhLmxlbmd0aCxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgbGV0IGRhYXRhID0gW107XHJcbiAgICBsZXQgUmVmZXJyYWxzID0gZGIuY29sbGVjdGlvbihcInJlZmVycmFsc1wiKTtcclxuICAgIFJlZmVycmFscy5nZXQoKS50aGVuKChxdWVyeVNuYXBzaG90KSA9PiB7XHJcbiAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgZG9jXHJcbiAgICAgICAgICAgIC5kYXRhKClcclxuICAgICAgICAgICAgLm5hbWUudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAuaW5jbHVkZXModGhpcy5zdGF0ZS5zZWFyY2gudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGRhYXRhLnB1c2goZG9jLmRhdGEoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZGF0YTogZGFhdGEsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgaW5EYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5kYXRhKTtcclxuICAgIGNvbnN0IG1lbnUgPSAoXHJcbiAgICAgIDxNZW51PlxyXG4gICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmxvYWRhbGwuYmluZCh0aGlzKX0gcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICBObyBGaWx0ZXJcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgPGEgb25DbGljaz17dGhpcy5sb2Fkc2hvcC5iaW5kKHRoaXMpfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgIFNob3BwaW5nXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMubG9hZHByb2QuYmluZCh0aGlzKX0gcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICBQcm9kdWN0aXZpdHlcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgPGEgb25DbGljaz17dGhpcy5sb2FkdHJhdmVsLmJpbmQodGhpcyl9IHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgVHJhdmVsXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMubG9hZHBheW1lbnQuYmluZCh0aGlzKX0gcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICBQYXltZW50XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMubG9hZG90aGVyLmJpbmQodGhpcyl9IHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgTWlzY2FsbGFuZW91c1xyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICA8L01lbnU+XHJcbiAgICApO1xyXG5cclxuICAgIGxldCBMaXN0ID0gXCJcIjtcclxuICAgIGlmIChpbkRhdGEgPT0gbnVsbCkge1xyXG4gICAgICBMaXN0ID0gXCJMb2FpbmcuLi5cIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChpbkRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIExpc3QgPSBpbkRhdGEubWFwKChpdGVtKSA9PiA8SXRlbUJveCBrZXk9e2l0ZW0ubmFtZX0gaXRlbT17aXRlbX0gLz4pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIExpc3QgPSA8aDQgY2xhc3NOYW1lPVwibXQtNVwiPkxvYWRpbmcuLi48L2g0PjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG10LTIgbWItNVwiPlxyXG4gICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgICAgICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LTlhSXQyblJwQzEyVWs5Z1M5YmFEbDQxMU5RQXBGbUMyNkV3QU9IOFdnWmw1TVlZeEZmYytOY1BiMWRLR2o3U2tcIlxyXG4gICAgICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIlUFVCTElDX1VSTCUvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXHJcbiAgICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiMwMDAwMDBcIiAvPlxyXG4gICAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgY29udGVudD1cIkdyYWIgQ291cG9uIGNvZGUgaXMgY291cG9uIGNvZGVzIC8gcmVmZXJyYWxzIGZvciBuZXcgdXNlcnMuIEdyYWIgQ291cG9ucyBhbmQgU2F2ZSBNb25leSBieSBvbmxpbmUgb2ZmZXJzLCBkZWFscywgZGlzY291bnQgYnkgb3VyIGxhdGVzdCBQcm9tbyBjb2Rlcy4gIFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgICAgbmFtZT1cImtleXdvcmRcIlxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJncmFib24sIGdyYWIgb24sZ3JhYmNvdXBvbmNvZGUsZ3JhYiBjb3Vwb24sY291cG9uIGNvZGUsY291cG9uLCByZWZlcnJhbCwgZWFybiBtb25leSBvbmxpbmUsIGZpcnN0IHVzZXJzLCBuZXcgdXNlcnMsIHNhdmUgbW9uZXksc2F2ZSwgUHJvbW8gY29kZSwgZGVhbHMsIGRpc2NvdW50LGxhdGVzdCBjb3Vwb24sIG9ubGluZSBzaG9wcGluZyBcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJGaW5kIExhdGVzdCBDb3Vwb25zICZhbXA7IE9mZmVycyBGb3IgT25saW5lIFNob3BwaW5nIFNpdGVzLiBHcmFiT24gV2lsbCBFbnN1cmUgWW91IEdldCBUaGUgUmlnaHQgUHJvbW8gQ29kZXMsIERlYWxzICZhbXA7IERpc2NvdW50IEUtR2lmdCBDYXJkcyBGb3IgMjAyMCB8IFNBVkUgT04gRVZFUllUSElOR1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJXZWJzaXRlXCIgLz5cclxuICAgICAgICAgICAgPHRpdGxlPkdyYWIgQ291cG9uIENvZGU8L3RpdGxlPlxyXG4gICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBjb2wtMTIgY29sLWxnLTMgY29sLXNtLTEyIGNvbC1tZC0xMiBtdC0yIG1iLTIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93biBvdmVybGF5PXttZW51fT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMi43ZW1cIiB9fT5cclxuICAgICAgICAgICAgICAgICAgQ2F0ZWdvcmllcyA8SWNvbiB0eXBlPVwiZG93blwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG9yZGVyLWZpcnN0ICBtdC0yIG1iLTIgIGFsaWduLWl0ZW1zLWNlbnRlciBjb2wgY29sLTEyIGNvbC1sZy01IGNvbC1zbS0xMiBjb2wtbWQtMTIgXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wganVzdGlmeS1jb250ZW50LWNlbnRlciAgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIyMTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJTcmlyYWNoYSwgY3Vyc2l2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSdW4tQ291cG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2I+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCI1MCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIlNyaXJhY2hhLCBjdXJzaXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtcGlsbCBib3JkZXIgYm9yZGVyLWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTIgbXItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpbkRhdGEubGVuZ3RofSBvZmZlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBtbC0yXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIlNyaXJhY2hhLCBjdXJzaXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIGZvciBuZXcgdXNlcnMgb25seS5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgY29sLTEyIGNvbC1sZy00IGNvbC1zbS0xMiBjb2wtbWQtMTIgIG10LTIgbWItMiAganVzdGlmeS1jb250ZW50LWVuZFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBpZD1cInNlYXJjaFwiIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgU2VhcmNoXHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGlkPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7fX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2h9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNVwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCI1MDBweFwiIH19PlxyXG4gICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgIHtMaXN0fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9BbmFudDAxNlwiPkBhbmFudDAxNjwvYT4gKi99LlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9