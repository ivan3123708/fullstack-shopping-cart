import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import RemoveShoppingCart from 'material-ui/svg-icons/action/remove-shopping-cart.js';
import catalog from '../testData';
import '../styles/Cart.css';

const Cart = () => (
  <div>
    <h1>Your Cart</h1>
    <div className="cart">
      <div className="cart-info">
        <p><b>Number of items: </b>{catalog.length}</p>
        <p><b>Total amount: </b><span className="total">$500.00</span></p>
        <RaisedButton
          className="btn"
          label="Empty cart"
          labelPosition="before"
          icon={<RemoveShoppingCart />}
          secondary={true}
        />
      </div>
      <div className="cart-items">
        {catalog.map((item) => {
          return (
            <div className="cart-item">
              <span>{item.info.name}</span>
              <span>{item.info.price}</span>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export default Cart;