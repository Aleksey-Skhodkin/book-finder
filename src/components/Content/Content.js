import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookCard from './ContentItem';
import styled from 'styled-components';
import Paginator from '../Paginator';
import { getBooks } from '../../reducers/book-search-reducer';
import Loader from '../../common/Loader';

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	& h1 {
		margin-top: 10px;
		color: grey;
	}
`;

const ContentWrapper = styled.div`
	width: 100%;
	padding: 10px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	grid-gap: 10px;
`;

export default function Content() {
	const dispatch = useDispatch();
	const { isFetchingBooks } = useSelector(state => state);

	const {
		inputValue,
		booksOnPage,
		findedBooks,
		totalBooks,
		currentPage
	} = useSelector(state => state);

	function onPageChange(pageNumber) {
		dispatch(getBooks(inputValue, pageNumber));
		window.scroll(0, 0);
	}

	return (
		!isFetchingBooks
			? < ContentContainer >
				{
					findedBooks &&
					<>
						<h1>Results for: '{inputValue}'</h1>
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
					</>
				}
			</ContentContainer >
			: <Loader>Searching...</Loader>
	);
}