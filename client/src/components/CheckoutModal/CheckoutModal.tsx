import * as React from 'react';
import * as numeral from 'numeral';
import * as Modal from 'react-modal';
import Button from '@material-ui/core/Button';
import { IProduct } from '@state/index';
import { target } from '../Cart/Cart';
import '@styles/CheckoutModal.css';

export interface Props {
  cart?: IProduct[];
  isOpen: boolean;
  toggle: (targetComponent: target) => void;
  makeOrder: () => any;
  onRequestClose: (targetComponent: target) => void;
}

export const CheckoutModal: React.SFC<Props> = ({ cart, isOpen, toggle, makeOrder }): JSX.Element => (
  <Modal
    className="checkout-modal"
    isOpen={isOpen}
    onRequestClose={() => toggle('checkoutModalOpen')}
  >
    <div className="order">
      <h1>Checkout Information</h1>
      <p>
        <i>Please read the list of items in your order and click "Confirm" to confirm your order.</i>
      </p>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart!.length && cart!.map((item: IProduct) => {
            return (
              <tr key={item.product.info.name} >
                <td>{item.product.info.name}</td>
                <td>{numeral(item.product.info.price).format('$0,0.00')}</td>
                <td>{item.quantity}</td>
                <td>{numeral(item.product.info.price * item.quantity!).format('$0,0.00')}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <p className="total">
        <b>TOTAL AMOUNT: </b>
        <span>{numeral(cart!.length && cart!.reduce((acc, item) => acc += item.product.info.price * item.quantity!, 0)).format('$0,0.00')}</span>
      </p>
      <div className="btns">
        <Button
          className="btn"
          onClick={() => toggle('checkoutModalOpen')}>
          Cancel
        </Button>
        <Button
          className="btn"
          onClick={makeOrder}>
          Confirm
        </Button>
        {/* <RaisedButton
          className="btn"
          label="Cancel"
          primary={true}
          onClick={() => toggle('checkoutModalOpen')}
        />
        <RaisedButton
          className="btn"
          label="Confirm"
          backgroundColor="#64DD17"
          labelColor="#fff"
          onClick={makeOrder}
        /> */}
      </div>
    </div>
  </Modal>
);

export default CheckoutModal;
