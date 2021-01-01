import React, { useState } from 'react';
import Modal from 'react-modal';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { ModalProps } from '@typings/modal';
import { login } from '@api/auth';
import '@styles/LoginModal.css';

const LoginModal = ({ isOpen, onRequestClose, setActiveModal, setUser }: ModalProps): JSX.Element => {
  const [data, setData] = useState({});

  const setFormField = (key: string, value: any) => {
    setData({
      ...data,
      [key]: value,
    });
  }

  const onSubmit = () => {
    login(data).then((res) => {
      setUser && setUser(res.data);
      onRequestClose();
    });
  }

  return (
    <Modal
      className="login-modal"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <div className="form">
        <h1>Log In</h1>
        <TextField
          hintText="Enter Username"
          floatingLabelText="Username"
          autoFocus
          onChange={({ target }: any) => setFormField('username', target.value)}
        /><br />
        <TextField
          hintText="Enter Password"
          floatingLabelText="Password"
          type="password"
          onChange={({ target }: any) => setFormField('password', target.value)}
        /><br />
        <RaisedButton
          className="btn"
          label="Submit"
          primary={true}
          onClick={onSubmit}
        />
        <p>Don't have an account yet? <a onClick={() => setActiveModal('register')}>Register here</a>.</p>
      </div>
    </Modal>
  );
}

export default LoginModal;
