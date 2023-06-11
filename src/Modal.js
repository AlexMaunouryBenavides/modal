import React,{ useState } from 'react';
import './modal.css';

function Modal({ open, close }) {
	const [modal, setModal] = useState(false);
	const toggleModal = () => {
		setModal(!modal);
	};

	return (
		<>
			<button
				className='openBtn'
				onClick={toggleModal}>
				{open}
			</button>

			{modal && (
				<div className='modal'>
					<div
						className='.overlay'
						onClick={toggleModal}></div>
					<div className='content'>
						<p>Employee Created! </p>
					</div>
					<button
						className='closeBtn'
						onClick={toggleModal}>
						{close}
					</button>
				</div>
			)}
		</>
	);
}

module.exports = Modal
