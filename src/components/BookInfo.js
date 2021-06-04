import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBookInfo, setIsModalOpen } from '../reducers/book-search-reducer';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const BookInfoWrapper = styled.div`
	padding: 10px;
	position: relative;
	background-color: var(--secondary-background-color);
	border-radius: 10px;
	overflow: hidden;
	display: grid;
	grid-template-columns: auto 400px;
	grid-template-rows: 450px;
	grid-gap: 10px;

	& > * {
		color: rgb(70, 70, 70);
	}

	& .image {
		border-radius: 10px;
		overflow: hidden;
		height: 450px;

		& .image-container {
			border: 1px solid red;
			height: 100%;
			display: flex;
			align-items: center;

			& img {
				display: block;
				height: 100%;
			}
		}
	}

	& .info {
		display: flex;
		flex-direction: column;

		& .title {
			font-size: 1.5rem;
			color: black;
			margin-bottom: 5px;
		}

		& .text {
			overflow: scroll;

			& .description {
				font-size: 14px;
				text-align: justify;
			}
		}
	}


	& hr {
		border: 0;
		height: 1px;
		background-color: grey;
		margin: 10px;
	}

	& button {
		cursor: pointer;
		position: absolute;
		top: 0;
		left: 0;
		width: 40px;
		height: 40px;
		background-color: var(--secondary-background-color);
		border: none;
		border-bottom-right-radius: 10px;
		font-size: 2rem;
	}
`;

const NoCoverContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 3rem;
	border: 1px solid grey;
	border-radius: 10px;
	padding: 10px;
	height: 100%;
`;

export default function BookInfo() {
	const dispatch = useDispatch();
	const bookInfo = useSelector(state => state.bookInfo);

	if (!bookInfo) return <div>Loading...</div>

	const {
		author_name,
		cover_i,
		description,
		isbn_10,
		isbn_13,
		publish_date,
		publishers,
		title
	} = bookInfo;

	function onCloseClick() {
		dispatch(setIsModalOpen(false));
		dispatch(setBookInfo(null));
	}

	return (
		<BookInfoWrapper>
			<div className='image'>
				<div className='image-container'>
					{
						cover_i
							? <img src={`http://covers.openlibrary.org/b/id/${cover_i}-L.jpg`} alt="cover" />
							: <NoCoverContainer>
								<FontAwesomeIcon icon={faBook} />
								<p>no cover available</p>
							</NoCoverContainer>
					}
				</div>
			</div>
			<div className='info'>
				<div>
					<h1 className='title'>{title}</h1>
					<div>by <b>{author_name[0]}</b></div>
					<hr />
					<div>
						This edition was published in&nbsp;
					<b>{publish_date || 'unknown date'}</b>&nbsp;
					by&nbsp;
					<b>{publishers ? publishers[0] : 'unknown publisher'}</b>
					</div>
					<hr />
					<div>isbn10: <b>{isbn_10 ? isbn_10[0] : '----'}</b></div>
					<div>isbn13: <b>{isbn_13 ? isbn_13[0] : '----'}</b></div>
					<hr />
				</div>
				<div className='text'>
					<p className='description'>{description || `This edition doesn't have a description yet.`}</p>
				</div>
			</div>
			<button
				type='button'
				onClick={onCloseClick}
			>&times;</button>
		</BookInfoWrapper>
	);
}