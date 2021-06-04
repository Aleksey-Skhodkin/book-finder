import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://openlibrary.org',
});

export const getSearchedBooks = value => {
	return instance.get(`/search.json?q=${value}`)
}

export const getBookWorksData = key => {
	return instance.get(`${key}.json`)
}

export const getBookEditionData = key => {
	return key
		? instance.get(`/books/${key}.json`)
		: instance.get(`/books.json`)
}
