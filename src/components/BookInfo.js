import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBookInfo, setIsModalOpen } from '../reducers/book-search-reducer';
import styled from 'styled-components';

const BookInfoWrapper = styled.div`
	position: relative;
	background-color: white;
	border-radius: 5px;
	padding: 0 10px;

	& hr {
		border: none;
		height: 1px;
		background: rgb(204, 204, 204);
	}

	& button {
		position: absolute;
		top: 0;
		right: 0;
		border: none;
		background: none;
		font-size: 1.5rem;
	}
`;

export default function BookInfo() {
	const dispatch = useDispatch();
	const bookInfo = useSelector(state => state.bookInfo);

	const { author_name, cover_i, description, isbn_10, isbn_13, publish_date, publishers, title } = bookInfo;

	console.log(bookInfo);

	function onCloseClick() {
		dispatch(setIsModalOpen(false));
		dispatch(setBookInfo(null));
	}

	if (!bookInfo) return <div>Loading...</div>

	return (
		<BookInfoWrapper>
			<img src={`http://covers.openlibrary.org/b/id/${cover_i}-L.jpg`} alt="" />
			<h1>{title}</h1>
			<div>by <span>{author_name}</span></div>
			<hr />
			<div>
				This edition was published in&nbsp;
				<span>{publish_date || 'unknown date'}</span>&nbsp;
				by&nbsp;
				<span>{publishers ? publishers[0] : 'unknown publisher'}</span>
			</div>
			<hr />
			<div>{description || `This edition doesn't have a description yet.`}</div>
			<div>isbn10: {isbn_10 ? isbn_10[0] : '----'}</div>
			<div>isbn13: {isbn_13 ? isbn_13[0] : '----'}</div>
			<button
				type='button'
				onClick={onCloseClick}
			>&times;</button>
		</BookInfoWrapper>
	);
}