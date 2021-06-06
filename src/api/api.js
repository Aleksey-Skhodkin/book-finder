import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://openlibrary.org',
});

export const getSearchedBooksPreview = value => {
	return instance.get(`/search.json`, {
		params: {
			q: value,
			limit: 8,
			fields: 'key,cover_i,title,author_name'
		}
	})
}

export const getSearchedBooks = (value, pageNumber) => {
	return instance.get(`/search.json?q=${value}&page=${pageNumber}`)
}


export const getBookWorksData = key => {
	return instance.get(`${key}.json`)
}

export const getBookEditionData = key => {
	return key
		? instance.get(`/books/${key}.json`)
		: instance.get(`/books.json`)
}
