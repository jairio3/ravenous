import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };
    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active'
    }
    return ''
  }

  handleSortByChange(sortByOption) {
    this.setState( { sortBy: sortByOption} )
  }

  handleTermChange(e) {
    this.setState({term: e.target.value});
  }

  handleLocationChange(e) {
    this.setState({location: e.target.value});
  }

  renderSortByOptions(sortByOptions) {
    return Object.keys(this.sortByOptions).map( (sortByOption) => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return <li
        onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
        className={this.getSortByClass(sortByOptionValue)}
        key={sortByOptionValue}>
        {sortByOption}
        </li>;
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions(this.sortByOptions)}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input
            placeholder="Search Businesses"
            onChange={this.handleTermChange}/>
          <input
            placeholder="Where?"
            onChange={this.handleLocationChange}/>
        </div>
        <div className="SearchBar-submit">
          <a>Let's Go</a>
        </div>
      </div>
      )
  }

}
