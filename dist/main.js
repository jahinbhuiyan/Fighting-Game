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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/sprite */ \"./src/scripts/sprite.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.querySelector('canvas');\n  const context = canvas.getContext('2d'); // c is context\n\n  canvas.width = 1024;\n  canvas.height = 576;\n  context.fillRect(0, 0, canvas.width, canvas.height);\n\n  // creatae a new player\n\n  const player = new _scripts_sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, context, {\n    // creating the position and velocity as a key: value pair\n    position: {\n      x: 0,\n      y: 0\n    },\n    velocity: {\n      x: 0,\n      y: 0\n    }\n  });\n  const enemy = new _scripts_sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, context, {\n    position: {\n      x: 400,\n      y: 100\n    },\n    velocity: {\n      x: 0,\n      y: 0\n    }\n  });\n  function movement() {\n    context.fillStyle = \"black\"; // this is done so that when we call movement the color of the canvas doesn't turn red bcs of \n    // this.context.fillStyle = \"red\" in draw() method\n    context.fillRect(0, 0, canvas.width, canvas.height);\n    window.requestAnimationFrame(movement); // this calls movement function on an endless loop\n    player.update();\n    enemy.update();\n  }\n  movement();\n  window.addEventListener('keydown', event => {\n    //keydown is a key that allows for recognition of keyboard inputs on the console\n    switch (event.key) {\n      case 'd':\n        player.velocity.x = 1;\n        break;\n    }\n    console.log(event.key);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBcUM7QUFFckNDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUVoRCxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLFFBQVEsQ0FBQztFQUMvQyxNQUFNQyxPQUFPLEdBQUdGLE1BQU0sQ0FBQ0csVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUU7O0VBRTFDSCxNQUFNLENBQUNJLEtBQUssR0FBRyxJQUFJO0VBQ25CSixNQUFNLENBQUNLLE1BQU0sR0FBRyxHQUFHO0VBRW5CSCxPQUFPLENBQUNJLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFTixNQUFNLENBQUNJLEtBQUssRUFBRUosTUFBTSxDQUFDSyxNQUFNLENBQUM7O0VBRW5EOztFQUlBLE1BQU1FLE1BQU0sR0FBRyxJQUFJVix1REFBTSxDQUFDRyxNQUFNLEVBQUNFLE9BQU8sRUFBRTtJQUFLO0lBQzNDTSxRQUFRLEVBQUM7TUFDTEMsQ0FBQyxFQUFFLENBQUM7TUFDSkMsQ0FBQyxFQUFFO0lBQ1AsQ0FBQztJQUNEQyxRQUFRLEVBQUM7TUFDTEYsQ0FBQyxFQUFFLENBQUM7TUFDSkMsQ0FBQyxFQUFDO0lBQ047RUFDSixDQUFDLENBQUM7RUFNRixNQUFNRSxLQUFLLEdBQUcsSUFBSWYsdURBQU0sQ0FBQ0csTUFBTSxFQUFFRSxPQUFPLEVBQUU7SUFDdENNLFFBQVEsRUFBQztNQUNMQyxDQUFDLEVBQUUsR0FBRztNQUNOQyxDQUFDLEVBQUU7SUFDUCxDQUFDO0lBQ0RDLFFBQVEsRUFBQztNQUNMRixDQUFDLEVBQUUsQ0FBQztNQUNKQyxDQUFDLEVBQUM7SUFDTjtFQUNKLENBQUMsQ0FBQztFQUlGLFNBQVNHLFFBQVFBLENBQUEsRUFBRTtJQUNmWCxPQUFPLENBQUNZLFNBQVMsR0FBRyxPQUFPLENBQUMsQ0FBRTtJQUM5QjtJQUNBWixPQUFPLENBQUNJLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFTixNQUFNLENBQUNJLEtBQUssRUFBRUosTUFBTSxDQUFDSyxNQUFNLENBQUM7SUFDbERVLE1BQU0sQ0FBQ0MscUJBQXFCLENBQUNILFFBQVEsQ0FBQyxFQUFDO0lBQ3ZDTixNQUFNLENBQUNVLE1BQU0sRUFBRTtJQUNmTCxLQUFLLENBQUNLLE1BQU0sRUFBRTtFQUVsQjtFQUNBSixRQUFRLEVBQUU7RUFHVkUsTUFBTSxDQUFDaEIsZ0JBQWdCLENBQUMsU0FBUyxFQUFHbUIsS0FBSyxJQUFJO0lBQUk7SUFDN0MsUUFBT0EsS0FBSyxDQUFDQyxHQUFHO01BQ1osS0FBSyxHQUFHO1FBQ1JaLE1BQU0sQ0FBQ0ksUUFBUSxDQUFDRixDQUFDLEdBQUcsQ0FBQztRQUNyQjtJQUFLO0lBRVRXLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxLQUFLLENBQUNDLEdBQUcsQ0FBQztFQUMxQixDQUFDLENBQUM7QUFFTixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2dhbWUvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3ByaXRlIGZyb20gXCIuL3NjcmlwdHMvc3ByaXRlXCJcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTsgIC8vIGMgaXMgY29udGV4dFxuXG4gICAgY2FudmFzLndpZHRoID0gMTAyNDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gNTc2O1xuXG4gICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG5cbiAgICAvLyBjcmVhdGFlIGEgbmV3IHBsYXllclxuXG5cblxuICAgIGNvbnN0IHBsYXllciA9IG5ldyBTcHJpdGUoY2FudmFzLGNvbnRleHQsIHsgICAgLy8gY3JlYXRpbmcgdGhlIHBvc2l0aW9uIGFuZCB2ZWxvY2l0eSBhcyBhIGtleTogdmFsdWUgcGFpclxuICAgICAgICBwb3NpdGlvbjp7XG4gICAgICAgICAgICB4OiAwLCBcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfSxcbiAgICAgICAgdmVsb2NpdHk6e1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6MFxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBcblxuICAgIFxuICAgIFxuICAgIGNvbnN0IGVuZW15ID0gbmV3IFNwcml0ZShjYW52YXMsIGNvbnRleHQsIHtcbiAgICAgICAgcG9zaXRpb246e1xuICAgICAgICAgICAgeDogNDAwLCBcbiAgICAgICAgICAgIHk6IDEwMFxuICAgICAgICB9LFxuICAgICAgICB2ZWxvY2l0eTp7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTowXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIFxuICAgIFxuICAgIGZ1bmN0aW9uIG1vdmVtZW50KCl7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJibGFja1wiOyAgLy8gdGhpcyBpcyBkb25lIHNvIHRoYXQgd2hlbiB3ZSBjYWxsIG1vdmVtZW50IHRoZSBjb2xvciBvZiB0aGUgY2FudmFzIGRvZXNuJ3QgdHVybiByZWQgYmNzIG9mIFxuICAgICAgICAvLyB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJyZWRcIiBpbiBkcmF3KCkgbWV0aG9kXG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobW92ZW1lbnQpIC8vIHRoaXMgY2FsbHMgbW92ZW1lbnQgZnVuY3Rpb24gb24gYW4gZW5kbGVzcyBsb29wXG4gICAgICAgIHBsYXllci51cGRhdGUoKTtcbiAgICAgICAgZW5lbXkudXBkYXRlKCk7XG4gICAgXG4gICAgfVxuICAgIG1vdmVtZW50KCk7XG5cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PnsgICAvL2tleWRvd24gaXMgYSBrZXkgdGhhdCBhbGxvd3MgZm9yIHJlY29nbml0aW9uIG9mIGtleWJvYXJkIGlucHV0cyBvbiB0aGUgY29uc29sZVxuICAgICAgICBzd2l0Y2goZXZlbnQua2V5KXtcbiAgICAgICAgICAgIGNhc2UgJ2QnOiBcbiAgICAgICAgICAgIHBsYXllci52ZWxvY2l0eS54ID0gMVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhldmVudC5rZXkpO1xuICAgIH0pXG5cbn0pXG5cblxuXG5cbiJdLCJuYW1lcyI6WyJTcHJpdGUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJxdWVyeVNlbGVjdG9yIiwiY29udGV4dCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImZpbGxSZWN0IiwicGxheWVyIiwicG9zaXRpb24iLCJ4IiwieSIsInZlbG9jaXR5IiwiZW5lbXkiLCJtb3ZlbWVudCIsImZpbGxTdHlsZSIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInVwZGF0ZSIsImV2ZW50Iiwia2V5IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/sprite.js":
/*!*******************************!*\
  !*** ./src/scripts/sprite.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Sprite; }\n/* harmony export */ });\nconst gravity = 0.2;\nclass Sprite {\n  // add canvas and context as arguments for constructor as they were created in a different class file//\n\n  constructor(canvas, context, _ref) {\n    let {\n      position,\n      velocity\n    } = _ref;\n    this.canvas = canvas;\n    this.context = context;\n    this.position = position;\n    this.velocity = velocity;\n    this.height = 150; /// assigned ranomd height\n  }\n\n  draw() {\n    // we defined context in DOMContentLoaded in index.js\n    // hence context will not be available in sprite.js /  sprite class;\n    // that's why we have to do this.context instead\n\n    this.context.fillStyle = \"red\";\n    this.context.fillRect(this.position.x, this.position.y, 50, this.height);\n  }\n  update() {\n    this.draw();\n    this.position.x += this.velocity.x;\n    this.position.y += this.velocity.y;\n    if (this.position.y + this.height + this.velocity.y >= this.canvas.height) {\n      this.velocity.y = 0; //stopping movement when the user chareacter is >= canvas height(boundary wall)\n    } else {\n      this.velocity.y += gravity; // adding gravity prevents the characters from leaving the screen\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zcHJpdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE1BQU1BLE9BQU8sR0FBRyxHQUFHO0FBRUosTUFBTUMsTUFBTSxDQUFDO0VBR3hCOztFQUVBQyxXQUFXQSxDQUFDQyxNQUFNLEVBQUVDLE9BQU8sRUFBQUMsSUFBQSxFQUF3QjtJQUFBLElBQXRCO01BQUNDLFFBQVE7TUFBRUM7SUFBUSxDQUFDLEdBQUFGLElBQUE7SUFDN0MsSUFBSSxDQUFDRixNQUFNLEdBQUdBLE1BQU07SUFDcEIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBLE9BQU87SUFDdEIsSUFBSSxDQUFDRSxRQUFRLEdBQUdBLFFBQVE7SUFDeEIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBLFFBQVE7SUFDeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7RUFDdkI7O0VBRUFDLElBQUlBLENBQUEsRUFBRTtJQUVGO0lBQ0E7SUFDQTs7SUFFQSxJQUFJLENBQUNMLE9BQU8sQ0FBQ00sU0FBUyxHQUFHLEtBQUs7SUFDOUIsSUFBSSxDQUFDTixPQUFPLENBQUNPLFFBQVEsQ0FBQyxJQUFJLENBQUNMLFFBQVEsQ0FBQ00sQ0FBQyxFQUFFLElBQUksQ0FBQ04sUUFBUSxDQUFDTyxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQ0wsTUFBTSxDQUFDO0VBQzVFO0VBRUFNLE1BQU1BLENBQUEsRUFBRTtJQUNKLElBQUksQ0FBQ0wsSUFBSSxFQUFFO0lBRVgsSUFBSSxDQUFDSCxRQUFRLENBQUNNLENBQUMsSUFBSSxJQUFJLENBQUNMLFFBQVEsQ0FBQ0ssQ0FBQztJQUNsQyxJQUFJLENBQUNOLFFBQVEsQ0FBQ08sQ0FBQyxJQUFJLElBQUksQ0FBQ04sUUFBUSxDQUFDTSxDQUFDO0lBRWxDLElBQUcsSUFBSSxDQUFDUCxRQUFRLENBQUNPLENBQUMsR0FBRyxJQUFJLENBQUNMLE1BQU0sR0FBRyxJQUFJLENBQUNELFFBQVEsQ0FBQ00sQ0FBQyxJQUFJLElBQUksQ0FBQ1YsTUFBTSxDQUFDSyxNQUFNLEVBQUM7TUFDckUsSUFBSSxDQUFDRCxRQUFRLENBQUNNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN6QixDQUFDLE1BQUs7TUFDRixJQUFJLENBQUNOLFFBQVEsQ0FBQ00sQ0FBQyxJQUFJYixPQUFPLENBQUMsQ0FBRTtJQUNqQztFQUNKO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2dhbWUvLi9zcmMvc2NyaXB0cy9zcHJpdGUuanM/MGFjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IGdyYXZpdHkgPSAwLjI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwcml0ZSB7XG4gICAgXG5cbiAgICAvLyBhZGQgY2FudmFzIGFuZCBjb250ZXh0IGFzIGFyZ3VtZW50cyBmb3IgY29uc3RydWN0b3IgYXMgdGhleSB3ZXJlIGNyZWF0ZWQgaW4gYSBkaWZmZXJlbnQgY2xhc3MgZmlsZS8vXG5cbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGNvbnRleHQsIHtwb3NpdGlvbiwgdmVsb2NpdHl9KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB2ZWxvY2l0eTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxNTA7IC8vLyBhc3NpZ25lZCByYW5vbWQgaGVpZ2h0XG4gICAgfVxuXG4gICAgZHJhdygpe1xuXG4gICAgICAgIC8vIHdlIGRlZmluZWQgY29udGV4dCBpbiBET01Db250ZW50TG9hZGVkIGluIGluZGV4LmpzXG4gICAgICAgIC8vIGhlbmNlIGNvbnRleHQgd2lsbCBub3QgYmUgYXZhaWxhYmxlIGluIHNwcml0ZS5qcyAvICBzcHJpdGUgY2xhc3M7XG4gICAgICAgIC8vIHRoYXQncyB3aHkgd2UgaGF2ZSB0byBkbyB0aGlzLmNvbnRleHQgaW5zdGVhZFxuXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIDUwLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCl7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnZlbG9jaXR5Lng7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnZlbG9jaXR5Lnk7XG5cbiAgICAgICAgaWYodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQgKyB0aGlzLnZlbG9jaXR5LnkgPj0gdGhpcy5jYW52YXMuaGVpZ2h0KXtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IDA7IC8vc3RvcHBpbmcgbW92ZW1lbnQgd2hlbiB0aGUgdXNlciBjaGFyZWFjdGVyIGlzID49IGNhbnZhcyBoZWlnaHQoYm91bmRhcnkgd2FsbClcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ICs9IGdyYXZpdHk7ICAvLyBhZGRpbmcgZ3Jhdml0eSBwcmV2ZW50cyB0aGUgY2hhcmFjdGVycyBmcm9tIGxlYXZpbmcgdGhlIHNjcmVlblxuICAgICAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6WyJncmF2aXR5IiwiU3ByaXRlIiwiY29uc3RydWN0b3IiLCJjYW52YXMiLCJjb250ZXh0IiwiX3JlZiIsInBvc2l0aW9uIiwidmVsb2NpdHkiLCJoZWlnaHQiLCJkcmF3IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ4IiwieSIsInVwZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/sprite.js\n");

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