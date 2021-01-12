import React from 'react';
import './App.css';
import {BusinessList} from '../BusinessList/BusinessList.js';
import {SearchBar} from '../SearchBar/SearchBar.js';
import {Yelp} from '../../util/Yelp.js'

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    }
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then( businesses => {
      this.setState( {
        businesses: businesses
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}></SearchBar>
        <BusinessList businesses={this.state.businesses}></BusinessList>
      </div>
    );
  }
}


