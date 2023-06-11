(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('react')) :
	typeof define === 'function' && define.amd ? define(['react'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.React));
})(this, (function (React) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

	function Modal({
	  open,
	  close
	}) {
	  const [modal, setModal] = React.useState(false);
	  const toggleModal = () => {
	    setModal(!modal);
	  };
	  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("button", {
	    className: "openBtn",
	    onClick: toggleModal
	  }, open), modal && /*#__PURE__*/React__default["default"].createElement("div", {
	    className: "modal"
	  }, /*#__PURE__*/React__default["default"].createElement("div", {
	    className: ".overlay",
	    onClick: toggleModal
	  }), /*#__PURE__*/React__default["default"].createElement("div", {
	    className: "content"
	  }, /*#__PURE__*/React__default["default"].createElement("p", null, "Employee Created! ")), /*#__PURE__*/React__default["default"].createElement("button", {
	    className: "closeBtn",
	    onClick: toggleModal
	  }, close)));
	}
	module.exports = Modal;

}));
