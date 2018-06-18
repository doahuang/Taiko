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
/******/ 	return __webpack_require__(__webpack_require__.s = "./entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./entry.js":
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_stage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/stage.js */ \"./lib/stage.js\");\n/* harmony import */ var _lib_drum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/drum.js */ \"./lib/drum.js\");\n/* harmony import */ var _lib_drum_key_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/drum_key.js */ \"./lib/drum_key.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const canvas = document.getElementById('game-canvas');\n  const ctx = canvas.getContext('2d');\n  const drum = new _lib_drum_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx);\n  drum.render();\n\n  const keyA = new _lib_drum_key_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](drum, 'a');\n  const keyS = new _lib_drum_key_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](drum, 's');\n  const keyK = new _lib_drum_key_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](drum, 'k');\n  const keyL = new _lib_drum_key_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](drum, 'l');\n  keyA.register('kat');\n  keyS.register('don');\n  keyK.register('don2');\n  keyL.register('kat');\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lbnRyeS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2VudHJ5LmpzPzA5OGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0YWdlIGZyb20gJy4vbGliL3N0YWdlLmpzJztcbmltcG9ydCBEcnVtIGZyb20gJy4vbGliL2RydW0uanMnO1xuaW1wb3J0IERydW1LZXkgZnJvbSAnLi9saWIvZHJ1bV9rZXkuanMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1jYW52YXMnKTtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGNvbnN0IGRydW0gPSBuZXcgRHJ1bShjdHgpO1xuICBkcnVtLnJlbmRlcigpO1xuXG4gIGNvbnN0IGtleUEgPSBuZXcgRHJ1bUtleShkcnVtLCAnYScpO1xuICBjb25zdCBrZXlTID0gbmV3IERydW1LZXkoZHJ1bSwgJ3MnKTtcbiAgY29uc3Qga2V5SyA9IG5ldyBEcnVtS2V5KGRydW0sICdrJyk7XG4gIGNvbnN0IGtleUwgPSBuZXcgRHJ1bUtleShkcnVtLCAnbCcpO1xuICBrZXlBLnJlZ2lzdGVyKCdrYXQnKTtcbiAga2V5Uy5yZWdpc3RlcignZG9uJyk7XG4gIGtleUsucmVnaXN0ZXIoJ2RvbjInKTtcbiAga2V5TC5yZWdpc3Rlcigna2F0Jyk7XG59KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./entry.js\n");

/***/ }),

/***/ "./lib/drum.js":
/*!*********************!*\
  !*** ./lib/drum.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Drum; });\nclass Drum {\n  constructor(stage) {\n    this.stage = stage;\n    this.x = 400;\n    this.y = 500;\n  }\n\n  render() {\n    this.drawCircle(300, 'skyblue');\n    this.drawCircle(260, 'orangered');\n  }\n\n  drawCircle(radius, color) {\n    let stage = this.stage;\n    stage.beginPath();\n    stage.arc(this.x, this.y, radius, 0, 2 * Math.PI);\n    stage.fillStyle = color;\n    stage.fill();\n  }\n\n  play(note) {\n    note = document.querySelector(`.${note}`);\n    note.currentTime = 0;\n    note.play();\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZHJ1bS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9kcnVtLmpzP2M4OWIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJ1bSB7XG4gIGNvbnN0cnVjdG9yKHN0YWdlKSB7XG4gICAgdGhpcy5zdGFnZSA9IHN0YWdlO1xuICAgIHRoaXMueCA9IDQwMDtcbiAgICB0aGlzLnkgPSA1MDA7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5kcmF3Q2lyY2xlKDMwMCwgJ3NreWJsdWUnKTtcbiAgICB0aGlzLmRyYXdDaXJjbGUoMjYwLCAnb3JhbmdlcmVkJyk7XG4gIH1cblxuICBkcmF3Q2lyY2xlKHJhZGl1cywgY29sb3IpIHtcbiAgICBsZXQgc3RhZ2UgPSB0aGlzLnN0YWdlO1xuICAgIHN0YWdlLmJlZ2luUGF0aCgpO1xuICAgIHN0YWdlLmFyYyh0aGlzLngsIHRoaXMueSwgcmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgc3RhZ2UuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgc3RhZ2UuZmlsbCgpO1xuICB9XG5cbiAgcGxheShub3RlKSB7XG4gICAgbm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25vdGV9YCk7XG4gICAgbm90ZS5jdXJyZW50VGltZSA9IDA7XG4gICAgbm90ZS5wbGF5KCk7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/drum.js\n");

/***/ }),

/***/ "./lib/drum_key.js":
/*!*************************!*\
  !*** ./lib/drum_key.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DrumKey; });\n/* harmony import */ var _drum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drum.js */ \"./lib/drum.js\");\n\n\nclass DrumKey {\n  constructor(drum, key) {\n    this.drum = drum;\n    this.key = key;\n  }\n\n  register(note) {\n    document.addEventListener('keyup', e => {\n      if (this.key === e.key.toLowerCase()) {\n        this.drum.play(note);\n      }\n    });\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZHJ1bV9rZXkuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZHJ1bV9rZXkuanM/OTY2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRHJ1bSBmcm9tICcuL2RydW0uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcnVtS2V5IHtcbiAgY29uc3RydWN0b3IoZHJ1bSwga2V5KSB7XG4gICAgdGhpcy5kcnVtID0gZHJ1bTtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgfVxuXG4gIHJlZ2lzdGVyKG5vdGUpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGUgPT4ge1xuICAgICAgaWYgKHRoaXMua2V5ID09PSBlLmtleS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIHRoaXMuZHJ1bS5wbGF5KG5vdGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/drum_key.js\n");

/***/ }),

/***/ "./lib/stage.js":
/*!**********************!*\
  !*** ./lib/stage.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Stage; });\nclass Stage {\n  constructor(stage) {\n    this.stage = stage;\n  }\n\n  render() {\n    \n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc3RhZ2UuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvc3RhZ2UuanM/ZjM5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFnZSB7XG4gIGNvbnN0cnVjdG9yKHN0YWdlKSB7XG4gICAgdGhpcy5zdGFnZSA9IHN0YWdlO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIFxuICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/stage.js\n");

/***/ })

/******/ });