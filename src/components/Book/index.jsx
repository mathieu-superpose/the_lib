import React from 'react';
import './book.scss';

const Book = ({ data }) => {
	const { title, thumbnailUrl, shortDescription } = data;

  return <div className="card">
    <div className="card__image">
      <img src={thumbnailUrl} alt="book cover" className="card__image__img" />
    </div>
    <div className="card__body">
      <h3 className="card__body__title">{title}</h3>
      <p className="card__body__description">{shortDescription}</p>
    </div>

  </div>
};

export default Book;