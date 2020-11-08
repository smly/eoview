webpackHotUpdate_N_E("pages/cloud_segmentation",{

/***/ "./src/pages/cloud_segmentation.tsx":
/*!******************************************!*\
  !*** ./src/pages/cloud_segmentation.tsx ***!
  \******************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Event; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ \"./src/components/layout.tsx\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./src/styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-lazyload */ \"./node_modules/react-lazyload/lib/index.js\");\n/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Container */ \"./node_modules/@material-ui/core/esm/Container/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/lab/Pagination */ \"./node_modules/@material-ui/lab/esm/Pagination/index.js\");\n\n\nvar _jsxFileName = \"/home/marzio/gitws/smly.github.io/2020.11_opendata_viewer/opendata_viewer/src/pages/cloud_segmentation.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Event(_ref) {\n  _s();\n\n  var _this = this;\n\n  var eventData = _ref.eventData;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(1),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      page = _React$useState2[0],\n      setPage = _React$useState2[1];\n\n  var catalogData = eventData.catids.slice((page - 1) * 10, page * 10);\n\n  var handleChange = function handleChange(event, value) {\n    setPage(value);\n    catalogData = eventData.catids.slice((page - 1) * 10, page * 10);\n  };\n\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, eventData.name, \" | \", _components_layout__WEBPACK_IMPORTED_MODULE_4__[\"siteTitle\"])), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    maxWidth: \"lg\",\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.containerPadding,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.headingMd,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    container: true,\n    spacing: 1,\n    alignItems: \"stretch\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    item: true,\n    xs: 12,\n    sm: 12,\n    md: 6,\n    lg: 6,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    elevation: 0,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    style: {\n      margin: \"0.4rem\"\n    },\n    disableElevation: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 11\n    }\n  }, \"Back\")), __jsx(\"div\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.containerEventDataPage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  }, __jsx(\"h2\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.eventPageTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 15\n    }\n  }, eventData[\"name\"]), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }\n  }, __jsx(\"table\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.eventDataTable,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 15\n    }\n  }, __jsx(\"tr\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 17\n    }\n  }, __jsx(\"th\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 19\n    }\n  }, \"Total filesize\"), __jsx(\"td\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 42\n    }\n  }, readableFileSize(eventData.total_filesize))), __jsx(\"tr\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 17\n    }\n  }, __jsx(\"th\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 19\n    }\n  }, \"Event Date\"), __jsx(\"td\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 38\n    }\n  }, \"20\", eventData.event_date)), __jsx(\"tr\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 17\n    }\n  }, __jsx(\"th\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 19\n    }\n  }, \"Pre-Event count\"), __jsx(\"td\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 43\n    }\n  }, eventData.pre_event_count)), __jsx(\"tr\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 17\n    }\n  }, __jsx(\"th\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 19\n    }\n  }, \"Post-Event count\"), __jsx(\"td\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 44\n    }\n  }, eventData.post_event_count)), __jsx(\"tr\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 17\n    }\n  }, __jsx(\"th\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 19\n    }\n  }, \"Latitude\"), __jsx(\"td\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 36\n    }\n  }, eventData.event_latitude.toFixed(8))), __jsx(\"tr\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 17\n    }\n  }, __jsx(\"th\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 19\n    }\n  }, \"Longitude\"), __jsx(\"td\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 37\n    }\n  }, eventData.event_longitude.toFixed(8))))))))))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    maxWidth: \"lg\",\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.containerPadding,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.headingMd,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'center'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    count: eventData.num_pages,\n    page: page,\n    onChange: handleChange,\n    showFirstButton: true,\n    showLastButton: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 13\n    }\n  }))), __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.headingMd,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    container: true,\n    spacing: 1,\n    alignItems: \"stretch\",\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 11\n    }\n  }, catalogData.map(function (catalog) {\n    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      item: true,\n      key: catalog[\"catid\"],\n      xs: 4,\n      sm: 3,\n      md: 2,\n      lg: 1,\n      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.catalogItem,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 15\n      }\n    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.catalogPaper,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 17\n      }\n    }, catalog[\"catid\"], __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 37\n      }\n    }), catalog[\"event_date\"], __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 42\n      }\n    }), catalog[\"is_pre_event\"] ? \"Pre Event\" : \"Post Event\", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 75\n      }\n    }), readableFileSize(catalog[\"filesize\"]), __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 58\n      }\n    }), \"Cloud Cover: 40.2%\", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 37\n      }\n    }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n      color: \"secondary\",\n      style: {\n        margin: \"0.4rem\"\n      },\n      href: \"https://www.google.com/maps/@?api=1&map_action=map&center=\".concat(catalog.longitude, \",\").concat(catalog.latitude, \"&zoom=12&basemap=satellite\"),\n      target: \"_blank\",\n      disableElevation: true,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 17\n      }\n    }, \"Maps\"), __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 17\n      }\n    }), __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      width: catalog.thumb_w,\n      height: catalog.thumb_h,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 17\n      }\n    }, __jsx(\"img\", {\n      src: \"/images/typhoon-goni/\" + catalog[\"catid\"] + \".png\",\n      width: catalog.thumb_w,\n      height: catalog.thumb_h,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 19\n      }\n    }))));\n  }))), __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.headingMd,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'center'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    count: eventData.num_pages,\n    page: page,\n    onChange: handleChange,\n    showFirstButton: true,\n    showLastButton: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 13\n    }\n  })))));\n}\n\n_s(Event, \"/DWZXlUKUNETkaaw7t58aXy53hg=\");\n\n_c = Event;\n\nfunction readableFileSize(filesize) {\n  if (filesize > 1024 * 1024 * 1024 * 1024) {\n    return (filesize / (1024 * 1024 * 1024 * 1024)).toFixed(2) + \" TB\";\n  } else if (filesize > 1024 * 1024 * 1024) {\n    return (filesize / (1024 * 1024 * 1024)).toFixed(2) + \" GB\";\n  } else {\n    return (filesize / (1024 * 1024)).toFixed(2) + \" MB\";\n  }\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"Event\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Nsb3VkX3NlZ21lbnRhdGlvbi50c3g/OTBmNSJdLCJuYW1lcyI6WyJFdmVudCIsImV2ZW50RGF0YSIsIlJlYWN0IiwidXNlU3RhdGUiLCJwYWdlIiwic2V0UGFnZSIsImNhdGFsb2dEYXRhIiwiY2F0aWRzIiwic2xpY2UiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInZhbHVlIiwibmFtZSIsInNpdGVUaXRsZSIsInV0aWxTdHlsZXMiLCJjb250YWluZXJQYWRkaW5nIiwiaGVhZGluZ01kIiwibWFyZ2luIiwiY29udGFpbmVyRXZlbnREYXRhUGFnZSIsImV2ZW50UGFnZVRpdGxlIiwiZXZlbnREYXRhVGFibGUiLCJyZWFkYWJsZUZpbGVTaXplIiwidG90YWxfZmlsZXNpemUiLCJldmVudF9kYXRlIiwicHJlX2V2ZW50X2NvdW50IiwicG9zdF9ldmVudF9jb3VudCIsImV2ZW50X2xhdGl0dWRlIiwidG9GaXhlZCIsImV2ZW50X2xvbmdpdHVkZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm51bV9wYWdlcyIsIm1hcCIsImNhdGFsb2ciLCJjYXRhbG9nSXRlbSIsImNhdGFsb2dQYXBlciIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwidGh1bWJfdyIsInRodW1iX2giLCJmaWxlc2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFLQTtBQUNBOztBQU1lLFNBQVNBLEtBQVQsT0FBOEI7QUFBQTs7QUFBQTs7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7O0FBQUEsd0JBQ25CQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsQ0FBZixDQURtQjtBQUFBO0FBQUEsTUFDcENDLElBRG9DO0FBQUEsTUFDOUJDLE9BRDhCOztBQUUzQyxNQUFJQyxXQUFXLEdBQUdMLFNBQVMsQ0FBQ00sTUFBVixDQUFpQkMs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Q0wsV0FBTyxDQUFDYSxRQUFRLElBQUksT0FBTyxJQUFYLENBQVQsRUFBMkJiLE9BQTNCLENBQW1DLENBQW5DLElBQXdDLEtBQS9DO0FBQ0Q7QUFDRiIsImZpbGUiOiIuL3NyYy9wYWdlcy9jbG91ZF9zZWdtZW50YXRpb24udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuXG5pbXBvcnQgTGF5b3V0LCB7IHNpdGVUaXRsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHsgbG9hZEV2ZW50SnNvbiwgbGlzdEV2ZW50TmFtZXMgfSBmcm9tICcuLi9saWIvZXZlbnRzJ1xuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnXG5cbmltcG9ydCBMYXp5TG9hZCBmcm9tICdyZWFjdC1sYXp5bG9hZCc7XG5cbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJ1xuaW1wb3J0IENoaXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hpcCc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnO1xuaW1wb3J0IENhcmRBY3Rpb25BcmVhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25BcmVhJztcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1BhZ2luYXRpb24nO1xuXG5pbXBvcnQgTW9kYWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTW9kYWwnO1xuaW1wb3J0IEJhY2tkcm9wIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JhY2tkcm9wJztcbmltcG9ydCBGYWRlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ZhZGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFdmVudCh7IGV2ZW50RGF0YSB9KSB7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKDEpXG4gIHZhciBjYXRhbG9nRGF0YSA9IGV2ZW50RGF0YS5jYXRpZHMuc2xpY2UoKHBhZ2UtMSkgKiAxMCwgcGFnZSAqIDEwKVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8dW5rbm93bj4sIHZhbHVlOiBudW1iZXIpID0+IHtcbiAgICBzZXRQYWdlKHZhbHVlKVxuICAgIGNhdGFsb2dEYXRhID0gZXZlbnREYXRhLmNhdGlkcy5zbGljZSgocGFnZS0xKSAqIDEwLCBwYWdlICogMTApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntldmVudERhdGEubmFtZX0gfCB7c2l0ZVRpdGxlfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5jb250YWluZXJQYWRkaW5nfT5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTWR9PlxuICAgICAgPEdyaWQgY29udGFpbmVyXG4gICAgICAgICAgICBzcGFjaW5nPXsxfVxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cInN0cmV0Y2hcIj5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9IGxnPXs2fT5cbiAgICAgICAgICA8UGFwZXJcbiAgICAgICAgICAgIGVsZXZhdGlvbj17MH0+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyBtYXJnaW46IFwiMC40cmVtXCIgfX0gZGlzYWJsZUVsZXZhdGlvbj5cbiAgICAgICAgICAgICAgQmFja1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dXRpbFN0eWxlcy5jb250YWluZXJFdmVudERhdGFQYWdlfT5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5ldmVudFBhZ2VUaXRsZX0+e2V2ZW50RGF0YVtcIm5hbWVcIl19PC9oMj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmV2ZW50RGF0YVRhYmxlfT5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGg+VG90YWwgZmlsZXNpemU8L3RoPjx0ZD57cmVhZGFibGVGaWxlU2l6ZShldmVudERhdGEudG90YWxfZmlsZXNpemUpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGg+RXZlbnQgRGF0ZTwvdGg+PHRkPjIwe2V2ZW50RGF0YS5ldmVudF9kYXRlfTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGg+UHJlLUV2ZW50IGNvdW50PC90aD48dGQ+e2V2ZW50RGF0YS5wcmVfZXZlbnRfY291bnR9PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0aD5Qb3N0LUV2ZW50IGNvdW50PC90aD48dGQ+e2V2ZW50RGF0YS5wb3N0X2V2ZW50X2NvdW50fTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGg+TGF0aXR1ZGU8L3RoPjx0ZD57ZXZlbnREYXRhLmV2ZW50X2xhdGl0dWRlLnRvRml4ZWQoOCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0aD5Mb25naXR1ZGU8L3RoPjx0ZD57ZXZlbnREYXRhLmV2ZW50X2xvbmdpdHVkZS50b0ZpeGVkKDgpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmNvbnRhaW5lclBhZGRpbmd9PlxuXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTWR9PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgIDxQYWdpbmF0aW9uIGNvdW50PXtldmVudERhdGEubnVtX3BhZ2VzfSBwYWdlPXtwYWdlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBzaG93Rmlyc3RCdXR0b24gc2hvd0xhc3RCdXR0b24gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTWR9PlxuXG4gICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgc3BhY2luZz17MX1cbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJzdHJldGNoXCJcbiAgICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjYXRhbG9nRGF0YS5tYXAoKGNhdGFsb2cpID0+IChcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbVxuICAgICAgICAgICAgICAgICAga2V5PXtjYXRhbG9nW1wiY2F0aWRcIl19XG4gICAgICAgICAgICAgICAgICB4cz17NH0gc209ezN9IG1kPXsyfSBsZz17MX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5jYXRhbG9nSXRlbX0+XG4gICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5jYXRhbG9nUGFwZXJ9PlxuICAgICAgICAgICAgICAgICAge2NhdGFsb2dbXCJjYXRpZFwiXX08YnIgLz5cbiAgICAgICAgICAgICAgICAgIHtjYXRhbG9nW1wiZXZlbnRfZGF0ZVwiXX08YnIgLz5cbiAgICAgICAgICAgICAgICAgIHsoY2F0YWxvZ1tcImlzX3ByZV9ldmVudFwiXSkgPyBcIlByZSBFdmVudFwiIDogXCJQb3N0IEV2ZW50XCJ9PGJyIC8+XG4gICAgICAgICAgICAgICAgICB7cmVhZGFibGVGaWxlU2l6ZShjYXRhbG9nW1wiZmlsZXNpemVcIl0pfTxiciAvPlxuICAgICAgICAgICAgICAgICAgQ2xvdWQgQ292ZXI6IDQwLjIlPGJyIC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiIHN0eWxlPXt7IG1hcmdpbjogXCIwLjRyZW1cIiB9fVxuICAgICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9AP2FwaT0xJm1hcF9hY3Rpb249bWFwJmNlbnRlcj0ke2NhdGFsb2cubG9uZ2l0dWRlfSwke2NhdGFsb2cubGF0aXR1ZGV9Jnpvb209MTImYmFzZW1hcD1zYXRlbGxpdGVgfVxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCIgZGlzYWJsZUVsZXZhdGlvbj5cbiAgICAgICAgICAgICAgICAgIE1hcHNcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8TGF6eUxvYWQgd2lkdGg9e2NhdGFsb2cudGh1bWJfd30gaGVpZ2h0PXtjYXRhbG9nLnRodW1iX2h9PlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiL2ltYWdlcy90eXBob29uLWdvbmkvXCIgKyBjYXRhbG9nW1wiY2F0aWRcIl0gKyBcIi5wbmdcIn0gd2lkdGg9e2NhdGFsb2cudGh1bWJfd30gaGVpZ2h0PXtjYXRhbG9nLnRodW1iX2h9IC8+XG4gICAgICAgICAgICAgICAgPC9MYXp5TG9hZD5cbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ01kfT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInfX0+XG4gICAgICAgICAgICA8UGFnaW5hdGlvbiBjb3VudD17ZXZlbnREYXRhLm51bV9wYWdlc30gcGFnZT17cGFnZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gc2hvd0ZpcnN0QnV0dG9uIHNob3dMYXN0QnV0dG9uIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmZ1bmN0aW9uIHJlYWRhYmxlRmlsZVNpemUoZmlsZXNpemUpIHtcbiAgaWYgKGZpbGVzaXplID4gMTAyNCAqIDEwMjQgKiAxMDI0ICogMTAyNCkge1xuICAgIHJldHVybiAoZmlsZXNpemUgLyAoMTAyNCAqIDEwMjQgKiAxMDI0ICogMTAyNCkpLnRvRml4ZWQoMikgKyBcIiBUQlwiXG4gIH0gZWxzZSBpZiAoZmlsZXNpemUgPiAxMDI0ICogMTAyNCAqIDEwMjQpIHtcbiAgICByZXR1cm4gKGZpbGVzaXplIC8gKDEwMjQgKiAxMDI0ICogMTAyNCkpLnRvRml4ZWQoMikgKyBcIiBHQlwiXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChmaWxlc2l6ZSAvICgxMDI0ICogMTAyNCkpLnRvRml4ZWQoMikgKyBcIiBNQlwiXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBzbHVnID0gXCJ0eXBob29uLWdvbmlcIlxuICBjb25zdCBwYXRoID0gXCJwdWJsaWMvaW1hZ2VzL1wiICsgc2x1ZyArIFwiL3N1bW1hcnkuanNvblwiXG4gIGNvbnN0IGV2ZW50RGF0YSA9IGF3YWl0IGxvYWRFdmVudEpzb24oe2ZzLCBwYXRofSlcblxuICBldmVudERhdGFbXCJudW1fY2F0aWRzXCJdID0gT2JqZWN0LmtleXMoZXZlbnREYXRhLmNhdGlkcykubGVuZ3RoXG4gIGV2ZW50RGF0YVtcIm51bV9wYWdlc1wiXSA9IE1hdGguY2VpbChldmVudERhdGFbXCJudW1fY2F0aWRzXCJdIC8gMTApXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZXZlbnREYXRhXG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/cloud_segmentation.tsx\n");

/***/ })

})