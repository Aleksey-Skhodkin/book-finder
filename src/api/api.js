import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://openlibrary.org',
});

export const getSearchedBooksPreview = value => {
	return instance.get(`/search.json`, {
		params: {
			q: value,
			limit: 8,
			fields: 'key,cover_i,title,author_name,cover_edition_key'
		}
	})
}

export const getSearchedBooks = (value, pageNumber) => {
	return instance.get(`/search.json`, {
		params: {
			q: value,
			page: pageNumber,
			fields: 'key,cover_i,title,author_name,cover_edition_key'
		}
	})
}

export const getBookWorksData = key => {
	return instance.get(`${key}.json`)
}

export const getBookEditionData = key => {
	return key
		? instance.get(`/books/${key}.json`)
		: instance.get(`/books.json`)
}
