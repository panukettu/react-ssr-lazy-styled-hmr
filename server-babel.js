"use strict";

var _react = _interopRequireDefault(require("react"));

var _express = _interopRequireDefault(require("express"));

var _server = require("react-dom/server");

var _styledComponents = require("styled-components");

var _App = _interopRequireDefault(require("./src/App"));

var _template = _interopRequireDefault(require("./src/template"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var app = (0, _express.default)();
var port = process.env.PORT || 5000;
app.use("/dist", _express.default.static("dist"));
app.get("/", function (req, res) {
  var sheet = new _styledComponents.ServerStyleSheet();
  var html = (0, _server.renderToString)(sheet.collectStyles(_react.default.createElement(_App.default, null)));
  var styles = sheet.getStyleTags();
  res.send((0, _template.default)({
    body: html,
    styles: styles
  }));
});
app.listen(port);
console.log("Server listening in port ".concat(port));
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(app, "app", "C:\\Users\\Panu\\projects\\weather\\server.js");
  reactHotLoader.register(port, "port", "C:\\Users\\Panu\\projects\\weather\\server.js");
  leaveModule(module);
})();

;
