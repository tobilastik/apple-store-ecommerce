import React, {Component} from 'react';

export default class BestSellerList extends Component {
  render () {
    const {id, name, img, price} = this.props.product;
    return (
      <article className="product">

        <div className="img-container">
          <img src={img} className="img-style" />
          <div className="trending-button">
            <p>eye</p>
            <p>love</p>
            <p>ref</p>
          </div>
        </div>

        <h5>{name}</h5>
        <h5>{price}</h5>

        <div className="btn-primary">
          Add to Cart
        </div>
      </article>
    );
  }
}
