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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Drum; });\nclass Drum {\n  constructor(stage) {\n    this.stage = stage;\n    this.x = 190;\n    this.y = 235;\n    this.colorRim = 'white';\n    this.colorCenter = 'lightgrey';\n  }\n\n  render() {\n    this.drawCircle(40, this.colorRim);\n    this.drawCircle(30, this.colorCenter);\n  }\n\n  tap(note) {\n    if (note.className === 'kat') {\n      this.colorRim = 'skyblue';\n    } else {\n      this.colorCenter = 'orangered';\n    }\n\n    window.setTimeout(() => {\n      this.colorRim = 'white';\n      this.colorCenter = 'lightgrey';\n    }, 100);\n  }\n\n  drawCircle(radius, color) {\n    let stage = this.stage;\n    stage.beginPath();\n    stage.arc(this.x, this.y, radius, 0, 2 * Math.PI);\n    stage.fillStyle = color;\n    stage.fill();\n  }\n\n  flash() {\n    let stage = this.stage;\n    stage.beginPath();\n    stage.fillStyle = 'yellow';\n    stage.fillRect(150, 150, 80, 160);\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZHJ1bS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9kcnVtLmpzP2M4OWIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJ1bSB7XG4gIGNvbnN0cnVjdG9yKHN0YWdlKSB7XG4gICAgdGhpcy5zdGFnZSA9IHN0YWdlO1xuICAgIHRoaXMueCA9IDE5MDtcbiAgICB0aGlzLnkgPSAyMzU7XG4gICAgdGhpcy5jb2xvclJpbSA9ICd3aGl0ZSc7XG4gICAgdGhpcy5jb2xvckNlbnRlciA9ICdsaWdodGdyZXknO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuZHJhd0NpcmNsZSg0MCwgdGhpcy5jb2xvclJpbSk7XG4gICAgdGhpcy5kcmF3Q2lyY2xlKDMwLCB0aGlzLmNvbG9yQ2VudGVyKTtcbiAgfVxuXG4gIHRhcChub3RlKSB7XG4gICAgaWYgKG5vdGUuY2xhc3NOYW1lID09PSAna2F0Jykge1xuICAgICAgdGhpcy5jb2xvclJpbSA9ICdza3libHVlJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb2xvckNlbnRlciA9ICdvcmFuZ2VyZWQnO1xuICAgIH1cblxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY29sb3JSaW0gPSAnd2hpdGUnO1xuICAgICAgdGhpcy5jb2xvckNlbnRlciA9ICdsaWdodGdyZXknO1xuICAgIH0sIDEwMCk7XG4gIH1cblxuICBkcmF3Q2lyY2xlKHJhZGl1cywgY29sb3IpIHtcbiAgICBsZXQgc3RhZ2UgPSB0aGlzLnN0YWdlO1xuICAgIHN0YWdlLmJlZ2luUGF0aCgpO1xuICAgIHN0YWdlLmFyYyh0aGlzLngsIHRoaXMueSwgcmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgc3RhZ2UuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgc3RhZ2UuZmlsbCgpO1xuICB9XG5cbiAgZmxhc2goKSB7XG4gICAgbGV0IHN0YWdlID0gdGhpcy5zdGFnZTtcbiAgICBzdGFnZS5iZWdpblBhdGgoKTtcbiAgICBzdGFnZS5maWxsU3R5bGUgPSAneWVsbG93JztcbiAgICBzdGFnZS5maWxsUmVjdCgxNTAsIDE1MCwgODAsIDE2MCk7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/drum.js\n");

/***/ }),

