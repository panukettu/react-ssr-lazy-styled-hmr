"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var _default = function _default(_ref) {
  var body = _ref.body,
      styles = _ref.styles;
  return "\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>from server</title>\n        ".concat(styles, "\n      </head> \n      <body>\n        <div id=\"root\">").concat(body, "</div>\n      </body>\n      <script src=\"/dist/bundle.js\"></script>\n    </html>\n  ");
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "C:\\Users\\Panu\\projects\\weather\\src\\template.js");
  leaveModule(module);
})();

;