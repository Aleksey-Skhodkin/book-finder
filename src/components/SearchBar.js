import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInputValue } from '../reducers/book-search-reducer';

export default function SearchBar() {
	const dispatch = useDispatch();
	const value = useSelector(state => state.inputValue);

	console.log(value);

	function onFormSubmit(e) {
		e.preventDefault();
	}

	function handleInputChange(e) {
		dispatch(setInputValue(e.target.value));
	}

	return (
		<form onSubmit={onFormSubmit}>
			<input
				type="text"
				value={value}
				onChange={handleInputChange}
			/>
			<button type='submit'>Search</button>
		</form>
	)
}