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
    //   componentWillMount() {
    //     let daata = [];
    //     let Referrals = db.collection("referrals");
    //     Referrals.get()
    //     .then((querySnapshot) => {
    //       querySnapshot.forEach((doc) => {
    //         daata.push(doc.data());
    //       });
    //       this.setState({
    //         data: daata,
    //         length: daata.length,
    //       });
    //     });
    //   }
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

      console.log(this.props);

      var menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Menu"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 7
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Menu"].Item, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 9
        }
      }, __jsx("a", {
        onClick: this.loadall.bind(this),
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 11
        }
      }, "No Filter")), __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Menu"].Item, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 9
        }
      }, __jsx("a", {
        onClick: this.loadshop.bind(this),
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 11
        }
      }, "Shopping")), __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Menu"].Item, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 9
        }
      }, __jsx("a", {
        onClick: this.loadprod.bind(this),
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 11
        }
      }, "Productivity")), __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Menu"].Item, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 9
        }
      }, __jsx("a", {
        onClick: this.loadtravel.bind(this),
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 11
        }
      }, "Travel")), __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Menu"].Item, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 9
        }
      }, __jsx("a", {
        onClick: this.loadpayment.bind(this),
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 11
        }
      }, "Payment")), __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Menu"].Item, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 9
        }
      }, __jsx("a", {
        onClick: this.loadother.bind(this),
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 11
        }
      }, "Miscallaneous")));

      var List = "";

      if (this.state.data == null) {
        List = "Loaing...";
      } else {
        if (this.state.data.length > 0) {
          List = this.state.data.map(function (item) {
            return __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_17__["default"], {
              key: item.name,
              item: item,
              __self: _this9,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 222,
                columnNumber: 11
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
                lineNumber: 226,
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
          lineNumber: 232,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "container mt-2 mb-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 9
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 11
        }
      }, __jsx("meta", {
        charSet: "utf-8",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
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
          lineNumber: 236,
          columnNumber: 13
        }
      }), __jsx("link", {
        rel: "icon",
        href: "%PUBLIC_URL%/favicon.ico",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 13
        }
      }), __jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 13
        }
      }), __jsx("meta", {
        name: "theme-color",
        content: "#000000",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 13
        }
      }), __jsx("meta", {
        name: "description",
        content: "Grab Coupon code is coupon codes / referrals for new users. Grab Coupons and Save Money by online offers, deals, discount by our latest Promo codes.  ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 13
        }
      }), __jsx("meta", {
        name: "keyword",
        content: "grabon, grab on,grabcouponcode,grab coupon,coupon code,coupon, referral, earn money online, first users, new users, save money,save, Promo code, deals, discount,latest coupon, online shopping ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 13
        }
      }), __jsx("meta", {
        property: "og:description",
        content: "Find Latest Coupons & Offers For Online Shopping Sites. GrabOn Will Ensure You Get The Right Promo Codes, Deals & Discount E-Gift Cards For 2020 | SAVE ON EVERYTHING",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 13
        }
      }), __jsx("meta", {
        property: "og:type",
        content: "Website",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 13
        }
      }), __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 13
        }
      }, "Grab Coupon Code")), __jsx("div", {
        className: "row mb-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col col-12 col-lg-3 col-sm-12 col-md-12 mt-2 mb-2 justify-content-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 13
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Dropdown"], {
        overlay: menu,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
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
          lineNumber: 266,
          columnNumber: 17
        }
      }, "Categories ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_15__["default"], {
        type: "down",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 30
        }
      })))), __jsx("div", {
        className: "justify-content-center order-first  mt-2 mb-2  align-items-center col col-12 col-lg-5 col-sm-12 col-md-12 ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "col justify-content-center  align-items-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "d-flex flex-row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 17
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 19
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275,
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
          lineNumber: 276,
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
          lineNumber: 285,
          columnNumber: 23
        }
      }, __jsx("span", {
        className: "ml-2 mr-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 25
        }
      }, this.state.length, " offers"))))), __jsx("div", {
        className: "d-flex flex-row ml-2",
        style: {
          fontWeight: "bold",
          fontFamily: "Sriracha, cursive"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 17
        }
      }, "for new users only."))), __jsx("div", {
        className: "col col-12 col-lg-4 col-sm-12 col-md-12  mt-2 mb-2  justify-content-end",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311,
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
          lineNumber: 312,
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
          lineNumber: 315,
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
          lineNumber: 327,
          columnNumber: 11
        }
      }, " ", List), "."), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333,
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
                }, function (errorObject) {}); // const res = await fetch("https://referral-e242d.firebaseio.com/referrals");
                // console.log(res);
                // const json = await res.json();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJmaXJlYmFzZUNvbmZpZyIsImZpcmViYXNlIiwibGVuZ3RoIiwiZGIiLCJkYjEiLCJJbmRleCIsImRhdGEiLCJzZWFyY2giLCJkYWF0YSIsIlJlZmVycmFscyIsImNvbGxlY3Rpb24iLCJnZXQiLCJ0aGVuIiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJkb2MiLCJjYXRlZ29yeSIsInB1c2giLCJzZXRTdGF0ZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJtZW51IiwibG9hZGFsbCIsImJpbmQiLCJsb2Fkc2hvcCIsImxvYWRwcm9kIiwibG9hZHRyYXZlbCIsImxvYWRwYXltZW50IiwibG9hZG90aGVyIiwiTGlzdCIsIm1hcCIsIml0ZW0iLCJ3aWR0aCIsImhlaWdodCIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsImJhY2tncm91bmRDb2xvciIsImZvbnRXZWlnaHQiLCJkaXNwbGF5Iiwib25DaGFuZ2UiLCJtYXJnaW5Cb3R0b20iLCJyZWYiLCJvbiIsInNuYXBzaG90IiwidmFsIiwiZXJyb3JPYmplY3QiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsTUFBTSxHQUFHQyxnREFBYyxDQUFDQSxjQUE1Qjs7QUFDQSxJQUFJLENBQUNDLDhDQUFBLENBQWNDLE1BQW5CLEVBQTJCO0FBQ3pCRCx5REFBQSxDQUF1QkYsTUFBdkI7QUFDRDs7QUFFRCxJQUFNSSxFQUFFLEdBQUdGLG1EQUFBLEVBQVg7QUFDQSxJQUFNRyxH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S0UsVUFBVUMsV0FBVixFQUF1QixDQUFFLENBTDNCLEUsQ0FPQTtBQUNBO0FBQ0E7O2lEQUNPO0FBQ0wvQyxzQkFBSSxFQUFFRSxLQUREO0FBRUxOLHdCQUFNLEVBQUVNLEtBQUssQ0FBQ047QUFGVCxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW5Cd0JvRCw2Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy42NTU1MWQzNTc2MGE2NDg3NTA5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCI7XHJcblxyXG5pbXBvcnQgeyBNZW51LCBEcm9wZG93biwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcblxyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5pbXBvcnQgSXRlbSBmcm9tIFwiLi4vY29tcG9uZW50cy9JdGVtXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvZGF0YWJhc2VcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCBmaXJlYmFzZUNvbmZpZyBmcm9tIFwiLi4vY29uZmlnXCI7XHJcblxyXG52YXIgY29uZmlnID0gZmlyZWJhc2VDb25maWcuZmlyZWJhc2VDb25maWc7XHJcbmlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcclxuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XHJcbn1cclxuXHJcbmNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcbmNvbnN0IGRiMSA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBkYXRhOiBbXSxcclxuICAgIHNlYXJjaDogXCJcIixcclxuICAgIGxlbmd0aDogXCJcIixcclxuICB9O1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoe30pIHtcclxuICAgIGxldCBkYWF0YSA9IFtdO1xyXG4gICAgdmFyIHJlZiA9IGF3YWl0IGRiMS5yZWYoXCJyZWZlcnJhbHNcIik7XHJcbiAgICByZWYub24oXHJcbiAgICAgIFwidmFsdWVcIixcclxuICAgICAgZnVuY3Rpb24gKHNuYXBzaG90KSB7XHJcbiAgICAgICAgZGFhdGEucHVzaChzbmFwc2hvdC52YWwoKSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bmN0aW9uIChlcnJvck9iamVjdCkge31cclxuICAgICk7XHJcbiAgICAvLyBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vcmVmZXJyYWwtZTI0MmQuZmlyZWJhc2Vpby5jb20vcmVmZXJyYWxzXCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2cocmVzKTtcclxuICAgIC8vIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YTogZGFhdGEsXHJcbiAgICAgIGxlbmd0aDogZGFhdGEubGVuZ3RoLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8vICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gIC8vICAgICBsZXQgZGFhdGEgPSBbXTtcclxuICAvLyAgICAgbGV0IFJlZmVycmFscyA9IGRiLmNvbGxlY3Rpb24oXCJyZWZlcnJhbHNcIik7XHJcbiAgLy8gICAgIFJlZmVycmFscy5nZXQoKVxyXG4gIC8vICAgICAudGhlbigocXVlcnlTbmFwc2hvdCkgPT4ge1xyXG4gIC8vICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgLy8gICAgICAgICBkYWF0YS5wdXNoKGRvYy5kYXRhKCkpO1xyXG4gIC8vICAgICAgIH0pO1xyXG4gIC8vICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gIC8vICAgICAgICAgZGF0YTogZGFhdGEsXHJcbiAgLy8gICAgICAgICBsZW5ndGg6IGRhYXRhLmxlbmd0aCxcclxuICAvLyAgICAgICB9KTtcclxuICAvLyAgICAgfSk7XHJcbiAgLy8gICB9XHJcblxyXG4gIGxvYWRzaG9wKCkge1xyXG4gICAgbGV0IGRhYXRhID0gW107XHJcbiAgICBsZXQgUmVmZXJyYWxzID0gZGIuY29sbGVjdGlvbihcInJlZmVycmFsc1wiKTtcclxuICAgIFJlZmVycmFscy5nZXQoKS50aGVuKChxdWVyeVNuYXBzaG90KSA9PiB7XHJcbiAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgaWYgKGRvYy5kYXRhKCkuY2F0ZWdvcnkgPT0gXCJzaG9wcGluZ1wiKSB7XHJcbiAgICAgICAgICBkYWF0YS5wdXNoKGRvYy5kYXRhKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGRhdGE6IGRhYXRhLFxyXG4gICAgICAgIGxlbmd0aDogZGFhdGEubGVuZ3RoLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZHByb2QoKSB7XHJcbiAgICBsZXQgZGFhdGEgPSBbXTtcclxuICAgIGxldCBSZWZlcnJhbHMgPSBkYi5jb2xsZWN0aW9uKFwicmVmZXJyYWxzXCIpO1xyXG4gICAgUmVmZXJyYWxzLmdldCgpLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBpZiAoZG9jLmRhdGEoKS5jYXRlZ29yeSA9PSBcInByb2R1Y3RpdmVcIikge1xyXG4gICAgICAgICAgZGFhdGEucHVzaChkb2MuZGF0YSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBkYXRhOiBkYWF0YSxcclxuICAgICAgICBsZW5ndGg6IGRhYXRhLmxlbmd0aCxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvYWRvdGhlcigpIHtcclxuICAgIGxldCBkYWF0YSA9IFtdO1xyXG4gICAgbGV0IFJlZmVycmFscyA9IGRiLmNvbGxlY3Rpb24oXCJyZWZlcnJhbHNcIik7XHJcbiAgICBSZWZlcnJhbHMuZ2V0KCkudGhlbigocXVlcnlTbmFwc2hvdCkgPT4ge1xyXG4gICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGlmIChkb2MuZGF0YSgpLmNhdGVnb3J5ID09IFwiXCIpIHtcclxuICAgICAgICAgIGRhYXRhLnB1c2goZG9jLmRhdGEoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZGF0YTogZGFhdGEsXHJcbiAgICAgICAgbGVuZ3RoOiBkYWF0YS5sZW5ndGgsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2FkcGF5bWVudCgpIHtcclxuICAgIGxldCBkYWF0YSA9IFtdO1xyXG4gICAgbGV0IFJlZmVycmFscyA9IGRiLmNvbGxlY3Rpb24oXCJyZWZlcnJhbHNcIik7XHJcbiAgICBSZWZlcnJhbHMuZ2V0KCkudGhlbigocXVlcnlTbmFwc2hvdCkgPT4ge1xyXG4gICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGlmIChkb2MuZGF0YSgpLmNhdGVnb3J5ID09IFwicGF5bWVudFwiKSB7XHJcbiAgICAgICAgICBkYWF0YS5wdXNoKGRvYy5kYXRhKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGRhdGE6IGRhYXRhLFxyXG4gICAgICAgIGxlbmd0aDogZGFhdGEubGVuZ3RoLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBsb2FkdHJhdmVsKCkge1xyXG4gICAgbGV0IGRhYXRhID0gW107XHJcbiAgICBsZXQgUmVmZXJyYWxzID0gZGIuY29sbGVjdGlvbihcInJlZmVycmFsc1wiKTtcclxuICAgIFJlZmVycmFscy5nZXQoKS50aGVuKChxdWVyeVNuYXBzaG90KSA9PiB7XHJcbiAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgaWYgKGRvYy5kYXRhKCkuY2F0ZWdvcnkgPT0gXCJUcmF2ZWxcIikge1xyXG4gICAgICAgICAgZGFhdGEucHVzaChkb2MuZGF0YSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBkYXRhOiBkYWF0YSxcclxuICAgICAgICBsZW5ndGg6IGRhYXRhLmxlbmd0aCxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvYWRhbGwoKSB7XHJcbiAgICBsZXQgZGFhdGEgPSBbXTtcclxuICAgIGxldCBSZWZlcnJhbHMgPSBkYi5jb2xsZWN0aW9uKFwicmVmZXJyYWxzXCIpO1xyXG4gICAgUmVmZXJyYWxzLmdldCgpLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBkYWF0YS5wdXNoKGRvYy5kYXRhKCkpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZGF0YTogZGFhdGEsXHJcbiAgICAgICAgbGVuZ3RoOiBkYWF0YS5sZW5ndGgsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZShlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgIGxldCBkYWF0YSA9IFtdO1xyXG4gICAgbGV0IFJlZmVycmFscyA9IGRiLmNvbGxlY3Rpb24oXCJyZWZlcnJhbHNcIik7XHJcbiAgICBSZWZlcnJhbHMuZ2V0KCkudGhlbigocXVlcnlTbmFwc2hvdCkgPT4ge1xyXG4gICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGRvY1xyXG4gICAgICAgICAgICAuZGF0YSgpXHJcbiAgICAgICAgICAgIC5uYW1lLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgLmluY2x1ZGVzKHRoaXMuc3RhdGUuc2VhcmNoLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBkYWF0YS5wdXNoKGRvYy5kYXRhKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGRhdGE6IGRhYXRhLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcyk7XHJcbiAgICBjb25zdCBtZW51ID0gKFxyXG4gICAgICA8TWVudT5cclxuICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgPGEgb25DbGljaz17dGhpcy5sb2FkYWxsLmJpbmQodGhpcyl9IHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgTm8gRmlsdGVyXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMubG9hZHNob3AuYmluZCh0aGlzKX0gcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICBTaG9wcGluZ1xyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmxvYWRwcm9kLmJpbmQodGhpcyl9IHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgUHJvZHVjdGl2aXR5XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMubG9hZHRyYXZlbC5iaW5kKHRoaXMpfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgIFRyYXZlbFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmxvYWRwYXltZW50LmJpbmQodGhpcyl9IHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgUGF5bWVudFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmxvYWRvdGhlci5iaW5kKHRoaXMpfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgIE1pc2NhbGxhbmVvdXNcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgPC9NZW51PlxyXG4gICAgKTtcclxuXHJcbiAgICBsZXQgTGlzdCA9IFwiXCI7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5kYXRhID09IG51bGwpIHtcclxuICAgICAgTGlzdCA9IFwiTG9haW5nLi4uXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBMaXN0ID0gdGhpcy5zdGF0ZS5kYXRhLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPEl0ZW0ga2V5PXtpdGVtLm5hbWV9IGl0ZW09e2l0ZW19IC8+XHJcbiAgICAgICAgKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgTGlzdCA9IDxoNCBjbGFzc05hbWU9XCJtdC01XCI+TG9hZGluZy4uLjwvaDQ+O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXQtMiBtYi01XCI+XHJcbiAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICAgICAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtOWFJdDJuUnBDMTJVazlnUzliYURsNDExTlFBcEZtQzI2RXdBT0g4V2dabDVNWVl4RmZjK05jUGIxZEtHajdTa1wiXHJcbiAgICAgICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIiVQVUJMSUNfVVJMJS9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzAwMDAwMFwiIC8+XHJcbiAgICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICBjb250ZW50PVwiR3JhYiBDb3Vwb24gY29kZSBpcyBjb3Vwb24gY29kZXMgLyByZWZlcnJhbHMgZm9yIG5ldyB1c2Vycy4gR3JhYiBDb3Vwb25zIGFuZCBTYXZlIE1vbmV5IGJ5IG9ubGluZSBvZmZlcnMsIGRlYWxzLCBkaXNjb3VudCBieSBvdXIgbGF0ZXN0IFByb21vIGNvZGVzLiAgXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgICBuYW1lPVwia2V5d29yZFwiXHJcbiAgICAgICAgICAgICAgY29udGVudD1cImdyYWJvbiwgZ3JhYiBvbixncmFiY291cG9uY29kZSxncmFiIGNvdXBvbixjb3Vwb24gY29kZSxjb3Vwb24sIHJlZmVycmFsLCBlYXJuIG1vbmV5IG9ubGluZSwgZmlyc3QgdXNlcnMsIG5ldyB1c2Vycywgc2F2ZSBtb25leSxzYXZlLCBQcm9tbyBjb2RlLCBkZWFscywgZGlzY291bnQsbGF0ZXN0IGNvdXBvbiwgb25saW5lIHNob3BwaW5nIFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgY29udGVudD1cIkZpbmQgTGF0ZXN0IENvdXBvbnMgJmFtcDsgT2ZmZXJzIEZvciBPbmxpbmUgU2hvcHBpbmcgU2l0ZXMuIEdyYWJPbiBXaWxsIEVuc3VyZSBZb3UgR2V0IFRoZSBSaWdodCBQcm9tbyBDb2RlcywgRGVhbHMgJmFtcDsgRGlzY291bnQgRS1HaWZ0IENhcmRzIEZvciAyMDIwIHwgU0FWRSBPTiBFVkVSWVRISU5HXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIldlYnNpdGVcIiAvPlxyXG4gICAgICAgICAgICA8dGl0bGU+R3JhYiBDb3Vwb24gQ29kZTwvdGl0bGU+XHJcbiAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGNvbC0xMiBjb2wtbGctMyBjb2wtc20tMTIgY29sLW1kLTEyIG10LTIgbWItMiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duIG92ZXJsYXk9e21lbnV9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIyLjdlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICBDYXRlZ29yaWVzIDxJY29uIHR5cGU9XCJkb3duXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1jZW50ZXIgb3JkZXItZmlyc3QgIG10LTIgbWItMiAgYWxpZ24taXRlbXMtY2VudGVyIGNvbCBjb2wtMTIgY29sLWxnLTUgY29sLXNtLTEyIGNvbC1tZC0xMiBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyICBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjIxMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIlNyaXJhY2hhLCBjdXJzaXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJ1bi1Db3Vwb25cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiU3JpcmFjaGEsIGN1cnNpdmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1waWxsIGJvcmRlciBib3JkZXItZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMiBtci0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubGVuZ3RofSBvZmZlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBtbC0yXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIlNyaXJhY2hhLCBjdXJzaXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIGZvciBuZXcgdXNlcnMgb25seS5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgY29sLTEyIGNvbC1sZy00IGNvbC1zbS0xMiBjb2wtbWQtMTIgIG10LTIgbWItMiAganVzdGlmeS1jb250ZW50LWVuZFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBpZD1cInNlYXJjaFwiIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgU2VhcmNoXHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGlkPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7fX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2h9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNVwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCI1MDBweFwiIH19PlxyXG4gICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgIHtMaXN0fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9BbmFudDAxNlwiPkBhbmFudDAxNjwvYT4gKi99LlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9