/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./taiko.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./drum.js":
/*!*****************!*\
  !*** ./drum.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Drum; });\nclass Drum {\n  constructor() {\n    this.combo = 0;\n  }\n\n  draw(ctx) {\n    ctx.arc(400, 500, 300, 0, 2 * Math.PI);\n    ctx.fillStyle = 'skyblue';\n    ctx.fill();\n\n    ctx.beginPath();\n    ctx.arc(400, 500, 260, 0, 2 * Math.PI);\n    ctx.fillStyle = 'orangered';\n    ctx.fill();\n  }\n\n  play(note) {\n    note = document.querySelector(`.${note}`);\n    note.currentTime = 0;\n    note.play();\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kcnVtLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZHJ1bS5qcz9lYWVhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIERydW0ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvbWJvID0gMDtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY3R4LmFyYyg0MDAsIDUwMCwgMzAwLCAwLCAyICogTWF0aC5QSSk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdza3libHVlJztcbiAgICBjdHguZmlsbCgpO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoNDAwLCA1MDAsIDI2MCwgMCwgMiAqIE1hdGguUEkpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnb3JhbmdlcmVkJztcbiAgICBjdHguZmlsbCgpO1xuICB9XG5cbiAgcGxheShub3RlKSB7XG4gICAgbm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25vdGV9YCk7XG4gICAgbm90ZS5jdXJyZW50VGltZSA9IDA7XG4gICAgbm90ZS5wbGF5KCk7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./drum.js\n");

/***/ }),

/***/ "./drum_key.js":
/*!*********************!*\
  !*** ./drum_key.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DrumKey; });\n/* harmony import */ var _drum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drum.js */ \"./drum.js\");\n\n\nclass DrumKey {\n  constructor(drum, key) {\n    this.drum = drum;\n    this.key = key;\n  }\n\n  register(note) {\n    document.addEventListener('keyup', e => {\n      if (this.key === e.key.toLowerCase()) {\n        this.drum.play(note);\n      }\n    });\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kcnVtX2tleS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2RydW1fa2V5LmpzPzUwYjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERydW0gZnJvbSAnLi9kcnVtLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJ1bUtleSB7XG4gIGNvbnN0cnVjdG9yKGRydW0sIGtleSkge1xuICAgIHRoaXMuZHJ1bSA9IGRydW07XG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gIH1cblxuICByZWdpc3Rlcihub3RlKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlID0+IHtcbiAgICAgIGlmICh0aGlzLmtleSA9PT0gZS5rZXkudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICB0aGlzLmRydW0ucGxheShub3RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./drum_key.js\n");

/***/ }),

/***/ "./taiko.js":
/*!******************!*\
  !*** ./taiko.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _drum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drum.js */ \"./drum.js\");\n/* harmony import */ var _drum_key_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drum_key.js */ \"./drum_key.js\");\n\n\n\nconst canvas = document.getElementById('game-canvas');\nconst ctx = canvas.getContext('2d');\nconst drum = new _drum_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ndrum.draw(ctx);\n\nconst keyA = new _drum_key_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](drum, 'a');\nconst keyS = new _drum_key_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](drum, 's');\nconst keyK = new _drum_key_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](drum, 'k');\nconst keyL = new _drum_key_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](drum, 'l');\nkeyA.register('kat');\nkeyS.register('don');\nkeyK.register('don2');\nkeyL.register('kat');\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90YWlrby5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3RhaWtvLmpzPzMzZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERydW0gZnJvbSAnLi9kcnVtLmpzJztcbmltcG9ydCBEcnVtS2V5IGZyb20gJy4vZHJ1bV9rZXkuanMnO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1jYW52YXMnKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuY29uc3QgZHJ1bSA9IG5ldyBEcnVtKCk7XG5kcnVtLmRyYXcoY3R4KTtcblxuY29uc3Qga2V5QSA9IG5ldyBEcnVtS2V5KGRydW0sICdhJyk7XG5jb25zdCBrZXlTID0gbmV3IERydW1LZXkoZHJ1bSwgJ3MnKTtcbmNvbnN0IGtleUsgPSBuZXcgRHJ1bUtleShkcnVtLCAnaycpO1xuY29uc3Qga2V5TCA9IG5ldyBEcnVtS2V5KGRydW0sICdsJyk7XG5rZXlBLnJlZ2lzdGVyKCdrYXQnKTtcbmtleVMucmVnaXN0ZXIoJ2RvbicpO1xua2V5Sy5yZWdpc3RlcignZG9uMicpO1xua2V5TC5yZWdpc3Rlcigna2F0Jyk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./taiko.js\n");

/***/ })

/******/ });