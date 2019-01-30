import React from 'react';
import Modal from 'react-modal';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import '@styles/LoginModal.css';

const LoginModal = ({ isOpen, onRequestClose, toggle }) => (
  <Modal
    className="login-modal"
    isOpen={isOpen}
    onRequestClose={onRequestClose}
  >
    <form className="form" action="/auth/login" method="POST">
      <h1>Log In</h1>
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
      <RaisedButton 
        className="btn"
        label="Submit"
        primary={true}
        type="submit"
      />
      <p>Don't have an account yet? <a onClick={toggle}>Register here</a>.</p>
    </form>
  </Modal>
);

export default LoginModal;
