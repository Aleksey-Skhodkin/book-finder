import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookCard from './BookCard';
import styled from 'styled-components';
import Paginator from './Paginator';
import { getBooks, setCurrentPage } from '../reducers/book-search-reducer';

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ContentWrapper = styled.div`
	width: 100%;
	margin: 10px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	grid-gap: 10px;
`;

const Loading = styled.div`
	background-color: rgba(0, 0, 0, 0.2);
	height: 100vh;
	display: flex;
	justify-content:center;
	align-items: center;
`;

export default function Content() {
	const dispatch = useDispatch();
	const {
		inputValue,
		booksOnPage,
		findedBooks,
		totalBooks,
		currentPage
	} = useSelector(state => state);

	useEffect(() => {
		inputValue && dispatch(getBooks(inputValue));
	}, [inputValue])

	function onPageChange(pageNumber) {
		dispatch(getBooks(inputValue, pageNumber));
	}

	return (
		findedBooks
			? <ContentContainer>
				<ContentWrapper>
					{
						findedBooks?.map(book => <BookCard key={book.key} book={book} />)
					}
				</ContentWrapper>
				<Paginator
					totalCount={totalBooks}
					itemsOnPage={booksOnPage}
					currentPage={currentPage}
					setCurrentPage={onPageChange}
				/>
			</ContentContainer>
			: <Loading>Searching...</Loading>
	);
}