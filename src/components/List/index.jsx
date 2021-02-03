import React from 'react';
import Book from 'components/Book';

const List = () => {
  const [list, setList] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchList = () => {
    
    fetch('https://gist.githubusercontent.com/MathisDYKDan/76bc73ec77481ccb82677cc7c0d8b524/raw/a23c99027b9bfc1bfdb22e22ddcb4301a5f870ee/books.json')
      .then((response) => response.json())
      .then((data) => {
        setList(data.books[0]);
      });
  };

console.log(list);

  return (
    <div className="RandomMeal">
      <p>List</p>
      <button onClick={fetchList}>Charger la liste</button>
      <div>
        {list.map((book) => (
          <Book data={book} key={book.id} />
          ))}
      </div>
    </div>
  );
};

export default List;