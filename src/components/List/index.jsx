import React from 'react';
import Book from '../Book';

const List = () => {
  const [list, setList] = React.useState('');

  const fetchBook = () => {
  fetch('https://gist.githubusercontent.com/MathisDYKDan/76bc73ec77481ccb82677cc7c0d8b524/raw/a23c99027b9bfc1bfdb22e22ddcb4301a5f870ee/books.json')
    .then((response) => response.json())
    .then((data) => {
      setList(data.books[0]);
    });
  };

  console.log(list);

  return (
    <ul>
      {list.map((book) => (
        <Book data={book} key={book.id} />
      ))}
    </ul>
  );
};


export default List;