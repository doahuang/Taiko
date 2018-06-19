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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Drum; });\nclass Drum {\n  constructor(stage) {\n    this.stage = stage;\n    this.x = 190;\n    this.y = 130;\n    this.colorRim = 'white';\n    this.colorCenter = 'lightgrey';\n  }\n\n  render() {\n    this.drawCircle(40, this.colorRim, true);\n    this.drawCircle(30, this.colorCenter);\n  }\n\n  tap(note) {\n    if (note.className === 'kat') {\n      this.colorRim = 'skyblue';\n    } else {\n      this.colorCenter = 'orangered';\n    }\n\n    window.setTimeout(() => {\n      this.colorRim = 'white';\n      this.colorCenter = 'lightgrey';\n    }, 100);\n  }\n\n  drawCircle(radius, color, stroke) {\n    let stage = this.stage;\n    stage.beginPath();\n    stage.arc(this.x, this.y, radius, 0, 2 * Math.PI);\n    stage.fillStyle = color;\n    stage.fill();\n    if (!stroke) {\n      return;\n    }\n    stage.strokeStyle = 'lightgrey';\n    stage.lineWidth = 2;\n    stage.stroke();\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZHJ1bS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9kcnVtLmpzP2M4OWIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJ1bSB7XG4gIGNvbnN0cnVjdG9yKHN0YWdlKSB7XG4gICAgdGhpcy5zdGFnZSA9IHN0YWdlO1xuICAgIHRoaXMueCA9IDE5MDtcbiAgICB0aGlzLnkgPSAxMzA7XG4gICAgdGhpcy5jb2xvclJpbSA9ICd3aGl0ZSc7XG4gICAgdGhpcy5jb2xvckNlbnRlciA9ICdsaWdodGdyZXknO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuZHJhd0NpcmNsZSg0MCwgdGhpcy5jb2xvclJpbSwgdHJ1ZSk7XG4gICAgdGhpcy5kcmF3Q2lyY2xlKDMwLCB0aGlzLmNvbG9yQ2VudGVyKTtcbiAgfVxuXG4gIHRhcChub3RlKSB7XG4gICAgaWYgKG5vdGUuY2xhc3NOYW1lID09PSAna2F0Jykge1xuICAgICAgdGhpcy5jb2xvclJpbSA9ICdza3libHVlJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb2xvckNlbnRlciA9ICdvcmFuZ2VyZWQnO1xuICAgIH1cblxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY29sb3JSaW0gPSAnd2hpdGUnO1xuICAgICAgdGhpcy5jb2xvckNlbnRlciA9ICdsaWdodGdyZXknO1xuICAgIH0sIDEwMCk7XG4gIH1cblxuICBkcmF3Q2lyY2xlKHJhZGl1cywgY29sb3IsIHN0cm9rZSkge1xuICAgIGxldCBzdGFnZSA9IHRoaXMuc3RhZ2U7XG4gICAgc3RhZ2UuYmVnaW5QYXRoKCk7XG4gICAgc3RhZ2UuYXJjKHRoaXMueCwgdGhpcy55LCByYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICBzdGFnZS5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICBzdGFnZS5maWxsKCk7XG4gICAgaWYgKCFzdHJva2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3RhZ2Uuc3Ryb2tlU3R5bGUgPSAnbGlnaHRncmV5JztcbiAgICBzdGFnZS5saW5lV2lkdGggPSAyO1xuICAgIHN0YWdlLnN0cm9rZSgpO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/drum.js\n");

/***/ }),

/***/ "./lib/drum_key.js":
/*!*************************!*\
  !*** ./lib/drum_key.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DrumKey; });\nclass DrumKey {\n  constructor(drum, key) {\n    this.drum = drum;\n    this.key = key;\n  }\n\n  register(note) {\n    document.addEventListener('keydown', e => {\n      if (this.key === e.key.toLowerCase()) {\n        this.play(note);\n        this.drum.tap(note);\n      }\n    });\n  }\n\n  play(note) {\n    note.currentTime = 0;\n    note.play();\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZHJ1bV9rZXkuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZHJ1bV9rZXkuanM/OTY2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBEcnVtS2V5IHtcbiAgY29uc3RydWN0b3IoZHJ1bSwga2V5KSB7XG4gICAgdGhpcy5kcnVtID0gZHJ1bTtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgfVxuXG4gIHJlZ2lzdGVyKG5vdGUpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICBpZiAodGhpcy5rZXkgPT09IGUua2V5LnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgdGhpcy5wbGF5KG5vdGUpO1xuICAgICAgICB0aGlzLmRydW0udGFwKG5vdGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcGxheShub3RlKSB7XG4gICAgbm90ZS5jdXJyZW50VGltZSA9IDA7XG4gICAgbm90ZS5wbGF5KCk7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/drum_key.js\n");

/***/ }),

