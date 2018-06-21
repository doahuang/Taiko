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

/***/ "./lib/combo.js":
/*!**********************!*\
  !*** ./lib/combo.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Combo; });\nclass Combo {\n  constructor() {\n    this.combo = 0;\n    this.counter = document.getElementById('combo');\n  }\n\n  render() {\n    if (this.combo) {\n      this.counter.innerHTML = `${this.combo} combo`;\n    } else {\n      if (!this.counter.innerHTML) {\n        return;\n      }\n      this.counter.innerHTML = 'miss';\n      this.hide();\n    }\n  }\n\n  show() {\n    this.counter.classList.remove('bounceOutRight');\n    this.counter.classList.add('bounceInRight');\n  }\n\n  hide() {\n    this.counter.classList.remove('bounceInRight');\n    this.counter.classList.add('bounceOutRight');\n  }\n\n  up() {\n    this.combo ++;\n    this.show();\n  }\n\n  reset() {\n    this.combo = 0;\n    this.hide();\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29tYm8uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvY29tYm8uanM/MGYxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb21ibyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY29tYm8gPSAwO1xuICAgIHRoaXMuY291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21ibycpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLmNvbWJvKSB7XG4gICAgICB0aGlzLmNvdW50ZXIuaW5uZXJIVE1MID0gYCR7dGhpcy5jb21ib30gY29tYm9gO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuY291bnRlci5pbm5lckhUTUwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5jb3VudGVyLmlubmVySFRNTCA9ICdtaXNzJztcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNob3coKSB7XG4gICAgdGhpcy5jb3VudGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2JvdW5jZU91dFJpZ2h0Jyk7XG4gICAgdGhpcy5jb3VudGVyLmNsYXNzTGlzdC5hZGQoJ2JvdW5jZUluUmlnaHQnKTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5jb3VudGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2JvdW5jZUluUmlnaHQnKTtcbiAgICB0aGlzLmNvdW50ZXIuY2xhc3NMaXN0LmFkZCgnYm91bmNlT3V0UmlnaHQnKTtcbiAgfVxuXG4gIHVwKCkge1xuICAgIHRoaXMuY29tYm8gKys7XG4gICAgdGhpcy5zaG93KCk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmNvbWJvID0gMDtcbiAgICB0aGlzLmhpZGUoKTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/combo.js\n");

/***/ }),

/***/ "./lib/drum.js":
/*!*********************!*\
  !*** ./lib/drum.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Drum; });\nclass Drum {\n  constructor() {\n    this.stage = document.getElementById('canvas').getContext('2d');\n    this.x = 190;\n    this.y = 235;\n    this.colorRim = 'white';\n    this.colorCenter = 'lightgrey';\n  }\n\n  render() {\n    this.drawCircle(40, this.colorRim);\n    this.drawCircle(30, this.colorCenter);\n  }\n\n  tap(note) {\n    if (note.id === 'kat') {\n      this.colorRim = 'skyblue';\n    } else {\n      this.colorCenter = 'orangered';\n    }\n\n    setTimeout(() => {\n      this.colorRim = 'white';\n      this.colorCenter = 'lightgrey';\n    }, 100);\n  }\n\n  drawCircle(radius, color) {\n    let stage = this.stage;\n    stage.beginPath();\n    stage.arc(this.x, this.y, radius, 0, 2 * Math.PI);\n    stage.fillStyle = color;\n    stage.fill();\n  }\n\n  flash() {\n    let stage = this.stage;\n    stage.beginPath();\n    stage.fillStyle = '#ffe92b';\n    stage.fillRect(150, 150, 80, 160);\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZHJ1bS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9kcnVtLmpzP2M4OWIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJ1bSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc3RhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJykuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLnggPSAxOTA7XG4gICAgdGhpcy55ID0gMjM1O1xuICAgIHRoaXMuY29sb3JSaW0gPSAnd2hpdGUnO1xuICAgIHRoaXMuY29sb3JDZW50ZXIgPSAnbGlnaHRncmV5JztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLmRyYXdDaXJjbGUoNDAsIHRoaXMuY29sb3JSaW0pO1xuICAgIHRoaXMuZHJhd0NpcmNsZSgzMCwgdGhpcy5jb2xvckNlbnRlcik7XG4gIH1cblxuICB0YXAobm90ZSkge1xuICAgIGlmIChub3RlLmlkID09PSAna2F0Jykge1xuICAgICAgdGhpcy5jb2xvclJpbSA9ICdza3libHVlJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb2xvckNlbnRlciA9ICdvcmFuZ2VyZWQnO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jb2xvclJpbSA9ICd3aGl0ZSc7XG4gICAgICB0aGlzLmNvbG9yQ2VudGVyID0gJ2xpZ2h0Z3JleSc7XG4gICAgfSwgMTAwKTtcbiAgfVxuXG4gIGRyYXdDaXJjbGUocmFkaXVzLCBjb2xvcikge1xuICAgIGxldCBzdGFnZSA9IHRoaXMuc3RhZ2U7XG4gICAgc3RhZ2UuYmVnaW5QYXRoKCk7XG4gICAgc3RhZ2UuYXJjKHRoaXMueCwgdGhpcy55LCByYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICBzdGFnZS5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICBzdGFnZS5maWxsKCk7XG4gIH1cblxuICBmbGFzaCgpIHtcbiAgICBsZXQgc3RhZ2UgPSB0aGlzLnN0YWdlO1xuICAgIHN0YWdlLmJlZ2luUGF0aCgpO1xuICAgIHN0YWdlLmZpbGxTdHlsZSA9ICcjZmZlOTJiJztcbiAgICBzdGFnZS5maWxsUmVjdCgxNTAsIDE1MCwgODAsIDE2MCk7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/drum.js\n");

/***/ }),

