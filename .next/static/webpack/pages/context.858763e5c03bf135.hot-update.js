"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/context",{

/***/ "./src/components/CheckoutButton/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/CheckoutButton/index.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CheckoutButton = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"ml-12 mb-10 mt-5 flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 max-w-sm\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                xmlns: \"http://www.w3.org/2000/svg\",\n                className: \"mr-2 h-6 w-6\",\n                fill: \"none\",\n                viewBox: \"0 0 24 24\",\n                stroke: \"currentColor\",\n                \"stroke-width\": \"2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                    \"stroke-linecap\": \"round\",\n                    \"stroke-linejoin\": \"round\",\n                    d: \"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z\"\n                }, void 0, false, {\n                    fileName: \"/Users/alanabundis/Documents/Macys/MacysWorkshop/src/components/CheckoutButton/index.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/alanabundis/Documents/Macys/MacysWorkshop/src/components/CheckoutButton/index.tsx\",\n                lineNumber: 4,\n                columnNumber: 7\n            }, undefined),\n            \"Checkout\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alanabundis/Documents/Macys/MacysWorkshop/src/components/CheckoutButton/index.tsx\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, undefined);\n};\n_c = CheckoutButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CheckoutButton);\nvar _c;\n$RefreshReg$(_c, \"CheckoutButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGVja291dEJ1dHRvbi9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLGlCQUFpQjtJQUNyQixxQkFDRSw4REFBQ0M7UUFBT0MsV0FBVTs7MEJBQ2hCLDhEQUFDQztnQkFDQ0MsT0FBTTtnQkFDTkYsV0FBVTtnQkFDVkcsTUFBSztnQkFDTEMsU0FBUTtnQkFDUkMsUUFBTztnQkFDUEMsZ0JBQWE7MEJBRWIsNEVBQUNDO29CQUNDQyxrQkFBZTtvQkFDZkMsbUJBQWdCO29CQUNoQkMsR0FBRTs7Ozs7Ozs7Ozs7WUFFQTs7Ozs7OztBQUlaO0tBcEJNWjtBQXFCTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DaGVja291dEJ1dHRvbi9pbmRleC50c3g/Yzk1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDaGVja291dEJ1dHRvbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1sLTEyIG1iLTEwIG10LTUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBiZy1zbGF0ZS05MDAgcHgtNSBweS0yLjUgdGV4dC1jZW50ZXIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGhvdmVyOmJnLWdyYXktNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTQgZm9jdXM6cmluZy1ibHVlLTMwMCBtYXgtdy1zbVwiPlxuICAgICAgPHN2Z1xuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgY2xhc3NOYW1lPVwibXItMiBoLTYgdy02XCJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMlwiXG4gICAgICA+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgIGQ9XCJNMyAzaDJsLjQgMk03IDEzaDEwbDQtOEg1LjRNNyAxM0w1LjQgNU03IDEzbC0yLjI5MyAyLjI5M2MtLjYzLjYzLS4xODQgMS43MDcuNzA3IDEuNzA3SDE3bTAgMGEyIDIgMCAxMDAgNCAyIDIgMCAwMDAtNHptLTggMmEyIDIgMCAxMS00IDAgMiAyIDAgMDE0IDB6XCJcbiAgICAgICAgLz5cbiAgICAgIDwvc3ZnPlxuICAgICAgQ2hlY2tvdXRcbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBDaGVja291dEJ1dHRvbjtcbiJdLCJuYW1lcyI6WyJDaGVja291dEJ1dHRvbiIsImJ1dHRvbiIsImNsYXNzTmFtZSIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2UiLCJzdHJva2Utd2lkdGgiLCJwYXRoIiwic3Ryb2tlLWxpbmVjYXAiLCJzdHJva2UtbGluZWpvaW4iLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/CheckoutButton/index.tsx\n"));

/***/ })

});