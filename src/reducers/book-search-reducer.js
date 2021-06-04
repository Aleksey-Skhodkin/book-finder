import { getBookEditionData, getBookWorksData, getSearchedBooks } from "../api/api";

const SET_INPUT_VALUE = 'SET-INPUT-VALUE';
const SET_FINDED_BOOKS = 'SET-FINDED-BOOKS';
const SET_MODAL_IS_OPEN = 'SET-MODAL-IS-OPEN';
const SET_BOOK_INFO = 'SET-BOOK-INFO';

const initialState = {
	inputValue: 'tolkien',
	findedBooks: null,
	bookInfo: null,
	modalIsOpen: false,
};

export default function bookSearchReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case SET_BOOK_INFO:
		case SET_MODAL_IS_OPEN:
		case SET_FINDED_BOOKS:
		case SET_INPUT_VALUE:
			return { ...state, ...payload }
		default: return state;
	}
}

export const setInputValue = inputValue => ({
	type: SET_INPUT_VALUE,
	payload: { inputValue }
})
export const setFindedBooks = findedBooks => ({
	type: SET_FINDED_BOOKS,
	payload: { findedBooks }
})
export const setIsModalOpen = modalIsOpen => ({
	type: SET_MODAL_IS_OPEN,
	payload: { modalIsOpen }
})
export const setBookInfo = bookInfo => ({
	type: SET_BOOK_INFO,
	payload: { bookInfo }
})

export const getBooks = (value) => async dispatch => {
	const response = await getSearchedBooks(value);
	const { docs, numFound } = response.data;
	// console.log(response);
	// console.log(docs, numFound);
	dispatch(setFindedBooks(docs));
}

export const getBookInfo = (worksKey, editionKey, info) => async dispatch => {
	const response = await Promise.all([
		getBookWorksData(worksKey),
		getBookEditionData(editionKey)
	]);

	console.log(response);

	let [
		{ description },
		{ isbn_10, isbn_13, publish_date, publishers }
	] = response.map(i => i.data);

	if (typeof description === 'object') description = description.value;

	dispatch(setBookInfo({
		description,
		isbn_10,
		isbn_13,
		publish_date,
		publishers,
		...info
	}));
}