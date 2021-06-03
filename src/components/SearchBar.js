import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks, setInputValue } from '../reducers/book-search-reducer';
import { debounce } from '../utils/utils';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchForm = styled.form`
	border-radius: 100px;
	background-color: white;
	display: flex;
	align-items: center;

	& input {
		background: none;
		border: none;
		outline: 0;
	}

	& button {
		cursor: pointer;
		height: 25px;
		width: 25px;
		background: none;
		border-radius: 50%;
		border: none;
		margin: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	& .reset {
		box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.5);
	}
`;

export default function SearchBar() {
	const dispatch = useDispatch();
	const value = useSelector(state => state.inputValue);
	const input = useRef();

	useEffect(() => {
		input.current.focus();
	}, [])

	useEffect(() => {
		value && dispatch(getBooks(value));
	}, [value])

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(getBooks(value));
	}

	function onFormClear() {
		input.current.value = '';
		dispatch(setInputValue(''));
	}

	const handleInput = debounce(text => dispatch(setInputValue(text)), 1000);

	return (
		<div>
			<SearchForm onSubmit={handleSubmit} >
				<button type='submit'>
					<FontAwesomeIcon icon={faSearch} />
				</button>
				<input
					type="text"
					placeholder='search...'
					ref={input}
					onChange={e => handleInput(e.target.value)}
				/>
				<button
					className='reset'
					type='button'
					onClick={onFormClear}
				>&times;</button>
			</SearchForm>
		</div>
	);
}