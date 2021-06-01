import React from 'react';

export default function BookCard({ authorName, title, isbn }) {
	return (
		<div>
			{
				isbn
					? <img src={`http://covers.openlibrary.org/b/isbn/${isbn[0]}-M.jpg`} alt="" />
					: <img src='' alt='' />
			}
			<span>{title}</span>
			<span>by {authorName}</span>
		</div>
	);
}