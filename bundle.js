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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Drum; });\nclass Drum {\n  constructor(stage) {\n    this.stage = stage;\n    this.x = 210;\n    this.y = 130;\n\n    this.beige = '#ffeecc';\n  }\n\n  render() {\n    this.stage.clearRect(0, 0, 800, 500);\n    this.drawCircle(50);\n    this.drawCircle(40, 'lightgrey');\n  }\n\n  tap(note) {\n    if (note === 'kat') {\n      this.drawCircle(50, 'skyblue');\n      this.drawCircle(40);\n    } else {\n      this.drawCircle(40, 'orangered');\n    }\n\n    window.setTimeout(() => this.render(), 100);\n  }\n\n  drawCircle(radius, color = 'white') {\n    let stage = this.stage;\n\n    stage.beginPath();\n    stage.arc(this.x, this.y, radius, 0, 2 * Math.PI);\n    stage.fillStyle = color;\n    stage.fill();\n    stage.strokeStyle = 'lightgrey';\n    stage.lineWidth = 2;\n    stage.stroke();\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZHJ1bS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9kcnVtLmpzP2M4OWIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJ1bSB7XG4gIGNvbnN0cnVjdG9yKHN0YWdlKSB7XG4gICAgdGhpcy5zdGFnZSA9IHN0YWdlO1xuICAgIHRoaXMueCA9IDIxMDtcbiAgICB0aGlzLnkgPSAxMzA7XG5cbiAgICB0aGlzLmJlaWdlID0gJyNmZmVlY2MnO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuc3RhZ2UuY2xlYXJSZWN0KDAsIDAsIDgwMCwgNTAwKTtcbiAgICB0aGlzLmRyYXdDaXJjbGUoNTApO1xuICAgIHRoaXMuZHJhd0NpcmNsZSg0MCwgJ2xpZ2h0Z3JleScpO1xuICB9XG5cbiAgdGFwKG5vdGUpIHtcbiAgICBpZiAobm90ZSA9PT0gJ2thdCcpIHtcbiAgICAgIHRoaXMuZHJhd0NpcmNsZSg1MCwgJ3NreWJsdWUnKTtcbiAgICAgIHRoaXMuZHJhd0NpcmNsZSg0MCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZHJhd0NpcmNsZSg0MCwgJ29yYW5nZXJlZCcpO1xuICAgIH1cblxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMucmVuZGVyKCksIDEwMCk7XG4gIH1cblxuICBkcmF3Q2lyY2xlKHJhZGl1cywgY29sb3IgPSAnd2hpdGUnKSB7XG4gICAgbGV0IHN0YWdlID0gdGhpcy5zdGFnZTtcblxuICAgIHN0YWdlLmJlZ2luUGF0aCgpO1xuICAgIHN0YWdlLmFyYyh0aGlzLngsIHRoaXMueSwgcmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgc3RhZ2UuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgc3RhZ2UuZmlsbCgpO1xuICAgIHN0YWdlLnN0cm9rZVN0eWxlID0gJ2xpZ2h0Z3JleSc7XG4gICAgc3RhZ2UubGluZVdpZHRoID0gMjtcbiAgICBzdGFnZS5zdHJva2UoKTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/drum.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tap_area_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tap_area.js */ \"./lib/tap_area.js\");\n/* harmony import */ var _drum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drum.js */ \"./lib/drum.js\");\n/* harmony import */ var _drum_key_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drum_key.js */ \"./lib/drum_key.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const moonlight = document.querySelector('.moonlight');\n  const bumblebee = document.querySelector('.bumblebee');\n  const canvas = document.getElementById('game-canvas');\n  const stage = canvas.getContext('2d');\n\n  // const tapArea = new TapArea(stage);\n  // tapArea.render();\n  // tapArea.register();\n  const drum = new _drum_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](stage);\n  drum.render();\n  const keyA = new _drum_key_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](drum, 'a');\n  const keyS = new _drum_key_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](drum, 's');\n  const keyK = new _drum_key_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](drum, 'k');\n  const keyL = new _drum_key_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](drum, 'l');\n  keyA.register('kat');\n  keyS.register('don');\n  keyK.register('don2');\n  keyL.register('kat');\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZW50cnkuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZW50cnkuanM/OGFmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFwQXJlYSBmcm9tICcuL3RhcF9hcmVhLmpzJztcbmltcG9ydCBEcnVtIGZyb20gJy4vZHJ1bS5qcyc7XG5pbXBvcnQgRHJ1bUtleSBmcm9tICcuL2RydW1fa2V5LmpzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc3QgbW9vbmxpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vb25saWdodCcpO1xuICBjb25zdCBidW1ibGViZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVtYmxlYmVlJyk7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLWNhbnZhcycpO1xuICBjb25zdCBzdGFnZSA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gIC8vIGNvbnN0IHRhcEFyZWEgPSBuZXcgVGFwQXJlYShzdGFnZSk7XG4gIC8vIHRhcEFyZWEucmVuZGVyKCk7XG4gIC8vIHRhcEFyZWEucmVnaXN0ZXIoKTtcbiAgY29uc3QgZHJ1bSA9IG5ldyBEcnVtKHN0YWdlKTtcbiAgZHJ1bS5yZW5kZXIoKTtcbiAgY29uc3Qga2V5QSA9IG5ldyBEcnVtS2V5KGRydW0sICdhJyk7XG4gIGNvbnN0IGtleVMgPSBuZXcgRHJ1bUtleShkcnVtLCAncycpO1xuICBjb25zdCBrZXlLID0gbmV3IERydW1LZXkoZHJ1bSwgJ2snKTtcbiAgY29uc3Qga2V5TCA9IG5ldyBEcnVtS2V5KGRydW0sICdsJyk7XG4gIGtleUEucmVnaXN0ZXIoJ2thdCcpO1xuICBrZXlTLnJlZ2lzdGVyKCdkb24nKTtcbiAga2V5Sy5yZWdpc3RlcignZG9uMicpO1xuICBrZXlMLnJlZ2lzdGVyKCdrYXQnKTtcbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/entry.js\n");

/***/ }),

