import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import numeral from 'numeral';
import { getCart } from '../actions/cartActions';
import RaisedButton from 'material-ui/RaisedButton';
import RemoveShoppingCart from 'material-ui/svg-icons/action/remove-shopping-cart.js';
import '../styles/Cart.css';

class Cart extends React.Component {

  emptyCart = () => {
    axios.delete('/api/cart', { params: { id: this.props.cart._id } });
    this.props.getCart();
  }

  componentDidMount() {
    this.props.getCart();
  }

  render() {
    return (
      <div>
        <h1>Your Cart</h1>
        <div className="cart">
          <div className="cart-info">
            <p>
              <b>Number of items: </b>
              {this.props.cart && this.props.cart.items.reduce((acc, item) => acc += item.amount, 0)}
            </p>
            <p>
              <b>Total amount: </b>
              <span className="total">
                {this.props.cart && numeral(this.props.cart.items.reduce((acc, item) => acc += item.product.info.price * item.amount, 0)).format('$0,0.00')}
              </span>
            </p>
            <RaisedButton
              onClick={this.emptyCart}
              className="btn"
              label="Empty cart"
              labelPosition="before"
              icon={<RemoveShoppingCart />}
              secondary={true}
            />
          </div>
          <div className="cart-items">
            <table>
              <tr>
                <th></th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Amount</th>
                <th></th>
              </tr>
              {this.props.cart && this.props.cart.items.map((item) => {
                return (
                  <tr>
                    <td><img src={item.product.info.photo} /></td>
                    <td><Link to={`/product/${item.product._id}`}>{item.product.info.name}</Link></td>
                    <td>{numeral(item.product.info.price).format('$0,0.00')}</td>
                    <td>{item.amount}</td>
                    <td><button title="Remove this item from the cart">X</button></td>
                  </tr>
                );
              })}
            </table>
            {!this.props.cart && <h1>No items in the cart.</h1>}
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  cart: state.cart
})

const mapDispatchToProps = (dispatch) => ({
  getCart: () => dispatch(getCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);