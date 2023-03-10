/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/sprite */ \"./src/scripts/sprite.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.querySelector('canvas');\n  const context = canvas.getContext('2d'); // c is context\n\n  canvas.width = 1024;\n  canvas.height = 576;\n  context.fillRect(0, 0, canvas.width, canvas.height);\n\n  // creatae a new player\n\n  const player = new _scripts_sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, context, {\n    position: {\n      x: 0,\n      y: 0\n    },\n    velocity: {\n      x: 0,\n      y: 0\n    }\n  });\n  const enemy = new _scripts_sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, context, {\n    position: {\n      x: 400,\n      y: 100\n    },\n    velocity: {\n      x: 0,\n      y: 0\n    }\n  });\n  function movement() {\n    context.fillStyle = \"black\";\n    context.fillRect(0, 0, canvas.width, canvas.height);\n    window.requestAnimationFrame(movement);\n    player.update();\n    enemy.update();\n  }\n  movement();\n  window.addEventListener('keydown', event => {\n    switch (event.key) {\n      case 'd':\n        player.velocity.x = 1;\n        break;\n    }\n    console.log(event.key);\n  });\n});\n\n////# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBcUM7QUFFckNDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUVoRCxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLFFBQVEsQ0FBQztFQUMvQyxNQUFNQyxPQUFPLEdBQUdGLE1BQU0sQ0FBQ0csVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUU7O0VBRTFDSCxNQUFNLENBQUNJLEtBQUssR0FBRyxJQUFJO0VBQ25CSixNQUFNLENBQUNLLE1BQU0sR0FBRyxHQUFHO0VBRW5CSCxPQUFPLENBQUNJLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFTixNQUFNLENBQUNJLEtBQUssRUFBRUosTUFBTSxDQUFDSyxNQUFNLENBQUM7O0VBRW5EOztFQUlBLE1BQU1FLE1BQU0sR0FBRyxJQUFJVix1REFBTSxDQUFDRyxNQUFNLEVBQUNFLE9BQU8sRUFBRTtJQUN0Q00sUUFBUSxFQUFDO01BQ0xDLENBQUMsRUFBRSxDQUFDO01BQ0pDLENBQUMsRUFBRTtJQUNQLENBQUM7SUFDREMsUUFBUSxFQUFDO01BQ0xGLENBQUMsRUFBRSxDQUFDO01BQ0pDLENBQUMsRUFBQztJQUNOO0VBQ0osQ0FBQyxDQUFDO0VBTUYsTUFBTUUsS0FBSyxHQUFHLElBQUlmLHVEQUFNLENBQUNHLE1BQU0sRUFBRUUsT0FBTyxFQUFFO0lBQ3RDTSxRQUFRLEVBQUM7TUFDTEMsQ0FBQyxFQUFFLEdBQUc7TUFDTkMsQ0FBQyxFQUFFO0lBQ1AsQ0FBQztJQUNEQyxRQUFRLEVBQUM7TUFDTEYsQ0FBQyxFQUFFLENBQUM7TUFDSkMsQ0FBQyxFQUFDO0lBQ047RUFDSixDQUFDLENBQUM7RUFJRixTQUFTRyxRQUFRQSxDQUFBLEVBQUU7SUFDZlgsT0FBTyxDQUFDWSxTQUFTLEdBQUcsT0FBTztJQUMzQlosT0FBTyxDQUFDSSxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRU4sTUFBTSxDQUFDSSxLQUFLLEVBQUVKLE1BQU0sQ0FBQ0ssTUFBTSxDQUFDO0lBQ2xEVSxNQUFNLENBQUNDLHFCQUFxQixDQUFDSCxRQUFRLENBQUM7SUFDdENOLE1BQU0sQ0FBQ1UsTUFBTSxFQUFFO0lBQ2ZMLEtBQUssQ0FBQ0ssTUFBTSxFQUFFO0VBRWxCO0VBQ0FKLFFBQVEsRUFBRTtFQUdWRSxNQUFNLENBQUNoQixnQkFBZ0IsQ0FBQyxTQUFTLEVBQUdtQixLQUFLLElBQUk7SUFDekMsUUFBT0EsS0FBSyxDQUFDQyxHQUFHO01BQ1osS0FBSyxHQUFHO1FBQ1JaLE1BQU0sQ0FBQ0ksUUFBUSxDQUFDRixDQUFDLEdBQUcsQ0FBQztRQUNyQjtJQUFLO0lBRVRXLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxLQUFLLENBQUNDLEdBQUcsQ0FBQztFQUMxQixDQUFDLENBQUM7QUFFTixDQUFDLENBQUM7O0FBRUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2dhbWUvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3ByaXRlIGZyb20gXCIuL3NjcmlwdHMvc3ByaXRlXCJcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTsgIC8vIGMgaXMgY29udGV4dFxuXG4gICAgY2FudmFzLndpZHRoID0gMTAyNDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gNTc2O1xuXG4gICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG5cbiAgICAvLyBjcmVhdGFlIGEgbmV3IHBsYXllclxuXG5cblxuICAgIGNvbnN0IHBsYXllciA9IG5ldyBTcHJpdGUoY2FudmFzLGNvbnRleHQsIHtcbiAgICAgICAgcG9zaXRpb246e1xuICAgICAgICAgICAgeDogMCwgXG4gICAgICAgICAgICB5OiAwXG4gICAgICAgIH0sXG4gICAgICAgIHZlbG9jaXR5OntcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OjBcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgXG5cbiAgICBcbiAgICBcbiAgICBjb25zdCBlbmVteSA9IG5ldyBTcHJpdGUoY2FudmFzLCBjb250ZXh0LCB7XG4gICAgICAgIHBvc2l0aW9uOntcbiAgICAgICAgICAgIHg6IDQwMCwgXG4gICAgICAgICAgICB5OiAxMDBcbiAgICAgICAgfSxcbiAgICAgICAgdmVsb2NpdHk6e1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6MFxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBcbiAgICBcbiAgICBmdW5jdGlvbiBtb3ZlbWVudCgpe1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCgwLDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShtb3ZlbWVudClcbiAgICAgICAgcGxheWVyLnVwZGF0ZSgpO1xuICAgICAgICBlbmVteS51cGRhdGUoKTtcbiAgICBcbiAgICB9XG4gICAgbW92ZW1lbnQoKTtcblxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+e1xuICAgICAgICBzd2l0Y2goZXZlbnQua2V5KXtcbiAgICAgICAgICAgIGNhc2UgJ2QnOiBcbiAgICAgICAgICAgIHBsYXllci52ZWxvY2l0eS54ID0gMVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhldmVudC5rZXkpO1xuICAgIH0pXG5cbn0pXG5cbi8vIl0sIm5hbWVzIjpbIlNwcml0ZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwiZmlsbFJlY3QiLCJwbGF5ZXIiLCJwb3NpdGlvbiIsIngiLCJ5IiwidmVsb2NpdHkiLCJlbmVteSIsIm1vdmVtZW50IiwiZmlsbFN0eWxlIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidXBkYXRlIiwiZXZlbnQiLCJrZXkiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/sprite.js":
/*!*******************************!*\
  !*** ./src/scripts/sprite.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Sprite; }\n/* harmony export */ });\nconst gravity = 0.2;\nclass Sprite {\n  constructor(canvas, context, _ref) {\n    let {\n      position,\n      velocity\n    } = _ref;\n    this.canvas = canvas;\n    this.context = context;\n    this.position = position;\n    this.velocity = velocity;\n    this.height = 150;\n  }\n  draw() {\n    // we defined context in DOMContentLoaded in index.js\n    // hence context will not be available in sprite.js /  sprite class;\n    // that's why we have to do this.context instead\n\n    this.context.fillStyle = \"red\";\n    this.context.fillRect(this.position.x, this.position.y, 50, this.height);\n  }\n  update() {\n    this.draw();\n    this.position.x += this.velocity.x;\n    this.position.y += this.velocity.y;\n    if (this.position.y + this.height + this.velocity.y >= this.canvas.height) {\n      this.velocity.y = 0;\n    } else {\n      this.velocity.y += gravity;\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zcHJpdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE1BQU1BLE9BQU8sR0FBRyxHQUFHO0FBRUosTUFBTUMsTUFBTSxDQUFDO0VBRXhCQyxXQUFXQSxDQUFDQyxNQUFNLEVBQUVDLE9BQU8sRUFBQUMsSUFBQSxFQUF3QjtJQUFBLElBQXRCO01BQUNDLFFBQVE7TUFBRUM7SUFBUSxDQUFDLEdBQUFGLElBQUE7SUFDN0MsSUFBSSxDQUFDRixNQUFNLEdBQUdBLE1BQU07SUFDcEIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBLE9BQU87SUFDdEIsSUFBSSxDQUFDRSxRQUFRLEdBQUdBLFFBQVE7SUFDeEIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBLFFBQVE7SUFDeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUcsR0FBRztFQUNyQjtFQUVBQyxJQUFJQSxDQUFBLEVBQUU7SUFFRjtJQUNBO0lBQ0E7O0lBRUEsSUFBSSxDQUFDTCxPQUFPLENBQUNNLFNBQVMsR0FBRyxLQUFLO0lBQzlCLElBQUksQ0FBQ04sT0FBTyxDQUFDTyxRQUFRLENBQUMsSUFBSSxDQUFDTCxRQUFRLENBQUNNLENBQUMsRUFBRSxJQUFJLENBQUNOLFFBQVEsQ0FBQ08sQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUNMLE1BQU0sQ0FBQztFQUM1RTtFQUVBTSxNQUFNQSxDQUFBLEVBQUU7SUFDSixJQUFJLENBQUNMLElBQUksRUFBRTtJQUVYLElBQUksQ0FBQ0gsUUFBUSxDQUFDTSxDQUFDLElBQUksSUFBSSxDQUFDTCxRQUFRLENBQUNLLENBQUM7SUFDbEMsSUFBSSxDQUFDTixRQUFRLENBQUNPLENBQUMsSUFBSSxJQUFJLENBQUNOLFFBQVEsQ0FBQ00sQ0FBQztJQUVsQyxJQUFHLElBQUksQ0FBQ1AsUUFBUSxDQUFDTyxDQUFDLEdBQUcsSUFBSSxDQUFDTCxNQUFNLEdBQUcsSUFBSSxDQUFDRCxRQUFRLENBQUNNLENBQUMsSUFBSSxJQUFJLENBQUNWLE1BQU0sQ0FBQ0ssTUFBTSxFQUFDO01BQ3JFLElBQUksQ0FBQ0QsUUFBUSxDQUFDTSxDQUFDLEdBQUcsQ0FBQztJQUN2QixDQUFDLE1BQUs7TUFDRixJQUFJLENBQUNOLFFBQVEsQ0FBQ00sQ0FBQyxJQUFJYixPQUFPO0lBQzlCO0VBQ0o7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRfZ2FtZS8uL3NyYy9zY3JpcHRzL3Nwcml0ZS5qcz8wYWM3Il0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgZ3Jhdml0eSA9IDAuMjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ByaXRlIHtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGNvbnRleHQsIHtwb3NpdGlvbiwgdmVsb2NpdHl9KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB2ZWxvY2l0eTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxNTA7XG4gICAgfVxuXG4gICAgZHJhdygpe1xuXG4gICAgICAgIC8vIHdlIGRlZmluZWQgY29udGV4dCBpbiBET01Db250ZW50TG9hZGVkIGluIGluZGV4LmpzXG4gICAgICAgIC8vIGhlbmNlIGNvbnRleHQgd2lsbCBub3QgYmUgYXZhaWxhYmxlIGluIHNwcml0ZS5qcyAvICBzcHJpdGUgY2xhc3M7XG4gICAgICAgIC8vIHRoYXQncyB3aHkgd2UgaGF2ZSB0byBkbyB0aGlzLmNvbnRleHQgaW5zdGVhZFxuXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIDUwLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCl7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnZlbG9jaXR5Lng7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnZlbG9jaXR5Lnk7XG5cbiAgICAgICAgaWYodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQgKyB0aGlzLnZlbG9jaXR5LnkgPj0gdGhpcy5jYW52YXMuaGVpZ2h0KXtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IDA7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSArPSBncmF2aXR5O1xuICAgICAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6WyJncmF2aXR5IiwiU3ByaXRlIiwiY29uc3RydWN0b3IiLCJjYW52YXMiLCJjb250ZXh0IiwiX3JlZiIsInBvc2l0aW9uIiwidmVsb2NpdHkiLCJoZWlnaHQiLCJkcmF3IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ4IiwieSIsInVwZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/sprite.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2dhbWUvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;