import React from 'react';
import SearchBar from './SearchBar';
import logo from './../images/logo.png';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 10px;

	& img {
		width: 40px;
	}
`;

export default function Header() {
	return (
		<HeaderWrapper>
			<img src={logo} alt="logo" />
			<SearchBar />
		</HeaderWrapper>
	);
}