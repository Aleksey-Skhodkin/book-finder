import React from 'react';
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
	opacity: ${props => props.isOpen ? '1' : '0'};
	pointer-events: ${props => props.isOpen ? 'all' : 'none'};
	display: flex;
	justify-content: center;
	align-items: center;
	transition: opacity .5s;

	& .modal-content {
		transform: ${props => props.isOpen ? 'scale(1)' : 'scale(0)'};
		transition: transform .5s;
	}
`;

export default function Modal({ children, isOpen }) {
	return ReactDOM.createPortal(
		<Provider store={store}>
			<ModalOverlay isOpen={isOpen}>
				<div className='modal-content'>
					{children}
				</div>
			</ModalOverlay>
		</Provider>,
		document.getElementById('modal-root')
	)
}


