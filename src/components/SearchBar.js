import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks, setInputValue } from '../reducers/book-search-reducer';
import { debounce } from '../utils/utils';

export default function SearchBar() {
	const dispatch = useDispatch();
	const value = useSelector(state => state.inputValue);

	useEffect(() => {
		value && dispatch(getBooks(value));
	}, [value])

	function handleSubmit(e) {
		e.preventDefault();
	}

	const handleInput = debounce(text => dispatch(setInputValue(text)), 1000);

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				onChange={e => handleInput(e.target.value)}
			/>
			<button type='submit'>Search</button>
		</form>
	)
}