/***/ "./lib/drum_key.js":
/*!*************************!*\
  !*** ./lib/drum_key.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DrumKey; });\nclass DrumKey {\n  constructor(drum, key) {\n    this.drum = drum;\n    this.key = key;\n  }\n\n  register(note) {\n    this.type = note.className;\n\n    document.addEventListener('keydown', e => {\n      if (this.key === e.key.toLowerCase()) {\n        this.pressed = true;\n        note.currentTime = 0;\n        note.play();\n        this.drum.tap(note);\n      }\n    });\n\n    document.addEventListener('keyup', e => {\n      if (this.key === e.key.toLowerCase()) {\n        this.pressed = false;\n      }\n    });\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZHJ1bV9rZXkuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZHJ1bV9rZXkuanM/OTY2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBEcnVtS2V5IHtcbiAgY29uc3RydWN0b3IoZHJ1bSwga2V5KSB7XG4gICAgdGhpcy5kcnVtID0gZHJ1bTtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgfVxuXG4gIHJlZ2lzdGVyKG5vdGUpIHtcbiAgICB0aGlzLnR5cGUgPSBub3RlLmNsYXNzTmFtZTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcbiAgICAgIGlmICh0aGlzLmtleSA9PT0gZS5rZXkudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICB0aGlzLnByZXNzZWQgPSB0cnVlO1xuICAgICAgICBub3RlLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgbm90ZS5wbGF5KCk7XG4gICAgICAgIHRoaXMuZHJ1bS50YXAobm90ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGUgPT4ge1xuICAgICAgaWYgKHRoaXMua2V5ID09PSBlLmtleS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIHRoaXMucHJlc3NlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/drum_key.js\n");

/***/ }),

