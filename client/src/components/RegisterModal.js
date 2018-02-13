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
    <form className="form" action="/auth/register" method="POST">
      <h1>Register</h1>
      <TextField
        hintText="Enter Username"
        floatingLabelText="Username"
        name="username"
        autoFocus
      /><br />
      <TextField
        hintText="Enter Password"
        floatingLabelText="Password"
        name="password"
        type="password"
      /><br />
      <TextField
        hintText="Enter E-mail"
        floatingLabelText="E-mail"
        name="email"
      /><br />
      <TextField
        hintText="Enter Address"
        floatingLabelText="Address"
        name="address"
      /><br />
      <TextField
        hintText="Enter Telephone Number"
        floatingLabelText="Telephone Number"
        name="phone"
      /><br />
      <RaisedButton 
        className="btn" 
        label="Submit" 
        primary={true} 
        type="submit"
      />
      <p>Already have an account? <a onClick={props.switch}>Login here</a>.</p>
    </form>
  </Modal>
);

export default RegisterModal;