import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector } from 'react-redux';
import styled from 'styled-components';
import { store } from '../store';

const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.7);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default function Modal({ children }) {
	const isOpen = useSelector(state => state.modalIsOpen)

	return isOpen
		? ReactDOM.createPortal(
			<Provider store={store}>
				<ModalOverlay>
					{children}
				</ModalOverlay>,,
			</Provider>,
			document.getElementById('modal-root')
		)
		: null
}


