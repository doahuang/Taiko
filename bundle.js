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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/drum.js":
/*!*********************!*\
  !*** ./lib/drum.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Drum; });\nclass Drum {\n  constructor(stage) {\n    this.stage = stage;\n    this.x = 400;\n    this.y = 500;\n\n    this.beige = '#ffeecc';\n  }\n\n  render() {\n    // this.stage.clearRect(100, 200, 600, 300);\n    this.stage.clearRect(0, 0, 800, 500);\n\n    this.drawCircle(300);\n    this.drawCircle(260);\n  }\n\n  tap(note) {\n    if (note === 'kat') {\n      this.drawCircle(300, 'skyblue');\n      this.drawCircle(260);\n    } else {\n      this.drawCircle(260, 'orangered');\n    }\n\n    window.setTimeout(() => this.render(), 100);\n  }\n\n  drawCircle(radius, color = 'white') {\n    let stage = this.stage;\n\n    stage.beginPath();\n    stage.arc(this.x, this.y, radius, 0, 2 * Math.PI);\n    stage.fillStyle = color;\n    stage.fill();\n    stage.lineWidth = 2;\n    stage.stroke();\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZHJ1bS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9kcnVtLmpzP2M4OWIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJ1bSB7XG4gIGNvbnN0cnVjdG9yKHN0YWdlKSB7XG4gICAgdGhpcy5zdGFnZSA9IHN0YWdlO1xuICAgIHRoaXMueCA9IDQwMDtcbiAgICB0aGlzLnkgPSA1MDA7XG5cbiAgICB0aGlzLmJlaWdlID0gJyNmZmVlY2MnO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIHRoaXMuc3RhZ2UuY2xlYXJSZWN0KDEwMCwgMjAwLCA2MDAsIDMwMCk7XG4gICAgdGhpcy5zdGFnZS5jbGVhclJlY3QoMCwgMCwgODAwLCA1MDApO1xuXG4gICAgdGhpcy5kcmF3Q2lyY2xlKDMwMCk7XG4gICAgdGhpcy5kcmF3Q2lyY2xlKDI2MCk7XG4gIH1cblxuICB0YXAobm90ZSkge1xuICAgIGlmIChub3RlID09PSAna2F0Jykge1xuICAgICAgdGhpcy5kcmF3Q2lyY2xlKDMwMCwgJ3NreWJsdWUnKTtcbiAgICAgIHRoaXMuZHJhd0NpcmNsZSgyNjApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRyYXdDaXJjbGUoMjYwLCAnb3JhbmdlcmVkJyk7XG4gICAgfVxuXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZW5kZXIoKSwgMTAwKTtcbiAgfVxuXG4gIGRyYXdDaXJjbGUocmFkaXVzLCBjb2xvciA9ICd3aGl0ZScpIHtcbiAgICBsZXQgc3RhZ2UgPSB0aGlzLnN0YWdlO1xuXG4gICAgc3RhZ2UuYmVnaW5QYXRoKCk7XG4gICAgc3RhZ2UuYXJjKHRoaXMueCwgdGhpcy55LCByYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICBzdGFnZS5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICBzdGFnZS5maWxsKCk7XG4gICAgc3RhZ2UubGluZVdpZHRoID0gMjtcbiAgICBzdGFnZS5zdHJva2UoKTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/drum.js\n");

/***/ }),

/***/ "./lib/drum_key.js":
/*!*************************!*\
  !*** ./lib/drum_key.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DrumKey; });\nclass DrumKey {\n  constructor(drum, key) {\n    this.drum = drum;\n    this.key = key;\n  }\n\n  register(note) {\n    document.addEventListener('keyup', e => {\n      if (this.key === e.key.toLowerCase()) {\n        this.play(note);\n        this.drum.tap(note);\n      }\n    });\n  }\n\n  play(note) {\n    note = document.querySelector(`.${note}`);\n    note.currentTime = 0;\n    note.play();\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZHJ1bV9rZXkuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZHJ1bV9rZXkuanM/OTY2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBEcnVtS2V5IHtcbiAgY29uc3RydWN0b3IoZHJ1bSwga2V5KSB7XG4gICAgdGhpcy5kcnVtID0gZHJ1bTtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgfVxuXG4gIHJlZ2lzdGVyKG5vdGUpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGUgPT4ge1xuICAgICAgaWYgKHRoaXMua2V5ID09PSBlLmtleS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIHRoaXMucGxheShub3RlKTtcbiAgICAgICAgdGhpcy5kcnVtLnRhcChub3RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHBsYXkobm90ZSkge1xuICAgIG5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtub3RlfWApO1xuICAgIG5vdGUuY3VycmVudFRpbWUgPSAwO1xuICAgIG5vdGUucGxheSgpO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/drum_key.js\n");

/***/ }),

