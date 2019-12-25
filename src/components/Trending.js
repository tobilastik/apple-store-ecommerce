import React, {Component} from 'react';
import {products} from '../data/products';
import TrendingList from './TrendingList';

export default class Trending extends Component {
  state = {
    productList: products,
  };
  render () {
    const {productList} = this.state;
    return (
      <div className="trending">
        <h4>
          Trending Products
        </h4>
        <section className="product-list">
          {productList.map (product => {
            return <TrendingList key={product.id} product={product} />;
          })}
        </section>
      </div>
    );
  }
}
