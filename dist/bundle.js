/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_los_coristas_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/los-coristas.jpg */ "./src/img/los-coristas.jpg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_img_los_coristas_jpg__WEBPACK_IMPORTED_MODULE_3__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n/* Header */\r\n#top{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    background-color: #202830;\r\n\r\n}\r\n#logo{\r\n    width: 30%;\r\n}\r\n#nav{\r\n    width: 30%;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n}\r\n#nav-items{\r\n    width: 100%;\r\n    color: #aaa;\r\n    font-size: 17px;\r\n    list-style: none;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n#nav-items li:hover{\r\n    color: white;\r\n}\r\n#mis-listas{\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n#usuario{\r\n    width: min-content;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding-right: 5px;\r\n}\r\n#usuario img{\r\n    width: 30px;\r\n    border-radius: 1em;\r\n    margin-right: 5px;\r\n}\r\n\r\n/* Body */\r\nbody {\r\n    background-color: #202830;\r\n}\r\n#contenedor{\r\n    width: 95%;\r\n    margin: auto;\r\n}\r\nh1{\r\n    color: white;\r\n    font-size: 35px;\r\n    margin-top: 20px;\r\n}\r\n\r\n/* Portada */\r\n#cover{\r\n    font-size: 16px;\r\n    min-height: 40.62em;\r\n    color: white;\r\n    background: linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2),rgba(30, 40, 48, 1)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-size: cover;\r\n    display: flex;\r\n    align-items: flex-end;\r\n}\r\n#cont-cover{\r\n    margin-bottom: 5em;\r\n    margin-left: 4em;\r\n}\r\n#cont-cover h2{\r\n    font-size: 3em;\r\n    margin-bottom: 20px;\r\n}\r\n#cont-cover p{\r\n    font-size: 1.5em;\r\n    width: 60%;\r\n    margin-bottom: 20px;\r\n}\r\n#cont-cover button{\r\n    font-size: 1.2em;\r\n    padding: .8em 2.5em;\r\n    border-style: none;\r\n    border-radius: .5em;\r\n    background-color: rgba(0, 0, 0, .5);\r\n    cursor: pointer;\r\n    color: white;\r\n    margin-right: 1em;\r\n}\r\n#cont-cover button i{\r\n    margin-right: .3em;\r\n}\r\n#cont-cover button:hover{\r\n    background-color: white;\r\n    color: black;\r\n}\r\n\r\n/* Listas */\r\n.lista{\r\n    margin-bottom: 70px;\r\n    margin-top: 40px;\r\n}\r\n.lista h2{\r\n    color: white;\r\n    font-size: 25px;\r\n}\r\n.cont-peliculas{\r\n    display: flex;\r\n    align-items: center;\r\n    position: relative;\r\n}\r\n.btn-prev,\r\n.btn-next{\r\n    position: absolute;\r\n    border: none;\r\n    background: rgba(0, 0, 0, 0.3);\r\n    font-size: 40px;\r\n    height: 70px;\r\n    line-height: 40px;\r\n    width: 40px;\r\n    color: white;\r\n    cursor: pointer;\r\n    z-index: 500;\r\n    transition: .2 ease all;\r\n    display: none;\r\n}\r\n.btn-prev:hover,\r\n.btn-next:hover{\r\n    background-color: rgba(0, 0, 0, 0.9);\r\n}\r\n.btn-prev{\r\n    left: 0;\r\n}\r\n.btn-next{\r\n    right: 0;\r\n}\r\n\r\n/* Carousel */\r\n.cont-carousel{\r\n    width: 93%;\r\n    padding: 20px 0;\r\n    overflow: hidden;\r\n    scroll-behavior: smooth;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.carousel{\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n}\r\n.pelicula{\r\n    transition: .3s ease all;\r\n    box-shadow: 5px 5px 10px rgba(0, 0, 0, .3);\r\n    width: min-content;\r\n}\r\n.pelicula.hover{\r\n    transform: scale(1.1);\r\n    transform-origin: center;\r\n}\r\n.carousel.horizontal .pelicula img{\r\n    height: 200px;\r\n    vertical-align: middle;\r\n}\r\n.carousel.vertical .pelicula img{\r\n    height: 311px;\r\n    vertical-align: middle;\r\n}\r\n\r\n/* Paginación */\r\n.indicadores{\r\n    width: max-content;\r\n    margin: auto;\r\n}\r\n.indicadores button{\r\n    background-color: rgba(255, 255, 255, .6);\r\n    height: 5px;\r\n    width: 60px;\r\n    cursor: pointer;\r\n    border: none;\r\n    margin-right: 5px;\r\n}\r\n.indicadores button:hover{\r\n    background-color: rgba(255, 0, 0, .3);\r\n}\r\n.indicadores button.activo{\r\n    background-color: red;\r\n}\r\n\r\n@media screen and (max-width: 800px){\r\n    #logo{\r\n        width: 40%;\r\n    }\r\n    #top #nav{\r\n        display: none;\r\n    }\r\n    #cont-cover h2{\r\n        font-size: 2em;\r\n    }\r\n    #cont-cover p{\r\n        font-size: 1.3em;\r\n    }\r\n\r\n    .indicadores{\r\n        display: none;\r\n    }\r\n    .cont-carousel{\r\n        overflow: visible;\r\n    }\r\n    .btn-prev, .btn-next{\r\n        display: none;\r\n    }\r\n    .carousel.horizontal{\r\n        display: grid;\r\n        grid-template-columns: repeat(2, 1fr);\r\n        gap: 20px;\r\n        justify-items: center;\r\n    }\r\n    .carousel.horizontal .pelicula img{\r\n        height: 170px;\r\n    }\r\n    .carousel.vertical{\r\n        display: grid;\r\n        grid-template-columns: repeat(3, 1fr);\r\n        gap: 20px;\r\n        justify-items: center;\r\n    }\r\n\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,yCAAyC;AAC7C;;AAEA,WAAW;AACX;IACI,aAAa;IACb,8BAA8B;IAC9B,yBAAyB;;AAE7B;AACA;IACI,UAAU;AACd;AACA;IACI,UAAU;IACV,gBAAgB;IAChB,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,kBAAkB;AACtB;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA,SAAS;AACT;IACI,yBAAyB;AAC7B;AACA;IACI,UAAU;IACV,YAAY;AAChB;AACA;IACI,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB;;AAEA,YAAY;AACZ;IACI,eAAe;IACf,mBAAmB;IACnB,YAAY;IACZ,8HAAoH;IACpH,sBAAsB;IACtB,aAAa;IACb,qBAAqB;AACzB;AACA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,cAAc;IACd,mBAAmB;AACvB;AACA;IACI,gBAAgB;IAChB,UAAU;IACV,mBAAmB;AACvB;AACA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;IACnB,mCAAmC;IACnC,eAAe;IACf,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,uBAAuB;IACvB,YAAY;AAChB;;AAEA,WAAW;AACX;IACI,mBAAmB;IACnB,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,eAAe;AACnB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;AACtB;AACA;;IAEI,kBAAkB;IAClB,YAAY;IACZ,8BAA8B;IAC9B,eAAe;IACf,YAAY;IACZ,iBAAiB;IACjB,WAAW;IACX,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,uBAAuB;IACvB,aAAa;AACjB;AACA;;IAEI,oCAAoC;AACxC;AACA;IACI,OAAO;AACX;AACA;IACI,QAAQ;AACZ;;AAEA,aAAa;AACb;IACI,UAAU;IACV,eAAe;IACf,gBAAgB;IAChB,uBAAuB;IACvB,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,iBAAiB;AACrB;AACA;IACI,wBAAwB;IACxB,0CAA0C;IAC1C,kBAAkB;AACtB;AACA;IACI,qBAAqB;IACrB,wBAAwB;AAC5B;AACA;IACI,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA,eAAe;AACf;IACI,kBAAkB;IAClB,YAAY;AAChB;AACA;IACI,yCAAyC;IACzC,WAAW;IACX,WAAW;IACX,eAAe;IACf,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,qCAAqC;AACzC;AACA;IACI,qBAAqB;AACzB;;AAEA;IACI;QACI,UAAU;IACd;IACA;QACI,aAAa;IACjB;IACA;QACI,cAAc;IAClB;IACA;QACI,gBAAgB;IACpB;;IAEA;QACI,aAAa;IACjB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,aAAa;IACjB;IACA;QACI,aAAa;QACb,qCAAqC;QACrC,SAAS;QACT,qBAAqB;IACzB;IACA;QACI,aAAa;IACjB;IACA;QACI,aAAa;QACb,qCAAqC;QACrC,SAAS;QACT,qBAAqB;IACzB;;AAEJ","sourcesContent":["*{\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n/* Header */\r\n#top{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    background-color: #202830;\r\n\r\n}\r\n#logo{\r\n    width: 30%;\r\n}\r\n#nav{\r\n    width: 30%;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n}\r\n#nav-items{\r\n    width: 100%;\r\n    color: #aaa;\r\n    font-size: 17px;\r\n    list-style: none;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n#nav-items li:hover{\r\n    color: white;\r\n}\r\n#mis-listas{\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n#usuario{\r\n    width: min-content;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding-right: 5px;\r\n}\r\n#usuario img{\r\n    width: 30px;\r\n    border-radius: 1em;\r\n    margin-right: 5px;\r\n}\r\n\r\n/* Body */\r\nbody {\r\n    background-color: #202830;\r\n}\r\n#contenedor{\r\n    width: 95%;\r\n    margin: auto;\r\n}\r\nh1{\r\n    color: white;\r\n    font-size: 35px;\r\n    margin-top: 20px;\r\n}\r\n\r\n/* Portada */\r\n#cover{\r\n    font-size: 16px;\r\n    min-height: 40.62em;\r\n    color: white;\r\n    background: linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2),rgba(30, 40, 48, 1)), url('./img/los-coristas.jpg');\r\n    background-size: cover;\r\n    display: flex;\r\n    align-items: flex-end;\r\n}\r\n#cont-cover{\r\n    margin-bottom: 5em;\r\n    margin-left: 4em;\r\n}\r\n#cont-cover h2{\r\n    font-size: 3em;\r\n    margin-bottom: 20px;\r\n}\r\n#cont-cover p{\r\n    font-size: 1.5em;\r\n    width: 60%;\r\n    margin-bottom: 20px;\r\n}\r\n#cont-cover button{\r\n    font-size: 1.2em;\r\n    padding: .8em 2.5em;\r\n    border-style: none;\r\n    border-radius: .5em;\r\n    background-color: rgba(0, 0, 0, .5);\r\n    cursor: pointer;\r\n    color: white;\r\n    margin-right: 1em;\r\n}\r\n#cont-cover button i{\r\n    margin-right: .3em;\r\n}\r\n#cont-cover button:hover{\r\n    background-color: white;\r\n    color: black;\r\n}\r\n\r\n/* Listas */\r\n.lista{\r\n    margin-bottom: 70px;\r\n    margin-top: 40px;\r\n}\r\n.lista h2{\r\n    color: white;\r\n    font-size: 25px;\r\n}\r\n.cont-peliculas{\r\n    display: flex;\r\n    align-items: center;\r\n    position: relative;\r\n}\r\n.btn-prev,\r\n.btn-next{\r\n    position: absolute;\r\n    border: none;\r\n    background: rgba(0, 0, 0, 0.3);\r\n    font-size: 40px;\r\n    height: 70px;\r\n    line-height: 40px;\r\n    width: 40px;\r\n    color: white;\r\n    cursor: pointer;\r\n    z-index: 500;\r\n    transition: .2 ease all;\r\n    display: none;\r\n}\r\n.btn-prev:hover,\r\n.btn-next:hover{\r\n    background-color: rgba(0, 0, 0, 0.9);\r\n}\r\n.btn-prev{\r\n    left: 0;\r\n}\r\n.btn-next{\r\n    right: 0;\r\n}\r\n\r\n/* Carousel */\r\n.cont-carousel{\r\n    width: 93%;\r\n    padding: 20px 0;\r\n    overflow: hidden;\r\n    scroll-behavior: smooth;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.carousel{\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n}\r\n.pelicula{\r\n    transition: .3s ease all;\r\n    box-shadow: 5px 5px 10px rgba(0, 0, 0, .3);\r\n    width: min-content;\r\n}\r\n.pelicula.hover{\r\n    transform: scale(1.1);\r\n    transform-origin: center;\r\n}\r\n.carousel.horizontal .pelicula img{\r\n    height: 200px;\r\n    vertical-align: middle;\r\n}\r\n.carousel.vertical .pelicula img{\r\n    height: 311px;\r\n    vertical-align: middle;\r\n}\r\n\r\n/* Paginación */\r\n.indicadores{\r\n    width: max-content;\r\n    margin: auto;\r\n}\r\n.indicadores button{\r\n    background-color: rgba(255, 255, 255, .6);\r\n    height: 5px;\r\n    width: 60px;\r\n    cursor: pointer;\r\n    border: none;\r\n    margin-right: 5px;\r\n}\r\n.indicadores button:hover{\r\n    background-color: rgba(255, 0, 0, .3);\r\n}\r\n.indicadores button.activo{\r\n    background-color: red;\r\n}\r\n\r\n@media screen and (max-width: 800px){\r\n    #logo{\r\n        width: 40%;\r\n    }\r\n    #top #nav{\r\n        display: none;\r\n    }\r\n    #cont-cover h2{\r\n        font-size: 2em;\r\n    }\r\n    #cont-cover p{\r\n        font-size: 1.3em;\r\n    }\r\n\r\n    .indicadores{\r\n        display: none;\r\n    }\r\n    .cont-carousel{\r\n        overflow: visible;\r\n    }\r\n    .btn-prev, .btn-next{\r\n        display: none;\r\n    }\r\n    .carousel.horizontal{\r\n        display: grid;\r\n        grid-template-columns: repeat(2, 1fr);\r\n        gap: 20px;\r\n        justify-items: center;\r\n    }\r\n    .carousel.horizontal .pelicula img{\r\n        height: 170px;\r\n    }\r\n    .carousel.vertical{\r\n        display: grid;\r\n        grid-template-columns: repeat(3, 1fr);\r\n        gap: 20px;\r\n        justify-items: center;\r\n    }\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/img/los-coristas.jpg":
/*!**********************************!*\
  !*** ./src/img/los-coristas.jpg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "img/los-coristas.jpg");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/buttons.js":
/*!************************!*\
  !*** ./src/buttons.js ***!
  \************************/
/***/ ((module) => {


function identifyActive(btn){
    // contenedor de indicadores
    var pages = [].slice.call(btn.parentNode.parentNode.children[2].children);
    let activo; 

    pages.forEach( page =>{
        if (page.classList.contains('activo')) activo = page;       
    })

    return activo;
}

function moveNext(btn){
    var fila = btn.parentNode.children[1];  // cont-carousel
    fila.scrollLeft += fila.offsetWidth;    // posición + ancho
    let activo = identifyActive(btn);

    if (activo.nextSibling) {
        activo.classList.remove('activo');          // desactivamos indicador
        activo.nextSibling.classList.add('activo'); // pasamos al sig indicador
    }
}

function movePrev(btn){
    var fila = btn.parentNode.children[1];      // cont-carousel
    fila.scrollLeft -= fila.offsetWidth;    // posición - ancho
    let activo = identifyActive(btn);

    if (activo.previousSibling) {
        activo.classList.remove('activo');              // desactivamos indicador
        activo.previousSibling.classList.add('activo'); // pasamos al sig indicador
    }
}

function showAndHideButtons(lists){
    lists.forEach(list =>{
        let row = list.children[1].children[1];         // .cont-carousel

        // Esconder botones
        list.addEventListener('mouseleave', () => {
            row.parentNode.children[0].style.display = "none";
            row.parentNode.children[2].style.display = "none";
        })
        
        // Mostrar botones
        list.addEventListener('mouseenter', ()=> {            
            if (window.getComputedStyle(row.children[0], null).display === "flex"){
                row.parentNode.children[0].style.display = "block";
                row.parentNode.children[2].style.display = "block";
            }
        })
    })
}

module.exports = {moveNext, movePrev, showAndHideButtons}

/***/ }),

/***/ "./src/indicators.js":
/*!***************************!*\
  !*** ./src/indicators.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function makeIndicators(lists){
    lists.forEach( list=>{
        let row = list.children[1].children[1];         // .cont-carousel
        let movies = row.children[0].children           // películas en esa lista
        let contPages = list.children[2];               // .indicadores
        
        movies = [].slice.call(movies);
        let mpp = (row.children[0].classList.contains('horizontal')) ? 3 : 5;   // movies per page
        let numPages = Math.ceil(movies.length/mpp);                            // cant de páginas
        
        for(let i = 0; i < numPages; i++){
            var page = document.createElement('button');// creamos un indicador por página
            if(i === 0) page.classList.add('activo');   // marcamos siempre el primer indicador
            contPages.appendChild(page);                // agregamos el indicador
            
            page.addEventListener('click', (e) => {                 // cada que hagan click en un indicador
                var pages = [].slice.call(contPages.children);      // traemos los indicadores en su estado actual
            
                pages.forEach( p => {                               // removemos la clase 'activo' a cada indicador
                    if (p.classList.contains('activo')) p.classList.remove('activo')
                })
                
                e.target.classList.add('activo');                   // activamos el indicador cliqueado
                row.scrollLeft = i * row.offsetWidth;               // movemos el scroll
            });
        }
    
        row.addEventListener('mouseleave', () => {
            movies.forEach(movie => movie.classList.remove('hover'));
        })
        

    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeIndicators);

/***/ }),

