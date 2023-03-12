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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/sprite */ \"./src/scripts/sprite.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.querySelector('canvas');\n  const context = canvas.getContext('2d'); // c is context\n\n  canvas.width = 1024;\n  canvas.height = 576;\n  context.fillRect(0, 0, canvas.width, canvas.height);\n\n  // creatae a new player\n\n  const player = new _scripts_sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, context, {\n    // creating the position and velocity as a key: value pair\n    position: {\n      x: 0,\n      y: 0\n    },\n    velocity: {\n      x: 0,\n      y: 0\n    }\n  });\n  const enemy = new _scripts_sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, context, {\n    position: {\n      x: 400,\n      y: 100\n    },\n    velocity: {\n      x: 0,\n      y: 0\n    }\n  });\n  const keys = {\n    a: {\n      pressed: false\n    },\n    d: {\n      pressed: false\n    }\n  };\n  let lastKey;\n  function movement() {\n    context.fillStyle = \"black\"; // this is done so that when we call movement the color of the canvas doesn't turn red bcs of \n    // this.context.fillStyle = \"red\" in draw() method\n    context.fillRect(0, 0, canvas.width, canvas.height);\n    window.requestAnimationFrame(movement); // this calls movement function on an endless loop\n    player.update();\n    enemy.update();\n    player.velocity.x = 0;\n    if (keys.a.pressed && lastKey === 'a') {\n      player.velocity.x = -1;\n    } else if (keys.d.pressed && lastKey === 'd') {\n      player.velocity.x = 1;\n    }\n  }\n  movement();\n  window.addEventListener('keydown', event => {\n    //keydown is a key that allows for recognition of keyboard inputs on the console\n    switch (event.key) {\n      case 'd':\n        keys.d.pressed = true;\n        lastKey = 'd';\n        break;\n      case 'a':\n        keys.a.pressed = true;\n        lastKey = 'a';\n        break;\n    }\n    console.log(event.key);\n  });\n  window.addEventListener('keyup', event => {\n    //keydown is a key that allows for recognition of keyboard inputs on the console\n    switch (event.key) {\n      case 'd':\n        keys.d.pressed = false;\n        break;\n      case 'a':\n        keys.a.pressed = false;\n        break;\n    }\n    console.log(event.key);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMxQixDQUFDLENBQUM7RUFFRkosTUFBTSxDQUFDckIsZ0JBQWdCLENBQUMsT0FBTyxFQUFHd0IsS0FBSyxJQUFJO0lBQUk7SUFDM0MsUUFBT0EsS0FBSyxDQUFDQyxHQUFHO01BQ1osS0FBSyxHQUFHO1FBQ1JYLElBQUksQ0FBQ0csQ0FBQyxDQUFDRCxPQUFPLEdBQUcsS0FBSztRQUN0QjtNQUNBLEtBQUssR0FBRztRQUNSRixJQUFJLENBQUNDLENBQUMsQ0FBQ0MsT0FBTyxHQUFHLEtBQUs7UUFDdEI7SUFBSztJQUlUVSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsS0FBSyxDQUFDQyxHQUFHLENBQUM7RUFDMUIsQ0FBQyxDQUFDO0FBRU4sQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9nYW1lLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwcml0ZSBmcm9tIFwiLi9zY3JpcHRzL3Nwcml0ZVwiXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7ICAvLyBjIGlzIGNvbnRleHRcblxuICAgIGNhbnZhcy53aWR0aCA9IDEwMjQ7XG4gICAgY2FudmFzLmhlaWdodCA9IDU3NjtcblxuICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuXG4gICAgLy8gY3JlYXRhZSBhIG5ldyBwbGF5ZXJcblxuXG5cbiAgICBjb25zdCBwbGF5ZXIgPSBuZXcgU3ByaXRlKGNhbnZhcyxjb250ZXh0LCB7ICAgIC8vIGNyZWF0aW5nIHRoZSBwb3NpdGlvbiBhbmQgdmVsb2NpdHkgYXMgYSBrZXk6IHZhbHVlIHBhaXJcbiAgICAgICAgcG9zaXRpb246e1xuICAgICAgICAgICAgeDogMCwgXG4gICAgICAgICAgICB5OiAwXG4gICAgICAgIH0sXG4gICAgICAgIHZlbG9jaXR5OntcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OjBcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgXG5cbiAgICBcbiAgICBcbiAgICBjb25zdCBlbmVteSA9IG5ldyBTcHJpdGUoY2FudmFzLCBjb250ZXh0LCB7XG4gICAgICAgIHBvc2l0aW9uOntcbiAgICAgICAgICAgIHg6IDQwMCwgXG4gICAgICAgICAgICB5OiAxMDBcbiAgICAgICAgfSxcbiAgICAgICAgdmVsb2NpdHk6e1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6MFxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBrZXlzID0ge1xuICAgICAgICBhOiB7XG4gICAgICAgICAgICBwcmVzc2VkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBkOiB7XG4gICAgICAgICAgICBwcmVzc2VkOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBsYXN0S2V5O1xuICAgIFxuICAgIGZ1bmN0aW9uIG1vdmVtZW50KCl7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJibGFja1wiOyAgLy8gdGhpcyBpcyBkb25lIHNvIHRoYXQgd2hlbiB3ZSBjYWxsIG1vdmVtZW50IHRoZSBjb2xvciBvZiB0aGUgY2FudmFzIGRvZXNuJ3QgdHVybiByZWQgYmNzIG9mIFxuICAgICAgICAvLyB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJyZWRcIiBpbiBkcmF3KCkgbWV0aG9kXG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobW92ZW1lbnQpIC8vIHRoaXMgY2FsbHMgbW92ZW1lbnQgZnVuY3Rpb24gb24gYW4gZW5kbGVzcyBsb29wXG4gICAgICAgIHBsYXllci51cGRhdGUoKTtcbiAgICAgICAgZW5lbXkudXBkYXRlKCk7XG4gICAgICAgIFxuICAgICAgICBwbGF5ZXIudmVsb2NpdHkueCA9IDA7XG4gICAgICAgIGlmKGtleXMuYS5wcmVzc2VkICYmIGxhc3RLZXkgPT09ICdhJyl7XG4gICAgICAgICAgICBwbGF5ZXIudmVsb2NpdHkueCA9IC0xXG4gICAgICAgIH1lbHNlIGlmKGtleXMuZC5wcmVzc2VkICYmIGxhc3RLZXkgPT09ICdkJyl7XG4gICAgICAgICAgICBwbGF5ZXIudmVsb2NpdHkueCA9IDFcbiAgICAgICAgfVxuICAgIFxuICAgIH1cbiAgICBtb3ZlbWVudCgpO1xuXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT57ICAgLy9rZXlkb3duIGlzIGEga2V5IHRoYXQgYWxsb3dzIGZvciByZWNvZ25pdGlvbiBvZiBrZXlib2FyZCBpbnB1dHMgb24gdGhlIGNvbnNvbGVcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleSl7XG4gICAgICAgICAgICBjYXNlICdkJzogXG4gICAgICAgICAgICBrZXlzLmQucHJlc3NlZCA9IHRydWVcbiAgICAgICAgICAgIGxhc3RLZXkgPSAnZCc7XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnYSc6IFxuICAgICAgICAgICAga2V5cy5hLnByZXNzZWQgPSB0cnVlXG4gICAgICAgICAgICBsYXN0S2V5ID0gJ2EnO1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQua2V5KTtcbiAgICB9KVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PnsgICAvL2tleWRvd24gaXMgYSBrZXkgdGhhdCBhbGxvd3MgZm9yIHJlY29nbml0aW9uIG9mIGtleWJvYXJkIGlucHV0cyBvbiB0aGUgY29uc29sZVxuICAgICAgICBzd2l0Y2goZXZlbnQua2V5KXtcbiAgICAgICAgICAgIGNhc2UgJ2QnOiBcbiAgICAgICAgICAgIGtleXMuZC5wcmVzc2VkID0gZmFsc2VcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdhJzogXG4gICAgICAgICAgICBrZXlzLmEucHJlc3NlZCA9IGZhbHNlXG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LmtleSk7XG4gICAgfSlcblxufSlcblxuXG5cblxuIl0sIm5hbWVzIjpbIlNwcml0ZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwiZmlsbFJlY3QiLCJwbGF5ZXIiLCJwb3NpdGlvbiIsIngiLCJ5IiwidmVsb2NpdHkiLCJlbmVteSIsImtleXMiLCJhIiwicHJlc3NlZCIsImQiLCJsYXN0S2V5IiwibW92ZW1lbnQiLCJmaWxsU3R5bGUiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGUiLCJldmVudCIsImtleSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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