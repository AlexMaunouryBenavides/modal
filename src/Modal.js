import React,{ useState } from 'react';
import './modal.css';

function Modal({ open, children, onClose }) {
	if (!open) return null;
	return (
		<>
			<div
				className="overlay"
				onClick={onClose}></div>
			{children}
			<button
				className="closeBtn"
				onClick={onClose}>
				X
			</button>
		</>
	);
}

module.exports = Modal
