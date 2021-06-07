import React from 'react';
import { useDispatch } from 'react-redux';
import { getBookInfo, setIsModalOpen } from '../../reducers/book-search-reducer';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const ItemBox = styled.div`
	cursor: pointer;
	background-color: #fffceb;
	border-radius: 5px;
	padding: 5px;
	display: flex;
	align-items: center;

	& .image-wrapper {
		height: 150px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	& .image-container {
		width: 100px;
		max-height: 100%;
		border-radius: 8px;
		overflow: hidden;
		margin-right: 5px;

		& img {
			display: block;
			width: 100%;
			object-fit: contain;
		}

		& .no-image {
			width: 100%;
			height: 150px;
			background-color: var(--secondary-background-color);
			font-size: 3rem;
			color: grey;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			& p {
				text-align: center;
				margin: 10px;
			}
		}
	}

	& .author {
		font-size: 12px;
	}

	& h1 {
		color: black;
	}
`;

export default function ContentItem({ book }) {
	const dispatch = useDispatch();

	const {
		author_name,
		cover_edition_key,
		cover_i,
		key,
		title,
	} = book;

	function onBookClick(e) {
		dispatch(setIsModalOpen(true));
		dispatch(getBookInfo(key, cover_edition_key, {
			author_name,
			cover_i,
			title,
		}));
	}

	return (
		<ItemBox onClick={onBookClick}>
			<div className='image-wrapper'>
				<div className='image-container'>
					{
						cover_i
							? <img src={`http://covers.openlibrary.org/b/id/${cover_i}-M.jpg`} alt="" />
							: <div className='no-image'>
								<FontAwesomeIcon icon={faBook} />
								<p>no cover available</p>
							</div>
					}
				</div>
			</div>
			<div>
				<h1>{title}</h1>
				<div className='author'>by {author_name || 'unknown'}</div>
			</div>
		</ItemBox>
	);
}