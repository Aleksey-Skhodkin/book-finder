import React from 'react';
import { useSelector } from 'react-redux';
import BookInfo from './components/BookInfo';
import Content from './components/Content';
import Modal from './components/Modal';
import SearchBar from './components/SearchBar';

export default function App() {
    const isOpen = useSelector(state => state.modalIsOpen);

    return (
        <div>
            <SearchBar />
            <Content />

            <Modal isOpen={isOpen}>
                <BookInfo />
            </Modal>
        </div>
    );
}

