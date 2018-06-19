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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Drum; });\nclass Drum {\n  constructor(stage) {\n    this.stage = stage;\n    this.x = 190;\n    this.y = 160;\n    this.colorRim = 'white';\n    this.colorCenter = 'lightgrey';\n  }\n\n  render() {\n    this.drawCircle(40, this.colorRim, true);\n    this.drawCircle(30, this.colorCenter);\n  }\n\n  tap(note) {\n    if (note.className === 'kat') {\n      this.colorRim = 'skyblue';\n    } else {\n      this.colorCenter = 'orangered';\n    }\n\n    window.setTimeout(() => {\n      this.colorRim = 'white';\n      this.colorCenter = 'lightgrey';\n    }, 100);\n  }\n\n  drawCircle(radius, color, stroke) {\n    let stage = this.stage;\n    stage.beginPath();\n    stage.arc(this.x, this.y, radius, 0, 2 * Math.PI);\n    stage.fillStyle = color;\n    stage.fill();\n    if (!stroke) {\n      return;\n    }\n    stage.strokeStyle = 'white';\n    stage.lineWidth = 2;\n    stage.stroke();\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZHJ1bS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9kcnVtLmpzP2M4OWIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJ1bSB7XG4gIGNvbnN0cnVjdG9yKHN0YWdlKSB7XG4gICAgdGhpcy5zdGFnZSA9IHN0YWdlO1xuICAgIHRoaXMueCA9IDE5MDtcbiAgICB0aGlzLnkgPSAxNjA7XG4gICAgdGhpcy5jb2xvclJpbSA9ICd3aGl0ZSc7XG4gICAgdGhpcy5jb2xvckNlbnRlciA9ICdsaWdodGdyZXknO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuZHJhd0NpcmNsZSg0MCwgdGhpcy5jb2xvclJpbSwgdHJ1ZSk7XG4gICAgdGhpcy5kcmF3Q2lyY2xlKDMwLCB0aGlzLmNvbG9yQ2VudGVyKTtcbiAgfVxuXG4gIHRhcChub3RlKSB7XG4gICAgaWYgKG5vdGUuY2xhc3NOYW1lID09PSAna2F0Jykge1xuICAgICAgdGhpcy5jb2xvclJpbSA9ICdza3libHVlJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb2xvckNlbnRlciA9ICdvcmFuZ2VyZWQnO1xuICAgIH1cblxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY29sb3JSaW0gPSAnd2hpdGUnO1xuICAgICAgdGhpcy5jb2xvckNlbnRlciA9ICdsaWdodGdyZXknO1xuICAgIH0sIDEwMCk7XG4gIH1cblxuICBkcmF3Q2lyY2xlKHJhZGl1cywgY29sb3IsIHN0cm9rZSkge1xuICAgIGxldCBzdGFnZSA9IHRoaXMuc3RhZ2U7XG4gICAgc3RhZ2UuYmVnaW5QYXRoKCk7XG4gICAgc3RhZ2UuYXJjKHRoaXMueCwgdGhpcy55LCByYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICBzdGFnZS5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICBzdGFnZS5maWxsKCk7XG4gICAgaWYgKCFzdHJva2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3RhZ2Uuc3Ryb2tlU3R5bGUgPSAnd2hpdGUnO1xuICAgIHN0YWdlLmxpbmVXaWR0aCA9IDI7XG4gICAgc3RhZ2Uuc3Ryb2tlKCk7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/drum.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _drum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drum.js */ \"./lib/drum.js\");\n/* harmony import */ var _drum_key_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drum_key.js */ \"./lib/drum_key.js\");\n/* harmony import */ var _note_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note.js */ \"./lib/note.js\");\n/* harmony import */ var _toggle_play_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toggle_play.js */ \"./lib/toggle_play.js\");\n/* harmony import */ var _toggle_music_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toggle_music.js */ \"./lib/toggle_music.js\");\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  let songLib = [];\n  const bumblebee = document.querySelector('.bumblebee');\n  const lacompanella = document.querySelector('.lacompanella');\n  const overture = document.querySelector('.overture');\n  songLib = songLib.concat(bumblebee, lacompanella, overture);\n  let songId = Math.floor(Math.random() * songLib.length);\n  let music = songLib[songId];\n  const don = document.querySelector(`.don`);\n  const kat = document.querySelector(`.kat`);\n  const toggleMusic = new _toggle_music_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](music);\n  const togglePlay = new _toggle_play_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n\n  const canvas = document.getElementById('game-canvas');\n  const stage = canvas.getContext('2d');\n  stage.fillStyle = 'lightgrey';\n  stage.fillRect(0, 50, 800, 200);\n  const drum = new _drum_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](stage);\n  drum.render();\n  const keyA = new _drum_key_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](drum, 'a');\n  const keyS = new _drum_key_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](drum, 's');\n  const keyK = new _drum_key_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](drum, 'k');\n  const keyL = new _drum_key_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](drum, 'l');\n  keyA.register(kat);\n  keyS.register(don);\n  keyK.register(don);\n  keyL.register(kat);\n  const keys = [keyA, keyS, keyK, keyL];\n\n  let frames = 0;\n  let notes = [];\n  let musicOn, gameOn, gameEnded;\n  let vel = 4;\n\n  let playPause = document.querySelector('.play-pause');\n  playPause.addEventListener('click', () => togglePause());\n  document.addEventListener('keydown', e => {\n    if (e.code === 'Space') {\n      togglePause();\n    }\n  });\n\n  function togglePause() {\n    if (musicOn) {\n      musicOn = false;\n      music.pause();\n    } else {\n      musicOn = true;\n      music.play();\n    }\n    togglePlay.render();\n    gameOn = gameOn ? false : true;\n    update();\n  }\n\n  music.onended = function() {\n    gameEnded = true;\n    gameOn = false;\n  }\n\n  function clearStage() {\n    stage.clearRect(0, 0, 800, 500);\n  }\n\n  function update() {\n    if (gameEnded || !gameOn) {\n      if (gameEnded) {\n        clearStage();\n      }\n      return;\n    }\n\n    clearStage();\n    frames ++;\n\n    stage.fillStyle = 'lightgrey';\n    stage.fillRect(0, 50, 800, 200);\n    drum.render();\n\n    let delay = 5 + Math.floor(Math.random() * 80 / vel);\n    if (frames % delay === 0) {\n      if (notes.length < vel + Math.random() * vel) {\n        let note = new _note_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](vel);\n        notes.push(note);\n        frames = 0;\n      }\n    }\n\n    let tempNotes = Object.assign([], notes);\n    for (let i = 0; i < notes.length; i++) {\n      let note = notes[i];\n      stage.drawImage(note.image, note.x, note.y);\n      if (note.x > drum.x - 60 && note.x < drum.x) {\n        for (let j = 0; j < keys.length; j++) {\n          let key = keys[j];\n          if (key.pressed && key.type === note.type) {\n            key.pressed = false;\n            tempNotes.splice(i, 1);\n          }\n        }\n      }\n      note.move();\n      if (note.x < -60) {\n        tempNotes.splice(i, 1);\n      }\n    }\n    notes = tempNotes;\n\n    requestAnimationFrame(update);\n  }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZW50cnkuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZW50cnkuanM/OGFmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRHJ1bSBmcm9tICcuL2RydW0uanMnO1xuaW1wb3J0IERydW1LZXkgZnJvbSAnLi9kcnVtX2tleS5qcyc7XG5pbXBvcnQgTm90ZSBmcm9tICcuL25vdGUuanMnO1xuaW1wb3J0IFRvZ2dsZVBsYXkgZnJvbSAnLi90b2dnbGVfcGxheS5qcyc7XG5pbXBvcnQgVG9nZ2xlTXVzaWMgZnJvbSAnLi90b2dnbGVfbXVzaWMuanMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBsZXQgc29uZ0xpYiA9IFtdO1xuICBjb25zdCBidW1ibGViZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVtYmxlYmVlJyk7XG4gIGNvbnN0IGxhY29tcGFuZWxsYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYWNvbXBhbmVsbGEnKTtcbiAgY29uc3Qgb3ZlcnR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcnR1cmUnKTtcbiAgc29uZ0xpYiA9IHNvbmdMaWIuY29uY2F0KGJ1bWJsZWJlZSwgbGFjb21wYW5lbGxhLCBvdmVydHVyZSk7XG4gIGxldCBzb25nSWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzb25nTGliLmxlbmd0aCk7XG4gIGxldCBtdXNpYyA9IHNvbmdMaWJbc29uZ0lkXTtcbiAgY29uc3QgZG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmRvbmApO1xuICBjb25zdCBrYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAua2F0YCk7XG4gIGNvbnN0IHRvZ2dsZU11c2ljID0gbmV3IFRvZ2dsZU11c2ljKG11c2ljKTtcbiAgY29uc3QgdG9nZ2xlUGxheSA9IG5ldyBUb2dnbGVQbGF5KCk7XG5cbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtY2FudmFzJyk7XG4gIGNvbnN0IHN0YWdlID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIHN0YWdlLmZpbGxTdHlsZSA9ICdsaWdodGdyZXknO1xuICBzdGFnZS5maWxsUmVjdCgwLCA1MCwgODAwLCAyMDApO1xuICBjb25zdCBkcnVtID0gbmV3IERydW0oc3RhZ2UpO1xuICBkcnVtLnJlbmRlcigpO1xuICBjb25zdCBrZXlBID0gbmV3IERydW1LZXkoZHJ1bSwgJ2EnKTtcbiAgY29uc3Qga2V5UyA9IG5ldyBEcnVtS2V5KGRydW0sICdzJyk7XG4gIGNvbnN0IGtleUsgPSBuZXcgRHJ1bUtleShkcnVtLCAnaycpO1xuICBjb25zdCBrZXlMID0gbmV3IERydW1LZXkoZHJ1bSwgJ2wnKTtcbiAga2V5QS5yZWdpc3RlcihrYXQpO1xuICBrZXlTLnJlZ2lzdGVyKGRvbik7XG4gIGtleUsucmVnaXN0ZXIoZG9uKTtcbiAga2V5TC5yZWdpc3RlcihrYXQpO1xuICBjb25zdCBrZXlzID0gW2tleUEsIGtleVMsIGtleUssIGtleUxdO1xuXG4gIGxldCBmcmFtZXMgPSAwO1xuICBsZXQgbm90ZXMgPSBbXTtcbiAgbGV0IG11c2ljT24sIGdhbWVPbiwgZ2FtZUVuZGVkO1xuICBsZXQgdmVsID0gNDtcblxuICBsZXQgcGxheVBhdXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXktcGF1c2UnKTtcbiAgcGxheVBhdXNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdG9nZ2xlUGF1c2UoKSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcbiAgICBpZiAoZS5jb2RlID09PSAnU3BhY2UnKSB7XG4gICAgICB0b2dnbGVQYXVzZSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gdG9nZ2xlUGF1c2UoKSB7XG4gICAgaWYgKG11c2ljT24pIHtcbiAgICAgIG11c2ljT24gPSBmYWxzZTtcbiAgICAgIG11c2ljLnBhdXNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG11c2ljT24gPSB0cnVlO1xuICAgICAgbXVzaWMucGxheSgpO1xuICAgIH1cbiAgICB0b2dnbGVQbGF5LnJlbmRlcigpO1xuICAgIGdhbWVPbiA9IGdhbWVPbiA/IGZhbHNlIDogdHJ1ZTtcbiAgICB1cGRhdGUoKTtcbiAgfVxuXG4gIG11c2ljLm9uZW5kZWQgPSBmdW5jdGlvbigpIHtcbiAgICBnYW1lRW5kZWQgPSB0cnVlO1xuICAgIGdhbWVPbiA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJTdGFnZSgpIHtcbiAgICBzdGFnZS5jbGVhclJlY3QoMCwgMCwgODAwLCA1MDApO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIGlmIChnYW1lRW5kZWQgfHwgIWdhbWVPbikge1xuICAgICAgaWYgKGdhbWVFbmRlZCkge1xuICAgICAgICBjbGVhclN0YWdlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2xlYXJTdGFnZSgpO1xuICAgIGZyYW1lcyArKztcblxuICAgIHN0YWdlLmZpbGxTdHlsZSA9ICdsaWdodGdyZXknO1xuICAgIHN0YWdlLmZpbGxSZWN0KDAsIDUwLCA4MDAsIDIwMCk7XG4gICAgZHJ1bS5yZW5kZXIoKTtcblxuICAgIGxldCBkZWxheSA9IDUgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4MCAvIHZlbCk7XG4gICAgaWYgKGZyYW1lcyAlIGRlbGF5ID09PSAwKSB7XG4gICAgICBpZiAobm90ZXMubGVuZ3RoIDwgdmVsICsgTWF0aC5yYW5kb20oKSAqIHZlbCkge1xuICAgICAgICBsZXQgbm90ZSA9IG5ldyBOb3RlKHZlbCk7XG4gICAgICAgIG5vdGVzLnB1c2gobm90ZSk7XG4gICAgICAgIGZyYW1lcyA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHRlbXBOb3RlcyA9IE9iamVjdC5hc3NpZ24oW10sIG5vdGVzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbm90ZSA9IG5vdGVzW2ldO1xuICAgICAgc3RhZ2UuZHJhd0ltYWdlKG5vdGUuaW1hZ2UsIG5vdGUueCwgbm90ZS55KTtcbiAgICAgIGlmIChub3RlLnggPiBkcnVtLnggLSA2MCAmJiBub3RlLnggPCBkcnVtLngpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBrZXlzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgbGV0IGtleSA9IGtleXNbal07XG4gICAgICAgICAgaWYgKGtleS5wcmVzc2VkICYmIGtleS50eXBlID09PSBub3RlLnR5cGUpIHtcbiAgICAgICAgICAgIGtleS5wcmVzc2VkID0gZmFsc2U7XG4gICAgICAgICAgICB0ZW1wTm90ZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbm90ZS5tb3ZlKCk7XG4gICAgICBpZiAobm90ZS54IDwgLTYwKSB7XG4gICAgICAgIHRlbXBOb3Rlcy5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIG5vdGVzID0gdGVtcE5vdGVzO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG4gIH1cbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/entry.js\n");

/***/ }),

