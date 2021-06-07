import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Loader from '../../common/Loader';
import DropdownItem from './DropdownItem';

const DropdownContainer = styled.div`
	position: absolute;
	top: calc(100% + 5px);
	right: 0;
	
	& .wrapper {
		position: relative;
	}
`;

export default function Dropdown({ items }) {
	const { isFetchingPreview } = useSelector(state => state);

	return (
		<DropdownContainer>
			<div className='wrapper'>
				<ul>
					{items?.map(item => <DropdownItem key={item.key} worksKey={item.key} {...item} />)}
				</ul>
				{isFetchingPreview ? <Loader /> : null}
			</div>
		</DropdownContainer>
	)
}