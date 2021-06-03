import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks, setInputValue } from '../reducers/book-search-reducer';
import { debounce } from '../utils/utils';

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

	const handleInput = debounce(text => dispatch(setInputValue(text)), 1000);

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				ref={input}
				onChange={e => handleInput(e.target.value)}
			/>
			<button type='submit'>Search</button>
		</form>
	);
}