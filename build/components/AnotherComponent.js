"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AnotherComponent;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function AnotherComponent() {
  return _react.default.createElement("div", null, "i'm another lazy component");
}

;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AnotherComponent, "AnotherComponent", "C:\\Users\\Panu\\projects\\weather\\src\\components\\AnotherComponent.js");
  leaveModule(module);
})();

;