import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import DropdownItem from './DropdownItem';

const DropdownContainer = styled.div`
	position: absolute;
	top: calc(100% + 5px);
	right: 0;
	& .wrapper {
		position: relative;
	}
`;

const FetchingBackground = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.2);
`;

export default function Dropdown({ items }) {
	const isFetching = useSelector(state => state.isFetching);

	return (
		<DropdownContainer>
			<div className='wrapper'>
				<ul>
					{items?.map(item => <DropdownItem key={item.key} worksKey={item.key} {...item} />)}
				</ul>
				{isFetching ? <FetchingBackground /> : null}
			</div>
		</DropdownContainer>
	)
}