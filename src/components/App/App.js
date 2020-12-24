import React from 'react';
import logo from './logo.svg';
import '../App/App.css';
import {BusinessList} from '../BusinessList/BusinessList.js';
import {SearchBar} from '../SearchBar/SearchBar.js';

function App() {
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar></SearchBar>
      <BusinessList></BusinessList>
    </div>
  );
}

export default App;
