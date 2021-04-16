/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/buttons.js":
/*!***************************!*\
  !*** ./src/js/buttons.js ***!
  \***************************/
/***/ ((module) => {

eval("function addClickEventOnButtons(lists) {\n  lists.forEach(list => {\n    let prevButton = list.getElementsByClassName('carousel-cont__button--prev');\n    let nextButton = list.getElementsByClassName('carousel-cont__button--next');\n    prevButton[0].addEventListener('click', () => movePrev(list));\n    nextButton[0].addEventListener('click', () => moveNext(list));\n  });\n}\n\nfunction movePrev(list) {\n  let carousel = list.getElementsByClassName('carousel');\n  carousel[0].scrollLeft -= carousel[0].offsetWidth;\n  let activeIndicator = identifyActiveIndicator(list);\n\n  if (activeIndicator.previousSibling) {\n    activeIndicator.classList.remove('indicator--active');\n    activeIndicator.previousSibling.classList.add('indicator--active');\n  }\n}\n\nfunction moveNext(list) {\n  let carousel = list.getElementsByClassName('carousel');\n  carousel[0].scrollLeft += carousel[0].offsetWidth;\n  let activeIndicator = identifyActiveIndicator(list);\n\n  if (activeIndicator.nextSibling) {\n    activeIndicator.classList.remove('indicator--active');\n    activeIndicator.nextSibling.classList.add('indicator--active');\n  }\n}\n\nfunction identifyActiveIndicator(list) {\n  let indicators = list.getElementsByClassName('indicator');\n  let activeIndicator;\n  indicators = [].slice.call(indicators); //Pasar de DOM object -> array\n\n  indicators.forEach(indicator => {\n    if (indicator.classList.contains('indicator--active')) activeIndicator = indicator;\n  });\n  return activeIndicator;\n}\n\nfunction showAndHideButtons(lists) {\n  lists.forEach(list => {\n    let buttons = list.getElementsByClassName(\"carousel-cont__button\");\n    let movies = list.getElementsByClassName(\"movies\");\n    buttons = [].slice.call(buttons); //Pasar de DOM object -> array\n    // Esconder botones\n\n    list.addEventListener('mouseleave', () => {\n      buttons.forEach(button => {\n        button.style.display = \"none\";\n      });\n    }); // Mostrar botones\n\n    list.addEventListener('mouseenter', () => {\n      if (window.getComputedStyle(movies[0], null).display === \"flex\") {\n        buttons.forEach(button => {\n          button.style.display = \"block\";\n        });\n      }\n    });\n  });\n}\n\nmodule.exports = {\n  showAndHideButtons,\n  addClickEventOnButtons\n};\n\n//# sourceURL=webpack://netboxd/./src/js/buttons.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules */ \"./src/js/modules.js\");\n // import '../css/main-header.css';\n// import '../css/cover.css';\n// import '../css/lists.css';\n// runApp();\n\n//# sourceURL=webpack://netboxd/./src/js/index.js?");

/***/ }),

/***/ "./src/js/indicators.js":
/*!******************************!*\
  !*** ./src/js/indicators.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction makePositionIndicators(lists) {\n  lists.forEach(list => {\n    let carousel = list.getElementsByClassName('carousel');\n    let movies = list.getElementsByClassName('movies');\n    let allMovies = list.getElementsByClassName('movie');\n    let indicators = list.getElementsByClassName('list__indicators');\n    allMovies = [].slice.call(allMovies);\n    let moviesPerPage = movies[0].id === 'movies--horizontal' ? 3 : 5; // movies per page\n\n    let numPages = Math.ceil(allMovies.length / moviesPerPage); // cant de páginas\n\n    for (let i = 0; i < numPages; i++) {\n      var page = document.createElement('button'); // creamos un indicador por página\n\n      page.classList.add('indicator'); // añadimos el estilo\n\n      if (i === 0) page.classList.add('indicator--active'); // marcamos siempre el primer indicador\n\n      indicators[0].appendChild(page); // agregamos el indicador\n\n      page.addEventListener('click', e => {\n        // cada que hagan click en un indicador\n        var pages = [].slice.call(indicators[0].children); // traemos los indicadores en su estado actual\n\n        pages.forEach(p => {\n          // removemos la clase 'activo' a cada indicador\n          if (p.classList.contains('indicator--active')) p.classList.remove('indicator--active');\n        });\n        e.target.classList.add('indicator--active'); // activamos el indicador cliqueado\n\n        carousel[0].scrollLeft = i * carousel[0].offsetWidth; // movemos el scroll\n      });\n    }\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makePositionIndicators);\n\n//# sourceURL=webpack://netboxd/./src/js/indicators.js?");

/***/ }),

/***/ "./src/js/modules.js":
/*!***************************!*\
  !*** ./src/js/modules.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons */ \"./src/js/buttons.js\");\n/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_buttons__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _indicators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indicators */ \"./src/js/indicators.js\");\n/* harmony import */ var _movies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies */ \"./src/js/movies.js\");\n\n\n\n\nfunction runApp() {\n  var lists = document.querySelectorAll('#list');\n  lists = [].slice.call(lists);\n  (0,_indicators__WEBPACK_IMPORTED_MODULE_1__.default)(lists);\n  (0,_buttons__WEBPACK_IMPORTED_MODULE_0__.showAndHideButtons)(lists);\n  (0,_buttons__WEBPACK_IMPORTED_MODULE_0__.addClickEventOnButtons)(lists);\n  (0,_movies__WEBPACK_IMPORTED_MODULE_2__.default)(lists);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (runApp);\n\n//# sourceURL=webpack://netboxd/./src/js/modules.js?");

/***/ }),

/***/ "./src/js/movies.js":
/*!**************************!*\
  !*** ./src/js/movies.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction addZoomEffect(lists) {\n  lists.forEach(list => {\n    let carousel = list.getElementsByClassName('carousel');\n    var movies = list.getElementsByClassName('movie');\n    movies = [].slice.call(movies);\n    movies.forEach(movie => {\n      movie.addEventListener('mouseenter', e => {\n        let element = e.currentTarget;\n        setTimeout(() => {\n          movies.forEach(movie => movie.classList.remove('movie--hover'));\n          element.classList.add('movie--hover');\n        }, 200);\n      });\n    });\n    carousel[0].addEventListener('mouseleave', () => {\n      movies.forEach(movie => movie.classList.remove('movie--hover'));\n    });\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addZoomEffect);\n\n//# sourceURL=webpack://netboxd/./src/js/movies.js?");

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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;