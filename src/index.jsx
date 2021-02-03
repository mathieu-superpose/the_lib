import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List';

const App = () => (
  <div>
    <h1>Library</h1>
    <List />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));