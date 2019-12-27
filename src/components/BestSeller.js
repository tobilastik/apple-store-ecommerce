import React, {Component} from 'react';
import {iphones} from '../data/products';
import BestSellerList from './BestSellerList';

export default class BestSeller extends Component {
  state = {
    productList: iphones,
  };
  render () {
    const {productList} = this.state;
    return (
      <div className="trending">
        <h4>
          Best Seller
        </h4>
        <section className="product-list">
          {productList.map (product => {
            return <BestSellerList key={product.id} product={product} />;
          })}
        </section>
      </div>
    );
  }
}
