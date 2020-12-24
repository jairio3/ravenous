import React from 'react';
import logo from './logo.svg';
import '../App/App.css';
import {BusinessList} from '../BusinessList/BusinessList.js';
import {SearchBar} from '../SearchBar/SearchBar.js';

const business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const businesses = [ business, business, business, business, business, business ];

function App() {
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar></SearchBar>
      <BusinessList businesses={businesses}></BusinessList>
    </div>
  );
}

export default App;
