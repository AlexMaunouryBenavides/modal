(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('react')) :
	typeof define === 'function' && define.amd ? define(['react'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.React));
})(this, (function (React) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

	function Modal({
	  open,
	  children,
	  onClose
	}) {
	  if (!open) return null;
	  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
	    className: "overlay",
	    onClick: onClose
	  }), children, /*#__PURE__*/React__default["default"].createElement("button", {
	    className: "closeBtn",
	    onClick: onClose
	  }, "X"));
	}
	module.exports = Modal;

}));
