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

/***/ "./src/pages/context/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/context/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ProductPreview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ProductPreview */ \"./src/components/ProductPreview/index.tsx\");\n/* harmony import */ var _providers_FormProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/providers/FormProvider */ \"./src/providers/FormProvider.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst product = {\n    price: 299.99,\n    name: \"Nintendo Switch\",\n    image: \"https://www.nintendo.com/eu/media/images/08_content_images/systems_5/nintendo_switch_3/nintendo_switch_oled/CI_NSwitch_main.jpg\",\n    description: \"The Nintendo Switch is a hybrid video game console, consisting of a console unit, a dock, and two Joy-Con controllers. Although it is a hybrid console, Nintendo classifies it as a home console that you can take with you on the go.\"\n};\nconst ContextExample = ()=>{\n    _s();\n    const userId = \"12345\";\n    const [isDisabled, setIsDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [isSaving, setIsSaving] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const save = ()=>{\n        setIsSaving(true);\n        setTimeout(()=>{\n            setIsSaving(false);\n        }, 3000);\n    };\n    const validateFields = ()=>{\n        setIsDisabled(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_providers_FormProvider__WEBPACK_IMPORTED_MODULE_2__.FormProvider, {\n        save: save,\n        isDisabled: isDisabled,\n        isSaving: isSaving,\n        userId: userId,\n        product: product,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductPreview__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/alanabundis/Documents/Macys/MacysWorkshop/src/pages/context/index.tsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false)\n    }, void 0, false, {\n        fileName: \"/Users/alanabundis/Documents/Macys/MacysWorkshop/src/pages/context/index.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ContextExample, \"5J21CCbBahOnScSNuXfVUjQWDr8=\");\n_c = ContextExample;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContextExample);\nvar _c;\n$RefreshReg$(_c, \"ContextExample\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29udGV4dC9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlEO0FBQ0Q7QUFDdkI7QUFFakMsTUFBTUcsVUFBVTtJQUNkQyxPQUFPO0lBQ1BDLE1BQU07SUFDTkMsT0FDRTtJQUNGQyxhQUNFO0FBQ0o7QUFFQSxNQUFNQyxpQkFBaUI7O0lBQ3JCLE1BQU1DLFNBQVM7SUFDZixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1QsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDVSxVQUFVQyxZQUFZLEdBQUdYLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1ZLE9BQU87UUFDWEQsWUFBWTtRQUNaRSxXQUFXO1lBQ1RGLFlBQVk7UUFDZCxHQUFHO0lBQ0w7SUFFQSxNQUFNRyxpQkFBaUI7UUFDckJMLGNBQWM7SUFDaEI7SUFFQSxxQkFDRSw4REFBQ1YsaUVBQVlBO1FBQ1hhLE1BQU1BO1FBQ05KLFlBQVlBO1FBQ1pFLFVBQVVBO1FBQ1ZILFFBQVFBO1FBQ1JOLFNBQVNBO2tCQUVUO3NCQUNFLDRFQUFDSCxrRUFBY0E7Ozs7Ozs7Ozs7O0FBSXZCO0dBN0JNUTtLQUFBQTtBQStCTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY29udGV4dC9pbmRleC50c3g/NGFjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZHVjdFByZXZpZXcgZnJvbSBcIkAvY29tcG9uZW50cy9Qcm9kdWN0UHJldmlld1wiO1xuaW1wb3J0IHsgRm9ybVByb3ZpZGVyIH0gZnJvbSBcIkAvcHJvdmlkZXJzL0Zvcm1Qcm92aWRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgcHJvZHVjdCA9IHtcbiAgcHJpY2U6IDI5OS45OSxcbiAgbmFtZTogXCJOaW50ZW5kbyBTd2l0Y2hcIixcbiAgaW1hZ2U6XG4gICAgXCJodHRwczovL3d3dy5uaW50ZW5kby5jb20vZXUvbWVkaWEvaW1hZ2VzLzA4X2NvbnRlbnRfaW1hZ2VzL3N5c3RlbXNfNS9uaW50ZW5kb19zd2l0Y2hfMy9uaW50ZW5kb19zd2l0Y2hfb2xlZC9DSV9OU3dpdGNoX21haW4uanBnXCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiVGhlIE5pbnRlbmRvIFN3aXRjaCBpcyBhIGh5YnJpZCB2aWRlbyBnYW1lIGNvbnNvbGUsIGNvbnNpc3Rpbmcgb2YgYSBjb25zb2xlIHVuaXQsIGEgZG9jaywgYW5kIHR3byBKb3ktQ29uIGNvbnRyb2xsZXJzLiBBbHRob3VnaCBpdCBpcyBhIGh5YnJpZCBjb25zb2xlLCBOaW50ZW5kbyBjbGFzc2lmaWVzIGl0IGFzIGEgaG9tZSBjb25zb2xlIHRoYXQgeW91IGNhbiB0YWtlIHdpdGggeW91IG9uIHRoZSBnby5cIixcbn07XG5cbmNvbnN0IENvbnRleHRFeGFtcGxlID0gKCkgPT4ge1xuICBjb25zdCB1c2VySWQgPSBcIjEyMzQ1XCI7XG4gIGNvbnN0IFtpc0Rpc2FibGVkLCBzZXRJc0Rpc2FibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzU2F2aW5nLCBzZXRJc1NhdmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgc2F2ZSA9ICgpID0+IHtcbiAgICBzZXRJc1NhdmluZyh0cnVlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldElzU2F2aW5nKGZhbHNlKTtcbiAgICB9LCAzMDAwKTtcbiAgfTtcblxuICBjb25zdCB2YWxpZGF0ZUZpZWxkcyA9ICgpID0+IHtcbiAgICBzZXRJc0Rpc2FibGVkKHRydWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Qcm92aWRlclxuICAgICAgc2F2ZT17c2F2ZX1cbiAgICAgIGlzRGlzYWJsZWQ9e2lzRGlzYWJsZWR9XG4gICAgICBpc1NhdmluZz17aXNTYXZpbmd9XG4gICAgICB1c2VySWQ9e3VzZXJJZH1cbiAgICAgIHByb2R1Y3Q9e3Byb2R1Y3R9XG4gICAgPlxuICAgICAgPD5cbiAgICAgICAgPFByb2R1Y3RQcmV2aWV3IC8+XG4gICAgICA8Lz5cbiAgICA8L0Zvcm1Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRleHRFeGFtcGxlO1xuIl0sIm5hbWVzIjpbIlByb2R1Y3RQcmV2aWV3IiwiRm9ybVByb3ZpZGVyIiwidXNlU3RhdGUiLCJwcm9kdWN0IiwicHJpY2UiLCJuYW1lIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsIkNvbnRleHRFeGFtcGxlIiwidXNlcklkIiwiaXNEaXNhYmxlZCIsInNldElzRGlzYWJsZWQiLCJpc1NhdmluZyIsInNldElzU2F2aW5nIiwic2F2ZSIsInNldFRpbWVvdXQiLCJ2YWxpZGF0ZUZpZWxkcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/context/index.tsx\n"));

/***/ })

});