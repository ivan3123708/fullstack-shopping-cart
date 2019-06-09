import * as React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as numeral from 'numeral';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import NavigateNext from 'material-ui/svg-icons/image/navigate-next';
import RemoveShoppingCart from '@material-ui/icons/RemoveShoppingCart';
import Dialog from 'material-ui/Dialog';
import Snackbar from 'material-ui/Snackbar';
import CheckoutModal from '../CheckoutModal';
import OrderSuccessModal from '../OrderSuccessModal';
import { ICart } from '@typings/state/index';
import { modal } from '@typings/modal';
import '@styles/Cart.css';

interface Props {
  cart: ICart;
  getCart: () => ICart;
}

interface State {
  activeModal: modal
}

class Cart extends React.Component<Props, State> {
  state = {
    activeModal: null
  }

  setActiveModal = (modal: modal) => {
    this.setState({ activeModal: modal });
  }

  removeItem = async (itemId: string) => {
    await axios.put('/api/cart', {
      cartId: this.props.cart._id,
      itemId: itemId
    });

    this.props.getCart();

    this.setActiveModal('snackbar');
    setTimeout(() => {
      this.setActiveModal(null);
    }, 4000);
  }

  emptyCart = async () => {
    await axios.delete('/api/cart', { params: { id: this.props.cart._id } });
    await this.setState({ activeModal: null });
    await this.props.getCart();
  }

  makeOrder = async () => {
    const order = this.props.cart.items.map((item) => {
      let order = {
        name: item.product.info.name,
        price: item.product.info.price,
        quantity: item.quantity,
        dateCreated: Date.now()
      };
      return order;
    });

    await axios.post('/api/order', { order: order });
    await this.emptyCart();
    
    this.setActiveModal('orderSuccess');
  }

  componentWillMount() {
    this.props.getCart();
  }

  render() {
    const { cart } = this.props;
    const cartExists = cart.isLoaded && !cart.error && cart.items.length;

    return (
      <div className="cart-container">
        <h1>Your Cart</h1>
        <div className="cart">
          <div className="cart-info">
            <div className="info">
              <p>
                <b>Number of items: </b>
                {cartExists ? cart.items.reduce((acc, item) => acc += item.quantity!, 0) : 0}
              </p>
              <p>
                <b>Total amount: </b>
                <span className="total">
                  {cartExists ? numeral(cart.items.reduce((acc, item) => acc += item.product.info.price * item.quantity!, 0)).format('$0,0.00') : numeral(0).format('$0,0.00')}
                </span>
              </p>
            </div>
            <div className="btns">
              <RaisedButton
                onClick={() => this.setActiveModal('checkout')}
                className="btn"
                label="Checkout"
                labelPosition="before"
                icon={<NavigateNext />}
                primary={true}
                disabled={!cartExists}
              />
              <RaisedButton
                onClick={() => this.setActiveModal('dialog')}
                className="btn"
                label="Empty cart"
                labelPosition="before"
                icon={<RemoveShoppingCart />}
                secondary={true}
                disabled={!cartExists}
              />
            </div>
            <CheckoutModal
              isOpen={this.state.activeModal === 'checkout'}
              onRequestClose={() => this.setActiveModal}
              setActiveModal={this.setActiveModal}
              makeOrder={this.makeOrder}
            />
            <OrderSuccessModal
              isOpen={this.state.activeModal === 'orderSuccess'}
              setActiveModal={this.setActiveModal}
            />
            <Dialog
              title="Are you sure that you want to empty your cart?"
              actions={[
                <FlatButton
                  label="Cancel"
                  primary={true}
                  onClick={() => this.setActiveModal(null)}
                />,
                <FlatButton
                  label="Yes"
                  primary={true}
                  onClick={this.emptyCart}
                />,
              ]}
              modal={true}
              open={this.state.activeModal === 'dialog'}
            >
              All items will be removed.
            </Dialog>
          </div>
          <div className="cart-items">
            {cartExists ?
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
                  {cart.items.map((item) => {
                    return (
                      <tr key={item.product.info.name} >
                        <td><img src={item.product.info.photo} /></td>
                        <td><Link to={`/product/${item.product._id}`}>{item.product.info.name}</Link></td>
                        <td>{numeral(item.product.info.price).format('$0,0.00')}</td>
                        <td>{item.quantity}</td>
                        <td>{numeral(item.product.info.price * item.quantity!).format('$0,0.00')}</td>
                        <td><button title="Remove this item from the cart" onClick={() => this.removeItem(item._id)}>X</button></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table> :
              <h1>No items in the cart.</h1>
            }
            <Snackbar
              open={this.state.activeModal === 'snackbar'}
              message="Item removed from your cart."
              bodyStyle={{ 'textAlign': 'center' }}
            />
          </div>
        </div>
      </div>
    )
  }
};

export default Cart;