/***/ "./lib/drum_key.js":
/*!*************************!*\
  !*** ./lib/drum_key.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DrumKey; });\nclass DrumKey {\n  constructor(drum, key) {\n    this.drum = drum;\n    this.key = key;\n  }\n\n  register(note) {\n    this.type = note.id;\n\n    document.addEventListener('keydown', e => {\n      if (this.key === e.key) {\n        this.pressed = true;\n        note.currentTime = 0;\n        note.play();\n        this.drum.tap(note);\n        setTimeout(() => {\n          this.pressed = false;\n        }, 100)\n      }\n    });\n\n    document.addEventListener('keyup', e => {\n      if (this.key === e.key.toLowerCase()) {\n        this.pressed = false;\n      }\n    });\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZHJ1bV9rZXkuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZHJ1bV9rZXkuanM/OTY2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBEcnVtS2V5IHtcbiAgY29uc3RydWN0b3IoZHJ1bSwga2V5KSB7XG4gICAgdGhpcy5kcnVtID0gZHJ1bTtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgfVxuXG4gIHJlZ2lzdGVyKG5vdGUpIHtcbiAgICB0aGlzLnR5cGUgPSBub3RlLmlkO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgICAgaWYgKHRoaXMua2V5ID09PSBlLmtleSkge1xuICAgICAgICB0aGlzLnByZXNzZWQgPSB0cnVlO1xuICAgICAgICBub3RlLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgbm90ZS5wbGF5KCk7XG4gICAgICAgIHRoaXMuZHJ1bS50YXAobm90ZSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMucHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICB9LCAxMDApXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGUgPT4ge1xuICAgICAgaWYgKHRoaXMua2V5ID09PSBlLmtleS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIHRoaXMucHJlc3NlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/drum_key.js\n");

/***/ }),

