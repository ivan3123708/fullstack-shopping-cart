import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import numeral from 'numeral';
import { getCart } from '../actions/cartActions';
import CheckoutModal from './CheckoutModal';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import NavigateNext from 'material-ui/svg-icons/image/navigate-next';
import RemoveShoppingCart from 'material-ui/svg-icons/action/remove-shopping-cart.js';
import Dialog from 'material-ui/Dialog';
import Snackbar from 'material-ui/Snackbar';
import '../styles/Cart.css';

class Cart extends React.Component {

  state = {
    checkoutModalOpen: false,
    dialogOpen: false,
    snackbarOpen: false
  }

  toggleCheckoutModal = () => {
    this.setState({ checkoutModalOpen: !this.state.checkoutModalOpen });
  }

  toggleDialog = (value) => {
    this.setState({ dialogOpen: value });
  }

  removeItem = (itemId) => {
    axios.put('/api/cart', {
        cartId: this.props.cart._id,
        itemId: itemId
      })
      .then(() => {
        this.props.getCart();
        this.setState({ snackbarOpen: true });
      });
  }

  emptyCart = () => {
    axios.delete('/api/cart', { params: { id: this.props.cart._id } })
      .then(() => {
        this.toggleDialog(false);
        this.props.getCart();
      });
  }

  makeOrder = () => {
    const order = this.props.cart.items.map((item) => {
      let order = {
        name: item.product.info.name,
        price: item.product.info.price,
        quantity: item.quantity,
        dateCreated: Date.now()
      };
      return order;
    });

    axios.post('/api/user/order', { order: order })
      .then(() => {
        this.toggleCheckoutModal();
        this.emptyCart();
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
              {this.props.cart.items.length ? this.props.cart.items.reduce((acc, item) => acc += item.quantity, 0) : 0}
            </p>
            <p>
              <b>Total amount: </b>
              <span className="total">
                {this.props.cart.items.length ? numeral(this.props.cart.items.reduce((acc, item) => acc += item.product.info.price * item.quantity, 0)).format('$0,0.00') : numeral(0).format('$0,0.00')}
              </span>
            </p>
            <div className="btns">
              <RaisedButton
                onClick={this.toggleCheckoutModal}
                className="btn"
                label="Checkout"
                labelPosition="before"
                icon={<NavigateNext />}
                primary={true}
                disabled={!this.props.cart.items.length}
              />
              <RaisedButton
                onClick={() => this.toggleDialog(true)}
                className="btn"
                label="Empty cart"
                labelPosition="before"
                icon={<RemoveShoppingCart />}
                secondary={true}
                disabled={!this.props.cart.items.length}
              />
            </div>
            <CheckoutModal
              isOpen={this.state.checkoutModalOpen}
              onRequestClose={this.toggleCheckoutModal}
              toggle={this.toggleCheckoutModal}
              makeOrder={this.makeOrder}           
            />
            <Dialog
              title="Are you sure that you want to empty your cart?"
              actions={[
                <FlatButton
                  label="Cancel"
                  primary={true}
                  onClick={() => this.toggleDialog(false)}
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
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
              {this.props.cart.items.length ? this.props.cart.items.map((item) => {
                return (
                  <tr>
                    <td><img src={item.product.info.photo} /></td>
                    <td><Link to={`/product/${item.product._id}`}>{item.product.info.name}</Link></td>
                    <td>{numeral(item.product.info.price).format('$0,0.00')}</td>
                    <td>{item.quantity}</td>
                    <td>{numeral(item.product.info.price * item.quantity).format('$0,0.00')}</td>
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