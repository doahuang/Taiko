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

/***/ "./lib/entry.js":
/*!**********************!*\
  !*** ./lib/entry.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _note_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note.js */ \"./lib/note.js\");\n// import Drum from './drum.js';\n// import DrumKey from './drum_key.js';\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const moonlight = document.querySelector('.moonlight');\n  const bumblebee = document.querySelector('.bumblebee');\n  const don = document.querySelector(`.don`);\n  const don2 = document.querySelector(`.don2`);\n  const kat = document.querySelector(`.kat`);\n  const canvas = document.getElementById('game-canvas');\n  const stage = canvas.getContext('2d');\n\n  // const drum = new Drum(stage);\n  // drum.render();\n  // const keyA = new DrumKey(drum, 'a');\n  // const keyS = new DrumKey(drum, 's');\n  // const keyK = new DrumKey(drum, 'k');\n  // const keyL = new DrumKey(drum, 'l');\n  // keyA.register(kat);\n  // keyS.register(don);\n  // keyK.register(don2);\n  // keyL.register(kat);\n\n  // let notes = [];\n  // for (let i = 0; i < 20; i++) {\n  //   let note = new Note(3);\n  //   notes.push(note);\n  // }\n\n  let frames = 0;\n  let notes = [];\n  let gameOn = false;\n  let music = bumblebee;\n  let musicOn = false;\n\n  function togglePlay() {\n    if (musicOn) {\n      music.pause();\n      musicOn = false;\n    } else {\n      music.play();\n      musicOn = true;\n    }\n    gameOn = gameOn ? false : true;\n    update();\n  }\n\n  document.addEventListener('keydown', e => {\n    if (e.code === 'Space') {\n      togglePlay();\n    }\n  });\n  document.addEventListener('click', e => togglePlay());\n\n  function update() {\n    if (!gameOn) {\n      return;\n    }\n\n    stage.clearRect(0, 0, 800, 500);\n    frames ++;\n    let delay = 5 + Math.floor(Math.random() * 20);\n\n    if (frames % delay === 0) {\n      if (notes.length < 5) {\n        let note = new _note_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4);\n        notes.push(note);\n        frames = 0;\n      }\n    }\n\n    let tempNotes = Object.assign([], notes);\n    for (let i = 0; i < notes.length; i++) {\n      let note = notes[i];\n      stage.drawImage(note.image, note.x, note.y);\n      note.move();\n\n      if (note.x < 100) {\n        tempNotes.shift();\n      }\n    }\n    notes = tempNotes;\n\n    requestAnimationFrame(update);\n  }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZW50cnkuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZW50cnkuanM/OGFmOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgRHJ1bSBmcm9tICcuL2RydW0uanMnO1xuLy8gaW1wb3J0IERydW1LZXkgZnJvbSAnLi9kcnVtX2tleS5qcyc7XG5pbXBvcnQgTm90ZSBmcm9tICcuL25vdGUuanMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBtb29ubGlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9vbmxpZ2h0Jyk7XG4gIGNvbnN0IGJ1bWJsZWJlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idW1ibGViZWUnKTtcbiAgY29uc3QgZG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmRvbmApO1xuICBjb25zdCBkb24yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmRvbjJgKTtcbiAgY29uc3Qga2F0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmthdGApO1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1jYW52YXMnKTtcbiAgY29uc3Qgc3RhZ2UgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAvLyBjb25zdCBkcnVtID0gbmV3IERydW0oc3RhZ2UpO1xuICAvLyBkcnVtLnJlbmRlcigpO1xuICAvLyBjb25zdCBrZXlBID0gbmV3IERydW1LZXkoZHJ1bSwgJ2EnKTtcbiAgLy8gY29uc3Qga2V5UyA9IG5ldyBEcnVtS2V5KGRydW0sICdzJyk7XG4gIC8vIGNvbnN0IGtleUsgPSBuZXcgRHJ1bUtleShkcnVtLCAnaycpO1xuICAvLyBjb25zdCBrZXlMID0gbmV3IERydW1LZXkoZHJ1bSwgJ2wnKTtcbiAgLy8ga2V5QS5yZWdpc3RlcihrYXQpO1xuICAvLyBrZXlTLnJlZ2lzdGVyKGRvbik7XG4gIC8vIGtleUsucmVnaXN0ZXIoZG9uMik7XG4gIC8vIGtleUwucmVnaXN0ZXIoa2F0KTtcblxuICAvLyBsZXQgbm90ZXMgPSBbXTtcbiAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSsrKSB7XG4gIC8vICAgbGV0IG5vdGUgPSBuZXcgTm90ZSgzKTtcbiAgLy8gICBub3Rlcy5wdXNoKG5vdGUpO1xuICAvLyB9XG5cbiAgbGV0IGZyYW1lcyA9IDA7XG4gIGxldCBub3RlcyA9IFtdO1xuICBsZXQgZ2FtZU9uID0gZmFsc2U7XG4gIGxldCBtdXNpYyA9IGJ1bWJsZWJlZTtcbiAgbGV0IG11c2ljT24gPSBmYWxzZTtcblxuICBmdW5jdGlvbiB0b2dnbGVQbGF5KCkge1xuICAgIGlmIChtdXNpY09uKSB7XG4gICAgICBtdXNpYy5wYXVzZSgpO1xuICAgICAgbXVzaWNPbiA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBtdXNpYy5wbGF5KCk7XG4gICAgICBtdXNpY09uID0gdHJ1ZTtcbiAgICB9XG4gICAgZ2FtZU9uID0gZ2FtZU9uID8gZmFsc2UgOiB0cnVlO1xuICAgIHVwZGF0ZSgpO1xuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgIGlmIChlLmNvZGUgPT09ICdTcGFjZScpIHtcbiAgICAgIHRvZ2dsZVBsYXkoKTtcbiAgICB9XG4gIH0pO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdG9nZ2xlUGxheSgpKTtcblxuICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgaWYgKCFnYW1lT24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzdGFnZS5jbGVhclJlY3QoMCwgMCwgODAwLCA1MDApO1xuICAgIGZyYW1lcyArKztcbiAgICBsZXQgZGVsYXkgPSA1ICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjApO1xuXG4gICAgaWYgKGZyYW1lcyAlIGRlbGF5ID09PSAwKSB7XG4gICAgICBpZiAobm90ZXMubGVuZ3RoIDwgNSkge1xuICAgICAgICBsZXQgbm90ZSA9IG5ldyBOb3RlKDQpO1xuICAgICAgICBub3Rlcy5wdXNoKG5vdGUpO1xuICAgICAgICBmcmFtZXMgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCB0ZW1wTm90ZXMgPSBPYmplY3QuYXNzaWduKFtdLCBub3Rlcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub3Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG5vdGUgPSBub3Rlc1tpXTtcbiAgICAgIHN0YWdlLmRyYXdJbWFnZShub3RlLmltYWdlLCBub3RlLngsIG5vdGUueSk7XG4gICAgICBub3RlLm1vdmUoKTtcblxuICAgICAgaWYgKG5vdGUueCA8IDEwMCkge1xuICAgICAgICB0ZW1wTm90ZXMuc2hpZnQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbm90ZXMgPSB0ZW1wTm90ZXM7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbiAgfVxufSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/entry.js\n");