/***/ "./lib/entry.js":
/*!**********************!*\
  !*** ./lib/entry.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _drum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drum.js */ \"./lib/drum.js\");\n/* harmony import */ var _drum_key_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drum_key.js */ \"./lib/drum_key.js\");\n/* harmony import */ var _note_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note.js */ \"./lib/note.js\");\n/* harmony import */ var _score_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./score.js */ \"./lib/score.js\");\n/* harmony import */ var _spirit_gauge_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spirit_gauge.js */ \"./lib/spirit_gauge.js\");\n/* harmony import */ var _toggle_play_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toggle_play.js */ \"./lib/toggle_play.js\");\n/* harmony import */ var _toggle_music_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toggle_music.js */ \"./lib/toggle_music.js\");\n\n\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  let songLib = [];\n  const bumblebee = document.querySelector('.bumblebee');\n  const lacompanella = document.querySelector('.lacompanella');\n  const overture = document.querySelector('.overture');\n  songLib = songLib.concat(bumblebee, lacompanella, overture);\n  let songId = Math.floor(Math.random() * songLib.length);\n  let music = songLib[songId];\n  const don = document.querySelector('.don');\n  const kat = document.querySelector('.kat');\n  const toggleMusic = new _toggle_music_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](music);\n  const togglePlay = new _toggle_play_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n\n  const canvas = document.getElementById('canvas');\n  const stage = canvas.getContext('2d');\n\n  const score = new _score_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n  const spiritGauge = new _spirit_gauge_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](340, 67);\n  spiritGauge.render();\n  score.render();\n\n  function NoteStreamArea() {\n    stage.beginPath();\n    stage.strokeStyle = 'black';\n    stage.lineWidth = 5;\n    stage.rect(0, 150, 800, 200);\n    stage.stroke();\n    stage.fillStyle = 'lightgrey';\n    stage.fillRect(0, 150, 800, 200);\n    stage.beginPath();\n    stage.fillStyle = 'black';\n    stage.fillRect(0, 310, 800, 40);\n    stage.fill();\n  }\n\n  NoteStreamArea();\n\n  const drum = new _drum_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](stage);\n  drum.render();\n  const keyA = new _drum_key_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](drum, 'd');\n  const keyS = new _drum_key_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](drum, 'f');\n  const keyK = new _drum_key_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](drum, 'j');\n  const keyL = new _drum_key_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](drum, 'k');\n  keyA.register(kat);\n  keyS.register(don);\n  keyK.register(don);\n  keyL.register(kat);\n  const keys = [keyA, keyS, keyK, keyL];\n\n  let frames = 0;\n  let notes = [];\n  let musicOn, gameOn, gameEnded;\n  let vel = 4;\n\n  let playPause = document.querySelector('.play-pause');\n  playPause.addEventListener('click', () => togglePause());\n  document.addEventListener('keydown', e => {\n    if (e.code === 'Space') {\n      togglePause();\n    }\n  });\n\n  function togglePause() {\n    if (musicOn) {\n      musicOn = false;\n      music.pause();\n    } else {\n      musicOn = true;\n      music.play();\n    }\n    togglePlay.render();\n    gameOn = gameOn ? false : true;\n    update();\n  }\n\n  music.onended = function() {\n    gameEnded = true;\n    gameOn = false;\n  }\n\n  function clearStage() {\n    stage.clearRect(0, 0, 800, 500);\n  }\n\n  function update() {\n    if (gameEnded || !gameOn) {\n      return;\n    }\n\n    clearStage();\n    frames ++;\n\n    NoteStreamArea();\n    drum.render();\n    spiritGauge.render();\n    score.render();\n\n    let delay = 5 + Math.floor(Math.random() * 80 / vel);\n    if (frames % delay === 0) {\n      if (notes.length < vel + Math.random() * vel) {\n        let note = new _note_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](vel, stage);\n        notes.push(note);\n        frames = 0;\n      }\n    }\n\n    let tempNotes = Object.assign([], notes);\n    for (let i = 0; i < notes.length; i++) {\n      let note = notes[i];\n      note.render();\n      if (note.x > drum.x - 60 && note.x < drum.x) {\n        for (let j = 0; j < keys.length; j++) {\n          let key = keys[j];\n          if (key.pressed && key.type === note.type) {\n            key.pressed = false;\n            drum.flash();\n            score.up();\n            spiritGauge.up();\n            tempNotes.splice(i, 1);\n          }\n        }\n      }\n      note.move();\n      if (note.x < -60) {\n        tempNotes.splice(i, 1);\n      }\n    }\n    notes = tempNotes;\n\n    requestAnimationFrame(update);\n  }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZW50cnkuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZW50cnkuanM/OGFmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRHJ1bSBmcm9tICcuL2RydW0uanMnO1xuaW1wb3J0IERydW1LZXkgZnJvbSAnLi9kcnVtX2tleS5qcyc7XG5pbXBvcnQgTm90ZSBmcm9tICcuL25vdGUuanMnO1xuaW1wb3J0IFNjb3JlIGZyb20gJy4vc2NvcmUuanMnO1xuaW1wb3J0IFNwaXJpdEdhdWdlIGZyb20gJy4vc3Bpcml0X2dhdWdlLmpzJztcbmltcG9ydCBUb2dnbGVQbGF5IGZyb20gJy4vdG9nZ2xlX3BsYXkuanMnO1xuaW1wb3J0IFRvZ2dsZU11c2ljIGZyb20gJy4vdG9nZ2xlX211c2ljLmpzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgbGV0IHNvbmdMaWIgPSBbXTtcbiAgY29uc3QgYnVtYmxlYmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1bWJsZWJlZScpO1xuICBjb25zdCBsYWNvbXBhbmVsbGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFjb21wYW5lbGxhJyk7XG4gIGNvbnN0IG92ZXJ0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJ0dXJlJyk7XG4gIHNvbmdMaWIgPSBzb25nTGliLmNvbmNhdChidW1ibGViZWUsIGxhY29tcGFuZWxsYSwgb3ZlcnR1cmUpO1xuICBsZXQgc29uZ0lkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc29uZ0xpYi5sZW5ndGgpO1xuICBsZXQgbXVzaWMgPSBzb25nTGliW3NvbmdJZF07XG4gIGNvbnN0IGRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb24nKTtcbiAgY29uc3Qga2F0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmthdCcpO1xuICBjb25zdCB0b2dnbGVNdXNpYyA9IG5ldyBUb2dnbGVNdXNpYyhtdXNpYyk7XG4gIGNvbnN0IHRvZ2dsZVBsYXkgPSBuZXcgVG9nZ2xlUGxheSgpO1xuXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgY29uc3Qgc3RhZ2UgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICBjb25zdCBzY29yZSA9IG5ldyBTY29yZSgpO1xuICBjb25zdCBzcGlyaXRHYXVnZSA9IG5ldyBTcGlyaXRHYXVnZSgzNDAsIDY3KTtcbiAgc3Bpcml0R2F1Z2UucmVuZGVyKCk7XG4gIHNjb3JlLnJlbmRlcigpO1xuXG4gIGZ1bmN0aW9uIE5vdGVTdHJlYW1BcmVhKCkge1xuICAgIHN0YWdlLmJlZ2luUGF0aCgpO1xuICAgIHN0YWdlLnN0cm9rZVN0eWxlID0gJ2JsYWNrJztcbiAgICBzdGFnZS5saW5lV2lkdGggPSA1O1xuICAgIHN0YWdlLnJlY3QoMCwgMTUwLCA4MDAsIDIwMCk7XG4gICAgc3RhZ2Uuc3Ryb2tlKCk7XG4gICAgc3RhZ2UuZmlsbFN0eWxlID0gJ2xpZ2h0Z3JleSc7XG4gICAgc3RhZ2UuZmlsbFJlY3QoMCwgMTUwLCA4MDAsIDIwMCk7XG4gICAgc3RhZ2UuYmVnaW5QYXRoKCk7XG4gICAgc3RhZ2UuZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICBzdGFnZS5maWxsUmVjdCgwLCAzMTAsIDgwMCwgNDApO1xuICAgIHN0YWdlLmZpbGwoKTtcbiAgfVxuXG4gIE5vdGVTdHJlYW1BcmVhKCk7XG5cbiAgY29uc3QgZHJ1bSA9IG5ldyBEcnVtKHN0YWdlKTtcbiAgZHJ1bS5yZW5kZXIoKTtcbiAgY29uc3Qga2V5QSA9IG5ldyBEcnVtS2V5KGRydW0sICdkJyk7XG4gIGNvbnN0IGtleVMgPSBuZXcgRHJ1bUtleShkcnVtLCAnZicpO1xuICBjb25zdCBrZXlLID0gbmV3IERydW1LZXkoZHJ1bSwgJ2onKTtcbiAgY29uc3Qga2V5TCA9IG5ldyBEcnVtS2V5KGRydW0sICdrJyk7XG4gIGtleUEucmVnaXN0ZXIoa2F0KTtcbiAga2V5Uy5yZWdpc3Rlcihkb24pO1xuICBrZXlLLnJlZ2lzdGVyKGRvbik7XG4gIGtleUwucmVnaXN0ZXIoa2F0KTtcbiAgY29uc3Qga2V5cyA9IFtrZXlBLCBrZXlTLCBrZXlLLCBrZXlMXTtcblxuICBsZXQgZnJhbWVzID0gMDtcbiAgbGV0IG5vdGVzID0gW107XG4gIGxldCBtdXNpY09uLCBnYW1lT24sIGdhbWVFbmRlZDtcbiAgbGV0IHZlbCA9IDQ7XG5cbiAgbGV0IHBsYXlQYXVzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5LXBhdXNlJyk7XG4gIHBsYXlQYXVzZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvZ2dsZVBhdXNlKCkpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgaWYgKGUuY29kZSA9PT0gJ1NwYWNlJykge1xuICAgICAgdG9nZ2xlUGF1c2UoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZVBhdXNlKCkge1xuICAgIGlmIChtdXNpY09uKSB7XG4gICAgICBtdXNpY09uID0gZmFsc2U7XG4gICAgICBtdXNpYy5wYXVzZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtdXNpY09uID0gdHJ1ZTtcbiAgICAgIG11c2ljLnBsYXkoKTtcbiAgICB9XG4gICAgdG9nZ2xlUGxheS5yZW5kZXIoKTtcbiAgICBnYW1lT24gPSBnYW1lT24gPyBmYWxzZSA6IHRydWU7XG4gICAgdXBkYXRlKCk7XG4gIH1cblxuICBtdXNpYy5vbmVuZGVkID0gZnVuY3Rpb24oKSB7XG4gICAgZ2FtZUVuZGVkID0gdHJ1ZTtcbiAgICBnYW1lT24gPSBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyU3RhZ2UoKSB7XG4gICAgc3RhZ2UuY2xlYXJSZWN0KDAsIDAsIDgwMCwgNTAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICBpZiAoZ2FtZUVuZGVkIHx8ICFnYW1lT24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjbGVhclN0YWdlKCk7XG4gICAgZnJhbWVzICsrO1xuXG4gICAgTm90ZVN0cmVhbUFyZWEoKTtcbiAgICBkcnVtLnJlbmRlcigpO1xuICAgIHNwaXJpdEdhdWdlLnJlbmRlcigpO1xuICAgIHNjb3JlLnJlbmRlcigpO1xuXG4gICAgbGV0IGRlbGF5ID0gNSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDgwIC8gdmVsKTtcbiAgICBpZiAoZnJhbWVzICUgZGVsYXkgPT09IDApIHtcbiAgICAgIGlmIChub3Rlcy5sZW5ndGggPCB2ZWwgKyBNYXRoLnJhbmRvbSgpICogdmVsKSB7XG4gICAgICAgIGxldCBub3RlID0gbmV3IE5vdGUodmVsLCBzdGFnZSk7XG4gICAgICAgIG5vdGVzLnB1c2gobm90ZSk7XG4gICAgICAgIGZyYW1lcyA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHRlbXBOb3RlcyA9IE9iamVjdC5hc3NpZ24oW10sIG5vdGVzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbm90ZSA9IG5vdGVzW2ldO1xuICAgICAgbm90ZS5yZW5kZXIoKTtcbiAgICAgIGlmIChub3RlLnggPiBkcnVtLnggLSA2MCAmJiBub3RlLnggPCBkcnVtLngpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBrZXlzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgbGV0IGtleSA9IGtleXNbal07XG4gICAgICAgICAgaWYgKGtleS5wcmVzc2VkICYmIGtleS50eXBlID09PSBub3RlLnR5cGUpIHtcbiAgICAgICAgICAgIGtleS5wcmVzc2VkID0gZmFsc2U7XG4gICAgICAgICAgICBkcnVtLmZsYXNoKCk7XG4gICAgICAgICAgICBzY29yZS51cCgpO1xuICAgICAgICAgICAgc3Bpcml0R2F1Z2UudXAoKTtcbiAgICAgICAgICAgIHRlbXBOb3Rlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBub3RlLm1vdmUoKTtcbiAgICAgIGlmIChub3RlLnggPCAtNjApIHtcbiAgICAgICAgdGVtcE5vdGVzLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbm90ZXMgPSB0ZW1wTm90ZXM7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbiAgfVxufSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/entry.js\n");

