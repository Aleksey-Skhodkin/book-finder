import React from 'react';
import styled from 'styled-components';

const LoaderBox = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: ${props => props.background};
	color: ${props => props.color};
	font-size: ${props => props.fontSize};
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default function Loader({ children,
	background = 'rgba(0, 0, 0, 0.2)',
	color = 'black',
	fontSize = '1rem'
}) {
	return <LoaderBox
		background={background}
		color={color}
		fontSize={fontSize}
	>{children}</LoaderBox>
}