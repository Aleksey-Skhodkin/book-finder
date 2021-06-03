import React from 'react';
import { useSelector } from 'react-redux';
import BookCard from './BookCard';
import styled from 'styled-components';

const ContentWrapper = styled.div`
	margin: 10px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-gap: 10px;
`;

export default function Content() {
	const books = useSelector(state => state.findedBooks);

	// console.log(books);

	return (
		<ContentWrapper>
			{
				books?.map(book => <BookCard key={book.key} book={book} />)
			}
		</ContentWrapper>
	);
}