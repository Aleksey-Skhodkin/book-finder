import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks, setInputValue } from '../reducers/book-search-reducer';

export default function SearchBar() {
	const dispatch = useDispatch();
	const value = useSelector(state => state.inputValue);

	useEffect(() => {
		// console.log(value);
		value && dispatch(getBooks(value));
	}, [value])

	function handleSubmit(e) {
		e.preventDefault();
	}

	function handleInputChange(e) {
		dispatch(setInputValue(e.target.value));
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={value}
				onChange={handleInputChange}
			/>
			<button type='submit'>Search</button>
		</form>
	)
}