/***/ "./lib/entry.js":
/*!**********************!*\
  !*** ./lib/entry.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _drum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drum.js */ \"./lib/drum.js\");\n/* harmony import */ var _drum_key_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drum_key.js */ \"./lib/drum_key.js\");\n/* harmony import */ var _note_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note.js */ \"./lib/note.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const bumblebee = document.querySelector('.bumblebee');\n  const lacompanella = document.querySelector('.lacompanella');\n  const overture = document.querySelector('.overture');\n  const don = document.querySelector(`.don`);\n  const kat = document.querySelector(`.kat`);\n  const canvas = document.getElementById('game-canvas');\n  const stage = canvas.getContext('2d');\n\n  const drum = new _drum_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](stage);\n  drum.render();\n  const keyA = new _drum_key_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](drum, 'a');\n  const keyS = new _drum_key_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](drum, 's');\n  const keyK = new _drum_key_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](drum, 'k');\n  const keyL = new _drum_key_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](drum, 'l');\n  keyA.register(kat);\n  keyS.register(don);\n  keyK.register(don);\n  keyL.register(kat);\n\n  let frames = 0;\n  let notes = [];\n  let songLib = [bumblebee, lacompanella, overture];\n  let songId = Math.floor(Math.random() * songLib.length);\n  let music = songLib[songId];\n  let musicOn = false;\n  let gameOn = false;\n  let gameEnded = false;\n\n  music.onended = function() {\n    gameEnded = true;\n  }\n\n  function togglePlay() {\n    if (musicOn) {\n      musicOn = false;\n      music.pause();\n    } else {\n      musicOn = true;\n      music.play();\n    }\n    gameOn = gameOn ? false : true;\n    update();\n  }\n\n  document.addEventListener('keydown', e => {\n    if (e.code === 'Space') {\n      togglePlay();\n    }\n  });\n\n  function update() {\n    if (gameEnded || !gameOn) {\n      return;\n    }\n\n    stage.clearRect(0, 0, 800, 500);\n    frames ++;\n\n    drum.render();\n\n    let delay = 5 + Math.floor(Math.random() * 20);\n    if (frames % delay === 0) {\n      if (notes.length < 5) {\n        let note = new _note_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](4);\n        notes.push(note);\n        frames = 0;\n      }\n    }\n\n    let tempNotes = Object.assign([], notes);\n    for (let i = 0; i < notes.length; i++) {\n      let note = notes[i];\n      stage.drawImage(note.image, note.x, note.y);\n      note.move();\n      if (note.x < 80) {\n        tempNotes.shift();\n      }\n    }\n    notes = tempNotes;\n\n    requestAnimationFrame(update);\n  }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZW50cnkuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZW50cnkuanM/OGFmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRHJ1bSBmcm9tICcuL2RydW0uanMnO1xuaW1wb3J0IERydW1LZXkgZnJvbSAnLi9kcnVtX2tleS5qcyc7XG5pbXBvcnQgTm90ZSBmcm9tICcuL25vdGUuanMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBidW1ibGViZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVtYmxlYmVlJyk7XG4gIGNvbnN0IGxhY29tcGFuZWxsYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYWNvbXBhbmVsbGEnKTtcbiAgY29uc3Qgb3ZlcnR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcnR1cmUnKTtcbiAgY29uc3QgZG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmRvbmApO1xuICBjb25zdCBrYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAua2F0YCk7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLWNhbnZhcycpO1xuICBjb25zdCBzdGFnZSA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gIGNvbnN0IGRydW0gPSBuZXcgRHJ1bShzdGFnZSk7XG4gIGRydW0ucmVuZGVyKCk7XG4gIGNvbnN0IGtleUEgPSBuZXcgRHJ1bUtleShkcnVtLCAnYScpO1xuICBjb25zdCBrZXlTID0gbmV3IERydW1LZXkoZHJ1bSwgJ3MnKTtcbiAgY29uc3Qga2V5SyA9IG5ldyBEcnVtS2V5KGRydW0sICdrJyk7XG4gIGNvbnN0IGtleUwgPSBuZXcgRHJ1bUtleShkcnVtLCAnbCcpO1xuICBrZXlBLnJlZ2lzdGVyKGthdCk7XG4gIGtleVMucmVnaXN0ZXIoZG9uKTtcbiAga2V5Sy5yZWdpc3Rlcihkb24pO1xuICBrZXlMLnJlZ2lzdGVyKGthdCk7XG5cbiAgbGV0IGZyYW1lcyA9IDA7XG4gIGxldCBub3RlcyA9IFtdO1xuICBsZXQgc29uZ0xpYiA9IFtidW1ibGViZWUsIGxhY29tcGFuZWxsYSwgb3ZlcnR1cmVdO1xuICBsZXQgc29uZ0lkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc29uZ0xpYi5sZW5ndGgpO1xuICBsZXQgbXVzaWMgPSBzb25nTGliW3NvbmdJZF07XG4gIGxldCBtdXNpY09uID0gZmFsc2U7XG4gIGxldCBnYW1lT24gPSBmYWxzZTtcbiAgbGV0IGdhbWVFbmRlZCA9IGZhbHNlO1xuXG4gIG11c2ljLm9uZW5kZWQgPSBmdW5jdGlvbigpIHtcbiAgICBnYW1lRW5kZWQgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlUGxheSgpIHtcbiAgICBpZiAobXVzaWNPbikge1xuICAgICAgbXVzaWNPbiA9IGZhbHNlO1xuICAgICAgbXVzaWMucGF1c2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbXVzaWNPbiA9IHRydWU7XG4gICAgICBtdXNpYy5wbGF5KCk7XG4gICAgfVxuICAgIGdhbWVPbiA9IGdhbWVPbiA/IGZhbHNlIDogdHJ1ZTtcbiAgICB1cGRhdGUoKTtcbiAgfVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcbiAgICBpZiAoZS5jb2RlID09PSAnU3BhY2UnKSB7XG4gICAgICB0b2dnbGVQbGF5KCk7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgaWYgKGdhbWVFbmRlZCB8fCAhZ2FtZU9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3RhZ2UuY2xlYXJSZWN0KDAsIDAsIDgwMCwgNTAwKTtcbiAgICBmcmFtZXMgKys7XG5cbiAgICBkcnVtLnJlbmRlcigpO1xuXG4gICAgbGV0IGRlbGF5ID0gNSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIwKTtcbiAgICBpZiAoZnJhbWVzICUgZGVsYXkgPT09IDApIHtcbiAgICAgIGlmIChub3Rlcy5sZW5ndGggPCA1KSB7XG4gICAgICAgIGxldCBub3RlID0gbmV3IE5vdGUoNCk7XG4gICAgICAgIG5vdGVzLnB1c2gobm90ZSk7XG4gICAgICAgIGZyYW1lcyA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHRlbXBOb3RlcyA9IE9iamVjdC5hc3NpZ24oW10sIG5vdGVzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbm90ZSA9IG5vdGVzW2ldO1xuICAgICAgc3RhZ2UuZHJhd0ltYWdlKG5vdGUuaW1hZ2UsIG5vdGUueCwgbm90ZS55KTtcbiAgICAgIG5vdGUubW92ZSgpO1xuICAgICAgaWYgKG5vdGUueCA8IDgwKSB7XG4gICAgICAgIHRlbXBOb3Rlcy5zaGlmdCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBub3RlcyA9IHRlbXBOb3RlcztcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuICB9XG59KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/entry.js\n");

/***/ }),

/***/ "./lib/note.js":
/*!*********************!*\
  !*** ./lib/note.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Note; });\nclass Note {\n  constructor(vel) {\n    this.x = 800;\n    this.y = 100;\n    this.vel = vel;\n    let color = Math.floor(Math.random() * 2) ? 'red' : 'blue';\n    this.image = new Image();\n    this.image.src = `./gifs/${color}_note.png`;\n  }\n\n  move() {\n    this.x -= this.vel;\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbm90ZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9ub3RlLmpzP2I4OWYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90ZSB7XG4gIGNvbnN0cnVjdG9yKHZlbCkge1xuICAgIHRoaXMueCA9IDgwMDtcbiAgICB0aGlzLnkgPSAxMDA7XG4gICAgdGhpcy52ZWwgPSB2ZWw7XG4gICAgbGV0IGNvbG9yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgPyAncmVkJyA6ICdibHVlJztcbiAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5pbWFnZS5zcmMgPSBgLi9naWZzLyR7Y29sb3J9X25vdGUucG5nYDtcbiAgfVxuXG4gIG1vdmUoKSB7XG4gICAgdGhpcy54IC09IHRoaXMudmVsO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/note.js\n");

/***/ })

/******/ });