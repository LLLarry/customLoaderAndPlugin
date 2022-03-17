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

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./myLoaders/mystyleLoader.js):\\nE:\\\\工作区\\\\素材\\\\customLoaderAndPlugin\\\\myLoaders\\\\mystyleLoader.js:10\\n\\t`.replace(/\\\\n/r/, ';')\\n\\t          ^\\n\\nSyntaxError: Invalid regular expression flags\\n    at wrapSafe (internal/modules/cjs/loader.js:1053:16)\\n    at Module._compile (internal/modules/cjs/loader.js:1101:27)\\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1157:10)\\n    at Module.load (internal/modules/cjs/loader.js:985:32)\\n    at Function.Module._load (internal/modules/cjs/loader.js:878:14)\\n    at Module.require (internal/modules/cjs/loader.js:1025:19)\\n    at require (internal/modules/cjs/helpers.js:72:18)\\n    at loadLoader (E:\\\\工作区\\\\素材\\\\customLoaderAndPlugin\\\\node_modules\\\\_loader-runner@4.2.0@loader-runner\\\\lib\\\\loadLoader.js:19:17)\\n    at iteratePitchingLoaders (E:\\\\工作区\\\\素材\\\\customLoaderAndPlugin\\\\node_modules\\\\_loader-runner@4.2.0@loader-runner\\\\lib\\\\LoaderRunner.js:182:2)\\n    at runLoaders (E:\\\\工作区\\\\素材\\\\customLoaderAndPlugin\\\\node_modules\\\\_loader-runner@4.2.0@loader-runner\\\\lib\\\\LoaderRunner.js:397:2)\");\n\n//# sourceURL=webpack://customLoaderAndPlugin/./src/index.css?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n\r\nconsole.log('123')\r\n\r\nconsole.log((_index_css__WEBPACK_IMPORTED_MODULE_0___default()))\r\n\r\n// 改造代码, 将css文件显示到页面上\r\n// const styleEle = document.createElement('style')\r\n// styleEle.innerHTML = style[0][1]\r\n// document.head.appendChild(styleEle)\n\n//# sourceURL=webpack://customLoaderAndPlugin/./src/main.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;