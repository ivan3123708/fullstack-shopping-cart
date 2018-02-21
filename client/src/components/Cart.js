import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import numeral from 'numeral';
import { getCart } from '../actions/cartActions';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import RemoveShoppingCart from 'material-ui/svg-icons/action/remove-shopping-cart.js';
import Dialog from 'material-ui/Dialog';
import Snackbar from 'material-ui/Snackbar';
import '../styles/Cart.css';

var params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');

class Cart extends React.Component {

  state = {
    dialogOpen: false,
    snackbarOpen: false
  }

  toggleDialog = () => {
    this.setState({ dialogOpen: !this.state.dialogOpen });
  }

  removeItem = (itemId) => {
    axios.put('/api/cart', {}, {
      params: {
        cartId: this.props.cart._id,
        itemId: itemId
      }
    })
      .then(() => {
        this.props.getCart();
        this.setState({ snackbarOpen: true });
      });
  }

  emptyCart = () => {
    axios.delete('/api/cart', { params: { id: this.props.cart._id } })
      .then(() => {
        this.toggleDialog();
        this.props.getCart();
      });
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
              {this.props.cart.items.length ? this.props.cart.items.reduce((acc, item) => acc += item.amount, 0) : 0}
            </p>
            <p>
              <b>Total amount: </b>
              <span className="total">
                {this.props.cart.items.length ? numeral(this.props.cart.items.reduce((acc, item) => acc += item.product.info.price * item.amount, 0)).format('$0,0.00') : numeral(0).format('$0,0.00')}
              </span>
            </p>
            <RaisedButton
              onClick={this.toggleDialog}
              className="btn"
              label="Empty cart"
              labelPosition="before"
              icon={<RemoveShoppingCart />}
              secondary={true}
              disabled={!this.props.cart.items.length}
            />
            <Dialog
              title="Are you sure that you want to empty your cart?"
              actions={[
                <FlatButton
                  label="Cancel"
                  primary={true}
                  onClick={this.toggleDialog}
                />,
                <FlatButton
                  label="Yes"
                  primary={true}
                  onClick={this.emptyCart}
                />,
              ]}
              modal={true}
              open={this.state.dialogOpen}
            >
              All items will be removed.
            </Dialog>
          </div>
          <div className="cart-items">
            <table>
              <tr>
                <th></th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Amount</th>
                <th>Total</th>
                <th></th>
              </tr>
              {this.props.cart.items.length ? this.props.cart.items.map((item) => {
                return (
                  <tr>
                    <td><img src={item.product.info.photo} /></td>
                    <td><Link to={`/product/${item.product._id}`}>{item.product.info.name}</Link></td>
                    <td>{numeral(item.product.info.price).format('$0,0.00')}</td>
                    <td>{item.amount}</td>
                    <td>{numeral(item.product.info.price * item.amount).format('$0,0.00')}</td>
                    <td><button title="Remove this item from the cart" onClick={() => this.removeItem(item._id)}>X</button></td>
                  </tr>
                );
              }) : ''}
            </table>
            {!this.props.cart.items.length && <h1>No items in the cart.</h1>}
            <Snackbar
              open={this.state.snackbarOpen}
              message="Item removed from your cart."
              autoHideDuration={4000}
              bodyStyle={{ 'textAlign': 'center' }}
            />
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