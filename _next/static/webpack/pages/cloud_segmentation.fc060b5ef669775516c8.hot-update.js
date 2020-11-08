webpackHotUpdate_N_E("pages/cloud_segmentation",{

/***/ "./src/pages/cloud_segmentation.tsx":
/*!******************************************!*\
  !*** ./src/pages/cloud_segmentation.tsx ***!
  \******************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Event; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ \"./src/components/layout.tsx\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./src/styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-lazyload */ \"./node_modules/react-lazyload/lib/index.js\");\n/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Container */ \"./node_modules/@material-ui/core/esm/Container/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/lab/Pagination */ \"./node_modules/@material-ui/lab/esm/Pagination/index.js\");\n\n\nvar _jsxFileName = \"/home/marzio/gitws/smly.github.io/2020.11_opendata_viewer/opendata_viewer/src/pages/cloud_segmentation.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Event(_ref) {\n  _s();\n\n  var _this = this;\n\n  var eventData = _ref.eventData;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(1),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      page = _React$useState2[0],\n      setPage = _React$useState2[1];\n\n  var catalogData = eventData.catids.slice((page - 1) * 5, page * 5);\n\n  var handleChange = function handleChange(event, value) {\n    setPage(value);\n    catalogData = eventData.catids.slice((page - 1) * 5, page * 5);\n  };\n\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, \"Cloud segmentation model | \", _components_layout__WEBPACK_IMPORTED_MODULE_4__[\"siteTitle\"])), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    maxWidth: \"lg\",\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.containerPadding,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.headingMd,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    container: true,\n    spacing: 1,\n    alignItems: \"stretch\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    item: true,\n    xs: 12,\n    sm: 12,\n    md: 12,\n    lg: 12,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    elevation: 0,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.containerEventDataPage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }, __jsx(\"h2\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.eventPageTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 15\n    }\n  }, \"Demo of Cloud Segmentation Model\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }\n  }, \"The pre-trained model will be released later.\"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    style: {\n      margin: \"0.4rem\"\n    },\n    disableElevation: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  }, \"Back\")))))))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    maxWidth: \"lg\",\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.containerPadding,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.headingMd,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'center'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    count: eventData.num_pages,\n    page: page,\n    onChange: handleChange,\n    showFirstButton: true,\n    showLastButton: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }\n  }))), __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.headingMd,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    container: true,\n    spacing: 1,\n    alignItems: \"stretch\",\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 11\n    }\n  }, catalogData.map(function (catalog) {\n    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      item: true,\n      key: catalog[\"catid\"],\n      xs: 4,\n      sm: 3,\n      md: 2,\n      lg: 1,\n      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.catalogItem,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 15\n      }\n    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.catalogPaper,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 17\n      }\n    }, catalog[\"catid\"], __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 37\n      }\n    }), \"Cloud Cover: 40.2%\", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 37\n      }\n    }), __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 17\n      }\n    }), __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      width: catalog.thumb_w,\n      height: catalog.thumb_h,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 17\n      }\n    }, __jsx(\"img\", {\n      src: \"/images/typhoon-goni/\" + catalog[\"catid\"] + \".png\",\n      width: catalog.thumb_w,\n      height: catalog.thumb_h,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 19\n      }\n    }))));\n  }))), __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.headingMd,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'center'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    count: eventData.num_pages,\n    page: page,\n    onChange: handleChange,\n    showFirstButton: true,\n    showLastButton: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 13\n    }\n  })))));\n}\n\n_s(Event, \"/DWZXlUKUNETkaaw7t58aXy53hg=\");\n\n_c = Event;\n\nfunction readableFileSize(filesize) {\n  if (filesize > 1024 * 1024 * 1024 * 1024) {\n    return (filesize / (1024 * 1024 * 1024 * 1024)).toFixed(2) + \" TB\";\n  } else if (filesize > 1024 * 1024 * 1024) {\n    return (filesize / (1024 * 1024 * 1024)).toFixed(2) + \" GB\";\n  } else {\n    return (filesize / (1024 * 1024)).toFixed(2) + \" MB\";\n  }\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"Event\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Nsb3VkX3NlZ21lbnRhdGlvbi50c3g/OTBmNSJdLCJuYW1lcyI6WyJFdmVudCIsImV2ZW50RGF0YSIsIlJlYWN0IiwidXNlU3RhdGUiLCJwYWdlIiwic2V0UGFnZSIsImNhdGFsb2dEYXRhIiwiY2F0aWRzIiwic2xpY2UiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInZhbHVlIiwic2l0ZVRpdGxlIiwidXRpbFN0eWxlcyIsImNvbnRhaW5lclBhZGRpbmciLCJoZWFkaW5nTWQiLCJjb250YWluZXJFdmVudERhdGFQYWdlIiwiZXZlbnRQYWdlVGl0bGUiLCJtYXJnaW4iLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJudW1fcGFnZXMiLCJtYXAiLCJjYXRhbG9nIiwiY2F0YWxvZ0l0ZW0iLCJjYXRhbG9nUGFwZXIiLCJ0aHVtYl93IiwidGh1bWJfaCIsInJlYWRhYmxlRmlsZVNpemUiLCJmaWxlc2l6ZSIsInRvRml4ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBS0E7QUFDQTs7QUFNZSxTQUFTQSxLQUFULE9BQThCO0FBQUE7O0FBQUE7O0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhOztBQUFBLHdCQUNuQkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLENBQWYsQ0FEbUI7QUFBQTtBQUFBLE1BQ3BDQyxJQURvQztBQUFBLE1BQzlCQyxPQUQ4Qjs7QUFFM0MsTUFBSUMsV0FBVyxHQUFHTCxTQUFTLENBQUNNLE1BQVYsQ0FBaUJDLEtBQWpCLENBQXVCLENBQUNKLElBQUksR0FBQyxDQUFOLElBQVcsQ0FBbEMsRUFBcUNBLElBQUksR0FBRyxDQUE1QyxDQUFsQjs7QUFFQSxNQUFNSyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQW9DQyxLQUFwQyxFQUFzRDtBQUN6RU4sV0FBTyxD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QUFPLElBQVgsQ0FBVCxFQUEyQkMsT0FBM0IsQ0FBbUMsQ0FBbkMsSUFBd0MsS0FBL0M7QUFDRDtBQUNGIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2Nsb3VkX3NlZ21lbnRhdGlvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5cbmltcG9ydCBMYXlvdXQsIHsgc2l0ZVRpdGxlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgeyBsb2FkRXZlbnRKc29uLCBsaXN0RXZlbnROYW1lcyB9IGZyb20gJy4uL2xpYi9ldmVudHMnXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzcydcblxuaW1wb3J0IExhenlMb2FkIGZyb20gJ3JlYWN0LWxhenlsb2FkJztcblxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInXG5pbXBvcnQgQ2hpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGlwJztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYSc7XG5pbXBvcnQgQ2FyZEFjdGlvbkFyZWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbkFyZWEnO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvUGFnaW5hdGlvbic7XG5cbmltcG9ydCBNb2RhbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Nb2RhbCc7XG5pbXBvcnQgQmFja2Ryb3AgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3AnO1xuaW1wb3J0IEZhZGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRmFkZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV2ZW50KHsgZXZlbnREYXRhIH0pIHtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gUmVhY3QudXNlU3RhdGUoMSlcbiAgdmFyIGNhdGFsb2dEYXRhID0gZXZlbnREYXRhLmNhdGlkcy5zbGljZSgocGFnZS0xKSAqIDUsIHBhZ2UgKiA1KVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8dW5rbm93bj4sIHZhbHVlOiBudW1iZXIpID0+IHtcbiAgICBzZXRQYWdlKHZhbHVlKVxuICAgIGNhdGFsb2dEYXRhID0gZXZlbnREYXRhLmNhdGlkcy5zbGljZSgocGFnZS0xKSAqIDUsIHBhZ2UgKiA1KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DbG91ZCBzZWdtZW50YXRpb24gbW9kZWwgfCB7c2l0ZVRpdGxlfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5jb250YWluZXJQYWRkaW5nfT5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTWR9PlxuICAgICAgPEdyaWQgY29udGFpbmVyXG4gICAgICAgICAgICBzcGFjaW5nPXsxfVxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cInN0cmV0Y2hcIj5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17MTJ9PlxuICAgICAgICAgIDxQYXBlclxuICAgICAgICAgICAgZWxldmF0aW9uPXswfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dXRpbFN0eWxlcy5jb250YWluZXJFdmVudERhdGFQYWdlfT5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5ldmVudFBhZ2VUaXRsZX0+RGVtbyBvZiBDbG91ZCBTZWdtZW50YXRpb24gTW9kZWw8L2gyPlxuICAgICAgICAgICAgPHA+VGhlIHByZS10cmFpbmVkIG1vZGVsIHdpbGwgYmUgcmVsZWFzZWQgbGF0ZXIuPC9wPlxuXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyBtYXJnaW46IFwiMC40cmVtXCIgfX0gZGlzYWJsZUVsZXZhdGlvbj5cbiAgICAgICAgICAgICAgQmFja1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmNvbnRhaW5lclBhZGRpbmd9PlxuXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTWR9PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgIDxQYWdpbmF0aW9uIGNvdW50PXtldmVudERhdGEubnVtX3BhZ2VzfSBwYWdlPXtwYWdlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBzaG93Rmlyc3RCdXR0b24gc2hvd0xhc3RCdXR0b24gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTWR9PlxuXG4gICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgc3BhY2luZz17MX1cbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJzdHJldGNoXCJcbiAgICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjYXRhbG9nRGF0YS5tYXAoKGNhdGFsb2cpID0+IChcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbVxuICAgICAgICAgICAgICAgICAga2V5PXtjYXRhbG9nW1wiY2F0aWRcIl19XG4gICAgICAgICAgICAgICAgICB4cz17NH0gc209ezN9IG1kPXsyfSBsZz17MX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5jYXRhbG9nSXRlbX0+XG4gICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5jYXRhbG9nUGFwZXJ9PlxuICAgICAgICAgICAgICAgICAge2NhdGFsb2dbXCJjYXRpZFwiXX08YnIgLz5cbiAgICAgICAgICAgICAgICAgIENsb3VkIENvdmVyOiA0MC4yJTxiciAvPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxMYXp5TG9hZCB3aWR0aD17Y2F0YWxvZy50aHVtYl93fSBoZWlnaHQ9e2NhdGFsb2cudGh1bWJfaH0+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17XCIvaW1hZ2VzL3R5cGhvb24tZ29uaS9cIiArIGNhdGFsb2dbXCJjYXRpZFwiXSArIFwiLnBuZ1wifSB3aWR0aD17Y2F0YWxvZy50aHVtYl93fSBoZWlnaHQ9e2NhdGFsb2cudGh1bWJfaH0gLz5cbiAgICAgICAgICAgICAgICA8L0xhenlMb2FkPlxuICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTWR9PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgIDxQYWdpbmF0aW9uIGNvdW50PXtldmVudERhdGEubnVtX3BhZ2VzfSBwYWdlPXtwYWdlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBzaG93Rmlyc3RCdXR0b24gc2hvd0xhc3RCdXR0b24gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZnVuY3Rpb24gcmVhZGFibGVGaWxlU2l6ZShmaWxlc2l6ZSkge1xuICBpZiAoZmlsZXNpemUgPiAxMDI0ICogMTAyNCAqIDEwMjQgKiAxMDI0KSB7XG4gICAgcmV0dXJuIChmaWxlc2l6ZSAvICgxMDI0ICogMTAyNCAqIDEwMjQgKiAxMDI0KSkudG9GaXhlZCgyKSArIFwiIFRCXCJcbiAgfSBlbHNlIGlmIChmaWxlc2l6ZSA+IDEwMjQgKiAxMDI0ICogMTAyNCkge1xuICAgIHJldHVybiAoZmlsZXNpemUgLyAoMTAyNCAqIDEwMjQgKiAxMDI0KSkudG9GaXhlZCgyKSArIFwiIEdCXCJcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKGZpbGVzaXplIC8gKDEwMjQgKiAxMDI0KSkudG9GaXhlZCgyKSArIFwiIE1CXCJcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIC8vIGNvbnN0IHNsdWcgPSBcInR5cGhvb24tZ29uaVwiXG4gIC8vIGNvbnN0IHBhdGggPSBcInB1YmxpYy9pbWFnZXMvXCIgKyBzbHVnICsgXCIvc3VtbWFyeS5qc29uXCJcbiAgLy8gY29uc3QgZXZlbnREYXRhID0gYXdhaXQgbG9hZEV2ZW50SnNvbih7ZnMsIHBhdGh9KVxuXG4gIGNvbnN0IGV2ZW50RGF0YSA9IHtcbiAgICBjYXRpZHM6IFtcbiAgICAgIHtcbiAgICAgICAgY2F0aWQ6IFwiMTA1MDAxMDAxQzIwRjcwMFwiLFxuICAgICAgICBjbG91ZENvdmVyOiBcIjQwLjJcIixcbiAgICAgICAgdGh1bWJfdzogMTU4LFxuICAgICAgICB0aHVtYl9oOiA1NTAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjYXRpZDogXCIxMDUwMDEwMDFDNzNCMTAwXCIsXG4gICAgICAgIGNsb3VkQ292ZXI6IFwiNDAuMlwiLFxuICAgICAgICB0aHVtYl93OiAyMDAsXG4gICAgICAgIHRodW1iX2g6IDIyMCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNhdGlkOiBcIjEwMzAwMTAwQTY1Q0FFMDBcIixcbiAgICAgICAgY2xvdWRDb3ZlcjogXCI0MC4yXCIsXG4gICAgICAgIHRodW1iX3c6IDE3NyxcbiAgICAgICAgdGh1bWJfaDogNTUwLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2F0aWQ6IFwiMTAzMDAxMDBBQUI4NTgwMFwiLFxuICAgICAgICBjbG91ZENvdmVyOiBcIjQwLjJcIixcbiAgICAgICAgdGh1bWJfdzogMjAwLFxuICAgICAgICB0aHVtYl9oOiAyNzAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjYXRpZDogXCIxMDUwMDEwMDFFOUJENjAwXCIsXG4gICAgICAgIGNsb3VkQ292ZXI6IFwiNDAuMlwiLFxuICAgICAgICB0aHVtYl93OiAyMDAsXG4gICAgICAgIHRodW1iX2g6IDI5MCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNhdGlkOiBcIjEwNDAwMTAwNjBDREMzMDBcIixcbiAgICAgICAgY2xvdWRDb3ZlcjogXCI0MC4yXCIsXG4gICAgICAgIHRodW1iX3c6IDIwMCxcbiAgICAgICAgdGh1bWJfaDogMzE1LFxuICAgICAgfSxcbiAgICBdLFxuICB9XG4gIGV2ZW50RGF0YVtcIm51bV9jYXRpZHNcIl0gPSBPYmplY3Qua2V5cyhldmVudERhdGEuY2F0aWRzKS5sZW5ndGhcbiAgZXZlbnREYXRhW1wibnVtX3BhZ2VzXCJdID0gTWF0aC5jZWlsKGV2ZW50RGF0YVtcIm51bV9jYXRpZHNcIl0gLyA1KVxuICBjb25zb2xlLmxvZyhldmVudERhdGEpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZXZlbnREYXRhXG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/cloud_segmentation.tsx\n");

/***/ })

})