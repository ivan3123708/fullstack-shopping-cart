import React from 'react';
import Modal from 'react-modal';
import RaisedButton from 'material-ui/RaisedButton';
import '../styles/OrderSuccessModal.css';

const OrderSuccessModal = (props) => (
      <Modal
        className="order-success-modal"
        isOpen={props.isOpen}
        onRequestClose={props.onRequestClose}
      >
        <div className="success">
          <h1>Success!</h1>
          <img src="/img/success.gif" />
          <br/>
          <p>
            Your order has been received. The items you've ordered will be sent to your address.
          </p>
          <RaisedButton
            onClick={props.toggle}
            className="btn"
            label="OK"
            primary={true}
          />
        </div>
      </Modal>
);

export default OrderSuccessModal;