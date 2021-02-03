import React from 'react';

const Search = ({ onInputValueChanged }) => {
const [inputValue, setInputValue] = React.useState('');


  const handleChange = (event) => {
     const { value } = event.target;
     setInputValue(value.toLowerCase());
     onInputValueChanged(value.toLowerCase());
   };



  return (
    <input
      type="text"
      onChange={handleChange}
      value={inputValue}
      className="MinInput"
      style={{ display: 'block', padding: '5px 10px', margin: '15px 0' }}
      />
    );
};

export default Search;