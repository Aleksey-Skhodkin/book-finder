import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://openlibrary.org',
});

export const getSearchedBooks = value => {
	return instance.get(`/search.json?q=${value}`)
}