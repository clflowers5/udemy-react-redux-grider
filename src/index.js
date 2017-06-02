import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDmETH7zuuvbZzWsedsD64tLYBh7EFmXGw';

// Create new component. Should produce HTML.
const App = () => {
  return (
    <div>
      <SearchBar/>
      <p>Yo</p>
    </div>
  );
};

// Take component's generated HTML and put it on the page.
ReactDOM.render(<App />, document.querySelector('.container'));
