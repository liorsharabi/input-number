webpackJsonp([4],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(280);


/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _rcInputNumber = __webpack_require__(3);
	
	var _rcInputNumber2 = _interopRequireDefault(_rcInputNumber);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(130);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /* eslint no-console:0 */
	
	
	var Component = function (_React$Component) {
	  _inherits(Component, _React$Component);
	
	  function Component() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Component);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      disabled: false,
	      readOnly: false,
	      value: 5
	    }, _this.onChange = function (value) {
	      console.log('onChange:', value);
	      _this.setState({ value: value });
	    }, _this.toggleDisabled = function () {
	      _this.setState({
	        disabled: !_this.state.disabled
	      });
	    }, _this.toggleReadOnly = function () {
	      _this.setState({
	        readOnly: !_this.state.readOnly
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  Component.prototype.render = function render() {
	    return _react2.default.createElement(
	      'div',
	      { style: { margin: 10 } },
	      _react2.default.createElement(_rcInputNumber2.default, {
	        min: -8,
	        max: 10,
	        value: this.state.value,
	        style: { width: 100 },
	        readOnly: this.state.readOnly,
	        onChange: this.onChange,
	        disabled: this.state.disabled,
	        useTouch: true
	      }),
	      _react2.default.createElement(
	        'p',
	        null,
	        _react2.default.createElement(
	          'button',
	          { onClick: this.toggleDisabled },
	          'toggle Disabled'
	        ),
	        _react2.default.createElement(
	          'button',
	          { onClick: this.toggleReadOnly },
	          'toggle readOnly'
	        )
	      )
	    );
	  };
	
	  return Component;
	}(_react2.default.Component);
	
	_reactDom2.default.render(_react2.default.createElement(Component, null), document.getElementById('__react-content'));

/***/ })

});
//# sourceMappingURL=simple-use-touch.js.map