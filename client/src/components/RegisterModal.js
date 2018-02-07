import React from 'react';
import Modal from 'react-modal';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import '../styles/RegisterModal.css';

const RegisterModal = (props) => (
  <Modal
    className="register-modal"
    isOpen={props.isOpen}
    onRequestClose={props.onRequestClose}
  >
    <div className="form">
      <h1>Register</h1>
      <TextField
        hintText="Enter Username"
        floatingLabelText="Username"
      /><br />
      <TextField
        hintText="Enter Password"
        floatingLabelText="Password"
        type="password"
      /><br />
      <TextField
        hintText="Enter E-mail"
        floatingLabelText="E-mail"
      /><br />
      <TextField
        hintText="Enter Address"
        floatingLabelText="Address"
      /><br />
      <TextField
        hintText="Enter Telephone Number"
        floatingLabelText="Telephone Number"
      /><br />
      <RaisedButton className="btn" label="Submit" primary={true} />
      <p>Already have an account? <a onClick={props.switch}>Login here</a>.</p>
    </div>
  </Modal>
);

export default RegisterModal;