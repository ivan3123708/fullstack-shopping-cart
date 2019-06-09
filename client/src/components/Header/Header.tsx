import * as React from 'react';
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
import { modal } from '@typings/modal';
import LoginModal from '../LoginModal';
import RegisterModal from '../RegisterModal';
import '@styles/Header.css';

interface Props extends RouteComponentProps {
  loggedUser: ILoggedUser;
  cart: ICart;
  getUser: () => void;
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

class Header extends React.Component<Props> {
  state = {
    activeModal: null
  }

  setActiveModal = (modal: modal) => {
    this.setState({ activeModal: modal });
  }

  componentDidMount() {
    this.props.getUser();
  }

  render() {
    const {
      history,
      loggedUser
    } = this.props;

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
                    containerElement={<a href="/auth/logout"/>}
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
                      containerElement={<a href="/auth/logout" />}
                    />
                  </IconMenu>
                </div>
              </div> :
              <FlatButton
                label="LOGIN"
                labelPosition="before"
                icon={<Input/>}
                onClick={() => this.setActiveModal('login')}
              />
          }
        />
        <LoginModal
          isOpen={this.state.activeModal === 'login'}
          onRequestClose={() => this.setActiveModal(null)}
          setActiveModal={this.setActiveModal}
        />
        <RegisterModal
          isOpen={this.state.activeModal === 'register'}
          onRequestClose={() => this.setActiveModal('register')}
          setActiveModal={this.setActiveModal}
        />
      </div>
    )
  }
};

export default Header;
