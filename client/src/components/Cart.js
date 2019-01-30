import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import numeral from 'numeral';
import { getCart } from '../actions';
import CheckoutModal from './CheckoutModal';
import OrderSuccessModal from './OrderSuccessModal';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import NavigateNext from 'material-ui/svg-icons/image/navigate-next';
import RemoveShoppingCart from 'material-ui/svg-icons/action/remove-shopping-cart.js';
import Dialog from 'material-ui/Dialog';
import Snackbar from 'material-ui/Snackbar';
import '../styles/Cart.css';

export class Cart extends React.Component {
  state = {
    checkoutModalOpen: false,
    orderSuccessModalOpen: false,
    dialogOpen: false,
    snackbarOpen: false
  }

  toggleOpen = (targetComponent) => {
    this.setState({ [targetComponent]: !this.state[targetComponent] });
  }

  removeItem = (itemId) => {
    axios.put('/api/cart', {
        cartId: this.props.cart._id,
        itemId: itemId
      })
      .then(() => {
        this.props.getCart();
        this.toggleOpen('snackbarOpen');
        setTimeout(() => {
          this.toggleOpen('snackbarOpen');
        }, 4000);
      });
  }

  emptyCart = () => {
    axios.delete('/api/cart', { params: { id: this.props.cart._id } })
      .then(() => {
        this.setState({ dialogOpen: false });
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

    axios.post('/api/order', { order: order })
      .then(() => {
        this.toggleOpen('checkoutModalOpen');
        this.toggleOpen('orderSuccessModalOpen');
        this.emptyCart();
      });
  }

  componentWillMount() {
    this.props.getCart();
  }

  render() {
    console.log(this.props.cart);
    const { cart } = this.props;

    return (
      <div className="cart-container">
        <h1>Your Cart</h1>
        <div className="cart">
          <div className="cart-info">
            <div className="info">
              <p>
                <b>Number of items: </b>
                {cart.isLoaded ? cart.items.items.reduce((acc, item) => acc += item.quantity, 0) : 0}
              </p>
              <p>
                <b>Total amount: </b>
                <span className="total">
                  {cart.isLoaded ? numeral(cart.items.items.reduce((acc, item) => acc += item.product.info.price * item.quantity, 0)).format('$0,0.00') : numeral(0).format('$0,0.00')}
                </span>
              </p>
            </div>
            <div className="btns">
              <RaisedButton
                onClick={() => this.toggleOpen('checkoutModalOpen')}
                className="btn"
                label="Checkout"
                labelPosition="before"
                icon={<NavigateNext />}
                primary={true}
                disabled={!cart.isLoaded}
              />
              <RaisedButton
                onClick={() => this.toggleOpen('dialogOpen')}
                className="btn"
                label="Empty cart"
                labelPosition="before"
                icon={<RemoveShoppingCart />}
                secondary={true}
                disabled={!cart.isLoaded}
              />
            </div>
            <CheckoutModal
              isOpen={this.state.checkoutModalOpen}
              onRequestClose={this.toggleOpen}
              toggle={this.toggleOpen}
              makeOrder={this.makeOrder}
            />
            <OrderSuccessModal
              isOpen={this.state.orderSuccessModalOpen}
              onRequestClose={this.toggleOpen}
              toggle={this.toggleOpen}
            />
            <Dialog
              title="Are you sure that you want to empty your cart?"
              actions={[
                <FlatButton
                  label="Cancel"
                  primary={true}
                  onClick={() => this.toggleOpen('dialogOpen')}
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
              <thead>
                <tr>
                  <th></th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.isLoaded ? cart.items.items.map((item) => {
                  return (
                    <tr key={item.product.info.name} >
                      <td><img src={item.product.info.photo} /></td>
                      <td><Link to={`/product/${item.product._id}`}>{item.product.info.name}</Link></td>
                      <td>{numeral(item.product.info.price).format('$0,0.00')}</td>
                      <td>{item.quantity}</td>
                      <td>{numeral(item.product.info.price * item.quantity).format('$0,0.00')}</td>
                      <td><button title="Remove this item from the cart" onClick={() => this.removeItem(item._id)}>X</button></td>
                    </tr>
                  );
                }) : <h1>No items in the cart.</h1>}
              </tbody>
            </table>
            <Snackbar
              open={this.state.snackbarOpen}
              message="Item removed from your cart."
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