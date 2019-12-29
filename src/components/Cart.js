import React, {Component} from 'react';

import Checkout from './Checkout';

export default class Cart extends Component {
  render () {
    const {cartItems} = this.props;
    return (
      <div className="cart-item">
        <i className="fa fa-cart-plus cart-icon"> Cart</i>
        {cartItems.length === 0
          ? 'Your Cart is Empty'
          : <div> You have {cartItems.length} product(s) in your Cart </div>}

        {cartItems.length > 0 &&
          <div>
            <ul>
              {cartItems.map (item => (
                <li key={item.id}>
                  <b>{item.name}</b>
                  {' '}
                  (<b>x {item.count}) = {item.price * item.count}</b>
                  <button
                    onClick={e => this.props.handleRemoveFromCart (e, item)}
                    className="remove-cartItem"
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
            <h3>
              Total :
              {' '}
              {cartItems.reduce ((a, c) => a + c.price * c.count, 0)}
              {' '}
            </h3>
          </div>}
        {cartItems != '' ? <Checkout /> : null}

      </div>
    );
  }
}
