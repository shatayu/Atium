/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/content.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("// let $ = require(\"jquery\");\n\n// let index = require(\"./index.js\");\n\n// console.log('hello');\n\n// $($.parseHTML(\n//     '<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" integrity=\"sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB\" crossorigin=\"anonymous\"> <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Unica+One\"> <link type=\"text/html\" rel=\"stylesheet\" href=\"/floatycss.css\">'\n// )).appendTo('head');\n\n// $.get(chrome.extension.getURL('/src/floatyBoi.html'), function(data) {\n//     $(data).appendTo('body');\n//     // Or if you're using jQuery 1.8+:\n//     // $($.parseHTML(data)).appendTo('body');\n// });\n\n// async function main() {\n//     localStorage.removeItem('link');\n//     let currentLink = await index.getCurrentLinkData();\n//     localStorage.setItem('link', JSON.stringify(currentLink));\n//     console.log(\"meme\");\n// }\n\n// main();\n\n\n//# sourceURL=webpack:///./src/content.js?");
=======
eval("\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"./node_modules/babel-runtime/regenerator/index.js\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ \"./node_modules/babel-runtime/helpers/asyncToGenerator.js\");\n\nvar _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);\n\nvar main = function () {\n    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {\n        var currentLink;\n        return _regenerator2.default.wrap(function _callee$(_context) {\n            while (1) {\n                switch (_context.prev = _context.next) {\n                    case 0:\n                        localStorage.removeItem('link');\n                        _context.next = 3;\n                        return index.getCurrentLinkData();\n\n                    case 3:\n                        currentLink = _context.sent;\n\n                        localStorage.setItem('link', JSON.stringify(currentLink));\n                        console.log(\"meme\");\n\n                    case 6:\n                    case \"end\":\n                        return _context.stop();\n                }\n            }\n        }, _callee, this);\n    }));\n\n    return function main() {\n        return _ref.apply(this, arguments);\n    };\n}();\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar $ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n\nvar index = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\nconsole.log('hello');\n\n$($.parseHTML('<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" integrity=\"sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB\" crossorigin=\"anonymous\"> <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Unica+One\"> <link type=\"text/html\" rel=\"stylesheet\" href=\"/floatycss.css\">')).appendTo('head');\n\n$.get(chrome.extension.getURL('/src/floatyBoi.html'), function (data) {\n    $(data).appendTo('body');\n    // Or if you're using jQuery 1.8+:\n    // $($.parseHTML(data)).appendTo('body');\n});\n\nmain();\n\n//# sourceURL=webpack:///./src/content.js?");

/***/ }),

/***/ "./src/firebase/operations.js":
/*!************************************!*\
  !*** ./src/firebase/operations.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.addSite = addSite;\n\nvar _firebase = __webpack_require__(/*! firebase */ \"./node_modules/firebase/dist/index.cjs.js\");\n\nvar firebase = __webpack_require__(/*! firebase */ \"./node_modules/firebase/dist/index.cjs.js\");\nvar config = {\n    apiKey: \"AIzaSyADlbe5mZ62QFaLhPSwnC_ksGTGhBqTyjo\",\n    authDomain: \"atium-e4df2.firebaseapp.com\",\n    databaseURL: \"https://atium-e4df2.firebaseio.com\",\n    projectId: \"atium-e4df2\",\n    storageBucket: \"atium-e4df2.appspot.com\",\n    messagingSenderId: \"254101329920\"\n};\n\nfirebase.initializeApp(config);\nvar db = firebase.database();\n\nfunction addSite(userID, email, project, site) {\n    db.ref(userID + \"/\" + Date.now()).update({\n        project: project,\n        summary: site.summary,\n        title: site.title,\n        url: site.url,\n        user: email\n    });\n}\n\n//# sourceURL=webpack:///./src/firebase/operations.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getCurrentLinkData = undefined;\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"./node_modules/babel-runtime/regenerator/index.js\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ \"./node_modules/babel-runtime/helpers/asyncToGenerator.js\");\n\nvar _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);\n\n/*\r\nlet currentTab = await url.getCurrentURL();\r\nlet SMMRYData = await summary.getSMMRYData(currentTab);\r\n\r\nlet summary = SMMRYData.data.sm_api_content;\r\nlet query = \"\"\r\n\r\nfor (let i = 0; i < SMMRYData.data.sm_api_keyword_array.length; i++) {\r\n    query += SMMRYData.data.sm_api_keyword_array[i] + \" \"\r\n}\r\n\r\nlet links = await links.getRelatedLinks(query);\r\n*/\n\nvar getCurrentLinkData = exports.getCurrentLinkData = function () {\n    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {\n        var currentTab, SMMRYData, currentTabSummary, currentTabTitle, query, i, currentTabLinks, result;\n        return _regenerator2.default.wrap(function _callee$(_context) {\n            while (1) {\n                switch (_context.prev = _context.next) {\n                    case 0:\n                        console.log(\"getting data on the current tab\");\n                        _context.next = 3;\n                        return url.getCurrentURL();\n\n                    case 3:\n                        currentTab = _context.sent;\n\n                        console.log(currentTab);\n                        _context.next = 7;\n                        return summary.getSMMRYData(currentTab);\n\n                    case 7:\n                        SMMRYData = _context.sent;\n\n                        console.log(SMMRYData);\n                        currentTabSummary = SMMRYData.data.sm_api_content;\n                        currentTabTitle = SMMRYData.data.sm_api_title;\n                        query = \"\";\n\n\n                        for (i = 0; i < SMMRYData.data.sm_api_keyword_array.length; i++) {\n                            query += SMMRYData.data.sm_api_keyword_array[i] + \" \";\n                        }\n\n                        console.log(query);\n\n                        _context.next = 16;\n                        return links.getRelatedLinks(query);\n\n                    case 16:\n                        currentTabLinks = _context.sent;\n                        result = {\n                            url: currentTab,\n                            summary: currentTabSummary,\n                            title: currentTabTitle,\n                            links: currentTabLinks\n                        };\n\n\n                        databaseHandling.addSite(\"z4GwaEY5WXZC17998rIuIZojM7D2\", \"demo@atiumapp.com\", \"project\", result);\n                        console.log(result);\n                        return _context.abrupt(\"return\", result);\n\n                    case 21:\n                    case \"end\":\n                        return _context.stop();\n                }\n            }\n        }, _callee, this);\n    }));\n\n    return function getCurrentLinkData() {\n        return _ref.apply(this, arguments);\n    };\n}();\n\nvar main = function () {\n    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {\n        var currentLink;\n        return _regenerator2.default.wrap(function _callee2$(_context2) {\n            while (1) {\n                switch (_context2.prev = _context2.next) {\n                    case 0:\n                        console.log(\"in main\");\n                        _context2.next = 3;\n                        return getCurrentLinkData();\n\n                    case 3:\n                        currentLink = _context2.sent;\n\n                        console.log(currentLink);\n\n                    case 5:\n                    case \"end\":\n                        return _context2.stop();\n                }\n            }\n        }, _callee2, this);\n    }));\n\n    return function main() {\n        return _ref2.apply(this, arguments);\n    };\n}();\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar summary = __webpack_require__(/*! ./text/summary */ \"./src/text/summary.js\");\nvar url = __webpack_require__(/*! ./chrome/url */ \"./src/chrome/url.js\");\nvar links = __webpack_require__(/*! ./text/links */ \"./src/text/links.js\");\nvar databaseHandling = __webpack_require__(/*! ./firebase/operations */ \"./src/firebase/operations.js\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/text/links.js":
