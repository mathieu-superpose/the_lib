import React from 'react';

const Book = ({ data }) => {
	const { title  } = data;

  return <p>{title}</p>
};

export default Book;