import React from 'react';
import Modal from 'react-modal';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import '../styles/LoginModal.css';

const LoginModal = (props) => (
  <Modal
    className="login-modal"
    isOpen={props.isOpen}
    onRequestClose={props.onRequestClose}
  >
    <div className="form">
      <h1>Log In</h1>
      <TextField
        hintText="Enter Username"
        floatingLabelText="Username"
      /><br />
      <TextField
        hintText="Enter Password"
        floatingLabelText="Password"
        type="password"
      /><br />
      <RaisedButton className="btn" label="Submit" primary={true} />
      <p>Don't have an account yet? <a onClick={props.switch}>Register here</a>.</p>
    </div>
  </Modal>
);

export default LoginModal;