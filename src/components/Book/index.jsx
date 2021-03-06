import React from 'react';
import './book.scss';
import Favorite from 'components/Favorite';

const Book = ({ data, onFav, isFav }) => {
	const { title, thumbnailUrl, shortDescription } = data;

  return <div className="card">
    <div className="card__image">
      <img src={thumbnailUrl} alt="book cover" className="card__image__img" />
    </div>
    <div className="card__body">
      <h3 className="card__body__title">{title}</h3>
      <p className="card__body__description">{shortDescription}</p>
    </div>
    {!isFav && <Favorite onClick={onFav}/>}
    {isFav && "LIKE"}
  </div>
};

export default Book;