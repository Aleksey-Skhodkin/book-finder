import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import { store } from '../store';

const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.8);
	opacity: ${props => props.active ? '1' : '0'};
	pointer-events: ${props => props.active ? 'all' : 'none'};
	display: flex;
	justify-content: center;
	align-items: center;
	transition: opacity .5s;

	& .modal-content {
		transform: ${props => props.active ? 'scale(1)' : 'scale(0)'};
		transition: transform .5s;
		position: relative;
	}
`;

const Button = styled.button`
	cursor: pointer;
	position: absolute;
	top: 0;
	right: 0;
	width: 45px;
	height: 45px;
	background-color: transparent;
	border: none;
	border-bottom-right-radius: 10px;
	font-size: 2.5rem;
	z-index: 1000;
`;

export default function Modal({ children, active, onClose }) {
	useEffect(() => {
		function handleKeyDown(e) {
			if (e.key === 'Escape') onClose();
		}

		window.addEventListener('keydown', handleKeyDown)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [])

	return ReactDOM.createPortal(
		<Provider store={store}>
			<ModalOverlay active={active}>
				<div className='modal-content'>
					<Button
						type='button'
						onClick={onClose}
					>&times;</Button>
					{children}
				</div>
			</ModalOverlay>
		</Provider>,
		document.getElementById('modal-root')
	)
}


