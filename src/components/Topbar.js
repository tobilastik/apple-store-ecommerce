import React, {Component} from 'react';

export default class extends Component {
  render () {
    return (
      <div>
        <div className="top-bar">
          <li className="top-bar1">
            <ul>About |</ul>
            <ul>Our Stores |</ul>
            <ul>FAQ's | </ul>
            <ul>Contact </ul>
          </li>

          <li className="top-bar2">
            <ul>Wishlist </ul>
            <ul>Compare</ul>
            <ul>Eng</ul>
          </li>
        </div>
      </div>
    );
  }
}