/***/ "./lib/entry.js":
/*!**********************!*\
  !*** ./lib/entry.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _drum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drum.js */ \"./lib/drum.js\");\n/* harmony import */ var _drum_key_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drum_key.js */ \"./lib/drum_key.js\");\n/* harmony import */ var _note_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note.js */ \"./lib/note.js\");\n/* harmony import */ var _score_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./score.js */ \"./lib/score.js\");\n/* harmony import */ var _spirit_gauge_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spirit_gauge.js */ \"./lib/spirit_gauge.js\");\n/* harmony import */ var _combo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./combo.js */ \"./lib/combo.js\");\n/* harmony import */ var _toggle_play_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toggle_play.js */ \"./lib/toggle_play.js\");\n/* harmony import */ var _toggle_music_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toggle_music.js */ \"./lib/toggle_music.js\");\n\n\n\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const bumblebee = document.createElement('audio');\n  const lacompanella = document.createElement('audio');\n  const overture = document.createElement('audio');\n  bumblebee.src = 'https://res.cloudinary.com/doahuang/video/upload/v1529382816/bumblebee.ogg';\n  lacompanella.src = 'https://res.cloudinary.com/doahuang/video/upload/v1529384916/lacampanella.ogg';\n  overture.src = 'https://res.cloudinary.com/doahuang/video/upload/v1529382816/overture.ogg';\n  const don = document.getElementById('don');\n  const kat = document.getElementById('kat');\n  let songLib = [].concat(bumblebee, lacompanella, overture);\n  let songId = Math.floor(Math.random() * songLib.length);\n  let music = songLib[songId];\n  const toggleMusic = new _toggle_music_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"](music);\n  const togglePlay = new _toggle_play_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\n\n  const canvas = document.getElementById('canvas');\n  const stage = canvas.getContext('2d');\n  const score = new _score_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n  const spiritGauge = new _spirit_gauge_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n  const combo = new _combo_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n  const drum = new _drum_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n  function NotesArea() {\n    stage.beginPath();\n    stage.lineWidth = 5;\n    stage.moveTo(0, 150);\n    stage.lineTo(800, 150);\n    stage.stroke();\n    stage.fillStyle = 'lightgrey';\n    stage.fillRect(0, 150, 800, 200);\n    stage.fillStyle = 'black';\n    stage.fillRect(0, 310, 800, 40);\n    stage.fill();\n  }\n\n  const keyA = new _drum_key_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](drum, 'ArrowLeft');\n  const keyB = new _drum_key_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](drum, 'ArrowRight');\n  const drumKeys = [keyA, keyB];\n  keyA.register(don);\n  keyB.register(kat);\n\n  function setupStage() {\n    NotesArea();\n    drum.render();\n    score.render();\n    spiritGauge.render();\n    combo.render();\n  }\n\n  setupStage();\n\n  let musicOn, gameOn, gameEnded;\n  let playPause = document.querySelector('.play-pause');\n  playPause.addEventListener('click', () => togglePause());\n  document.addEventListener('keydown', e => {\n    if (e.code === 'Space') {\n      togglePause();\n    }\n  });\n\n  function togglePause() {\n    if (musicOn) {\n      musicOn = false;\n      music.pause();\n    } else {\n      musicOn = true;\n      music.play();\n    }\n    togglePlay.render();\n    gameOn = gameOn ? false : true;\n    update();\n  }\n\n  music.onended = function() {\n    gameEnded = true;\n    gameOn = false;\n  }\n\n  let frames = 0;\n  let notes = {};\n  let vel = 4 + Math.random() * 2;\n\n  function miss() {\n    spiritGauge.down();\n    combo.reset();\n  }\n\n  function update() {\n    if (gameEnded || !gameOn) {\n      return;\n    }\n\n    stage.clearRect(0, 0, stage.canvas.length, stage.canvas.height);\n    frames ++;\n\n    setupStage();\n\n    let delay = 10 + Math.floor(Math.random() * 80 / vel);\n    let notesKeys = Object.keys(notes);\n\n    if (frames % delay === 0) {\n      if (notesKeys.length < vel) {\n        let note = new _note_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](vel);\n        notes[note.id] = note;\n        frames = 0;\n      }\n    }\n\n    for (let i = 0; i < notesKeys.length; i++) {\n      let id = notesKeys[i];\n      let note = notes[id];\n      note.render();\n      note.move();\n\n      if (note.x > drum.x - 60 && note.x < drum.x) {\n        for (let j = 0; j < drumKeys.length; j++) {\n          let key = drumKeys[j];\n          if (key.pressed) {\n            key.pressed = false;\n            drum.flash();\n            if (key.type === note.type) {\n              score.up();\n              spiritGauge.up();\n              combo.up();\n              delete notes[id];\n            } else {\n              combo.reset();\n            }\n          }\n        }\n      }\n      if (note.x < -40) {\n        miss();\n        delete notes[id];\n      }\n    }\n\n    requestAnimationFrame(update);\n  }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZW50cnkuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZW50cnkuanM/OGFmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRHJ1bSBmcm9tICcuL2RydW0uanMnO1xuaW1wb3J0IERydW1LZXkgZnJvbSAnLi9kcnVtX2tleS5qcyc7XG5pbXBvcnQgTm90ZSBmcm9tICcuL25vdGUuanMnO1xuaW1wb3J0IFNjb3JlIGZyb20gJy4vc2NvcmUuanMnO1xuaW1wb3J0IFNwaXJpdEdhdWdlIGZyb20gJy4vc3Bpcml0X2dhdWdlLmpzJztcbmltcG9ydCBDb21ibyBmcm9tICcuL2NvbWJvLmpzJztcbmltcG9ydCBUb2dnbGVQbGF5IGZyb20gJy4vdG9nZ2xlX3BsYXkuanMnO1xuaW1wb3J0IFRvZ2dsZU11c2ljIGZyb20gJy4vdG9nZ2xlX211c2ljLmpzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc3QgYnVtYmxlYmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcbiAgY29uc3QgbGFjb21wYW5lbGxhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcbiAgY29uc3Qgb3ZlcnR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xuICBidW1ibGViZWUuc3JjID0gJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RvYWh1YW5nL3ZpZGVvL3VwbG9hZC92MTUyOTM4MjgxNi9idW1ibGViZWUub2dnJztcbiAgbGFjb21wYW5lbGxhLnNyYyA9ICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kb2FodWFuZy92aWRlby91cGxvYWQvdjE1MjkzODQ5MTYvbGFjYW1wYW5lbGxhLm9nZyc7XG4gIG92ZXJ0dXJlLnNyYyA9ICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kb2FodWFuZy92aWRlby91cGxvYWQvdjE1MjkzODI4MTYvb3ZlcnR1cmUub2dnJztcbiAgY29uc3QgZG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvbicpO1xuICBjb25zdCBrYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2F0Jyk7XG4gIGxldCBzb25nTGliID0gW10uY29uY2F0KGJ1bWJsZWJlZSwgbGFjb21wYW5lbGxhLCBvdmVydHVyZSk7XG4gIGxldCBzb25nSWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzb25nTGliLmxlbmd0aCk7XG4gIGxldCBtdXNpYyA9IHNvbmdMaWJbc29uZ0lkXTtcbiAgY29uc3QgdG9nZ2xlTXVzaWMgPSBuZXcgVG9nZ2xlTXVzaWMobXVzaWMpO1xuICBjb25zdCB0b2dnbGVQbGF5ID0gbmV3IFRvZ2dsZVBsYXkoKTtcblxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gIGNvbnN0IHN0YWdlID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGNvbnN0IHNjb3JlID0gbmV3IFNjb3JlKCk7XG4gIGNvbnN0IHNwaXJpdEdhdWdlID0gbmV3IFNwaXJpdEdhdWdlKCk7XG4gIGNvbnN0IGNvbWJvID0gbmV3IENvbWJvKCk7XG4gIGNvbnN0IGRydW0gPSBuZXcgRHJ1bSgpO1xuXG4gIGZ1bmN0aW9uIE5vdGVzQXJlYSgpIHtcbiAgICBzdGFnZS5iZWdpblBhdGgoKTtcbiAgICBzdGFnZS5saW5lV2lkdGggPSA1O1xuICAgIHN0YWdlLm1vdmVUbygwLCAxNTApO1xuICAgIHN0YWdlLmxpbmVUbyg4MDAsIDE1MCk7XG4gICAgc3RhZ2Uuc3Ryb2tlKCk7XG4gICAgc3RhZ2UuZmlsbFN0eWxlID0gJ2xpZ2h0Z3JleSc7XG4gICAgc3RhZ2UuZmlsbFJlY3QoMCwgMTUwLCA4MDAsIDIwMCk7XG4gICAgc3RhZ2UuZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICBzdGFnZS5maWxsUmVjdCgwLCAzMTAsIDgwMCwgNDApO1xuICAgIHN0YWdlLmZpbGwoKTtcbiAgfVxuXG4gIGNvbnN0IGtleUEgPSBuZXcgRHJ1bUtleShkcnVtLCAnQXJyb3dMZWZ0Jyk7XG4gIGNvbnN0IGtleUIgPSBuZXcgRHJ1bUtleShkcnVtLCAnQXJyb3dSaWdodCcpO1xuICBjb25zdCBkcnVtS2V5cyA9IFtrZXlBLCBrZXlCXTtcbiAga2V5QS5yZWdpc3Rlcihkb24pO1xuICBrZXlCLnJlZ2lzdGVyKGthdCk7XG5cbiAgZnVuY3Rpb24gc2V0dXBTdGFnZSgpIHtcbiAgICBOb3Rlc0FyZWEoKTtcbiAgICBkcnVtLnJlbmRlcigpO1xuICAgIHNjb3JlLnJlbmRlcigpO1xuICAgIHNwaXJpdEdhdWdlLnJlbmRlcigpO1xuICAgIGNvbWJvLnJlbmRlcigpO1xuICB9XG5cbiAgc2V0dXBTdGFnZSgpO1xuXG4gIGxldCBtdXNpY09uLCBnYW1lT24sIGdhbWVFbmRlZDtcbiAgbGV0IHBsYXlQYXVzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5LXBhdXNlJyk7XG4gIHBsYXlQYXVzZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvZ2dsZVBhdXNlKCkpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgaWYgKGUuY29kZSA9PT0gJ1NwYWNlJykge1xuICAgICAgdG9nZ2xlUGF1c2UoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZVBhdXNlKCkge1xuICAgIGlmIChtdXNpY09uKSB7XG4gICAgICBtdXNpY09uID0gZmFsc2U7XG4gICAgICBtdXNpYy5wYXVzZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtdXNpY09uID0gdHJ1ZTtcbiAgICAgIG11c2ljLnBsYXkoKTtcbiAgICB9XG4gICAgdG9nZ2xlUGxheS5yZW5kZXIoKTtcbiAgICBnYW1lT24gPSBnYW1lT24gPyBmYWxzZSA6IHRydWU7XG4gICAgdXBkYXRlKCk7XG4gIH1cblxuICBtdXNpYy5vbmVuZGVkID0gZnVuY3Rpb24oKSB7XG4gICAgZ2FtZUVuZGVkID0gdHJ1ZTtcbiAgICBnYW1lT24gPSBmYWxzZTtcbiAgfVxuXG4gIGxldCBmcmFtZXMgPSAwO1xuICBsZXQgbm90ZXMgPSB7fTtcbiAgbGV0IHZlbCA9IDQgKyBNYXRoLnJhbmRvbSgpICogMjtcblxuICBmdW5jdGlvbiBtaXNzKCkge1xuICAgIHNwaXJpdEdhdWdlLmRvd24oKTtcbiAgICBjb21iby5yZXNldCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIGlmIChnYW1lRW5kZWQgfHwgIWdhbWVPbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN0YWdlLmNsZWFyUmVjdCgwLCAwLCBzdGFnZS5jYW52YXMubGVuZ3RoLCBzdGFnZS5jYW52YXMuaGVpZ2h0KTtcbiAgICBmcmFtZXMgKys7XG5cbiAgICBzZXR1cFN0YWdlKCk7XG5cbiAgICBsZXQgZGVsYXkgPSAxMCArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDgwIC8gdmVsKTtcbiAgICBsZXQgbm90ZXNLZXlzID0gT2JqZWN0LmtleXMobm90ZXMpO1xuXG4gICAgaWYgKGZyYW1lcyAlIGRlbGF5ID09PSAwKSB7XG4gICAgICBpZiAobm90ZXNLZXlzLmxlbmd0aCA8IHZlbCkge1xuICAgICAgICBsZXQgbm90ZSA9IG5ldyBOb3RlKHZlbCk7XG4gICAgICAgIG5vdGVzW25vdGUuaWRdID0gbm90ZTtcbiAgICAgICAgZnJhbWVzID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vdGVzS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGlkID0gbm90ZXNLZXlzW2ldO1xuICAgICAgbGV0IG5vdGUgPSBub3Rlc1tpZF07XG4gICAgICBub3RlLnJlbmRlcigpO1xuICAgICAgbm90ZS5tb3ZlKCk7XG5cbiAgICAgIGlmIChub3RlLnggPiBkcnVtLnggLSA2MCAmJiBub3RlLnggPCBkcnVtLngpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkcnVtS2V5cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGxldCBrZXkgPSBkcnVtS2V5c1tqXTtcbiAgICAgICAgICBpZiAoa2V5LnByZXNzZWQpIHtcbiAgICAgICAgICAgIGtleS5wcmVzc2VkID0gZmFsc2U7XG4gICAgICAgICAgICBkcnVtLmZsYXNoKCk7XG4gICAgICAgICAgICBpZiAoa2V5LnR5cGUgPT09IG5vdGUudHlwZSkge1xuICAgICAgICAgICAgICBzY29yZS51cCgpO1xuICAgICAgICAgICAgICBzcGlyaXRHYXVnZS51cCgpO1xuICAgICAgICAgICAgICBjb21iby51cCgpO1xuICAgICAgICAgICAgICBkZWxldGUgbm90ZXNbaWRdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29tYm8ucmVzZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChub3RlLnggPCAtNDApIHtcbiAgICAgICAgbWlzcygpO1xuICAgICAgICBkZWxldGUgbm90ZXNbaWRdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuICB9XG59KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/entry.js\n");

