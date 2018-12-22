"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Component;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var Title = _styledComponents.default.h1.withConfig({
  displayName: "Component__Title",
  componentId: "zog5b5-0"
})(["color:red;"]);

function Component() {
  return _react.default.createElement("div", null, _react.default.createElement(Title, null, "I'm a lazy styled component"));
}

;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Title, "Title", "C:\\Users\\Panu\\projects\\weather\\src\\components\\Component.js");
  reactHotLoader.register(Component, "Component", "C:\\Users\\Panu\\projects\\weather\\src\\components\\Component.js");
  leaveModule(module);
})();

;