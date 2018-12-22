"use strict";

require("babel-polyfill");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var root = document.getElementById("root");
var renderMethod = !!module.hot ? _reactDom.default.render : _reactDom.default.hydrate;
renderMethod(_react.default.createElement(_App.default, null), root);
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(root, "root", "C:\\Users\\Panu\\projects\\weather\\src\\index.js");
  reactHotLoader.register(renderMethod, "renderMethod", "C:\\Users\\Panu\\projects\\weather\\src\\index.js");
  leaveModule(module);
})();

;