/***/ }),

/***/ "./lib/note.js":
/*!*********************!*\
  !*** ./lib/note.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Note; });\nclass Note {\n  constructor(vel) {\n    this.x = 800;\n    this.y = 205;\n    this.vel = vel;\n\n    let color = Math.floor(Math.random() * 2) ? 'red' : 'blue';\n    this.type = color === 'red' ? 'don' : 'kat';\n    this.image = new Image();\n    this.image.src = `./gifs/${color}_note.png`;\n    \n    this.stage = document.getElementById('canvas').getContext('2d');\n  }\n\n  move() {\n    this.x -= this.vel;\n  }\n\n  render() {\n    this.stage.drawImage(this.image, this.x, this.y);\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbm90ZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9ub3RlLmpzP2I4OWYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90ZSB7XG4gIGNvbnN0cnVjdG9yKHZlbCkge1xuICAgIHRoaXMueCA9IDgwMDtcbiAgICB0aGlzLnkgPSAyMDU7XG4gICAgdGhpcy52ZWwgPSB2ZWw7XG5cbiAgICBsZXQgY29sb3IgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSA/ICdyZWQnIDogJ2JsdWUnO1xuICAgIHRoaXMudHlwZSA9IGNvbG9yID09PSAncmVkJyA/ICdkb24nIDogJ2thdCc7XG4gICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuaW1hZ2Uuc3JjID0gYC4vZ2lmcy8ke2NvbG9yfV9ub3RlLnBuZ2A7XG4gICAgXG4gICAgdGhpcy5zdGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKS5nZXRDb250ZXh0KCcyZCcpO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICB0aGlzLnggLT0gdGhpcy52ZWw7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5zdGFnZS5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy54LCB0aGlzLnkpO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/note.js\n");

/***/ }),

