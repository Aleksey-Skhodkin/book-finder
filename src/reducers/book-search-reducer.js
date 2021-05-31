import { getSearchedBooks } from "../api/api";

const SET_INPUT_VALUE = 'SET-INPUT-VALUE';
const SET_FINDED_BOOKS = 'SET-FINDED-BOOKS';

const initialState = {
	inputValue: '',
	findedBooks: null,
	pageSetup: {
		booksOnPage: 10,
	}
};

export default function bookSearchReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case SET_FINDED_BOOKS:
		case SET_INPUT_VALUE:
			return { ...state, ...payload }
		default: return state;
	}
}

export const setInputValue = inputValue => ({ type: SET_INPUT_VALUE, payload: { inputValue } })
export const setFindedBooks = findedBooks => ({ type: SET_FINDED_BOOKS, payload: { findedBooks } })

export const getBooks = (value) => async dispatch => {
	const response = await getSearchedBooks(value);
	const { docs, numFound } = response.data;
	// console.log(response);
	// console.log(docs, numFound);
	dispatch(setFindedBooks(docs));
}