import React, { useState } from 'react';
import Modal from 'react-modal';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { ModalProps } from '@typings/modal';
import { register } from '@api/auth';
import '@styles/RegisterModal.css';

const RegisterModal = ({ isOpen, onRequestClose, setActiveModal, setUser }: ModalProps) => {
  const [data, setData] = useState({});

  const setFormField = (key: string, value: any) => {
    setData({
      ...data,
      [key]: value,
    });
  }

  const onSubmit = () => {
    register(data).then((res) => {
      setUser && setUser(res.data);
      onRequestClose();
    });
  }

  return (
    <Modal
      className="register-modal"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <div className="form">
        <h1>Register</h1>
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
        <TextField
          hintText="Enter E-mail"
          floatingLabelText="E-mail"
          type="email"
          onChange={({ target }: any) => setFormField('email', target.value)}
        /><br />
        <TextField
          hintText="Enter Address"
          floatingLabelText="Address"
          onChange={({ target }: any) => setFormField('address', target.value)}
        /><br />
        <TextField
          hintText="Enter Telephone Number"
          floatingLabelText="Telephone Number"
          onChange={({ target }: any) => setFormField('phone', target.value)}
        /><br />
        <RaisedButton
          className="btn"
          label="Submit"
          primary={true}
          onClick={onSubmit}
        />
        <p>Already have an account? <a onClick={() => setActiveModal('login')}>Login here</a>.</p>
      </div>
    </Modal>
  );
}

export default RegisterModal;