/***/ "./lib/score.js":
/*!**********************!*\
  !*** ./lib/score.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Score; });\nclass Score {\n  constructor() {\n    this.counter = document.getElementById('counter');\n    this.score = 0;\n  }\n\n  render() {\n    this.counter.innerHTML = this.score;\n  }\n\n  up() {\n    this.score += 100;\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc2NvcmUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvc2NvcmUuanM/YjViMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudGVyJyk7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5jb3VudGVyLmlubmVySFRNTCA9IHRoaXMuc2NvcmU7XG4gIH1cblxuICB1cCgpIHtcbiAgICB0aGlzLnNjb3JlICs9IDEwMDtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/score.js\n");

/***/ }),

/***/ "./lib/spirit_gauge.js":
/*!*****************************!*\
  !*** ./lib/spirit_gauge.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SpiritGauge; });\nclass SpiritGauge {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n    this.stage = document.getElementById('canvas').getContext('2d');\n    this.spirit = 0;\n    this.maxSpirit = 200;\n    this.maxWidth = 400;\n    this.full = false;\n  }\n\n  render() {\n    let stage = this.stage;\n    stage.beginPath();\n    stage.rect(this.x, this.y, this.maxWidth, 40);\n    stage.fillStyle = 'white';\n    stage.fillRect(this.x, this.y, this.maxWidth, 40);\n    stage.lineWidth = 3;\n    stage.strokeStyle = 'black';\n    stage.stroke();\n    this.bar();\n    this.onFire();\n  }\n\n  up() {\n    if (this.spirit < this.maxSpirit) {\n      this.spirit +=50;\n    }\n  }\n\n  bar() {\n    let width = this.spirit / this.maxSpirit * 400;\n    this.stage.fillStyle = '#ffe92b';\n    this.stage.fillRect(this.x + 3, this.y + 3, width, 34);\n    if (width === this.maxWidth) {\n      this.full = true;\n    }\n  }\n\n  onFire() {\n    if (!this.full) {\n      return;\n    }\n    let fire = document.getElementById('fire');\n    fire.classList.remove('hide');\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc3Bpcml0X2dhdWdlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL3NwaXJpdF9nYXVnZS5qcz8yMzhjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwaXJpdEdhdWdlIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLnN0YWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpLmdldENvbnRleHQoJzJkJyk7XG4gICAgdGhpcy5zcGlyaXQgPSAwO1xuICAgIHRoaXMubWF4U3Bpcml0ID0gMjAwO1xuICAgIHRoaXMubWF4V2lkdGggPSA0MDA7XG4gICAgdGhpcy5mdWxsID0gZmFsc2U7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHN0YWdlID0gdGhpcy5zdGFnZTtcbiAgICBzdGFnZS5iZWdpblBhdGgoKTtcbiAgICBzdGFnZS5yZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLm1heFdpZHRoLCA0MCk7XG4gICAgc3RhZ2UuZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICBzdGFnZS5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy5tYXhXaWR0aCwgNDApO1xuICAgIHN0YWdlLmxpbmVXaWR0aCA9IDM7XG4gICAgc3RhZ2Uuc3Ryb2tlU3R5bGUgPSAnYmxhY2snO1xuICAgIHN0YWdlLnN0cm9rZSgpO1xuICAgIHRoaXMuYmFyKCk7XG4gICAgdGhpcy5vbkZpcmUoKTtcbiAgfVxuXG4gIHVwKCkge1xuICAgIGlmICh0aGlzLnNwaXJpdCA8IHRoaXMubWF4U3Bpcml0KSB7XG4gICAgICB0aGlzLnNwaXJpdCArPTUwO1xuICAgIH1cbiAgfVxuXG4gIGJhcigpIHtcbiAgICBsZXQgd2lkdGggPSB0aGlzLnNwaXJpdCAvIHRoaXMubWF4U3Bpcml0ICogNDAwO1xuICAgIHRoaXMuc3RhZ2UuZmlsbFN0eWxlID0gJyNmZmU5MmInO1xuICAgIHRoaXMuc3RhZ2UuZmlsbFJlY3QodGhpcy54ICsgMywgdGhpcy55ICsgMywgd2lkdGgsIDM0KTtcbiAgICBpZiAod2lkdGggPT09IHRoaXMubWF4V2lkdGgpIHtcbiAgICAgIHRoaXMuZnVsbCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgb25GaXJlKCkge1xuICAgIGlmICghdGhpcy5mdWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBmaXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpcmUnKTtcbiAgICBmaXJlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/spirit_gauge.js\n");

/***/ }),

