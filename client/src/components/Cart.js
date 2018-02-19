import React from 'react';
import { connect } from 'react-redux';
import { getCart } from '../actions/cartActions';
import RaisedButton from 'material-ui/RaisedButton';
import RemoveShoppingCart from 'material-ui/svg-icons/action/remove-shopping-cart.js';
import '../styles/Cart.css';

class Cart extends React.Component {

  componentDidMount() {
    this.props.getCart();
  }

  render() {
    return (
      <div>
        <h1>Your Cart</h1>
        <div className="cart">
          <div className="cart-info">
            <p><b>Number of items: </b>{this.props.cart.reduce((acc, item) => acc += item.amount, 0)}</p>
            <p><b>Total amount: </b><span className="total">${this.props.cart.reduce((acc, item) => acc += item.product.info.price * item.amount, 0)}.00</span></p>
            <RaisedButton
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
              </tr>
              {this.props.cart.map((item) => {
                return (
                  <tr>
                    <td><img src={item.product.info.photo} /></td>
                    <td>{item.product.info.name}</td>
                    <td>{item.product.info.price}</td>
                    <td>{item.amount}</td>
                  </tr>
                );
              })}
            </table>
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

// <span><img src={item.product.info.photo} /></span>
// <span><b>{item.product.info.name}</b></span>
// <span><b>Price: </b>{item.product.info.price}</span>
// <span><b>Amount: </b>{item.amount}</span>