/*!***************************!*\
  !*** ./src/text/links.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getRelatedLinks = undefined;\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"./node_modules/babel-runtime/regenerator/index.js\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ \"./node_modules/babel-runtime/helpers/asyncToGenerator.js\");\n\nvar _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);\n\nvar getRelatedLinks = exports.getRelatedLinks = function () {\n    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(search) {\n        var host, path, term, subscriptionKey, result;\n        return _regenerator2.default.wrap(function _callee$(_context) {\n            while (1) {\n                switch (_context.prev = _context.next) {\n                    case 0:\n                        host = 'api.cognitive.microsoft.com';\n                        path = '/bing/v7.0/search';\n                        term = 'Microsoft Cognitive Services';\n                        subscriptionKey = '6305003fe97145e780050ca36c54698e';\n                        result = new Promise(function (resolve, reject) {\n                            var request_params = {\n                                method: 'GET',\n                                hostname: host,\n                                path: path + '?q=' + encodeURIComponent(search),\n                                headers: {\n                                    'Ocp-Apim-Subscription-Key': subscriptionKey\n                                }\n                            };\n\n                            var req = https.request(request_params, function (response) {\n                                var body = '';\n                                response.on('data', function (d) {\n                                    body += d;\n                                });\n                                response.on('end', function () {\n                                    body = JSON.stringify(JSON.parse(body), null, '  ');\n                                    resolve(parseResult(JSON.parse(body)));\n                                });\n                                response.on('error', function (e) {\n                                    reject(e.message);\n                                });\n                            });\n                            req.end();\n                        });\n                        _context.next = 7;\n                        return result;\n\n                    case 7:\n                        return _context.abrupt('return', _context.sent);\n\n                    case 8:\n                    case 'end':\n                        return _context.stop();\n                }\n            }\n        }, _callee, this);\n    }));\n\n    return function getRelatedLinks(_x) {\n        return _ref.apply(this, arguments);\n    };\n}();\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar https = __webpack_require__(/*! https */ \"./node_modules/https-browserify/index.js\");\n\nfunction parseResult(body) {\n    var result = [];\n    var links = body.webPages.value;\n    var numberOfLinks = 5;\n\n    for (var i = 0; i < numberOfLinks; i++) {\n        result.push(links[i]);\n    }\n\n    return result;\n}\n\n//# sourceURL=webpack:///./src/text/links.js?");

/***/ }),

/***/ "./src/text/summary.js":
/*!*****************************!*\
  !*** ./src/text/summary.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getSMMRYData = undefined;\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"./node_modules/babel-runtime/regenerator/index.js\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ \"./node_modules/babel-runtime/helpers/asyncToGenerator.js\");\n\nvar _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);\n\nvar getSMMRYData = exports.getSMMRYData = function () {\n    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(url) {\n        var key, keywordCount, APIUrl;\n        return _regenerator2.default.wrap(function _callee$(_context) {\n            while (1) {\n                switch (_context.prev = _context.next) {\n                    case 0:\n                        key = \"391EEA6499\";\n                        keywordCount = 3;\n                        APIUrl = \"https://api.smmry.com/&SM_API_KEY=\" + key;\n\n                        APIUrl += \"&SM_KEYWORD_COUNT=\" + keywordCount;\n                        APIUrl += \"&SM_URL=\" + url;\n\n                        _context.next = 7;\n                        return axios.get(APIUrl);\n\n                    case 7:\n                        return _context.abrupt(\"return\", _context.sent);\n\n                    case 8:\n                    case \"end\":\n                        return _context.stop();\n                }\n            }\n        }, _callee, this);\n    }));\n\n    return function getSMMRYData(_x) {\n        return _ref.apply(this, arguments);\n    };\n}();\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n//# sourceURL=webpack:///./src/text/summary.js?");

/***/ }),

/***/ 0:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");
>>>>>>> c04643d3bcea827ac4b205460453d3bb87806750

/***/ })

/******/ });