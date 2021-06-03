import React from 'react';
import { useDispatch } from 'react-redux';
import { getBookInfo, setIsModalOpen } from '../reducers/book-search-reducer';

export default function BookCard({ book }) {
	const dispatch = useDispatch();

	const {
		author_name,
		cover_edition_key,
		cover_i,
		key,
		title,
	} = book;

	function onBookClick(e) {
		//  open modal
		dispatch(setIsModalOpen(true));
		// set book info
		dispatch(getBookInfo(key, cover_edition_key, {
			author_name,
			cover_edition_key,
			cover_i,
			key,
			title,
		}));
	}

	return (
		<div onClick={onBookClick}>
			{
				cover_i
					? <img src={`http://covers.openlibrary.org/b/id/${cover_i}-M.jpg`} alt="" />
					: <img src='' alt='' />
			}
			<span>{title}</span>
			<span>by {author_name}</span>
		</div>
	);
}