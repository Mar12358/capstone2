"use strict";
(self["webpackChunkjavascriptcapstone"] = self["webpackChunkjavascriptcapstone"] || []).push([["display"],{

/***/ "./src/modules/counterComment.js":
/*!***************************************!*\
  !*** ./src/modules/counterComment.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const counterComments = (array) => {
    let num = 0;
    if (array.length > 0) {
        num = array.length
    }
    const counter = document.querySelector('.comment-counter');
    counter.innerHTML = `${num}`
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterComments);

/***/ }),

/***/ "./src/modules/displayComments.js":
/*!****************************************!*\
  !*** ./src/modules/displayComments.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _counterComment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counterComment */ "./src/modules/counterComment.js");


const displayComment = async (id) => {
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/aZwedqY3IXDWCJKZoRkM/comments?item_id=${id}`)
    .then((res) => res.json()).then((item) => {
      const comments = document.querySelector('.comment-list');
      if (item.length === undefined) {
        comments.innerHTML = 'no comments';
        (0,_counterComment__WEBPACK_IMPORTED_MODULE_0__["default"])([]);
      } else {
        comments.innerHTML = '';
        item.forEach((subItem) => {
          comments.innerHTML += `<p class="span">
          ${subItem.creation_date} ${subItem.username}: ${subItem.comment} </p>`;
        });
        (0,_counterComment__WEBPACK_IMPORTED_MODULE_0__["default"])(item);
      }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayComment);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/displayComments.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixJQUFJO0FBQy9CO0FBQ0EsaUVBQWUsZUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDUmlCOztBQUUvQztBQUNBLCtIQUErSCxHQUFHO0FBQ2xJO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBZTtBQUN2QixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1QkFBdUIsRUFBRSxpQkFBaUIsSUFBSSxpQkFBaUI7QUFDM0UsU0FBUztBQUNULFFBQVEsMkRBQWU7QUFDdkI7QUFDQSxLQUFLO0FBQ0w7QUFDQSxpRUFBZSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLy4vc3JjL21vZHVsZXMvY291bnRlckNvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLy4vc3JjL21vZHVsZXMvZGlzcGxheUNvbW1lbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvdW50ZXJDb21tZW50cyA9IChhcnJheSkgPT4ge1xyXG4gICAgbGV0IG51bSA9IDA7XHJcbiAgICBpZiAoYXJyYXkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIG51bSA9IGFycmF5Lmxlbmd0aFxyXG4gICAgfVxyXG4gICAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWNvdW50ZXInKTtcclxuICAgIGNvdW50ZXIuaW5uZXJIVE1MID0gYCR7bnVtfWBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb3VudGVyQ29tbWVudHM7IiwiaW1wb3J0IGNvdW50ZXJDb21tZW50cyBmcm9tIFwiLi9jb3VudGVyQ29tbWVudFwiO1xuXG5jb25zdCBkaXNwbGF5Q29tbWVudCA9IGFzeW5jIChpZCkgPT4ge1xuICBhd2FpdCBmZXRjaChgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvYVp3ZWRxWTNJWERXQ0pLWm9Sa00vY29tbWVudHM/aXRlbV9pZD0ke2lkfWApXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSkudGhlbigoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgY29tbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1saXN0Jyk7XG4gICAgICBpZiAoaXRlbS5sZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb21tZW50cy5pbm5lckhUTUwgPSAnbm8gY29tbWVudHMnO1xuICAgICAgICBjb3VudGVyQ29tbWVudHMoW10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tbWVudHMuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGl0ZW0uZm9yRWFjaCgoc3ViSXRlbSkgPT4ge1xuICAgICAgICAgIGNvbW1lbnRzLmlubmVySFRNTCArPSBgPHAgY2xhc3M9XCJzcGFuXCI+XG4gICAgICAgICAgJHtzdWJJdGVtLmNyZWF0aW9uX2RhdGV9ICR7c3ViSXRlbS51c2VybmFtZX06ICR7c3ViSXRlbS5jb21tZW50fSA8L3A+YDtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvdW50ZXJDb21tZW50cyhpdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5Q29tbWVudDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=