/***/ "./lib/tap_area.js":
/*!*************************!*\
  !*** ./lib/tap_area.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TapArea; });\nclass TapArea {\n  constructor(stage) {\n    this.stage = stage;\n    this.x = 200;\n    this.y = 120;\n  }\n\n  render() {\n    let stage = this.stage;\n\n    stage.beginPath();\n    stage.arc(this.x, this.y, 40, 0, 2 * Math.PI);\n    stage.lineWidth = 2;\n    stage.strokeStyle = 'grey';\n    stage.stroke();\n\n    stage.beginPath();\n    stage.arc(this.x, this.y, 30, 0, 2 * Math.PI);\n    stage.fillStyle = 'lightgrey';\n    stage.fill();\n  }\n\n  register() {\n    let keys = ['a', 's', 'k', 'l'];\n\n    document.addEventListener('keyup', e => {\n      if (keys.includes(e.key.toLowerCase())) {\n        this.tap();\n      }\n    });\n  }\n\n  tap() {\n    console.log('tap');\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdGFwX2FyZWEuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvdGFwX2FyZWEuanM/ODg4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXBBcmVhIHtcbiAgY29uc3RydWN0b3Ioc3RhZ2UpIHtcbiAgICB0aGlzLnN0YWdlID0gc3RhZ2U7XG4gICAgdGhpcy54ID0gMjAwO1xuICAgIHRoaXMueSA9IDEyMDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc3RhZ2UgPSB0aGlzLnN0YWdlO1xuXG4gICAgc3RhZ2UuYmVnaW5QYXRoKCk7XG4gICAgc3RhZ2UuYXJjKHRoaXMueCwgdGhpcy55LCA0MCwgMCwgMiAqIE1hdGguUEkpO1xuICAgIHN0YWdlLmxpbmVXaWR0aCA9IDI7XG4gICAgc3RhZ2Uuc3Ryb2tlU3R5bGUgPSAnZ3JleSc7XG4gICAgc3RhZ2Uuc3Ryb2tlKCk7XG5cbiAgICBzdGFnZS5iZWdpblBhdGgoKTtcbiAgICBzdGFnZS5hcmModGhpcy54LCB0aGlzLnksIDMwLCAwLCAyICogTWF0aC5QSSk7XG4gICAgc3RhZ2UuZmlsbFN0eWxlID0gJ2xpZ2h0Z3JleSc7XG4gICAgc3RhZ2UuZmlsbCgpO1xuICB9XG5cbiAgcmVnaXN0ZXIoKSB7XG4gICAgbGV0IGtleXMgPSBbJ2EnLCAncycsICdrJywgJ2wnXTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB7XG4gICAgICBpZiAoa2V5cy5pbmNsdWRlcyhlLmtleS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICB0aGlzLnRhcCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdGFwKCkge1xuICAgIGNvbnNvbGUubG9nKCd0YXAnKTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/tap_area.js\n");

/***/ })

/******/ });