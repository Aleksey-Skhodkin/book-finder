import React from 'react';
import { useSelector } from 'react-redux';
import BookCard from './BookCard';

export default function Content() {
	const books = useSelector(state => state.findedBooks);

	console.log(books);

	return (
		<div>
			{
				books?.map(book => <BookCard key={book.key} book={book} />)
			}
		</div>
	);
}