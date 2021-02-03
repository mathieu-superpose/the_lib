import React from 'react';
import './book.scss';

const Book = ({ data }) => {
	const { title, thumbnailUrl } = data;

  return <div className="card">
    <img src={thumbnailUrl} alt="book cover" className="card__image"/>
    <p className="card__title">{title}</p>
  </div>
};

export default Book;