/***/ "./lib/note.js":
/*!*********************!*\
  !*** ./lib/note.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Note; });\nclass Note {\n  constructor(vel) {\n    this.x = 800;\n    this.y = 130;\n    this.vel = vel;\n    let color = Math.floor(Math.random() * 2) ? 'red' : 'blue';\n    this.type = color === 'red' ? 'don' : 'kat';\n    this.image = new Image();\n    this.image.src = `./gifs/${color}_note.png`;\n  }\n\n  move() {\n    this.x -= this.vel;\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbm90ZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9ub3RlLmpzP2I4OWYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90ZSB7XG4gIGNvbnN0cnVjdG9yKHZlbCkge1xuICAgIHRoaXMueCA9IDgwMDtcbiAgICB0aGlzLnkgPSAxMzA7XG4gICAgdGhpcy52ZWwgPSB2ZWw7XG4gICAgbGV0IGNvbG9yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgPyAncmVkJyA6ICdibHVlJztcbiAgICB0aGlzLnR5cGUgPSBjb2xvciA9PT0gJ3JlZCcgPyAnZG9uJyA6ICdrYXQnO1xuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlLnNyYyA9IGAuL2dpZnMvJHtjb2xvcn1fbm90ZS5wbmdgO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICB0aGlzLnggLT0gdGhpcy52ZWw7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/note.js\n");

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