module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "8lYe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Footer = () => {
  var date = new Date();
  return __jsx("div", {
    className: "fixed-bottom mt-5",
    style: {
      height: "50px",
      backgroundColor: "lightblue"
    }
  }, __jsx("div", null, __jsx("div", {
    className: "mt-2"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col ml-5"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about"
  }, __jsx("a", {
    style: {
      color: "black"
    },
    style: {
      color: "black"
    }
  }, "About")), __jsx("br", null), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/policy"
  }, __jsx("a", {
    style: {
      color: "black"
    },
    style: {
      color: "black"
    }
  }, "Privacy Policy"))), __jsx("div", {
    className: "col"
  }, "\xA9", date.getFullYear())))));
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "Mn+7":
/***/ (function(module, exports) {

module.exports = require("firebase/database");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ pages_Index; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "isomorphic-fetch"
var external_isomorphic_fetch_ = __webpack_require__("W+0S");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");
var icons_default = /*#__PURE__*/__webpack_require__.n(icons_);

// EXTERNAL MODULE: ./components/Footer.js
var Footer = __webpack_require__("8lYe");

// CONCATENATED MODULE: ./components/ItemBox.js
var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class ItemBox_ItemBox extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      visible: false,
      phone: ""
    });

    _defineProperty(this, "hide", () => {
      this.setState({
        visible: false
      });
    });

    _defineProperty(this, "handleVisibleChange", visible => {
      this.setState({
        visible
      });
    });
  }

  copy() {
    var code = this.props.item.refercode;
    var tempInput = document.createElement("input");
    tempInput.value = code;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  share() {
    var item = this.props.item;
    var msg = `Download ${item.name} - ${item.description}.\nUse the code: "${item.refercode}" to get: *${item.reward}* \nor just click on the link: ${item.downloadurl} `;
    var url = `https://api.whatsapp.com/send?phone=91${this.state.phone}&text=${msg}`;
    var tempLink = document.createElement("a");
    tempLink.href = url;
    tempLink.target = "_blank";
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
    console.log(msg);
  }

  render() {
    const contentphone = __jsx("div", null, __jsx("input", {
      type: "text",
      placeholder: "mobile no.",
      name: "phone",
      className: "form-control",
      onChange: this.onChange.bind(this),
      value: this.state.phone
    }), __jsx("button", {
      style: {
        color: "white",
        backgroundColor: "#60BE92"
      },
      onClick: this.share.bind(this)
    }, "Share"));

    var item = this.props.item; // console.log(item);
    // console.log(item.name);

    const content = __jsx("div", {
      itemProp: "description",
      style: {
        width: "120px"
      }
    }, __jsx("p", null, item.description));

    return __jsx("article", {
      itemScope: true,
      itemType: "https://schema.org/Thing",
      className: "card mb-2 mt-2",
      style: {
        fontFamily: "Lato, sans-serif"
      }
    }, __jsx("div", {
      className: "d-flex flex-row "
    }, __jsx("div", {
      className: "flex-col flex-fill d-flex align-items-center justify-content-center"
    }, __jsx("img", {
      itemProp: "image",
      src: item.imageurl,
      style: {
        border: "5px",
        borderRadius: "50%",
        width: "50px"
      }
    })), __jsx("div", {
      itemScope: true,
      itemType: "https://schema.org/Offer",
      className: "flex-col flex-fill d-flex align-items-center justify-content-left"
    }, __jsx(external_antd_["Popover"], {
      itemProp: "offeredBy",
      content: content,
      style: {
        width: "20px"
      }
    }, " ", __jsx("b", null, item.name), " ", __jsx("div", {
      className: "text-muted",
      style: {
        fontSize: "70%"
      }
    }, "category: ", item.category))), __jsx("div", {
      itemProp: "identifier",
      className: "flex-col flex-fill d-flex align-items-center justify-content-center"
    }, "Code:", " ", __jsx(external_antd_["Popover"], {
      content: __jsx("a", {
        onClick: this.hide
      }, "Copied"),
      trigger: "click",
      visible: this.state.visible,
      onVisibleChange: this.handleVisibleChange
    }, __jsx("div", {
      style: {
        cursor: "pointer"
      },
      onClick: this.copy.bind(this)
    }, __jsx("b", {
      className: "mr-2",
      id: "code"
    }, " ", __jsx("strong", null, item.refercode)), " ", __jsx("img", {
      style: {
        width: "12%"
      },
      src: "https://img.icons8.com/dusk/64/000000/copy.png"
    })))), __jsx("div", {
      className: "flex-col flex-fill d-flex align-items-center justify-content-center"
    }, __jsx("img", {
      className: "justify-content-start",
      src: "https://img.icons8.com/bubbles/50/000000/right.png"
    }), __jsx("strong", null, __jsx("a", {
      itemProp: "url",
      href: item.downloadurl
    }, __jsx("div", {
      itemProp: "disambiguatingDescription"
    }, item.reward)))), __jsx(external_antd_["Popover"], {
      className: "hide",
      content: contentphone,
      placement: "left",
      trigger: "click",
      title: "Title"
    }, __jsx("img", {
      style: {
        border: "5px",
        borderRadius: "50%",
        width: "50px"
      },
      src: "data:image/png;base64,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"
    }))));
  }

}
// EXTERNAL MODULE: external "firebase"
var external_firebase_ = __webpack_require__("pNaP");

