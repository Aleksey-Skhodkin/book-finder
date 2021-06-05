import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 10px;
`;

export const PaginatorContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	& div {
		margin: 5px;
		border: 2px solid grey;
		color: black;
		font-size: 14px;
		border-radius: 50%;
		width: 30px;
		height: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
		&:hover {
			cursor: pointer;
			background-color: var(--secondary-background-color);
		}
		&:first-child{
			margin: 0 5px 0 0;
		}
		&:last-child{
			margin: 0 0 0 5px;
		}
	}
	& .spacer {
		border: none;
		&:hover {
			background: none;
			cursor: default;
		}
	}
	& .current, .current:hover {
		background-color: grey;
	}
`;

export default function Paginator({ totalCount, itemsOnPage, currentPage, pageNeigbours = 2, setCurrentPage }) {

	const totalPages = Math.ceil(totalCount / itemsOnPage);

	const NEXT = 'NEXT';
	const PREVIOUS = 'PREVIOUS';
	const SPACER = 'SPACER';

	function range(from, to) {
		const pages = [];
		for (let i = from; i <= to; i++) {
			pages.push(i);
		}
		return pages;
	}

	// < (1) ... {4,5} [6] {7,8} ... (10) >

	function fetchPageNumbers() {
		const pageBlocks = pageNeigbours * 2 + 3;
		const totalBlocks = pageBlocks + 2;

		if (totalPages > totalBlocks) {
			const startPage = Math.max(2, currentPage - pageNeigbours);
			const endPage = Math.min(totalPages - 1, currentPage + pageNeigbours)
			const pages = range(startPage, endPage);

			const hasLeftSpacer = startPage > 2;
			const hasRightSpacer = (totalPages - endPage) > 1;

			switch (true) {
				// < (1){2,3} [4] {5,6} ... (10) >
				case (!hasLeftSpacer && hasRightSpacer): {
					const extraPages = range(endPage + 1, endPage + pageBlocks - pages.length - 1);
					return [PREVIOUS, 1, ...pages, ...extraPages, SPACER, totalPages, NEXT];
				}
				// < (1) ... {5,6} [7] {8,9}(10) >
				case (hasLeftSpacer && !hasRightSpacer): {
					const extraPages = range(startPage - pageBlocks + pages.length + 1, startPage - 1);
					return [PREVIOUS, 1, SPACER, ...extraPages, ...pages, totalPages, NEXT];
				}
				// < (1) ... {4,5} [6] {7,8} ... (10) >
				case (hasLeftSpacer && hasRightSpacer):
				default:
					return [PREVIOUS, 1, SPACER, ...pages, SPACER, totalPages, NEXT];
			}
		}
		return range(1, totalPages);
	}

	const pages = fetchPageNumbers();

	return (
		<Wrapper>
			<PaginatorContainer>
				{
					pages.map((page, index) => {
						if (page === PREVIOUS) {
							return <div key={index} onClick={() => {
								if (currentPage === 1) return;
								setCurrentPage(currentPage - 1)
							}}><FontAwesomeIcon icon={faAngleLeft} /></div>
						}
						if (page === NEXT) {
							return <div key={index} onClick={() => {
								if (currentPage === totalPages) return;
								setCurrentPage(currentPage + 1)
							}}><FontAwesomeIcon icon={faAngleRight} /></div>
						}
						if (page === SPACER) {
							return <div key={index} className='spacer'>...</div>
						}
						return <div
							key={index}
							className={page === currentPage ? 'current' : ''}
							onClick={() => setCurrentPage(page)}
						>{page}</div>
					})
				}
			</PaginatorContainer>
		</Wrapper >
	);
}