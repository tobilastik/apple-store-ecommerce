import React, {Component} from 'react';

export default class Cart extends Component {
  render () {
    const {cartItems} = this.props;
    return (
      <div className="cart-item">
        {cartItems.length === 0
          ? 'Your Cart is Empty'
          : <div> You have {cartItems.length} product(s) in your Cart </div>}

        {cartItems.length > 0 &&
          <div>
            <ul>
              {cartItems.map (item => (
                <li>
                  <b>{item.name}</b>
                  {' '}
                  <b>x{item.count}</b>
                  <button
                    onClick={e => this.props.handleRemoveFromCart (e, item)}
                    className="remove-cartItem"
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          </div>}
      </div>
    );
  }
}