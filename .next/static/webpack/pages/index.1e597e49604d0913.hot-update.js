"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/home/components/Awards/index.js":
/*!***********************************************!*\
  !*** ./pages/home/components/Awards/index.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Awards; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_images_award1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/public/images/award1.png */ \"./public/images/award1.png\");\n/* harmony import */ var _public_images_award2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/public/images/award2.png */ \"./public/images/award2.png\");\n/* harmony import */ var _public_images_award3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/public/images/award3.png */ \"./public/images/award3.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var _awardCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./awardCard */ \"./pages/home/components/Awards/awardCard.js\");\n\n\n\n\n\n\n\nconst award = [\n    {\n        id: 1,\n        img: _public_images_award1_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    },\n    {\n        id: 2,\n        img: _public_images_award2_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    },\n    {\n        id: 3,\n        img: _public_images_award3_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    },\n    {\n        id: 4,\n        img: _public_images_award2_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    },\n    {\n        id: 5,\n        img: _public_images_award1_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n];\nclass Awards extends react__WEBPACK_IMPORTED_MODULE_4__.Component {\n    render() {\n        var settings = {\n            dots: false,\n            infinite: false,\n            speed: 500,\n            autoplay: true,\n            slidesToShow: 3.5,\n            slidesToScroll: 1,\n            arrows: true,\n            initialSlide: 0,\n            responsive: [\n                {\n                    breakpoint: 1024,\n                    settings: {\n                        slidesToShow: 3.5,\n                        slidesToScroll: 1,\n                        infinite: false,\n                        dots: false\n                    }\n                },\n                {\n                    breakpoint: 768,\n                    settings: {\n                        slidesToShow: 2.3,\n                        slidesToScroll: 1,\n                        arrows: false\n                    }\n                },\n                {\n                    breakpoint: 480,\n                    settings: {\n                        slidesToShow: 1.5,\n                        slidesToScroll: 1,\n                        arrows: false\n                    }\n                }\n            ]\n        };\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"th-container my-4 py-5\",\n            style: {\n                background: \"var(--new-light-bg, linear-gradient(0deg, #E9E9F9 0%, rgba(225, 226, 255, 0.00) 100%))\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pb-3 text-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"th-40 th-fw-700 \",\n                        children: \"Awards\"\n                    }, void 0, false, {\n                        fileName: \"/home/nagesh/Downloads/orchidsinternationalschoolnextjs-dev (2)/pages/home/components/Awards/index.js\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/nagesh/Downloads/orchidsinternationalschoolnextjs-dev (2)/pages/home/components/Awards/index.js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        ...settings,\n                        children: award === null || award === void 0 ? void 0 : award.map((eachFeature, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_awardCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                className: \"p-3\",\n                                src: eachFeature.img.src,\n                                height: \"150px\"\n                            }, index, false, {\n                                fileName: \"/home/nagesh/Downloads/orchidsinternationalschoolnextjs-dev (2)/pages/home/components/Awards/index.js\",\n                                lineNumber: 72,\n                                columnNumber: 17\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/nagesh/Downloads/orchidsinternationalschoolnextjs-dev (2)/pages/home/components/Awards/index.js\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/nagesh/Downloads/orchidsinternationalschoolnextjs-dev (2)/pages/home/components/Awards/index.js\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/nagesh/Downloads/orchidsinternationalschoolnextjs-dev (2)/pages/home/components/Awards/index.js\",\n            lineNumber: 58,\n            columnNumber: 7\n        }, this);\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lL2NvbXBvbmVudHMvQXdhcmRzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ0E7QUFDQTtBQUNjO0FBQzdCO0FBQ0c7QUFFcEMsTUFBTVMsUUFBUTtJQUNaO1FBQUVDLElBQUk7UUFBR0MsS0FBS1gsaUVBQU1BO0lBQUM7SUFDckI7UUFBRVUsSUFBSTtRQUFHQyxLQUFLVixpRUFBTUE7SUFBQztJQUNyQjtRQUFFUyxJQUFJO1FBQUdDLEtBQUtULGlFQUFNQTtJQUFDO0lBQ3JCO1FBQUVRLElBQUk7UUFBR0MsS0FBS1YsaUVBQU1BO0lBQUM7SUFDckI7UUFBRVMsSUFBSTtRQUFHQyxLQUFLWCxpRUFBTUE7SUFBQztDQUN0QjtBQUNjLE1BQU1ZLGVBQWVSLDRDQUFTQTtJQUMzQ1MsU0FBUztRQUNQLElBQUlDLFdBQVc7WUFDYkMsTUFBTTtZQUNOQyxVQUFVO1lBQ1ZDLE9BQU87WUFDUEMsVUFBVTtZQUNWQyxjQUFjO1lBQ2RDLGdCQUFnQjtZQUNoQkMsUUFBUTtZQUNSQyxjQUFjO1lBRWRDLFlBQVk7Z0JBQ1Y7b0JBQ0VDLFlBQVk7b0JBQ1pWLFVBQVU7d0JBQ1JLLGNBQWM7d0JBQ2RDLGdCQUFnQjt3QkFDaEJKLFVBQVU7d0JBQ1ZELE1BQU07b0JBQ1I7Z0JBQ0Y7Z0JBQ0E7b0JBQ0VTLFlBQVk7b0JBQ1pWLFVBQVU7d0JBQ1JLLGNBQWM7d0JBQ2RDLGdCQUFnQjt3QkFDaEJDLFFBQVE7b0JBQ1Y7Z0JBQ0Y7Z0JBQ0E7b0JBQ0VHLFlBQVk7b0JBQ1pWLFVBQVU7d0JBQ1JLLGNBQWM7d0JBQ2RDLGdCQUFnQjt3QkFFaEJDLFFBQVE7b0JBQ1Y7Z0JBQ0Y7YUFDRDtRQUNIO1FBRUEscUJBQ0UsOERBQUNJO1lBQ0NDLFdBQVU7WUFDVkMsT0FBTztnQkFDTEMsWUFDRTtZQUNKOzs4QkFFQSw4REFBQ0g7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNHO3dCQUFFSCxXQUFVO2tDQUFtQjs7Ozs7Ozs7Ozs7OEJBRWxDLDhEQUFDRDs4QkFDQyw0RUFBQ2xCLG1EQUFNQTt3QkFBRSxHQUFHTyxRQUFRO2tDQUNqQkwsa0JBQUFBLG1CQUFBQSxLQUFBQSxJQUFBQSxNQUFPcUIsSUFBSSxDQUFDQyxhQUFhQzs0QkFDeEIscUJBQ0UsOERBQUN4QixrREFBU0E7Z0NBRVJrQixXQUFXO2dDQUNYTyxLQUFLRixZQUFZcEIsSUFBSXNCO2dDQUNyQkMsUUFBTzsrQkFIRkY7Ozs7O3dCQU1YOzs7Ozs7Ozs7Ozs7Ozs7OztJQUtWO0FBQ0Y7QUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ob21lL2NvbXBvbmVudHMvQXdhcmRzL2luZGV4LmpzPzY1YjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF3YXJkMSBmcm9tIFwiQC9wdWJsaWMvaW1hZ2VzL2F3YXJkMS5wbmdcIjtcbmltcG9ydCBhd2FyZDIgZnJvbSBcIkAvcHVibGljL2ltYWdlcy9hd2FyZDIucG5nXCI7XG5pbXBvcnQgYXdhcmQzIGZyb20gXCJAL3B1YmxpYy9pbWFnZXMvYXdhcmQzLnBuZ1wiO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcbmltcG9ydCBBd2FyZENhcmQgZnJvbSBcIi4vYXdhcmRDYXJkXCI7XG5cbmNvbnN0IGF3YXJkID0gW1xuICB7IGlkOiAxLCBpbWc6IGF3YXJkMSB9LFxuICB7IGlkOiAyLCBpbWc6IGF3YXJkMiB9LFxuICB7IGlkOiAzLCBpbWc6IGF3YXJkMyB9LFxuICB7IGlkOiA0LCBpbWc6IGF3YXJkMiB9LFxuICB7IGlkOiA1LCBpbWc6IGF3YXJkMSB9LFxuXTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF3YXJkcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICB2YXIgc2V0dGluZ3MgPSB7XG4gICAgICBkb3RzOiBmYWxzZSxcbiAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgIHNwZWVkOiA1MDAsXG4gICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgIHNsaWRlc1RvU2hvdzogMy41LFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICBhcnJvd3M6IHRydWUsXG4gICAgICBpbml0aWFsU2xpZGU6IDAsXG5cbiAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMy41LFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIuMyxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEuNSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJ0aC1jb250YWluZXIgbXktNCBweS01XCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgXCJ2YXIoLS1uZXctbGlnaHQtYmcsIGxpbmVhci1ncmFkaWVudCgwZGVnLCAjRTlFOUY5IDAlLCByZ2JhKDIyNSwgMjI2LCAyNTUsIDAuMDApIDEwMCUpKVwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTMgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aC00MCB0aC1mdy03MDAgXCI+QXdhcmRzPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XG4gICAgICAgICAgICB7YXdhcmQ/Lm1hcCgoZWFjaEZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEF3YXJkQ2FyZFxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJwLTNcIn1cbiAgICAgICAgICAgICAgICAgIHNyYz17ZWFjaEZlYXR1cmUuaW1nLnNyY31cbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE1MHB4XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9TbGlkZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImF3YXJkMSIsImF3YXJkMiIsImF3YXJkMyIsIlJlYWN0IiwiQ29tcG9uZW50IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTbGlkZXIiLCJBd2FyZENhcmQiLCJhd2FyZCIsImlkIiwiaW1nIiwiQXdhcmRzIiwicmVuZGVyIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsImF1dG9wbGF5Iiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhcnJvd3MiLCJpbml0aWFsU2xpZGUiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZCIsInAiLCJtYXAiLCJlYWNoRmVhdHVyZSIsImluZGV4Iiwic3JjIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/home/components/Awards/index.js\n"));

/***/ })

});