/***/ "./src/movies.js":
/*!***********************!*\
  !*** ./src/movies.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function addZoomEffect(movies){
    movies.forEach(movie => {
        movie.addEventListener('mouseenter', (e) => {
            const element = e.currentTarget;
            
            setTimeout(() => {
                movies.forEach(pelicula => pelicula.classList.remove('hover'));
                element.classList.add('hover');
            }, 200)
        })
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addZoomEffect);

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _indicators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indicators */ "./src/indicators.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons */ "./src/buttons.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_buttons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _movies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies */ "./src/movies.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





var buttonsPrev = document.querySelectorAll('.btn-prev');
var buttonsNext = document.querySelectorAll('.btn-next');
var lists = document.querySelectorAll('.lista');
var allMovies = document.querySelectorAll('.pelicula');

// Pasa de dom objects -> arreglos
buttonsPrev = [].slice.call(buttonsPrev);
buttonsNext = [].slice.call(buttonsNext);
lists = [].slice.call(lists);
allMovies = [].slice.call(allMovies);


// Agrega eventos para mover las listas
buttonsPrev.forEach( prev =>{
    prev.addEventListener('click', () => (0,_buttons__WEBPACK_IMPORTED_MODULE_1__.movePrev)(prev))
});
buttonsNext.forEach( next =>{
    next.addEventListener('click', () => (0,_buttons__WEBPACK_IMPORTED_MODULE_1__.moveNext)(next))
});

(0,_buttons__WEBPACK_IMPORTED_MODULE_1__.showAndHideButtons)(lists);  //Agrega efectos para mostrar y esconder los botones
(0,_indicators__WEBPACK_IMPORTED_MODULE_0__.default)(lists);      //Agrega indicadores para cada lista
(0,_movies__WEBPACK_IMPORTED_MODULE_2__.default)(allMovies);   //Agrega efecto zoom a los posters

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map