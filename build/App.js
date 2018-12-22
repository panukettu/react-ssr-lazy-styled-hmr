"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactLoadable = _interopRequireDefault(require("react-loadable"));

var _reactHotLoader = require("react-hot-loader");

var _NotLazyComponent = _interopRequireDefault(require("./components/NotLazyComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Component = (0, _reactLoadable.default)({
  loader: function loader() {
    return import("./components/Component");
  },
  loading: function loading() {
    return _react.default.createElement("div", null, "Loading");
  }
});
var AnotherComponent = (0, _reactLoadable.default)({
  loader: function loader() {
    return import("./components/AnotherComponent");
  },
  loading: function loading() {
    return _react.default.createElement("div", null, "Loading");
  }
});

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      counter: 1,
      showLazyComponent: false,
      showAnotherLazyComponent: false,
      showNormalComponent: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "decrement", function () {
      _this.setState(function (state) {
        return {
          counter: Math.max(0, state.counter - 1)
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "increment", function () {
      _this.setState(function (state) {
        return {
          counter: state.counter + 1
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showLazyComponent", function () {
      _this.setState(function (state) {
        return {
          showLazyComponent: !state.showLazyComponent
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showAnotherLazyComponent", function () {
      _this.setState(function (state) {
        return {
          showAnotherLazyComponent: !state.showAnotherLazyComponent
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showNormalComponent", function () {
      _this.setState(function (state) {
        return {
          showNormalComponent: !state.showNormalComponent
        };
      });
    });

    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          counter = _this$state.counter,
          showLazyComponent = _this$state.showLazyComponent,
          showAnotherLazyComponent = _this$state.showAnotherLazyComponent,
          showNormalComponent = _this$state.showNormalComponent;
      return _react.default.createElement("div", null, _react.default.createElement("button", {
        onClick: function onClick() {
          return _this2.decrement();
        }
      }, "-"), counter, _react.default.createElement("button", {
        onClick: function onClick() {
          return _this2.increment();
        }
      }, "+"), _react.default.createElement("button", {
        onClick: function onClick() {
          return _this2.showLazyComponent();
        }
      }, "Show component"), _react.default.createElement("button", {
        onClick: function onClick() {
          return _this2.showAnotherLazyComponent();
        }
      }, "Show another"), _react.default.createElement("button", {
        onClick: function onClick() {
          return _this2.showNormalComponent();
        }
      }, "Show not lazy"), showLazyComponent && _react.default.createElement(Component, null), showAnotherLazyComponent && _react.default.createElement(AnotherComponent, null), showNormalComponent && _react.default.createElement(_NotLazyComponent.default, null));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return App;
}(_react.default.Component);

(0, _reactHotLoader.setConfig)({
  logLevel: "debug"
});

var _default = (0, _reactHotLoader.hot)(module)(App);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Component, "Component", "C:\\Users\\Panu\\projects\\weather\\src\\App.js");
  reactHotLoader.register(AnotherComponent, "AnotherComponent", "C:\\Users\\Panu\\projects\\weather\\src\\App.js");
  reactHotLoader.register(App, "App", "C:\\Users\\Panu\\projects\\weather\\src\\App.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\Panu\\projects\\weather\\src\\App.js");
  leaveModule(module);
})();

;