import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import Person from 'material-ui/svg-icons/social/person';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Logout from 'material-ui/svg-icons/navigation/subdirectory-arrow-left';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Input from '@material-ui/icons/Input';
import { RouteComponentProps } from 'react-router-dom';

import { ILoggedUser } from '@typings/state/loggedUser';
import { ICart } from '@typings/state/cart';
import LoginModal from '../LoginModal';
import RegisterModal from '../RegisterModal';

import '@styles/Header.css';

export interface Props extends RouteComponentProps {
  loggedUser: ILoggedUser;
  cart: ICart;
  getUser: () => void;
  getUserSuccess: () => void;
  logoutSuccess: () => void;
}

const styles = {
  menuBtn: {
    color: '#fff'
  },
  iconMenuBtn: {
    color: '#00BCD4',
    minWidth: '168px',
    textAlign: 'left'
  }
}

const Header = ({ history, loggedUser, getUser, getUserSuccess, logoutSuccess }: Props) => {
  const [activeModal, setActiveModal] = useState<null | string>(null);

  useEffect(() => getUser(), []);

  const onLogout = () => {
    logoutSuccess();
    history.push('/');
  }

  return (
    <div className="header">
      <AppBar
        className="title"
        title="MOBILE SHOP"
        onTitleClick={() => history.push('/')}
        showMenuIconButton={false}
        zDepth={0}
        iconElementRight={
          loggedUser ?
            <div>
              <div className="menu">
                <FlatButton
                  style={styles.menuBtn}
                  label="ACCOUNT"
                  icon={<Person />}
                  containerElement={<Link to="/account" />}
                />
                <FlatButton
                  style={styles.menuBtn}
                  label="CART"
                  icon={<ShoppingCart />}
                  containerElement={<Link to="/cart" />}
                />
                <FlatButton
                  style={styles.menuBtn}
                  label="LOGOUT"
                  icon={<Logout />}
                  containerElement={<div />}
                  onClick={onLogout}
                />
              </div>
              <div className="icon-menu">
                <IconMenu
                  iconButtonElement={<IconButton><Menu /></IconButton>}
                  anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                  targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                  iconStyle={{ color: '#fff' }}
                >
                  <FlatButton
                    label="ACCOUNT"
                    icon={<Person />}
                    containerElement={<Link to="/account" />}
                  /><br />
                  <FlatButton
                    label="CART"
                    icon={<ShoppingCart />}
                    containerElement={<Link to="/cart" />}
                  /><br />
                  <FlatButton
                    label="LOGOUT"
                    icon={<Logout />}
                    containerElement={<div />}
                    onClick={onLogout}
                  />
                </IconMenu>
              </div>
            </div> :
            <FlatButton
              label="LOGIN"
              labelPosition="before"
              icon={<Input />}
              onClick={() => setActiveModal('login')}
            />
        }
      />
      <LoginModal
        isOpen={activeModal === 'login'}
        onRequestClose={() => setActiveModal(null)}
        setActiveModal={setActiveModal}
        setUser={getUserSuccess}
      />
      <RegisterModal
        isOpen={activeModal === 'register'}
        onRequestClose={() => setActiveModal(null)}
        setActiveModal={setActiveModal}
        setUser={getUserSuccess}
      />
    </div>
  );
};

export default Header;
