webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ \"./src/components/layout.tsx\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./src/styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Container */ \"./node_modules/@material-ui/core/esm/Container/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\n/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Chip */ \"./node_modules/@material-ui/core/esm/Chip/index.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Card */ \"./node_modules/@material-ui/core/esm/Card/index.js\");\n/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CardMedia */ \"./node_modules/@material-ui/core/esm/CardMedia/index.js\");\n/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ \"./node_modules/@material-ui/core/esm/CardActionArea/index.js\");\n/* harmony import */ var _material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/lab/Pagination */ \"./node_modules/@material-ui/lab/esm/Pagination/index.js\");\n\n\nvar _jsxFileName = \"/home/marzio/gitws/smly.github.io/2020.11_opendata_viewer/opendata_viewer/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar PaperItem = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__[\"default\"]).withConfig({\n  displayName: \"pages__PaperItem\",\n  componentId: \"sc-15ge53d-0\"\n})([\"margin:0 0 1.25rem;padding:\", \"px;\"], function (props) {\n  return props.theme.spacing(2);\n});\n\nfunction getEventColor(eventTypeName) {\n  if (eventTypeName == \"wind\") {\n    return \"#4a956b\";\n  } else if (eventTypeName == \"typhoon\") {\n    return \"#4a956b\";\n  } else if (eventTypeName == \"wildfire\") {\n    return \"#af7c3d\";\n  } else if (eventTypeName == \"covid19\") {\n    return \"#a2a74e\";\n  } else if (eventTypeName == \"flooding\") {\n    return \"#4a9295\";\n  } else if (eventTypeName == \"earthquake\") {\n    return \"#875ebd\";\n  } else {\n    return \"#000000\";\n  }\n}\n\nfunction getEventFaceColor(eventTypeName) {\n  return \"white\";\n}\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  _s();\n\n  var _this = this;\n\n  var allEvents = _ref.allEvents;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(1),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      page = _React$useState2[0],\n      setPage = _React$useState2[1];\n\n  var num_pages = Math.ceil(allEvents.length / 12);\n  var eventData = allEvents.slice((page - 1) * 12, page * 12);\n\n  var handleChange = function handleChange(event, value) {\n    setPage(value);\n    eventData = allEvents.slice((page - 1) * 12, page * 12);\n  };\n\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    home: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  }, _components_layout__WEBPACK_IMPORTED_MODULE_4__[\"siteTitle\"])), __jsx(\"div\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.containerMainPage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.eventPageTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }, \"Promoting the use of open EO data\"), __jsx(\"p\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.headMessage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, \"The main goal of this website is to make it possible for users to more easily access open earth observation (EO) data.\")), __jsx(\"div\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.containerEventPage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.eventPageTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }, \"MAXAR's OpenData Program\"), __jsx(\"p\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.headMessage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }\n  }, \"Maxar\\u2019s Open Data program provides imagery and related data in support of humanitarian crises, with a focus on disaster response. Associated imagery and crowdsourcing layers are released into the public domain under a Creative Commons 4.0 license.\")), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    maxWidth: \"lg\",\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.containerPadding,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.headingMd,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'center'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n    count: num_pages,\n    page: page,\n    onChange: handleChange,\n    showFirstButton: true,\n    showLastButton: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 13\n    }\n  }))), __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.headingMd,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    container: true,\n    spacing: 4,\n    alignItems: \"center\",\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 11\n    }\n  }, eventData.map(function (ev) {\n    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n      item: true,\n      key: ev[\"slug\"],\n      xs: 4,\n      sm: 3,\n      md: 2,\n      lg: 1,\n      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.cardItem,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 15\n      }\n    }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.card,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 17\n      }\n    }, __jsx(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n      component: \"div\",\n      disableRipple: true,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 10\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      href: \"/events/\".concat(ev[\"slug\"]),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 21\n      }\n    }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.cardMedia,\n      image: \"/images/\" + ev[\"slug\"] + \"/thumb.png\",\n      title: ev[\"name\"],\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 23\n      }\n    }, __jsx(\"div\", {\n      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.cardMediaOverlayTitle,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 25\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      href: \"/events/\".concat(ev[\"slug\"]),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 27\n      }\n    }, __jsx(\"a\", {\n      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.colorInherit,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 29\n      }\n    }, ev[\"name\"]))), __jsx(\"div\", {\n      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.cardMediaOverlay,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 25\n      }\n    }, __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      color: \"secondary\",\n      size: \"small\",\n      label: ev[\"tag\"],\n      style: {\n        borderRadius: 4,\n        backgroundColor: getEventColor(ev[\"tag\"]),\n        color: getEventFaceColor(ev[\"tag\"])\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 27\n      }\n    })))))));\n  }))), __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.headingMd,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'center'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n    count: 3,\n    page: page,\n    onChange: handleChange,\n    showFirstButton: true,\n    showLastButton: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 13\n    }\n  })))));\n}\n\n_s(Home, \"/DWZXlUKUNETkaaw7t58aXy53hg=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIlBhcGVySXRlbSIsInN0eWxlZCIsIlBhcGVyIiwicHJvcHMiLCJ0aGVtZSIsInNwYWNpbmciLCJnZXRFdmVudENvbG9yIiwiZXZlbnRUeXBlTmFtZSIsImdldEV2ZW50RmFjZUNvbG9yIiwiSG9tZSIsImFsbEV2ZW50cyIsIlJlYWN0IiwidXNlU3RhdGUiLCJwYWdlIiwic2V0UGFnZSIsIm51bV9wYWdlcyIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwiZXZlbnREYXRhIiwic2xpY2UiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInZhbHVlIiwic2l0ZVRpdGxlIiwidXRpbFN0eWxlcyIsImNvbnRhaW5lck1haW5QYWdlIiwiZXZlbnRQYWdlVGl0bGUiLCJoZWFkTWVzc2FnZSIsImNvbnRhaW5lckV2ZW50UGFnZSIsImNvbnRhaW5lclBhZGRpbmciLCJoZWFkaW5nTWQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJtYXAiLCJldiIsImNhcmRJdGVtIiwiY2FyZCIsImNhcmRNZWRpYSIsImNhcmRNZWRpYU92ZXJsYXlUaXRsZSIsImNvbG9ySW5oZXJpdCIsImNhcmRNZWRpYU92ZXJsYXkiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLGlFQUFNLENBQUNDLCtEQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsMkNBRUYsVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxPQUFaLENBQW9CLENBQXBCLENBQVg7QUFBQSxDQUZFLENBQWY7O0FBS0EsU0FBU0MsYUFBVCxDQUF1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Q0FBQzJCLEVBQUUsQ0FBQyxLQUFELENBQUg7QUFIbkIsT0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FaRixDQURGLENBRFgsQ0FETyxDQUpGLENBRGE7QUFBQSxHQUFkLENBREgsQ0FERixDQU5GLEVBNkNFO0FBQVMsYUFBUyxFQUFFViwrREFBVSxDQUFDTSxTQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRUMsYUFBTyxFQUFFLE1BQVg7QUFBbUJDLG9CQUFjLEVBQUU7QUFBbkMsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUFZLFNBQUssRUFBRSxDQUFuQjtBQUFzQixRQUFJLEVBQUVwQixJQUE1QjtBQUFrQyxZQUFRLEVBQUVRLFlBQTVDO0FBQTBELG1CQUFlLE1BQXpFO0FBQTBFLGtCQUFjLE1BQXhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBN0NGLENBckJGLENBREY7QUEyRUQ7O0dBdkZ1QlosSTs7S0FBQUEsSSIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgTGF5b3V0LCB7IHNpdGVUaXRsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgRGF0ZSBmcm9tICcuLi9jb21wb25lbnRzL2RhdGUnXG5pbXBvcnQgeyBsaXN0RXZlbnROYW1lcyB9IGZyb20gJy4uL2xpYi9ldmVudHMnXG5cbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcidcbmltcG9ydCBDaGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoaXAnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhJztcbmltcG9ydCBDYXJkQWN0aW9uQXJlYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uQXJlYSc7XG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkSGVhZGVyJztcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvUGFnaW5hdGlvbic7XG5cblxuY29uc3QgUGFwZXJJdGVtID0gc3R5bGVkKFBhcGVyKWBcbiAgbWFyZ2luOiAwIDAgMS4yNXJlbTtcbiAgcGFkZGluZzogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnNwYWNpbmcoMil9cHg7XG5gXG5cbmZ1bmN0aW9uIGdldEV2ZW50Q29sb3IoZXZlbnRUeXBlTmFtZTogc3RyaW5nKSA6c3RyaW5nIHtcbiAgaWYgKGV2ZW50VHlwZU5hbWUgPT0gXCJ3aW5kXCIpIHtcbiAgICByZXR1cm4gXCIjNGE5NTZiXCJcbiAgfSBlbHNlIGlmIChldmVudFR5cGVOYW1lID09IFwidHlwaG9vblwiKSB7XG4gICAgcmV0dXJuIFwiIzRhOTU2YlwiXG4gIH0gZWxzZSBpZiAoZXZlbnRUeXBlTmFtZSA9PSBcIndpbGRmaXJlXCIpIHtcbiAgICByZXR1cm4gXCIjYWY3YzNkXCJcbiAgfSBlbHNlIGlmIChldmVudFR5cGVOYW1lID09IFwiY292aWQxOVwiKSB7XG4gICAgcmV0dXJuIFwiI2EyYTc0ZVwiXG4gIH0gZWxzZSBpZiAoZXZlbnRUeXBlTmFtZSA9PSBcImZsb29kaW5nXCIpIHtcbiAgICByZXR1cm4gXCIjNGE5Mjk1XCJcbiAgfSBlbHNlIGlmIChldmVudFR5cGVOYW1lID09IFwiZWFydGhxdWFrZVwiKSB7XG4gICAgcmV0dXJuIFwiIzg3NWViZFwiXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwiIzAwMDAwMFwiXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RXZlbnRGYWNlQ29sb3IoZXZlbnRUeXBlTmFtZTogc3RyaW5nKSA6c3RyaW5nIHtcbiAgcmV0dXJuIFwid2hpdGVcIlxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBhbGxFdmVudHMgfToge1xuICBhbGxFdmVudHM6IGFueVxufSkge1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSBSZWFjdC51c2VTdGF0ZSgxKVxuICBjb25zdCBudW1fcGFnZXMgPSBNYXRoLmNlaWwoYWxsRXZlbnRzLmxlbmd0aCAvIDEyKVxuICB2YXIgZXZlbnREYXRhID0gYWxsRXZlbnRzLnNsaWNlKChwYWdlLTEpICogMTIsIHBhZ2UgKiAxMilcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PHVua25vd24+LCB2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgc2V0UGFnZSh2YWx1ZSlcbiAgICBldmVudERhdGEgPSBhbGxFdmVudHMuc2xpY2UoKHBhZ2UtMSkgKiAxMiwgcGFnZSAqIDEyKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGhvbWU+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntzaXRlVGl0bGV9PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuY29udGFpbmVyTWFpblBhZ2V9PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmV2ZW50UGFnZVRpdGxlfT5Qcm9tb3RpbmcgdGhlIHVzZSBvZiBvcGVuIEVPIGRhdGE8L2gyPlxuICAgICAgICA8cCBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZE1lc3NhZ2V9PlxuVGhlIG1haW4gZ29hbCBvZiB0aGlzIHdlYnNpdGUgaXMgdG8gbWFrZSBpdCBwb3NzaWJsZSBmb3IgdXNlcnMgdG8gbW9yZSBlYXNpbHkgYWNjZXNzIG9wZW4gZWFydGggb2JzZXJ2YXRpb24gKEVPKSBkYXRhLlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuY29udGFpbmVyRXZlbnRQYWdlfT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5ldmVudFBhZ2VUaXRsZX0+TUFYQVIncyBPcGVuRGF0YSBQcm9ncmFtPC9oMj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRNZXNzYWdlfT5cbk1heGFy4oCZcyBPcGVuIERhdGEgcHJvZ3JhbSBwcm92aWRlcyBpbWFnZXJ5IGFuZFxucmVsYXRlZCBkYXRhIGluIHN1cHBvcnQgb2YgaHVtYW5pdGFyaWFuIGNyaXNlcywgd2l0aCBhIGZvY3VzIG9uIGRpc2FzdGVyIHJlc3BvbnNlLlxuQXNzb2NpYXRlZCBpbWFnZXJ5IGFuZCBjcm93ZHNvdXJjaW5nIGxheWVycyBhcmUgcmVsZWFzZWQgaW50byB0aGUgcHVibGljIGRvbWFpbiB1bmRlciBhIENyZWF0aXZlIENvbW1vbnMgNC4wIGxpY2Vuc2UuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuY29udGFpbmVyUGFkZGluZ30+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTWR9PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgIDxQYWdpbmF0aW9uIGNvdW50PXtudW1fcGFnZXN9IHBhZ2U9e3BhZ2V9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHNob3dGaXJzdEJ1dHRvbiBzaG93TGFzdEJ1dHRvbiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTWR9PlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0fSBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAge2V2ZW50RGF0YS5tYXAoKGV2KSA9PiAoXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW1cbiAgICAgICAgICAgICAgICAgIGtleT17ZXZbXCJzbHVnXCJdfVxuICAgICAgICAgICAgICAgICAgeHM9ezR9IHNtPXszfSBtZD17Mn0gbGc9ezF9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3V0aWxTdHlsZXMuY2FyZEl0ZW19PlxuICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5jYXJkfT5cblx0XHRcdCAgICAgIDxDYXJkQWN0aW9uQXJlYSBjb21wb25lbnQ9XCJkaXZcIiBkaXNhYmxlUmlwcGxlPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2V2ZW50cy8ke2V2W1wic2x1Z1wiXX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZE1lZGlhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3V0aWxTdHlsZXMuY2FyZE1lZGlhfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e1wiL2ltYWdlcy9cIiArIGV2W1wic2x1Z1wiXSArIFwiL3RodW1iLnBuZ1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2V2W1wibmFtZVwiXX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dXRpbFN0eWxlcy5jYXJkTWVkaWFPdmVybGF5VGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2V2ZW50cy8ke2V2W1wic2x1Z1wiXX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3V0aWxTdHlsZXMuY29sb3JJbmhlcml0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtldltcIm5hbWVcIl19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuXHRcdFx0ICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmNhcmRNZWRpYU92ZXJsYXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hpcCBjb2xvcj1cInNlY29uZGFyeVwiIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2V2W1widGFnXCJdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGdldEV2ZW50Q29sb3IoZXZbXCJ0YWdcIl0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdldEV2ZW50RmFjZUNvbG9yKGV2W1widGFnXCJdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRNZWRpYT5cblx0XHRcdCAgICAgICAgPC9MaW5rPlxuXHRcdFx0ICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ01kfT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInfX0+XG4gICAgICAgICAgICA8UGFnaW5hdGlvbiBjb3VudD17M30gcGFnZT17cGFnZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gc2hvd0ZpcnN0QnV0dG9uIHNob3dMYXN0QnV0dG9uIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcGF0aCA9IFwicHVibGljL2ltYWdlcy9ldmVudF9pbmRleC5qc29uXCJcbiAgY29uc3QgYWxsRXZlbnRzID0gYXdhaXQgbGlzdEV2ZW50TmFtZXMoeyBmcywgcGF0aCB9KVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGFsbEV2ZW50c1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})