import React from 'react';
import SearchBar from './SearchBar';
import logo from './../images/logo.png';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

const HeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 10px;

	& img {
		width: 40px;
		cursor: pointer;
	}
`;

export default function Header() {
	const history = useHistory();

	function handleClick() {
		history.push('/');
	}

	return (
		<HeaderWrapper>
			<img src={logo} alt="logo" onClick={handleClick} />
			<SearchBar />
		</HeaderWrapper>
	);
}