/***/ "./lib/entry.js":
/*!**********************!*\
  !*** ./lib/entry.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tap_area_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tap_area.js */ \"./lib/tap_area.js\");\n/* harmony import */ var _drum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drum.js */ \"./lib/drum.js\");\n/* harmony import */ var _drum_key_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drum_key.js */ \"./lib/drum_key.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const moonlight = document.querySelector('.moonlight');\n  const bumblebee = document.querySelector('.bumblebee');\n  const canvas = document.getElementById('game-canvas');\n  const stage = canvas.getContext('2d');\n  const keys = ['a', 's', 'k', 'l'];\n\n  const tapArea = new _tap_area_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](keys);\n  tapArea.register();\n  const drum = new _drum_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](stage);\n  drum.render();\n  const keyA = new _drum_key_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](drum, 'a');\n  const keyS = new _drum_key_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](drum, 's');\n  const keyK = new _drum_key_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](drum, 'k');\n  const keyL = new _drum_key_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](drum, 'l');\n  keyA.register('kat');\n  keyS.register('don');\n  keyK.register('don2');\n  keyL.register('kat');\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZW50cnkuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZW50cnkuanM/OGFmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFwQXJlYSBmcm9tICcuL3RhcF9hcmVhLmpzJztcbmltcG9ydCBEcnVtIGZyb20gJy4vZHJ1bS5qcyc7XG5pbXBvcnQgRHJ1bUtleSBmcm9tICcuL2RydW1fa2V5LmpzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc3QgbW9vbmxpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vb25saWdodCcpO1xuICBjb25zdCBidW1ibGViZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVtYmxlYmVlJyk7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLWNhbnZhcycpO1xuICBjb25zdCBzdGFnZSA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICBjb25zdCBrZXlzID0gWydhJywgJ3MnLCAnaycsICdsJ107XG5cbiAgY29uc3QgdGFwQXJlYSA9IG5ldyBUYXBBcmVhKGtleXMpO1xuICB0YXBBcmVhLnJlZ2lzdGVyKCk7XG4gIGNvbnN0IGRydW0gPSBuZXcgRHJ1bShzdGFnZSk7XG4gIGRydW0ucmVuZGVyKCk7XG4gIGNvbnN0IGtleUEgPSBuZXcgRHJ1bUtleShkcnVtLCAnYScpO1xuICBjb25zdCBrZXlTID0gbmV3IERydW1LZXkoZHJ1bSwgJ3MnKTtcbiAgY29uc3Qga2V5SyA9IG5ldyBEcnVtS2V5KGRydW0sICdrJyk7XG4gIGNvbnN0IGtleUwgPSBuZXcgRHJ1bUtleShkcnVtLCAnbCcpO1xuICBrZXlBLnJlZ2lzdGVyKCdrYXQnKTtcbiAga2V5Uy5yZWdpc3RlcignZG9uJyk7XG4gIGtleUsucmVnaXN0ZXIoJ2RvbjInKTtcbiAga2V5TC5yZWdpc3Rlcigna2F0Jyk7XG59KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/entry.js\n");

/***/ }),

/***/ "./lib/tap_area.js":
/*!*************************!*\
  !*** ./lib/tap_area.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TapArea; });\nclass TapArea {\n  constructor(keys) {\n    this.keys = keys;\n    this.x = 200;\n    this.y = 200;\n  }\n\n  register() {\n    document.addEventListener('keyup', e => {\n      if (this.keys.includes(e.key.toLowerCase())) {\n        this.tap();\n      }\n    });\n  }\n\n  tap() {\n    console.log('tap');\n\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdGFwX2FyZWEuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvdGFwX2FyZWEuanM/ODg4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXBBcmVhIHtcbiAgY29uc3RydWN0b3Ioa2V5cykge1xuICAgIHRoaXMua2V5cyA9IGtleXM7XG4gICAgdGhpcy54ID0gMjAwO1xuICAgIHRoaXMueSA9IDIwMDtcbiAgfVxuXG4gIHJlZ2lzdGVyKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB7XG4gICAgICBpZiAodGhpcy5rZXlzLmluY2x1ZGVzKGUua2V5LnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgIHRoaXMudGFwKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB0YXAoKSB7XG4gICAgY29uc29sZS5sb2coJ3RhcCcpO1xuXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/tap_area.js\n");

/***/ })

/******/ });