import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import NavigateNext from 'material-ui/svg-icons/image/navigate-next';
import RemoveShoppingCart from '@material-ui/icons/RemoveShoppingCart';
import Dialog from 'material-ui/Dialog';
import Snackbar from 'material-ui/Snackbar';
import { editCart, deleteCart } from '@api/cart';
import { createOrder } from '@api/order';
import CheckoutModal from '../CheckoutModal';
import OrderSuccessModal from '../OrderSuccessModal';
import { ICart } from '@typings/state/index';
import { modal } from '@typings/modal';
import '@styles/Cart.css';

export interface Props {
  cart: ICart;
  getCart: () => ICart;
}

const Cart = ({ cart, getCart }: Props) => {
  const [activeModal, setActiveModal] = useState<modal>(null);

  const removeItem = async (itemId: string) => {
    await editCart({
      cartId: cart._id,
      itemId: itemId
    });

    getCart();

    setActiveModal('snackbar');
    setTimeout(() => {
      setActiveModal(null);
    }, 4000);
  }

  const emptyCart = async () => {
    await deleteCart({ id: cart._id })
    await setActiveModal(null);
    await getCart();
  }

  const makeOrder = async () => {
    const order = cart.items.map((item) => {
      let order = {
        name: item.product.info.name,
        price: item.product.info.price,
        quantity: item.quantity,
        dateCreated: Date.now()
      };
      return order;
    });

    await createOrder({ order })
    await emptyCart();
    
    setActiveModal('orderSuccess');
  }

  useEffect(() => {
    getCart();
  }, []);

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
              onClick={() => setActiveModal('checkout')}
              className="btn"
              label="Checkout"
              labelPosition="before"
              icon={<NavigateNext />}
              primary={true}
              disabled={!cartExists}
            />
            <RaisedButton
              onClick={() => setActiveModal('dialog')}
              className="btn"
              label="Empty cart"
              labelPosition="before"
              icon={<RemoveShoppingCart />}
              secondary={true}
              disabled={!cartExists}
            />
          </div>
          <CheckoutModal
            isOpen={activeModal === 'checkout'}
            onRequestClose={() => setActiveModal}
            setActiveModal={setActiveModal}
            makeOrder={makeOrder}
          />
          <OrderSuccessModal
            isOpen={activeModal === 'orderSuccess'}
            setActiveModal={setActiveModal}
            onRequestClose={() => {}}
          />
          <Dialog
            title="Are you sure that you want to empty your cart?"
            actions={[
              <FlatButton
                label="Cancel"
                primary={true}
                onClick={() => setActiveModal(null)}
              />,
              <FlatButton
                label="Yes"
                primary={true}
                onClick={emptyCart}
              />,
            ]}
            modal={true}
            open={activeModal === 'dialog'}
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
                {cart.items.map((item) => (
                  <tr key={item.product.info.name} >
                    <td><img src={item.product.info.photo} /></td>
                    <td><Link to={`/product/${item.product._id}`}>{item.product.info.name}</Link></td>
                    <td>{numeral(item.product.info.price).format('$0,0.00')}</td>
                    <td>{item.quantity}</td>
                    <td>{numeral(item.product.info.price * item.quantity!).format('$0,0.00')}</td>
                    <td><button title="Remove this item from the cart" onClick={() => removeItem(item._id)}>X</button></td>
                  </tr>
                ))}
              </tbody>
            </table> :
            <h1>No items in the cart.</h1>
          }
          <Snackbar
            open={activeModal === 'snackbar'}
            message="Item removed from your cart."
            bodyStyle={{ 'textAlign': 'center' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
