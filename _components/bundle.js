/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _polymer = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonClab = function (_Polymer$Element) {
  _inherits(ButtonClab, _Polymer$Element);

  function ButtonClab() {
    _classCallCheck(this, ButtonClab);

    return _possibleConstructorReturn(this, (ButtonClab.__proto__ || Object.getPrototypeOf(ButtonClab)).apply(this, arguments));
  }

  _createClass(ButtonClab, [{
    key: '_click',
    value: function _click(evt) {
      this.dispatchEvent(new CustomEvent('btnclick'), { bubbles: true });
    }
  }, {
    key: '_computeClass',
    value: function _computeClass(type, appearance, size, block) {
      var arr = ['btn', type, appearance, size];
      block ? arr.push('block') : null;
      return arr.join(' ');
    }
  }, {
    key: '_computeIconClass',
    value: function _computeIconClass(icon) {
      return ['icon', icon].join(' ');
    }
  }], [{
    key: 'is',
    get: function get() {
      return 'button-clab';
    }
  }, {
    key: 'properties',
    get: function get() {
      return {
        type: {
          type: String,
          value: "",
          reflectToAttribute: true
        },
        appearance: {
          type: String,
          value: ""
        },
        size: {
          type: String,
          value: ""
        },
        icon: {
          type: String,
          value: ""
        },
        disabled: {
          type: Boolean,
          value: false,
          reflectToAttribute: true
        },
        block: {
          type: Boolean,
          value: false,
          reflectToAttribute: true
        },
        buttonType: {
          type: String,
          value: 'button'
        }
      };
    }
  }]);

  return ButtonClab;
}(_polymer.Polymer.Element);

customElements.define(ButtonClab.is, ButtonClab);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Polymer = exports.Polymer = window.Polymer;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//
// import {
//   AccordionClab
// } from "./../../accordion/script.es6";
// import {
//   AlertClab
// } from "./../../alert/script.es6";
// import {
//   AutocompleteClab
// } from "./../../autocomplete/script.es6";

var _script = __webpack_require__(0);

var _script2 = _interopRequireDefault(_script);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map