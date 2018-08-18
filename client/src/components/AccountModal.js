import React from 'react';
import Modal from 'react-modal';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import '../styles/AccountModal.css';

class AccountModal extends React.Component {
  state = {
    email: this.props.user.email,
    address: this.props.user.address,
    phone: this.props.user.phone
  }

  onInputChange = (e) => {
    const value = e.target.value;
    const key = e.target.name;

    this.setState({ [key]: value });
  }

  render() {
    return (
      <Modal
        className="account-modal"
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
      >
        <form className="form" action="/api/user" method="POST">
          <h1>Edit Account</h1>
          <TextField
            id="email"
            hintText="Enter E-mail"
            floatingLabelText="E-mail"
            name="email"
            value={this.state.email}
            onChange={this.onInputChange}
          /><br />
          <TextField
            id="address"
            hintText="Enter Address"
            floatingLabelText="Address"
            name="address"
            value={this.state.address}
            onChange={this.onInputChange}
          /><br />
          <TextField
            id="phone"
            hintText="Enter Telephone Number"
            floatingLabelText="Telephone Number"
            name="phone"
            value={this.state.phone}
            onChange={this.onInputChange}
          /><br />
          <RaisedButton
            className="btn"
            label="Save"
            primary={true}
            type="submit"
          />
        </form>
      </Modal>
    );
  }
}

export default AccountModal;