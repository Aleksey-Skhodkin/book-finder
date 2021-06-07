import { getBookEditionData, getBookWorksData, getSearchedBooks, getSearchedBooksPreview } from "../api/api";

const SET_INPUT_VALUE = 'SET-INPUT-VALUE';
const SET_FINDED_BOOKS = 'SET-FINDED-BOOKS';
const SET_FINDED_BOOKS_PREVIEW = 'SET-FINDED-BOOKS-PREVIEW'
const SET_MODAL_IS_OPEN = 'SET-MODAL-IS-OPEN';
const SET_BOOK_INFO = 'SET-BOOK-INFO';
const SET_TOTAL_BOOKS = 'SET-TOTAL-BOOKS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_IS_FETCHING_PREVIEW = 'SET-IS-FETCHING-PREVIEW';
const SET_IS_FETCHING_BOOKS = 'SET-IS-FETCHING-BOOKS';

const initialState = {
	inputValue: '',
	findedBooksPreview: null,
	findedBooks: null,
	bookInfo: null,
	modalIsOpen: false,
	booksOnPage: 100,
	totalBooks: '',
	currentPage: 1,
	isFetchingPreview: false,
	isFetchingBooks: false,
};

export default function bookSearchReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case SET_IS_FETCHING_BOOKS:
		case SET_IS_FETCHING_PREVIEW:
		case SET_CURRENT_PAGE:
		case SET_TOTAL_BOOKS:
		case SET_BOOK_INFO:
		case SET_MODAL_IS_OPEN:
		case SET_FINDED_BOOKS_PREVIEW:
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
export const setFindedBooksPreview = findedBooksPreview => ({
	type: SET_FINDED_BOOKS_PREVIEW,
	payload: { findedBooksPreview }
})
export const setIsModalOpen = modalIsOpen => ({
	type: SET_MODAL_IS_OPEN,
	payload: { modalIsOpen }
})
export const setBookInfo = bookInfo => ({
	type: SET_BOOK_INFO,
	payload: { bookInfo }
})
export const setTotalBooks = totalBooks => ({
	type: SET_TOTAL_BOOKS,
	payload: { totalBooks }
})
export const setCurrentPage = currentPage => ({
	type: SET_CURRENT_PAGE,
	payload: { currentPage }
})
export const setIsFetchingPreview = isFetchingPreview => ({
	type: SET_IS_FETCHING_PREVIEW,
	payload: { isFetchingPreview }
})
export const setIsFetchingBooks = isFetchingBooks => ({
	type: SET_IS_FETCHING_BOOKS,
	payload: { isFetchingBooks }
})

export const getBooks = (value, pageNumber = 1) => async dispatch => {
	if (!value) return;
	dispatch(setIsFetchingBooks(true));
	const response = await getSearchedBooks(value, pageNumber);
	const { docs, numFound } = response.data;

	dispatch(setFindedBooks(docs));
	dispatch(setTotalBooks(numFound));
	dispatch(setCurrentPage(pageNumber));
	dispatch(setIsFetchingBooks(false));
}

export const getBooksPreview = value => async dispatch => {
	if (!value) {
		dispatch(setFindedBooksPreview(null));
	} else {
		dispatch(setIsFetchingPreview(true));
		const response = await getSearchedBooksPreview(value);
		const { docs } = response.data;
		dispatch(setFindedBooksPreview(docs));
		dispatch(setIsFetchingPreview(false));
	}
}

export const getBookInfo = (worksKey, editionKey, info) => async dispatch => {
	const response = await Promise.all([
		getBookWorksData(worksKey),
		getBookEditionData(editionKey)
	]);

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