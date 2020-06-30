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
      console.log(this.state);

      var menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Menu"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 7
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Menu"].Item, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 9
        }
      }, __jsx("a", {
        onClick: this.loadall.bind(this),
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 11
        }
      }, "No Filter")), __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Menu"].Item, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 9
        }
      }, __jsx("a", {
        onClick: this.loadshop.bind(this),
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 11
        }
      }, "Shopping")), __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Menu"].Item, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 9
        }
      }, __jsx("a", {
        onClick: this.loadprod.bind(this),
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 11
        }
      }, "Productivity")), __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Menu"].Item, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 9
        }
      }, __jsx("a", {
        onClick: this.loadtravel.bind(this),
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 11
        }
      }, "Travel")), __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Menu"].Item, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 9
        }
      }, __jsx("a", {
        onClick: this.loadpayment.bind(this),
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 11
        }
      }, "Payment")), __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Menu"].Item, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 9
        }
      }, __jsx("a", {
        onClick: this.loadother.bind(this),
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
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
                lineNumber: 223,
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
                lineNumber: 227,
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
          lineNumber: 233,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "container mt-2 mb-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 9
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 11
        }
      }, __jsx("meta", {
        charSet: "utf-8",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
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
          lineNumber: 237,
          columnNumber: 13
        }
      }), __jsx("link", {
        rel: "icon",
        href: "%PUBLIC_URL%/favicon.ico",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 13
        }
      }), __jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 13
        }
      }), __jsx("meta", {
        name: "theme-color",
        content: "#000000",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 13
        }
      }), __jsx("meta", {
        name: "description",
        content: "Grab Coupon code is coupon codes / referrals for new users. Grab Coupons and Save Money by online offers, deals, discount by our latest Promo codes.  ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 13
        }
      }), __jsx("meta", {
        name: "keyword",
        content: "grabon, grab on,grabcouponcode,grab coupon,coupon code,coupon, referral, earn money online, first users, new users, save money,save, Promo code, deals, discount,latest coupon, online shopping ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 13
        }
      }), __jsx("meta", {
        property: "og:description",
        content: "Find Latest Coupons & Offers For Online Shopping Sites. GrabOn Will Ensure You Get The Right Promo Codes, Deals & Discount E-Gift Cards For 2020 | SAVE ON EVERYTHING",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 13
        }
      }), __jsx("meta", {
        property: "og:type",
        content: "Website",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 13
        }
      }), __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 13
        }
      }, "Grab Coupon Code")), __jsx("div", {
        className: "row mb-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col col-12 col-lg-3 col-sm-12 col-md-12 mt-2 mb-2 justify-content-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 13
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Dropdown"], {
        overlay: menu,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266,
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
          lineNumber: 267,
          columnNumber: 17
        }
      }, "Categories ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_15__["default"], {
        type: "down",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 30
        }
      })))), __jsx("div", {
        className: "justify-content-center order-first  mt-2 mb-2  align-items-center col col-12 col-lg-5 col-sm-12 col-md-12 ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "col justify-content-center  align-items-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "d-flex flex-row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 17
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 19
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276,
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
          lineNumber: 277,
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
          lineNumber: 286,
          columnNumber: 23
        }
      }, __jsx("span", {
        className: "ml-2 mr-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294,
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
          lineNumber: 301,
          columnNumber: 17
        }
      }, "for new users only."))), __jsx("div", {
        className: "col col-12 col-lg-4 col-sm-12 col-md-12  mt-2 mb-2  justify-content-end",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312,
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
          lineNumber: 313,
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
          lineNumber: 316,
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
          lineNumber: 328,
          columnNumber: 11
        }
      }, " ", List), "."), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334,
          columnNumber: 9
        }
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var daata, ref, json;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref);

                daata = [];
                _context.next = 4;
                return db.ref("referrals");

              case 4:
                ref = _context.sent;
                ref.on("value", function (snapshot) {
                  daata.push(snapshot.val());
                }, function (errorObject) {}); // const res = await fetch("https://referral-e242d.firebaseio.com/referrals");

                console.log(res);
                _context.next = 9;
                return res.json();

              case 9:
                json = _context.sent;
                return _context.abrupt("return", {
                  data: daata,
                  length: daata.length
                });

              case 11:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJmaXJlYmFzZUNvbmZpZyIsImZpcmViYXNlIiwibGVuZ3RoIiwiZGIiLCJkYjEiLCJJbmRleCIsImRhdGEiLCJzZWFyY2giLCJkYWF0YSIsIlJlZmVycmFscyIsImNvbGxlY3Rpb24iLCJnZXQiLCJ0aGVuIiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJkb2MiLCJjYXRlZ29yeSIsInB1c2giLCJzZXRTdGF0ZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJtZW51IiwibG9hZGFsbCIsImJpbmQiLCJsb2Fkc2hvcCIsImxvYWRwcm9kIiwibG9hZHRyYXZlbCIsImxvYWRwYXltZW50IiwibG9hZG90aGVyIiwiTGlzdCIsIm1hcCIsIml0ZW0iLCJ3aWR0aCIsImhlaWdodCIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsImJhY2tncm91bmRDb2xvciIsImZvbnRXZWlnaHQiLCJkaXNwbGF5Iiwib25DaGFuZ2UiLCJtYXJnaW5Cb3R0b20iLCJyZWYiLCJvbiIsInNuYXBzaG90IiwidmFsIiwiZXJyb3JPYmplY3QiLCJyZXMiLCJqc29uIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLE1BQU0sR0FBR0MsZ0RBQWMsQ0FBQ0EsY0FBNUI7O0FBQ0EsSUFBSSxDQUFDQyw4Q0FBQSxDQUFjQyxNQUFuQixFQUEyQjtBQUN6QkQseURBQUEsQ0FBdUJGLE1BQXZCO0FBQ0Q7O0FBRUQsSUFBTUksRUFBRSxHQUFHRixtREFBQSxFQUFY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Q0FBQ1MsSUFBTixDQUFXa0MsUUFBUSxDQUFDQyxHQUFULEVBQVg7QUFDRCxpQkFKSCxFQUtFLFVBQVVDLFdBQVYsRUFBdUIsQ0FBRSxDQUwzQixFLENBT0E7O0FBQ0EzQix1QkFBTyxDQUFDQyxHQUFSLENBQVkyQixHQUFaOzt1QkFDbUJBLEdBQUcsQ0FBQ0MsSUFBSixFOzs7QUFBYkEsb0I7aURBQ0M7QUFDTGpELHNCQUFJLEVBQUVFLEtBREQ7QUFFTE4sd0JBQU0sRUFBRU0sS0FBSyxDQUFDTjtBQUZULGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbkJ3QnNELDZDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmU0OGUwNDgyODliMjM1NDk2ZDNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIjtcclxuXHJcbmltcG9ydCB7IE1lbnUsIERyb3Bkb3duLCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XHJcbmltcG9ydCBJdGVtIGZyb20gXCIuLi9jb21wb25lbnRzL0l0ZW1cIjtcclxuXHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9kYXRhYmFzZVwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IGZpcmViYXNlQ29uZmlnIGZyb20gXCIuLi9jb25maWdcIjtcclxuXHJcbnZhciBjb25maWcgPSBmaXJlYmFzZUNvbmZpZy5maXJlYmFzZUNvbmZpZztcclxuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcclxufVxyXG5cclxuY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcclxuY29uc3QgZGIxID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGRhdGE6IFtdLFxyXG4gICAgc2VhcmNoOiBcIlwiLFxyXG4gICAgbGVuZ3RoOiBcIlwiLFxyXG4gIH07XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7fSkge1xyXG4gICAgbGV0IGRhYXRhID0gW107XHJcbiAgICB2YXIgcmVmID0gYXdhaXQgZGIucmVmKFwicmVmZXJyYWxzXCIpO1xyXG4gICAgcmVmLm9uKFxyXG4gICAgICBcInZhbHVlXCIsXHJcbiAgICAgIGZ1bmN0aW9uIChzbmFwc2hvdCkge1xyXG4gICAgICAgIGRhYXRhLnB1c2goc25hcHNob3QudmFsKCkpO1xyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbiAoZXJyb3JPYmplY3QpIHt9XHJcbiAgICApO1xyXG4gICAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3JlZmVycmFsLWUyNDJkLmZpcmViYXNlaW8uY29tL3JlZmVycmFsc1wiKTtcclxuICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGE6IGRhYXRhLFxyXG4gICAgICBsZW5ndGg6IGRhYXRhLmxlbmd0aCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvLyAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAvLyAgICAgbGV0IGRhYXRhID0gW107XHJcbiAgLy8gICAgIGxldCBSZWZlcnJhbHMgPSBkYi5jb2xsZWN0aW9uKFwicmVmZXJyYWxzXCIpO1xyXG4gIC8vICAgICBSZWZlcnJhbHMuZ2V0KClcclxuICAvLyAgICAgLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuICAvLyAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gIC8vICAgICAgICAgZGFhdGEucHVzaChkb2MuZGF0YSgpKTtcclxuICAvLyAgICAgICB9KTtcclxuICAvLyAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAvLyAgICAgICAgIGRhdGE6IGRhYXRhLFxyXG4gIC8vICAgICAgICAgbGVuZ3RoOiBkYWF0YS5sZW5ndGgsXHJcbiAgLy8gICAgICAgfSk7XHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vICAgfVxyXG5cclxuICBsb2Fkc2hvcCgpIHtcclxuICAgIGxldCBkYWF0YSA9IFtdO1xyXG4gICAgbGV0IFJlZmVycmFscyA9IGRiLmNvbGxlY3Rpb24oXCJyZWZlcnJhbHNcIik7XHJcbiAgICBSZWZlcnJhbHMuZ2V0KCkudGhlbigocXVlcnlTbmFwc2hvdCkgPT4ge1xyXG4gICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGlmIChkb2MuZGF0YSgpLmNhdGVnb3J5ID09IFwic2hvcHBpbmdcIikge1xyXG4gICAgICAgICAgZGFhdGEucHVzaChkb2MuZGF0YSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBkYXRhOiBkYWF0YSxcclxuICAgICAgICBsZW5ndGg6IGRhYXRhLmxlbmd0aCxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvYWRwcm9kKCkge1xyXG4gICAgbGV0IGRhYXRhID0gW107XHJcbiAgICBsZXQgUmVmZXJyYWxzID0gZGIuY29sbGVjdGlvbihcInJlZmVycmFsc1wiKTtcclxuICAgIFJlZmVycmFscy5nZXQoKS50aGVuKChxdWVyeVNuYXBzaG90KSA9PiB7XHJcbiAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgaWYgKGRvYy5kYXRhKCkuY2F0ZWdvcnkgPT0gXCJwcm9kdWN0aXZlXCIpIHtcclxuICAgICAgICAgIGRhYXRhLnB1c2goZG9jLmRhdGEoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZGF0YTogZGFhdGEsXHJcbiAgICAgICAgbGVuZ3RoOiBkYWF0YS5sZW5ndGgsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2Fkb3RoZXIoKSB7XHJcbiAgICBsZXQgZGFhdGEgPSBbXTtcclxuICAgIGxldCBSZWZlcnJhbHMgPSBkYi5jb2xsZWN0aW9uKFwicmVmZXJyYWxzXCIpO1xyXG4gICAgUmVmZXJyYWxzLmdldCgpLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBpZiAoZG9jLmRhdGEoKS5jYXRlZ29yeSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICBkYWF0YS5wdXNoKGRvYy5kYXRhKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGRhdGE6IGRhYXRhLFxyXG4gICAgICAgIGxlbmd0aDogZGFhdGEubGVuZ3RoLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZHBheW1lbnQoKSB7XHJcbiAgICBsZXQgZGFhdGEgPSBbXTtcclxuICAgIGxldCBSZWZlcnJhbHMgPSBkYi5jb2xsZWN0aW9uKFwicmVmZXJyYWxzXCIpO1xyXG4gICAgUmVmZXJyYWxzLmdldCgpLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBpZiAoZG9jLmRhdGEoKS5jYXRlZ29yeSA9PSBcInBheW1lbnRcIikge1xyXG4gICAgICAgICAgZGFhdGEucHVzaChkb2MuZGF0YSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBkYXRhOiBkYWF0YSxcclxuICAgICAgICBsZW5ndGg6IGRhYXRhLmxlbmd0aCxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgbG9hZHRyYXZlbCgpIHtcclxuICAgIGxldCBkYWF0YSA9IFtdO1xyXG4gICAgbGV0IFJlZmVycmFscyA9IGRiLmNvbGxlY3Rpb24oXCJyZWZlcnJhbHNcIik7XHJcbiAgICBSZWZlcnJhbHMuZ2V0KCkudGhlbigocXVlcnlTbmFwc2hvdCkgPT4ge1xyXG4gICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIGlmIChkb2MuZGF0YSgpLmNhdGVnb3J5ID09IFwiVHJhdmVsXCIpIHtcclxuICAgICAgICAgIGRhYXRhLnB1c2goZG9jLmRhdGEoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZGF0YTogZGFhdGEsXHJcbiAgICAgICAgbGVuZ3RoOiBkYWF0YS5sZW5ndGgsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2FkYWxsKCkge1xyXG4gICAgbGV0IGRhYXRhID0gW107XHJcbiAgICBsZXQgUmVmZXJyYWxzID0gZGIuY29sbGVjdGlvbihcInJlZmVycmFsc1wiKTtcclxuICAgIFJlZmVycmFscy5nZXQoKS50aGVuKChxdWVyeVNuYXBzaG90KSA9PiB7XHJcbiAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgZGFhdGEucHVzaChkb2MuZGF0YSgpKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGRhdGE6IGRhYXRhLFxyXG4gICAgICAgIGxlbmd0aDogZGFhdGEubGVuZ3RoLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UoZSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICBsZXQgZGFhdGEgPSBbXTtcclxuICAgIGxldCBSZWZlcnJhbHMgPSBkYi5jb2xsZWN0aW9uKFwicmVmZXJyYWxzXCIpO1xyXG4gICAgUmVmZXJyYWxzLmdldCgpLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBkb2NcclxuICAgICAgICAgICAgLmRhdGEoKVxyXG4gICAgICAgICAgICAubmFtZS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgIC5pbmNsdWRlcyh0aGlzLnN0YXRlLnNlYXJjaC50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgZGFhdGEucHVzaChkb2MuZGF0YSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBkYXRhOiBkYWF0YSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgICBjb25zdCBtZW51ID0gKFxyXG4gICAgICA8TWVudT5cclxuICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgPGEgb25DbGljaz17dGhpcy5sb2FkYWxsLmJpbmQodGhpcyl9IHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgTm8gRmlsdGVyXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMubG9hZHNob3AuYmluZCh0aGlzKX0gcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICBTaG9wcGluZ1xyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmxvYWRwcm9kLmJpbmQodGhpcyl9IHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgUHJvZHVjdGl2aXR5XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMubG9hZHRyYXZlbC5iaW5kKHRoaXMpfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgIFRyYXZlbFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmxvYWRwYXltZW50LmJpbmQodGhpcyl9IHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgUGF5bWVudFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmxvYWRvdGhlci5iaW5kKHRoaXMpfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgIE1pc2NhbGxhbmVvdXNcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgPC9NZW51PlxyXG4gICAgKTtcclxuXHJcbiAgICBsZXQgTGlzdCA9IFwiXCI7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5kYXRhID09IG51bGwpIHtcclxuICAgICAgTGlzdCA9IFwiTG9haW5nLi4uXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBMaXN0ID0gdGhpcy5zdGF0ZS5kYXRhLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPEl0ZW0ga2V5PXtpdGVtLm5hbWV9IGl0ZW09e2l0ZW19IC8+XHJcbiAgICAgICAgKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgTGlzdCA9IDxoNCBjbGFzc05hbWU9XCJtdC01XCI+TG9hZGluZy4uLjwvaDQ+O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXQtMiBtYi01XCI+XHJcbiAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICAgICAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtOWFJdDJuUnBDMTJVazlnUzliYURsNDExTlFBcEZtQzI2RXdBT0g4V2dabDVNWVl4RmZjK05jUGIxZEtHajdTa1wiXHJcbiAgICAgICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIiVQVUJMSUNfVVJMJS9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzAwMDAwMFwiIC8+XHJcbiAgICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICBjb250ZW50PVwiR3JhYiBDb3Vwb24gY29kZSBpcyBjb3Vwb24gY29kZXMgLyByZWZlcnJhbHMgZm9yIG5ldyB1c2Vycy4gR3JhYiBDb3Vwb25zIGFuZCBTYXZlIE1vbmV5IGJ5IG9ubGluZSBvZmZlcnMsIGRlYWxzLCBkaXNjb3VudCBieSBvdXIgbGF0ZXN0IFByb21vIGNvZGVzLiAgXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgICBuYW1lPVwia2V5d29yZFwiXHJcbiAgICAgICAgICAgICAgY29udGVudD1cImdyYWJvbiwgZ3JhYiBvbixncmFiY291cG9uY29kZSxncmFiIGNvdXBvbixjb3Vwb24gY29kZSxjb3Vwb24sIHJlZmVycmFsLCBlYXJuIG1vbmV5IG9ubGluZSwgZmlyc3QgdXNlcnMsIG5ldyB1c2Vycywgc2F2ZSBtb25leSxzYXZlLCBQcm9tbyBjb2RlLCBkZWFscywgZGlzY291bnQsbGF0ZXN0IGNvdXBvbiwgb25saW5lIHNob3BwaW5nIFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgY29udGVudD1cIkZpbmQgTGF0ZXN0IENvdXBvbnMgJmFtcDsgT2ZmZXJzIEZvciBPbmxpbmUgU2hvcHBpbmcgU2l0ZXMuIEdyYWJPbiBXaWxsIEVuc3VyZSBZb3UgR2V0IFRoZSBSaWdodCBQcm9tbyBDb2RlcywgRGVhbHMgJmFtcDsgRGlzY291bnQgRS1HaWZ0IENhcmRzIEZvciAyMDIwIHwgU0FWRSBPTiBFVkVSWVRISU5HXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIldlYnNpdGVcIiAvPlxyXG4gICAgICAgICAgICA8dGl0bGU+R3JhYiBDb3Vwb24gQ29kZTwvdGl0bGU+XHJcbiAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGNvbC0xMiBjb2wtbGctMyBjb2wtc20tMTIgY29sLW1kLTEyIG10LTIgbWItMiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duIG92ZXJsYXk9e21lbnV9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIyLjdlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICBDYXRlZ29yaWVzIDxJY29uIHR5cGU9XCJkb3duXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1jZW50ZXIgb3JkZXItZmlyc3QgIG10LTIgbWItMiAgYWxpZ24taXRlbXMtY2VudGVyIGNvbCBjb2wtMTIgY29sLWxnLTUgY29sLXNtLTEyIGNvbC1tZC0xMiBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyICBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjIxMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIlNyaXJhY2hhLCBjdXJzaXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJ1bi1Db3Vwb25cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiU3JpcmFjaGEsIGN1cnNpdmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1waWxsIGJvcmRlciBib3JkZXItZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMiBtci0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubGVuZ3RofSBvZmZlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBtbC0yXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIlNyaXJhY2hhLCBjdXJzaXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIGZvciBuZXcgdXNlcnMgb25seS5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgY29sLTEyIGNvbC1sZy00IGNvbC1zbS0xMiBjb2wtbWQtMTIgIG10LTIgbWItMiAganVzdGlmeS1jb250ZW50LWVuZFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBpZD1cInNlYXJjaFwiIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgU2VhcmNoXHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGlkPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7fX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2h9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNVwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCI1MDBweFwiIH19PlxyXG4gICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgIHtMaXN0fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9BbmFudDAxNlwiPkBhbmFudDAxNjwvYT4gKi99LlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9