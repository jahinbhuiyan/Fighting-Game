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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/character */ \"./src/scripts/character.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.querySelector('canvas');\n  const context = canvas.getContext('2d'); // c is context\n\n  canvas.width = 1024;\n  canvas.height = 576;\n  context.fillRect(0, 0, canvas.width, canvas.height);\n\n  // creatae a new player\n\n  const player = new _scripts_character__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, context, {\n    // creating the position and velocity as a key: value pair\n    position: {\n      x: 0,\n      y: 0\n    },\n    velocity: {\n      x: 0,\n      y: 0\n    },\n    color: 'green',\n    offset: {\n      x: 0,\n      y: 0\n    }\n  });\n  console.log(player);\n  const enemy = new _scripts_character__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, context, {\n    position: {\n      x: 400,\n      y: 100\n    },\n    velocity: {\n      x: 0,\n      y: 0\n    },\n    color: 'blue',\n    offset: {\n      x: -50,\n      y: 0\n    }\n  });\n  const keys = {\n    a: {\n      pressed: false\n    },\n    d: {\n      pressed: false\n    },\n    w: {\n      pressed: false\n    }\n  };\n  let lastKey;\n  function attackCollision(player1, player2) {\n    return player1.attackRect.position.x + player1.attackRect.width >= player2.position.x && player1.attackRect.position.x <= player2.position.x + player2.width && player1.attackRect.position.y + player1.attackRect.height >= player2.position.y && player1.attackRect.position.y <= player2.position.y + player2.height;\n  }\n  function movement() {\n    context.fillStyle = \"black\"; // this is done so that when we call movement the color of the canvas doesn't turn red bcs of \n    // this.context.fillStyle = \"red\" in draw() method\n    context.fillRect(0, 0, canvas.width, canvas.height);\n    window.requestAnimationFrame(movement); // this calls movement function on an endless loop\n    player.update();\n    enemy.update();\n    player.velocity.x = 0;\n    if (keys.a.pressed) {\n      player.velocity.x = -5;\n    } else if (keys.d.pressed) {\n      player.velocity.x = 5;\n    } else if (keys.w.pressed) {\n      player.velocity.y = -15;\n    }\n\n    //collision detection\n    if (attackCollision(player, enemy) && player.attacking) {\n      console.log('go');\n      player.attacking = false;\n    }\n  }\n  movement();\n  window.addEventListener('keydown', event => {\n    //keydown is a key that allows for recognition of keyboard inputs on the console\n    switch (event.key) {\n      case 'd':\n        keys.d.pressed = true;\n        break;\n      case 'a':\n        keys.a.pressed = true;\n        break;\n      case 'w':\n        keys.w.pressed = true;\n        break;\n      case 'k':\n        player.attack();\n        break;\n    }\n    console.log(event.key);\n  });\n  window.addEventListener('keyup', event => {\n    //keydown is a key that allows for recognition of keyboard inputs on the console\n    switch (event.key) {\n      case 'd':\n        keys.d.pressed = false;\n        break;\n      case 'a':\n        keys.a.pressed = false;\n        break;\n      case 'w':\n        keys.w.pressed = false;\n        console.log(\"released\", event.key);\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNJLENBQUMsQ0FBQ0YsT0FBTyxHQUFHLElBQUk7UUFDekI7TUFDQSxLQUFLLEdBQUc7UUFDSlosTUFBTSxDQUFDNEIsTUFBTSxFQUFFO1FBQ25CO0lBQUs7SUFJVHJCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDa0IsS0FBSyxDQUFDQyxHQUFHLENBQUM7RUFDMUIsQ0FBQyxDQUFDO0VBRUZMLE1BQU0sQ0FBQzlCLGdCQUFnQixDQUFDLE9BQU8sRUFBR2tDLEtBQUssSUFBSTtJQUFJO0lBQzNDLFFBQU9BLEtBQUssQ0FBQ0MsR0FBRztNQUNaLEtBQUssR0FBRztRQUNKakIsSUFBSSxDQUFDRyxDQUFDLENBQUNELE9BQU8sR0FBRyxLQUFLO1FBQzFCO01BQ0EsS0FBSyxHQUFHO1FBQ0pGLElBQUksQ0FBQ0MsQ0FBQyxDQUFDQyxPQUFPLEdBQUcsS0FBSztRQUMxQjtNQUNBLEtBQUssR0FBRztRQUNKRixJQUFJLENBQUNJLENBQUMsQ0FBQ0YsT0FBTyxHQUFHLEtBQUs7UUFDdEJMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsRUFBQ2tCLEtBQUssQ0FBQ0MsR0FBRyxDQUFDO0lBQUM7RUFHOUMsQ0FBQyxDQUFDO0FBRU4sQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9nYW1lLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXJhY3RlciBmcm9tIFwiLi9zY3JpcHRzL2NoYXJhY3RlclwiXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTsgIC8vIGMgaXMgY29udGV4dFxuXG4gICAgY2FudmFzLndpZHRoID0gMTAyNDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gNTc2O1xuXG4gICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG5cbiAgICAvLyBjcmVhdGFlIGEgbmV3IHBsYXllclxuXG5cblxuICAgIGNvbnN0IHBsYXllciA9IG5ldyBDaGFyYWN0ZXIoY2FudmFzLGNvbnRleHQsIHsgICAgLy8gY3JlYXRpbmcgdGhlIHBvc2l0aW9uIGFuZCB2ZWxvY2l0eSBhcyBhIGtleTogdmFsdWUgcGFpclxuICAgICAgICBwb3NpdGlvbjp7XG4gICAgICAgICAgICB4OiAwLCBcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfSxcbiAgICAgICAgdmVsb2NpdHk6e1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6MFxuICAgICAgICB9LFxuICAgICAgICBjb2xvcjogJ2dyZWVuJyxcblxuICAgICAgICBvZmZzZXQ6e1xuICAgICAgICAgICAgeDowLFxuICAgICAgICAgICAgeTowXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhwbGF5ZXIpXG5cbiAgICBcblxuICAgIFxuICAgIFxuICAgIGNvbnN0IGVuZW15ID0gbmV3IENoYXJhY3RlcihjYW52YXMsIGNvbnRleHQsIHtcbiAgICAgICAgcG9zaXRpb246e1xuICAgICAgICAgICAgeDogNDAwLCBcbiAgICAgICAgICAgIHk6IDEwMFxuICAgICAgICB9LFxuICAgICAgICB2ZWxvY2l0eTp7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTowXG4gICAgICAgIH0sXG4gICAgICAgIGNvbG9yOiAnYmx1ZScsXG4gICAgICAgIG9mZnNldDp7XG4gICAgICAgICAgICB4Oi01MCxcbiAgICAgICAgICAgIHk6MFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0pO1xuXG4gICAgY29uc3Qga2V5cyA9IHtcbiAgICAgICAgYToge1xuICAgICAgICAgICAgcHJlc3NlZDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgZDoge1xuICAgICAgICAgICAgcHJlc3NlZDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgdzp7XG4gICAgICAgICAgICBwcmVzc2VkOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBsYXN0S2V5O1xuXG4gICAgZnVuY3Rpb24gYXR0YWNrQ29sbGlzaW9uKHBsYXllcjEsIHBsYXllcjIpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICBwbGF5ZXIxLmF0dGFja1JlY3QucG9zaXRpb24ueCArIHBsYXllcjEuYXR0YWNrUmVjdC53aWR0aCA+PSBwbGF5ZXIyLnBvc2l0aW9uLnhcbiAgICAgICAgICAgICYmIFxuICAgICAgICAgICAgcGxheWVyMS5hdHRhY2tSZWN0LnBvc2l0aW9uLnggPD0gcGxheWVyMi5wb3NpdGlvbi54ICsgcGxheWVyMi53aWR0aFxuICAgICAgICAgICAgJiYgXG4gICAgICAgICAgICBwbGF5ZXIxLmF0dGFja1JlY3QucG9zaXRpb24ueSArIHBsYXllcjEuYXR0YWNrUmVjdC5oZWlnaHQgPj0gcGxheWVyMi5wb3NpdGlvbi55XG4gICAgICAgICAgICAmJlxuICAgICAgICAgICAgcGxheWVyMS5hdHRhY2tSZWN0LnBvc2l0aW9uLnkgPD0gcGxheWVyMi5wb3NpdGlvbi55ICsgcGxheWVyMi5oZWlnaHRcbiAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBtb3ZlbWVudCgpe1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjsgIC8vIHRoaXMgaXMgZG9uZSBzbyB0aGF0IHdoZW4gd2UgY2FsbCBtb3ZlbWVudCB0aGUgY29sb3Igb2YgdGhlIGNhbnZhcyBkb2Vzbid0IHR1cm4gcmVkIGJjcyBvZiBcbiAgICAgICAgLy8gdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwicmVkXCIgaW4gZHJhdygpIG1ldGhvZFxuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KDAsMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKG1vdmVtZW50KSAvLyB0aGlzIGNhbGxzIG1vdmVtZW50IGZ1bmN0aW9uIG9uIGFuIGVuZGxlc3MgbG9vcFxuICAgICAgICBwbGF5ZXIudXBkYXRlKCk7XG4gICAgICAgIGVuZW15LnVwZGF0ZSgpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHBsYXllci52ZWxvY2l0eS54ID0gMDtcbiAgICAgICAgaWYoa2V5cy5hLnByZXNzZWQgKXtcbiAgICAgICAgICAgIHBsYXllci52ZWxvY2l0eS54ID0gLTVcbiAgICAgICAgfWVsc2UgaWYoa2V5cy5kLnByZXNzZWQgKXtcbiAgICAgICAgICAgIHBsYXllci52ZWxvY2l0eS54ID0gNVxuICAgICAgICB9ZWxzZSBpZihrZXlzLncucHJlc3NlZCApe1xuICAgICAgICAgICAgcGxheWVyLnZlbG9jaXR5LnkgPSAtMTVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vY29sbGlzaW9uIGRldGVjdGlvblxuICAgICAgICBpZiggYXR0YWNrQ29sbGlzaW9uKFxuICAgICAgICAgICAgcGxheWVyLFxuICAgICAgICAgICAgZW5lbXlcbiAgICAgICAgKVxuICAgICAgICAgICAgJiZcbiAgICAgICAgICAgIHBsYXllci5hdHRhY2tpbmcpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dvJyk7XG4gICAgICAgICAgICBwbGF5ZXIuYXR0YWNraW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICBcbiAgICB9XG4gICAgbW92ZW1lbnQoKTtcblxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+eyAgIC8va2V5ZG93biBpcyBhIGtleSB0aGF0IGFsbG93cyBmb3IgcmVjb2duaXRpb24gb2Yga2V5Ym9hcmQgaW5wdXRzIG9uIHRoZSBjb25zb2xlXG4gICAgICAgIHN3aXRjaChldmVudC5rZXkpe1xuICAgICAgICAgICAgY2FzZSAnZCc6IFxuICAgICAgICAgICAgICAgIGtleXMuZC5wcmVzc2VkID0gdHJ1ZVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ2EnOiBcbiAgICAgICAgICAgICAgICBrZXlzLmEucHJlc3NlZCA9IHRydWVcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICd3JzpcbiAgICAgICAgICAgICAgICBrZXlzLncucHJlc3NlZCA9IHRydWVcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdrJzpcbiAgICAgICAgICAgICAgICBwbGF5ZXIuYXR0YWNrKCk7IFxuICAgICAgICAgICAgYnJlYWsgIFxuICAgICAgICB9XG5cblxuICAgICAgICBjb25zb2xlLmxvZyhldmVudC5rZXkpO1xuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+eyAgIC8va2V5ZG93biBpcyBhIGtleSB0aGF0IGFsbG93cyBmb3IgcmVjb2duaXRpb24gb2Yga2V5Ym9hcmQgaW5wdXRzIG9uIHRoZSBjb25zb2xlXG4gICAgICAgIHN3aXRjaChldmVudC5rZXkpe1xuICAgICAgICAgICAgY2FzZSAnZCc6IFxuICAgICAgICAgICAgICAgIGtleXMuZC5wcmVzc2VkID0gZmFsc2VcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdhJzogXG4gICAgICAgICAgICAgICAga2V5cy5hLnByZXNzZWQgPSBmYWxzZVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ3cnOlxuICAgICAgICAgICAgICAgIGtleXMudy5wcmVzc2VkID0gZmFsc2VcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlbGVhc2VkXCIsZXZlbnQua2V5KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9KVxuXG59KVxuXG5cblxuXG4iXSwibmFtZXMiOlsiQ2hhcmFjdGVyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwicXVlcnlTZWxlY3RvciIsImNvbnRleHQiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsUmVjdCIsInBsYXllciIsInBvc2l0aW9uIiwieCIsInkiLCJ2ZWxvY2l0eSIsImNvbG9yIiwib2Zmc2V0IiwiY29uc29sZSIsImxvZyIsImVuZW15Iiwia2V5cyIsImEiLCJwcmVzc2VkIiwiZCIsInciLCJsYXN0S2V5IiwiYXR0YWNrQ29sbGlzaW9uIiwicGxheWVyMSIsInBsYXllcjIiLCJhdHRhY2tSZWN0IiwibW92ZW1lbnQiLCJmaWxsU3R5bGUiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGUiLCJhdHRhY2tpbmciLCJldmVudCIsImtleSIsImF0dGFjayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/character.js":
/*!**********************************!*\
  !*** ./src/scripts/character.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Character; }\n/* harmony export */ });\nconst gravity = 0.7;\nclass Character {\n  // add canvas and context as arguments for constructor as they were created in a different class file//\n\n  constructor(canvas, context, _ref) {\n    let {\n      position,\n      velocity,\n      color,\n      offset\n    } = _ref;\n    this.canvas = canvas;\n    this.context = context;\n    this.position = position;\n    this.velocity = velocity;\n    this.color = color;\n    this.width = 50;\n    this.height = 150; /// assigned random height\n    this.attackRect = {\n      position: {\n        x: this.position.x,\n        y: this.position.y\n      },\n      offset,\n      width: 100,\n      height: 50\n    };\n    this.attacking;\n  }\n  draw() {\n    // we defined context in DOMContentLoaded in index.js\n    // hence context will not be available in character.js /  character class;\n    // that's why we have to do this.context instead\n\n    this.context.fillStyle = this.color;\n    this.context.fillRect(this.position.x, this.position.y, this.width, this.height);\n    if (this.attacking) {\n      this.context.fillStyle = \"blue\";\n      this.context.fillRect(this.attackRect.position.x, this.attackRect.position.y, this.attackRect.width, this.attackRect.height);\n    }\n  }\n  update() {\n    this.draw();\n    this.attackRect.position.x = this.position.x + this.attackRect.offset.x;\n    this.attackRect.position.y = this.position.y;\n    this.position.x += this.velocity.x;\n    this.position.y += this.velocity.y;\n    this.velocity.x = 0;\n    if (this.position.y + this.height + this.velocity.y >= this.canvas.height) {\n      this.velocity.y = 0; //stopping movement when the user chareacter is >= canvas height(boundary wall)\n    } else {\n      this.velocity.y += gravity; // adding gravity prevents the characters from leaving the screen\n    }\n  }\n\n  attack() {\n    this.attacking = true;\n    setInterval(() => {\n      this.attacking = false;\n    }, 1000);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUM7SUFDeEIsQ0FBQyxNQUNHO01BQ0QsSUFBSSxDQUFDUCxRQUFRLENBQUNPLENBQUMsSUFBSWQsT0FBTyxDQUFDLENBQUU7SUFDakM7RUFFSjs7RUFFQW9CLE1BQU1BLENBQUEsRUFBRTtJQUNKLElBQUksQ0FBQ0wsU0FBUyxHQUFHLElBQUk7SUFDckJNLFdBQVcsQ0FBQyxNQUFNO01BQ2QsSUFBSSxDQUFDTixTQUFTLEdBQUcsS0FBSztJQUMxQixDQUFDLEVBQUUsSUFBSSxDQUFDO0VBQ1o7QUFHSiIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRfZ2FtZS8uL3NyYy9zY3JpcHRzL2NoYXJhY3Rlci5qcz8xODE1Il0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgZ3Jhdml0eSA9IDAuNztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcmFjdGVyIHtcbiAgICBcblxuICAgIC8vIGFkZCBjYW52YXMgYW5kIGNvbnRleHQgYXMgYXJndW1lbnRzIGZvciBjb25zdHJ1Y3RvciBhcyB0aGV5IHdlcmUgY3JlYXRlZCBpbiBhIGRpZmZlcmVudCBjbGFzcyBmaWxlLy9cblxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY29udGV4dCx7cG9zaXRpb24sIHZlbG9jaXR5LCBjb2xvciwgb2Zmc2V0fSkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHk7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMud2lkdGggPSA1MDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxNTA7IC8vLyBhc3NpZ25lZCByYW5kb20gaGVpZ2h0XG4gICAgICAgIHRoaXMuYXR0YWNrUmVjdCA9e1xuICAgICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLnBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgIGhlaWdodDogNTBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmF0dGFja2luZztcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZHJhdygpe1xuXG4gICAgICAgIC8vIHdlIGRlZmluZWQgY29udGV4dCBpbiBET01Db250ZW50TG9hZGVkIGluIGluZGV4LmpzXG4gICAgICAgIC8vIGhlbmNlIGNvbnRleHQgd2lsbCBub3QgYmUgYXZhaWxhYmxlIGluIGNoYXJhY3Rlci5qcyAvICBjaGFyYWN0ZXIgY2xhc3M7XG4gICAgICAgIC8vIHRoYXQncyB3aHkgd2UgaGF2ZSB0byBkbyB0aGlzLmNvbnRleHQgaW5zdGVhZFxuXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblxuICAgICAgICBpZih0aGlzLmF0dGFja2luZyl7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcImJsdWVcIjtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KHRoaXMuYXR0YWNrUmVjdC5wb3NpdGlvbi54LCB0aGlzLmF0dGFja1JlY3QucG9zaXRpb24ueSxcbiAgICAgICAgICAgICB0aGlzLmF0dGFja1JlY3Qud2lkdGgsIHRoaXMuYXR0YWNrUmVjdC5oZWlnaHQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoKXtcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgIHRoaXMuYXR0YWNrUmVjdC5wb3NpdGlvbi54ID0gdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5hdHRhY2tSZWN0Lm9mZnNldC54O1xuICAgICAgICB0aGlzLmF0dGFja1JlY3QucG9zaXRpb24ueSA9IHRoaXMucG9zaXRpb24ueVxuICAgICAgICBcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMudmVsb2NpdHkueDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMudmVsb2NpdHkueTtcbiAgICAgICAgdGhpcy52ZWxvY2l0eS54ID0gMDtcblxuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQgKyB0aGlzLnZlbG9jaXR5LnkgPj0gdGhpcy5jYW52YXMuaGVpZ2h0KXtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IDA7IC8vc3RvcHBpbmcgbW92ZW1lbnQgd2hlbiB0aGUgdXNlciBjaGFyZWFjdGVyIGlzID49IGNhbnZhcyBoZWlnaHQoYm91bmRhcnkgd2FsbClcbiAgICAgICAgIH0gXG4gICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ICs9IGdyYXZpdHk7ICAvLyBhZGRpbmcgZ3Jhdml0eSBwcmV2ZW50cyB0aGUgY2hhcmFjdGVycyBmcm9tIGxlYXZpbmcgdGhlIHNjcmVlblxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIGF0dGFjaygpe1xuICAgICAgICB0aGlzLmF0dGFja2luZyA9IHRydWU7XG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNraW5nID0gZmFsc2U7XG4gICAgICAgIH0sIDEwMDApXG4gICAgfVxuXG4gICAgXG59Il0sIm5hbWVzIjpbImdyYXZpdHkiLCJDaGFyYWN0ZXIiLCJjb25zdHJ1Y3RvciIsImNhbnZhcyIsImNvbnRleHQiLCJfcmVmIiwicG9zaXRpb24iLCJ2ZWxvY2l0eSIsImNvbG9yIiwib2Zmc2V0Iiwid2lkdGgiLCJoZWlnaHQiLCJhdHRhY2tSZWN0IiwieCIsInkiLCJhdHRhY2tpbmciLCJkcmF3IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ1cGRhdGUiLCJhdHRhY2siLCJzZXRJbnRlcnZhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/character.js\n");

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