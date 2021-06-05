import React from 'react';
import { useSelector } from 'react-redux';
import BookInfo from './components/BookInfo';
import Content from './components/Content';
import Modal from './components/Modal';
import styled from 'styled-components';
import Header from './components/Header';

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
    const isOpen = useSelector(state => state.modalIsOpen);

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

            <Modal isOpen={isOpen}>
                <BookInfo />
            </Modal>
        </AppWrapper>
    );
}

