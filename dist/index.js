(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('react')) :
	typeof define === 'function' && define.amd ? define(['react'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.React));
})(this, (function (react) { 'use strict';

	var Styles = ".modal,\n.overlay {\n\twidth: 100vw;\n\theight: 100vh;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tposition: fixed;\n}\n\n.openBtn {\n\tfont-size: 15px;\n\ttext-transform: uppercase;\n\tpadding: 16.5px 25px;\n\twidth: 200px;\n\tbackground: #000;\n\tcolor: #fff;\n\toutline: none;\n\tfont-weight: 900;\n\tletter-spacing: 7px;\n\tborder: 1px solid rgba(0, 0, 0, 0.23);\n\ttransition: 0.5s;\n\tbox-shadow: 5px 5px 15px #000;\n}\n.openBtn:hover {\n\tbackground-color: wheat;\n\tcolor: #000;\n\ttransform: scale(1.1);\n}\n.overlay {\n\tbackground: rgba(49, 49, 49, 0.8);\n}\n.content {\n\tposition: absolute;\n\ttop: 40%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\tline-height: 1.4;\n\tbackground: #f1f1f1;\n\tpadding: 14px 28px;\n\tborder-radius: 3px;\n\tmax-width: 600px;\n\tmin-width: 300px;\n}\n.closeBtn {\n\tfont-size: 1.3rem;\n\tpadding: 15px 20px;\n\tborder-radius: 30px;\n\tbackground: #000;\n\tcolor: #fff;\n\tborder: none;\n\tcursor: pointer;\n\tposition: absolute;\n\ttop: 40%;\n\tleft: 58%;\n\ttransform: translate(-50%, -50%);\n}\n";

	function Modal({
	  open,
	  close
	}) {
	  const [modal, setModal] = react.useState(false);
	  const toggleModal = () => {
	    setModal(!modal);
	  };
	  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
	    className: Styles.openBtn,
	    onClick: toggleModal
	  }, open), modal && /*#__PURE__*/React.createElement("div", {
	    className: Styles.modal
	  }, /*#__PURE__*/React.createElement("div", {
	    className: Styles.overlay,
	    onClick: toggleModal
	  }), /*#__PURE__*/React.createElement("div", {
	    className: Styles.content
	  }, /*#__PURE__*/React.createElement("p", null, "Employee Created! ")), /*#__PURE__*/React.createElement("button", {
	    className: Styles.closeBtn,
	    onClick: toggleModal
	  }, close)));
	}
	module.exports = Modal;

}));
