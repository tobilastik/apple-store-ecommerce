import React, {Component} from 'react';
import {products} from '../data/products';
import Cart from './Cart';

export default class Trending extends Component {
  state = {
    productList: products,
    cartItems: [],
  };

  // async componentWillMount () {
  //   if (localStorage.getItem ('cartItems')) {
  //     await this.setState ({
  //       cartItems: JSON.parse (localStorage.getItem ('cartItems')),
  //     });
  //   }
  // }

  handleAddToCart = (e, product) => {
    this.setState (state => {
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;
      cartItems.forEach (item => {
        if (item.id === product.id) {
          productAlreadyInCart = true;
          item.count++;
        }
      });
      if (!productAlreadyInCart) {
        cartItems.push ({...product, count: 1});
      }
      localStorage.setItem ('cartItems', JSON.stringify (cartItems));
      return cartItems;
    });
  };

  handleRemoveFromCart = (e, item) => {
    this.setState (state => {
      const cartItems = state.cartItems.filter (elem => elem.id !== item.id);
      localStorage.setItem ('cartItems', cartItems);
      return {cartItems};
    });
  };
  render () {
    const {productList} = this.state;
    return (
      <div className="trending">
        <h4>
          Trending Products
        </h4>
        <section className="featured-rooms-center">
          {productList.map (product => {
            return (
              <div>
                <div className="img-container">
                  <img src={product.img} className="img-style" />
                </div>
                <h5>{product.name}</h5>
                <h5>${product.price}</h5>

                <div
                  onClick={e => this.handleAddToCart (e, product)}
                  className="btn-primary"
                >
                  Add to Cart
                </div>

              </div>
            );
          })}
        </section>
        <Cart
          cartItems={this.state.cartItems}
          handleRemoveFromCart={this.handleRemoveFromCart}
        />
      </div>
    );
  }
}
