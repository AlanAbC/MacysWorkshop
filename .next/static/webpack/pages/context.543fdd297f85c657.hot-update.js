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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ProductPreview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ProductPreview */ \"./src/components/ProductPreview/index.tsx\");\n/* harmony import */ var _providers_FormProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/providers/FormProvider */ \"./src/providers/FormProvider.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst product = {\n    price: 299.99,\n    name: \"Nintendo Switch\",\n    image: \"https://www.nintendo.com/eu/media/images/08_content_images/systems_5/nintendo_switch_3/nintendo_switch_oled/CI_NSwitch_main.jpg\",\n    description: \"The Nintendo Switch is a hybrid video game console, consisting of a console unit, a dock, and two Joy-Con controllers. Although it is a hybrid console, Nintendo classifies it as a home console that you can take with you on the go.\"\n};\nconst ContextExample = ()=>{\n    _s();\n    const userId = \"12345\";\n    const [isDisabled, setIsDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [isSaving, setIsSaving] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const save = ()=>{\n        setIsSaving(true);\n        setTimeout(()=>{\n            setIsSaving(false);\n        }, 3000);\n    };\n    const validateFields = ()=>{\n        setIsDisabled(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_providers_FormProvider__WEBPACK_IMPORTED_MODULE_2__.FormProvider, {\n        save: save,\n        isDisabled: isDisabled,\n        isSaving: isSaving,\n        userId: userId,\n        product: product,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative m-10 flex w-full max-w-md flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductPreview__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/alanabundis/Documents/Macys/MacysWorkshop/src/pages/context/index.tsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/alanabundis/Documents/Macys/MacysWorkshop/src/pages/context/index.tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/alanabundis/Documents/Macys/MacysWorkshop/src/pages/context/index.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ContextExample, \"5J21CCbBahOnScSNuXfVUjQWDr8=\");\n_c = ContextExample;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContextExample);\nvar _c;\n$RefreshReg$(_c, \"ContextExample\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29udGV4dC9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlEO0FBQ0Q7QUFDdkI7QUFFakMsTUFBTUcsVUFBVTtJQUNkQyxPQUFPO0lBQ1BDLE1BQU07SUFDTkMsT0FDRTtJQUNGQyxhQUNFO0FBQ0o7QUFFQSxNQUFNQyxpQkFBaUI7O0lBQ3JCLE1BQU1DLFNBQVM7SUFDZixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1QsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDVSxVQUFVQyxZQUFZLEdBQUdYLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1ZLE9BQU87UUFDWEQsWUFBWTtRQUNaRSxXQUFXO1lBQ1RGLFlBQVk7UUFDZCxHQUFHO0lBQ0w7SUFFQSxNQUFNRyxpQkFBaUI7UUFDckJMLGNBQWM7SUFDaEI7SUFFQSxxQkFDRSw4REFBQ1YsaUVBQVlBO1FBQ1hhLE1BQU1BO1FBQ05KLFlBQVlBO1FBQ1pFLFVBQVVBO1FBQ1ZILFFBQVFBO1FBQ1JOLFNBQVNBO2tCQUVULDRFQUFDYztZQUFJQyxXQUFVO3NCQUNiLDRFQUFDbEIsa0VBQWNBOzs7Ozs7Ozs7Ozs7Ozs7QUFJdkI7R0E3Qk1RO0tBQUFBO0FBK0JOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jb250ZXh0L2luZGV4LnRzeD80YWM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0UHJldmlldyBmcm9tIFwiQC9jb21wb25lbnRzL1Byb2R1Y3RQcmV2aWV3XCI7XG5pbXBvcnQgeyBGb3JtUHJvdmlkZXIgfSBmcm9tIFwiQC9wcm92aWRlcnMvRm9ybVByb3ZpZGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBwcm9kdWN0ID0ge1xuICBwcmljZTogMjk5Ljk5LFxuICBuYW1lOiBcIk5pbnRlbmRvIFN3aXRjaFwiLFxuICBpbWFnZTpcbiAgICBcImh0dHBzOi8vd3d3Lm5pbnRlbmRvLmNvbS9ldS9tZWRpYS9pbWFnZXMvMDhfY29udGVudF9pbWFnZXMvc3lzdGVtc181L25pbnRlbmRvX3N3aXRjaF8zL25pbnRlbmRvX3N3aXRjaF9vbGVkL0NJX05Td2l0Y2hfbWFpbi5qcGdcIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJUaGUgTmludGVuZG8gU3dpdGNoIGlzIGEgaHlicmlkIHZpZGVvIGdhbWUgY29uc29sZSwgY29uc2lzdGluZyBvZiBhIGNvbnNvbGUgdW5pdCwgYSBkb2NrLCBhbmQgdHdvIEpveS1Db24gY29udHJvbGxlcnMuIEFsdGhvdWdoIGl0IGlzIGEgaHlicmlkIGNvbnNvbGUsIE5pbnRlbmRvIGNsYXNzaWZpZXMgaXQgYXMgYSBob21lIGNvbnNvbGUgdGhhdCB5b3UgY2FuIHRha2Ugd2l0aCB5b3Ugb24gdGhlIGdvLlwiLFxufTtcblxuY29uc3QgQ29udGV4dEV4YW1wbGUgPSAoKSA9PiB7XG4gIGNvbnN0IHVzZXJJZCA9IFwiMTIzNDVcIjtcbiAgY29uc3QgW2lzRGlzYWJsZWQsIHNldElzRGlzYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNTYXZpbmcsIHNldElzU2F2aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBzYXZlID0gKCkgPT4ge1xuICAgIHNldElzU2F2aW5nKHRydWUpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0SXNTYXZpbmcoZmFsc2UpO1xuICAgIH0sIDMwMDApO1xuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRlRmllbGRzID0gKCkgPT4ge1xuICAgIHNldElzRGlzYWJsZWQodHJ1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybVByb3ZpZGVyXG4gICAgICBzYXZlPXtzYXZlfVxuICAgICAgaXNEaXNhYmxlZD17aXNEaXNhYmxlZH1cbiAgICAgIGlzU2F2aW5nPXtpc1NhdmluZ31cbiAgICAgIHVzZXJJZD17dXNlcklkfVxuICAgICAgcHJvZHVjdD17cHJvZHVjdH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG0tMTAgZmxleCB3LWZ1bGwgbWF4LXctbWQgZmxleC1jb2wgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmF5LTEwMCBiZy13aGl0ZSBzaGFkb3ctbWRcIj5cbiAgICAgICAgPFByb2R1Y3RQcmV2aWV3IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0Zvcm1Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRleHRFeGFtcGxlO1xuIl0sIm5hbWVzIjpbIlByb2R1Y3RQcmV2aWV3IiwiRm9ybVByb3ZpZGVyIiwidXNlU3RhdGUiLCJwcm9kdWN0IiwicHJpY2UiLCJuYW1lIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsIkNvbnRleHRFeGFtcGxlIiwidXNlcklkIiwiaXNEaXNhYmxlZCIsInNldElzRGlzYWJsZWQiLCJpc1NhdmluZyIsInNldElzU2F2aW5nIiwic2F2ZSIsInNldFRpbWVvdXQiLCJ2YWxpZGF0ZUZpZWxkcyIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/context/index.tsx\n"));

/***/ })

});