/***/ "./lib/toggle_music.js":
/*!*****************************!*\
  !*** ./lib/toggle_music.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ToggleMusic; });\nclass ToggleMusic {\n  constructor(music) {\n    this.music = music;\n    this.volumeOn = document.getElementById('volume-on');\n    this.volumeOff = document.getElementById('volume-off');\n    this.musicMute = document.querySelector('.music-mute');\n    this.init();\n  }\n\n  init() {\n    this.musicMute.addEventListener('click', e => this.render());\n    document.addEventListener('keypress', e => {\n      if (e.key === 'm') {\n        this.render();\n      }\n    });\n  }\n\n  render() {\n    this.music.muted = this.music.muted ? false : true;\n    this.volumeOn.classList.toggle('hide', this.music.muted);\n    this.volumeOff.classList.toggle('hide', !this.music.muted);\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdG9nZ2xlX211c2ljLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL3RvZ2dsZV9tdXNpYy5qcz9iZmI0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZ2dsZU11c2ljIHtcbiAgY29uc3RydWN0b3IobXVzaWMpIHtcbiAgICB0aGlzLm11c2ljID0gbXVzaWM7XG4gICAgdGhpcy52b2x1bWVPbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2b2x1bWUtb24nKTtcbiAgICB0aGlzLnZvbHVtZU9mZiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2b2x1bWUtb2ZmJyk7XG4gICAgdGhpcy5tdXNpY011dGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXVzaWMtbXV0ZScpO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLm11c2ljTXV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5yZW5kZXIoKSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBlID0+IHtcbiAgICAgIGlmIChlLmtleSA9PT0gJ20nKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5tdXNpYy5tdXRlZCA9IHRoaXMubXVzaWMubXV0ZWQgPyBmYWxzZSA6IHRydWU7XG4gICAgdGhpcy52b2x1bWVPbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgdGhpcy5tdXNpYy5tdXRlZCk7XG4gICAgdGhpcy52b2x1bWVPZmYuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsICF0aGlzLm11c2ljLm11dGVkKTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/toggle_music.js\n");

/***/ }),

/***/ "./lib/toggle_play.js":
/*!****************************!*\
  !*** ./lib/toggle_play.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TogglePlay; });\nclass TogglePlay {\n  constructor() {\n    this.gameOn = false;\n    this.play = document.getElementById('play');\n    this.pause = document.getElementById('pause');\n  }\n\n  render() {\n    this.gameOn = this.gameOn ? false : true;\n    this.play.classList.toggle('hide', this.gameOn);\n    this.pause.classList.toggle('hide', !this.gameOn);\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdG9nZ2xlX3BsYXkuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvdG9nZ2xlX3BsYXkuanM/YjE4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2dnbGVQbGF5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5nYW1lT24gPSBmYWxzZTtcbiAgICB0aGlzLnBsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheScpO1xuICAgIHRoaXMucGF1c2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF1c2UnKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLmdhbWVPbiA9IHRoaXMuZ2FtZU9uID8gZmFsc2UgOiB0cnVlO1xuICAgIHRoaXMucGxheS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgdGhpcy5nYW1lT24pO1xuICAgIHRoaXMucGF1c2UuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsICF0aGlzLmdhbWVPbik7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/toggle_play.js\n");

/***/ })

/******/ });