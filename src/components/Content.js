import React from 'react';
import { useSelector } from 'react-redux';
import BookCard from './BookCard';

export default function Content() {
	const books = useSelector(state => state.findedBooks);

	console.log(books);
	return (
		<div>
			{
				books?.map(({ author_name, title, isbn, key }) => (
					<BookCard
						key={key}
						authorName={author_name}
						title={title}
						isbn={isbn}
					/>)
				)
			}
		</div>
	);
}