import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookInfo from './components/BookInfo';
import Content from './components/Content';
import Modal from './common/Modal';
import styled from 'styled-components';
import Header from './components/Header';
import { setBookInfo, setIsModalOpen } from './reducers/book-search-reducer';

const AppWrapper = styled.div`
    & header {
        background-color: rgb(3,118,184);
        padding: 10px 0;
    }

    & .wrapper {
        max-width: 1200px;
        margin: 0 auto;
    }
`;

export default function App() {
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.modalIsOpen);

    function onModalClose() {
        dispatch(setIsModalOpen(false));
        dispatch(setBookInfo(null));
    }

    return (
        <AppWrapper>
            <header>
                <div className='wrapper'>
                    <Header />
                </div>
            </header>
            <div className='wrapper'>
                <Content />
            </div>

            <Modal active={isOpen} onClose={onModalClose}>
                <BookInfo />
            </Modal>
        </AppWrapper>
    );
}

