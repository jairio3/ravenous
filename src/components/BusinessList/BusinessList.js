import React from 'react';
import { Business } from '../Business/Business.js'
import './BusinessList.css';

export class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
      {this.props.businesses.map( business => {
        return <Business business={business}></Business>
      })}
      </div>
      );
  }
}