// EXTERNAL MODULE: external "firebase/database"
var database_ = __webpack_require__("Mn+7");

// EXTERNAL MODULE: external "firebase/firestore"
var firestore_ = __webpack_require__("bnmT");

// CONCATENATED MODULE: ./config.js
/* harmony default export */ var config = ({
  firebaseConfig: {
    apiKey: "AIzaSyAJ1P9LWH8Lol1XMIExrEzC8VEHRY2Zpv4",
    authDomain: "referral-e242d.firebaseapp.com",
    databaseURL: "https://referral-e242d.firebaseio.com",
    projectId: "referral-e242d",
    storageBucket: "referral-e242d.appspot.com",
    messagingSenderId: "765488949298",
    appId: "1:765488949298:web:174303a50cb069a8e4f42b",
    measurementId: "G-G86PQZ1LQD"
  }
});
// CONCATENATED MODULE: ./pages/index.js
var pages_jsx = external_react_default.a.createElement;

function pages_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var pages_config = config.firebaseConfig;

if (!external_firebase_["apps"].length) {
  external_firebase_["initializeApp"](pages_config);
}

const db = external_firebase_["firestore"]();
const db1 = external_firebase_["database"]();
class pages_Index extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    pages_defineProperty(this, "state", {
      data: null,
      search: "",
      length: ""
    });
  }

  static async getInitialProps({}) {
    let daata = [];
    var ref = await db1.ref("referrals");
    ref.on("value", function (snapshot) {
      daata.push(snapshot.val());
    }, function (errorObject) {});
    return {
      data: daata,
      length: daata.length
    };
  }

  loadshop() {
    let daata = [];
    let Referrals = db.collection("referrals");
    Referrals.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        if (doc.data().category == "shopping") {
          daata.push(doc.data());
        }
      });
      this.setState({
        data: daata,
        length: daata.length
      });
    });
  }

  loadprod() {
    let daata = [];
    let Referrals = db.collection("referrals");
    Referrals.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        if (doc.data().category == "productive") {
          daata.push(doc.data());
        }
      });
      this.setState({
        data: daata,
        length: daata.length
      });
    });
  }

  loadother() {
    let daata = [];
    let Referrals = db.collection("referrals");
    Referrals.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        if (doc.data().category == "") {
          daata.push(doc.data());
        }
      });
      this.setState({
        data: daata,
        length: daata.length
      });
    });
  }

  loadpayment() {
    let daata = [];
    let Referrals = db.collection("referrals");
    Referrals.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        if (doc.data().category == "payment") {
          daata.push(doc.data());
        }
      });
      this.setState({
        data: daata,
        length: daata.length
      });
    });
  }

  loadtravel() {
    let daata = [];
    let Referrals = db.collection("referrals");
    Referrals.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        if (doc.data().category == "Travel") {
          daata.push(doc.data());
        }
      });
      this.setState({
        data: daata,
        length: daata.length
      });
    });
  }

  loadall() {
    let daata = [];
    let Referrals = db.collection("referrals");
    Referrals.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        daata.push(doc.data());
      });
      this.setState({
        data: daata,
        length: daata.length
      });
    });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    let daata = [];
    let Referrals = db.collection("referrals");
    Referrals.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        if (doc.data().name.toLowerCase().includes(this.state.search.toLowerCase())) {
          daata.push(doc.data());
        }
      });
      this.setState({
        data: daata
      });
    });
  }

  render() {
    let inData = this.props.data[0];
    console.log(inData);

    const menu = pages_jsx(external_antd_["Menu"], null, pages_jsx(external_antd_["Menu"].Item, null, pages_jsx("a", {
      onClick: this.loadall.bind(this),
      rel: "noopener noreferrer"
    }, "No Filter")), pages_jsx(external_antd_["Menu"].Item, null, pages_jsx("a", {
      onClick: this.loadshop.bind(this),
      rel: "noopener noreferrer"
    }, "Shopping")), pages_jsx(external_antd_["Menu"].Item, null, pages_jsx("a", {
      onClick: this.loadprod.bind(this),
      rel: "noopener noreferrer"
    }, "Productivity")), pages_jsx(external_antd_["Menu"].Item, null, pages_jsx("a", {
      onClick: this.loadtravel.bind(this),
      rel: "noopener noreferrer"
    }, "Travel")), pages_jsx(external_antd_["Menu"].Item, null, pages_jsx("a", {
      onClick: this.loadpayment.bind(this),
      rel: "noopener noreferrer"
    }, "Payment")), pages_jsx(external_antd_["Menu"].Item, null, pages_jsx("a", {
      onClick: this.loadother.bind(this),
      rel: "noopener noreferrer"
    }, "Miscallaneous")));

    let List = "";

    if (this.state.data != null) {
      List = this.state.data.map(item => pages_jsx(ItemBox_ItemBox, {
        key: item.name,
        item: item
      }));
    } else if (inData && inData.length > 0) {
      List = inData.map(item => pages_jsx(ItemBox_ItemBox, {
        key: item.name,
        item: item
      }));
    } else {
      {
        List = pages_jsx("h4", {
          className: "mt-5"
        }, "Loading...");
      }
    }

    return pages_jsx("div", null, pages_jsx("div", {
      className: "container mt-2 mb-5"
    }, pages_jsx(head_default.a, null, pages_jsx("meta", {
      charSet: "utf-8"
    }), pages_jsx("link", {
      rel: "stylesheet",
      href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
      integrity: "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",
      crossorigin: "anonymous"
    }), pages_jsx("link", {
      rel: "icon",
      href: "%PUBLIC_URL%/favicon.ico"
    }), pages_jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }), pages_jsx("meta", {
      name: "theme-color",
      content: "#000000"
    }), pages_jsx("meta", {
      name: "description",
      content: "Grab Coupon code is coupon codes / referrals for new users. Grab Coupons and Save Money by online offers, deals, discount by our latest Promo codes.  "
    }), pages_jsx("meta", {
      name: "keyword",
      content: "grabon, grab on,grabcouponcode,grab coupon,coupon code,coupon, referral, earn money online, first users, new users, save money,save, Promo code, deals, discount,latest coupon, online shopping "
    }), pages_jsx("meta", {
      property: "og:description",
      content: "Find Latest Coupons & Offers For Online Shopping Sites. GrabOn Will Ensure You Get The Right Promo Codes, Deals & Discount E-Gift Cards For 2020 | SAVE ON EVERYTHING"
    }), pages_jsx("meta", {
      property: "og:type",
      content: "Website"
    }), pages_jsx("title", null, "Grab Coupon Code")), pages_jsx("div", {
      className: "row mb-3"
    }, pages_jsx("div", {
      className: "col col-12 col-lg-3 col-sm-12 col-md-12 mt-2 mb-2 justify-content-center"
    }, pages_jsx(external_antd_["Dropdown"], {
      overlay: menu
    }, pages_jsx(external_antd_["Button"], {
      style: {
        width: "100%",
        height: "2.7em"
      }
    }, "Categories ", pages_jsx(icons_default.a, {
      type: "down"
    })))), pages_jsx("div", {
      className: "justify-content-center order-first  mt-2 mb-2  align-items-center col col-12 col-lg-5 col-sm-12 col-md-12 "
    }, pages_jsx("div", {
      className: "col justify-content-center  align-items-center"
    }, pages_jsx("div", {
      className: "d-flex flex-row"
    }, pages_jsx(link_default.a, {
      href: "/"
    }, pages_jsx("a", null, pages_jsx("b", {
      style: {
        fontSize: "210%",
        fontFamily: "Sriracha, cursive"
      }
    }, "Run-Coupon"), pages_jsx("span", {
      style: {
        fontSize: "80%",
        fontFamily: "Sriracha, cursive",
        backgroundColor: "white"
      },
      className: "rounded-pill border border-danger ml-2"
    }, pages_jsx("span", {
      className: "ml-2 mr-2"
    }, this.state.data == null && inData ? inData.length : this.state.data.length, " ", "offers"))))), pages_jsx("div", {
      className: "d-flex flex-row ml-2",
      style: {
        fontWeight: "bold",
        fontFamily: "Sriracha, cursive"
      }
    }, "for new users only."))), pages_jsx("div", {
      className: "col col-12 col-lg-4 col-sm-12 col-md-12  mt-2 mb-2  justify-content-end"
    }, pages_jsx("label", {
      id: "search",
      style: {
        display: "none"
      }
    }, "Search"), pages_jsx("input", {
      id: "search",
      style: {},
      className: "form-control",
      placeholder: "Search",
      type: "text",
      name: "search",
      onChange: this.onChange.bind(this),
      value: this.state.search
    }))), pages_jsx("div", {
      className: "mb-5",
      style: {
        marginBottom: "500px"
      }
    }, " ", List), "."), pages_jsx(Footer["a" /* default */], null));
  }

}

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "W+0S":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "bnmT":
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__("bzos");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__("bzos");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (false) {}

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "pNaP":
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });