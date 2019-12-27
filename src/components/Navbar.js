import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Cart from './Cart';

export default class Navbar extends Component {
  state = {
    cartClicked: false,
    cartItems: [],
  };

  handleCartClicked = () => {
    this.setState ({
      cartClicked: !this.state.cartClicked,
    });
  };

  render () {
    return (
      <div className="navbar">
        <p>Apple Store</p>
        <div className="navbar-link">
          <Link className="navbar-links" path="/"> Home </Link>
          <Link className="navbar-links" path="/"> Shop </Link>
          <Link
            onClick={this.handleCartClicked}
            className="navbar-links"
            path="/"
          >
            Cart <i className=" fa fa-cart-plus" />{' '}
          </Link>
        </div>
        {this.state.cartClicked
          ? <Cart
              cartItems={this.state.cartItems}
              handleRemoveFromCart={this.handleRemoveCart}
            />
          : null}
      </div>
    );
  }
}