/***/ }),

/***/ "./lib/note.js":
/*!*********************!*\
  !*** ./lib/note.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Note; });\nclass Note {\n  constructor(vel) {\n    this.x = 800;\n    this.y = 205;\n    this.vel = vel;\n    this.id = Date.now();\n\n    let color = Math.floor(Math.random() * 2) ? 'red' : 'blue';\n    this.type = color === 'red' ? 'don' : 'kat';\n    this.image = new Image();\n    this.image.src = `./gifs/${color}_note.png`;\n\n    this.stage = document.getElementById('canvas').getContext('2d');\n  }\n\n  move() {\n    this.x -= this.vel;\n  }\n\n  render() {\n    this.stage.drawImage(this.image, this.x, this.y);\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbm90ZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9ub3RlLmpzP2I4OWYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90ZSB7XG4gIGNvbnN0cnVjdG9yKHZlbCkge1xuICAgIHRoaXMueCA9IDgwMDtcbiAgICB0aGlzLnkgPSAyMDU7XG4gICAgdGhpcy52ZWwgPSB2ZWw7XG4gICAgdGhpcy5pZCA9IERhdGUubm93KCk7XG5cbiAgICBsZXQgY29sb3IgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSA/ICdyZWQnIDogJ2JsdWUnO1xuICAgIHRoaXMudHlwZSA9IGNvbG9yID09PSAncmVkJyA/ICdkb24nIDogJ2thdCc7XG4gICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuaW1hZ2Uuc3JjID0gYC4vZ2lmcy8ke2NvbG9yfV9ub3RlLnBuZ2A7XG5cbiAgICB0aGlzLnN0YWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpLmdldENvbnRleHQoJzJkJyk7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgIHRoaXMueCAtPSB0aGlzLnZlbDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLnN0YWdlLmRyYXdJbWFnZSh0aGlzLmltYWdlLCB0aGlzLngsIHRoaXMueSk7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/note.js\n");

/***/ }),