/***/ }),

/***/ "./lib/note.js":
/*!*********************!*\
  !*** ./lib/note.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Note; });\nclass Note {\n  constructor(vel, offset) {\n    this.x = 800;\n    // this.x = 800 + offset * Math.random() * 5;\n    this.y = 100;\n    this.vel = vel;\n    let color = Math.floor(Math.random() * 2) ? 'red' : 'blue';\n    this.image = new Image();\n    this.image.src = `./gifs/${color}_note.png`;\n  }\n\n  move() {\n    this.x -= this.vel;\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbm90ZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9ub3RlLmpzP2I4OWYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90ZSB7XG4gIGNvbnN0cnVjdG9yKHZlbCwgb2Zmc2V0KSB7XG4gICAgdGhpcy54ID0gODAwO1xuICAgIC8vIHRoaXMueCA9IDgwMCArIG9mZnNldCAqIE1hdGgucmFuZG9tKCkgKiA1O1xuICAgIHRoaXMueSA9IDEwMDtcbiAgICB0aGlzLnZlbCA9IHZlbDtcbiAgICBsZXQgY29sb3IgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSA/ICdyZWQnIDogJ2JsdWUnO1xuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlLnNyYyA9IGAuL2dpZnMvJHtjb2xvcn1fbm90ZS5wbmdgO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICB0aGlzLnggLT0gdGhpcy52ZWw7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/note.js\n");

/***/ })

/******/ });