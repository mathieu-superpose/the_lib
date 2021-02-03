import React from 'react';
import Book from 'components/Book';
import Search from 'components/Search';

const List = () => {
  const [list, setList] = React.useState('');
  const [search, setSearch] = React.useState(null);

  const fetchList = () => {
    fetch('https://gist.githubusercontent.com/MathisDYKDan/76bc73ec77481ccb82677cc7c0d8b524/raw/a23c99027b9bfc1bfdb22e22ddcb4301a5f870ee/books.json')
      .then((response) => response.json())
      .then((data) => {
        setList(data.books[0]);
      });
  };

  React.useEffect(() => {
    fetchList()
  }, []);

  const handleChange = (value) => {
   setSearch(value);
 };

 console.log(search);
 if(list !== "") console.log(list[0].title.includes("Android"));


  return (
    <div>
      <Search onInputValueChanged={handleChange}/>
      <div className="display-cards">
        {list && !search && (list.map((book) => (
          <Book data={book} key={book.id} />
          ))
        )}
        {list && search && (list.filter((book) => book.title.toLowerCase().includes(search) === true).map((book) => (
          <Book data={book} key={book.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default List;