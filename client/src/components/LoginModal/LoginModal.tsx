import * as React from 'react';
import * as Modal from 'react-modal';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { ModalProps } from '@typings/modal';
import '@styles/LoginModal.css';

const LoginModal: React.SFC<ModalProps> = ({ isOpen, onRequestClose, toggle }): JSX.Element => (
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
      <p>Don't have an account yet? <a onClick={() => toggle}>Register here</a>.</p>
    </form>
  </Modal>
);

export default LoginModal;
