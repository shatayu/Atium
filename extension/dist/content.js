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
eval("// let $ = require(\"jquery\");\n// let databaseHandling = require(\"./firebase/operations\");\n\n// let index = require(\"./index.js\");\n\n// console.log('hello');\n\n// $($.parseHTML(\n//     '<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" integrity=\"sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB\" crossorigin=\"anonymous\"> <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Unica+One\"> <link type=\"text/html\" rel=\"stylesheet\" href=\"/floatycss.css\">'\n// )).appendTo('head');\n\n// $.get(chrome.extension.getURL('/src/floatyBoi.html'), function(data) {\n//     $(data).appendTo('body');\n//     // Or if you're using jQuery 1.8+:\n//     // $($.parseHTML(data)).appendTo('body');\n// });\n\n// async function main() {\n//     localStorage.removeItem('link');\n//     let currentLink = await index.getCurrentLinkData();\n//     localStorage.setItem('link', JSON.stringify(currentLink));\n//     console.log(\"meme\");\n// }\n\n// main();\n\n// var checkForPlus = setInterval(checkForPlusFunction, 500);\n\n// function checkForPlusFunction(){\n//     let check = localStorage.getItem('plussed');\n//     console.log(check);\n\n//     if(check === 'true'){\n//         localStorage.setItem('plussed', 'false');\n//         let projectName = \"Meme Project\"; //localStorage.getItem('project'); // NEED TO STORE PROJECT NAME TO LOCAL STORAGE UNDER 'PROJECT'\n//         let obj = JSON.parse(localStorage.getItem('link'));\n//         console.log(obj);\n//         databaseHandling.addSite(\"wakanda-forever\", \"demo@atiumapp.com\", projectName, obj);     \n//         alert(obj.title + ' has been added under \"' + projectName + '\".');\n//     }\n// }\n\n\n//# sourceURL=webpack:///./src/content.js?");

/***/ })

/******/ });