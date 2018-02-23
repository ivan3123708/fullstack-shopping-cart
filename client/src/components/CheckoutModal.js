import React from 'react';
import Modal from 'react-modal';
import '../styles/CheckoutModal.css';

class CheckoutModal extends React.Component {

  render() {
    return (
      <Modal
        className="checkout-modal"
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
      >
        <div className="order">
          <h1>Checkout Information</h1>
          <p>
            <i>Please read the list of items in your order and click "Confirm" to confirm your order.</i>
          </p>
        </div>
      </Modal>
    );
  }
}

export default CheckoutModal;