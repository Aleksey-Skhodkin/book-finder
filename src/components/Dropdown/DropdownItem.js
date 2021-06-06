import React from 'react';
import styled from 'styled-components';

const DropdownItemContainer = styled.li`
	background-color: white;
	padding: 5px;
	border-bottom: 1px solid grey;
	display: flex;
	color: rgb(70, 70, 70);
	font-size: 14px;

	& .image-container {
		margin-right: 5px;
	}

	& * {
		font-size: 14px;
	}
`;

export default function DropdownItem({ cover_i, title, author_name }) {
	return (
		<DropdownItemContainer>
			<div className='image-container'>
				<img src={`http://covers.openlibrary.org/b/id/${cover_i}-S.jpg`} alt="" />
			</div>
			<div>
				<h1>{title}</h1>
				<div>by <b>{author_name}</b></div>
			</div>
		</DropdownItemContainer>
	);
}