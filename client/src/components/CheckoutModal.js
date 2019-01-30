import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import Modal from 'react-modal';
import RaisedButton from 'material-ui/RaisedButton';
import '../styles/CheckoutModal.css';

export const CheckoutModal = (props) => (
  <Modal
    className="checkout-modal"
    isOpen={props.isOpen}
    onRequestClose={() => props.toggle('checkoutModalOpen')}
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
          {props.cart.length && props.cart.map((item) => {
            return (
              <tr key={item.product.info.name} >
                <td>{item.product.info.name}</td>
                <td>{numeral(item.product.info.price).format('$0,0.00')}</td>
                <td>{item.quantity}</td>
                <td>{numeral(item.product.info.price * item.quantity).format('$0,0.00')}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <p className="total">
        <b>TOTAL AMOUNT: </b>
        <span>{numeral(props.cart.length && props.cart.reduce((acc, item) => acc += item.product.info.price * item.quantity, 0)).format('$0,0.00')}</span>
      </p>
      <div className="btns">
        <RaisedButton
          className="btn"
          label="Cancel"
          primary={true}
          onClick={() => props.toggle('checkoutModalOpen')}
        />
        <RaisedButton
          className="btn"
          label="Confirm"
          backgroundColor="#64DD17"
          labelColor="#fff"
          onClick={props.makeOrder}
        />
      </div>
    </div>
  </Modal>
);

const mapStateToProps = (state) => ({
  cart: state.cart.items
});

export default connect(mapStateToProps)(CheckoutModal);