/***/ "./lib/score.js":
/*!**********************!*\
  !*** ./lib/score.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Score; });\nclass Score {\n  constructor() {\n    this.counter = document.getElementById('score-counter');\n    this.score = 0;\n  }\n\n  render() {\n    this.counter.innerHTML = this.score;\n  }\n\n  up() {\n    let extra = Math.floor(100 * Math.random());\n    this.score += 100 + extra;\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc2NvcmUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvc2NvcmUuanM/YjViMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZS1jb3VudGVyJyk7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5jb3VudGVyLmlubmVySFRNTCA9IHRoaXMuc2NvcmU7XG4gIH1cblxuICB1cCgpIHtcbiAgICBsZXQgZXh0cmEgPSBNYXRoLmZsb29yKDEwMCAqIE1hdGgucmFuZG9tKCkpO1xuICAgIHRoaXMuc2NvcmUgKz0gMTAwICsgZXh0cmE7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/score.js\n");

/***/ }),

/***/ "./lib/spirit_gauge.js":
/*!*****************************!*\
  !*** ./lib/spirit_gauge.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SpiritGauge; });\nclass SpiritGauge {\n  constructor() {\n    this.x = 340;\n    this.y = 67;\n    this.stage = document.getElementById('canvas').getContext('2d');\n    this.spirit = 0;\n    this.maxSpirit = 100;\n    this.maxWidth = 400;\n  }\n\n  render() {\n    let stage = this.stage;\n    stage.beginPath();\n    stage.rect(this.x, this.y, this.maxWidth, 40);\n    stage.fillStyle = 'white';\n    stage.fillRect(this.x, this.y, this.maxWidth, 40);\n    stage.lineWidth = 3;\n    stage.strokeStyle = 'black';\n    stage.stroke();\n\n    this.bar();\n    this.lit();\n  }\n\n  up() {\n    if (this.spirit < this.maxSpirit) {\n      this.spirit ++;\n    }\n  }\n\n  down() {\n    if (this.spirit > 0) {\n      this.spirit --;\n    }\n  }\n\n  bar() {\n    let width = this.spirit / this.maxSpirit * this.maxWidth;\n    if (width >= this.maxWidth) {\n      width = this.maxWidth;\n      this.full = true;\n    } else {\n      this.full = false;\n    }\n    this.stage.fillStyle = '#ffe92b';\n    this.stage.fillRect(this.x + 3, this.y + 3, width, 34);\n  }\n\n  lit() {\n    let fire = document.getElementById('fire');\n    if (this.full) {\n      fire.classList.remove('hide');\n    } else {\n      fire.classList.add('hide');\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc3Bpcml0X2dhdWdlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL3NwaXJpdF9nYXVnZS5qcz8yMzhjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwaXJpdEdhdWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy54ID0gMzQwO1xuICAgIHRoaXMueSA9IDY3O1xuICAgIHRoaXMuc3RhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJykuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLnNwaXJpdCA9IDA7XG4gICAgdGhpcy5tYXhTcGlyaXQgPSAxMDA7XG4gICAgdGhpcy5tYXhXaWR0aCA9IDQwMDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc3RhZ2UgPSB0aGlzLnN0YWdlO1xuICAgIHN0YWdlLmJlZ2luUGF0aCgpO1xuICAgIHN0YWdlLnJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMubWF4V2lkdGgsIDQwKTtcbiAgICBzdGFnZS5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgIHN0YWdlLmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLm1heFdpZHRoLCA0MCk7XG4gICAgc3RhZ2UubGluZVdpZHRoID0gMztcbiAgICBzdGFnZS5zdHJva2VTdHlsZSA9ICdibGFjayc7XG4gICAgc3RhZ2Uuc3Ryb2tlKCk7XG5cbiAgICB0aGlzLmJhcigpO1xuICAgIHRoaXMubGl0KCk7XG4gIH1cblxuICB1cCgpIHtcbiAgICBpZiAodGhpcy5zcGlyaXQgPCB0aGlzLm1heFNwaXJpdCkge1xuICAgICAgdGhpcy5zcGlyaXQgKys7XG4gICAgfVxuICB9XG5cbiAgZG93bigpIHtcbiAgICBpZiAodGhpcy5zcGlyaXQgPiAwKSB7XG4gICAgICB0aGlzLnNwaXJpdCAtLTtcbiAgICB9XG4gIH1cblxuICBiYXIoKSB7XG4gICAgbGV0IHdpZHRoID0gdGhpcy5zcGlyaXQgLyB0aGlzLm1heFNwaXJpdCAqIHRoaXMubWF4V2lkdGg7XG4gICAgaWYgKHdpZHRoID49IHRoaXMubWF4V2lkdGgpIHtcbiAgICAgIHdpZHRoID0gdGhpcy5tYXhXaWR0aDtcbiAgICAgIHRoaXMuZnVsbCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZnVsbCA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnN0YWdlLmZpbGxTdHlsZSA9ICcjZmZlOTJiJztcbiAgICB0aGlzLnN0YWdlLmZpbGxSZWN0KHRoaXMueCArIDMsIHRoaXMueSArIDMsIHdpZHRoLCAzNCk7XG4gIH1cblxuICBsaXQoKSB7XG4gICAgbGV0IGZpcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlyZScpO1xuICAgIGlmICh0aGlzLmZ1bGwpIHtcbiAgICAgIGZpcmUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaXJlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/spirit_gauge.js\n");

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