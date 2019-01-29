import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import Person from 'material-ui/svg-icons/social/person';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Logout from 'material-ui/svg-icons/navigation/subdirectory-arrow-left';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart.js';
import Input from 'material-ui/svg-icons/action/input.js';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import '../styles/Header.css';

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

export class Header extends React.Component {
  state = {
    loginModalOpen: false,
    registerModalOpen: false
  }

  toggleOpen = (targetComponent) => {
    this.setState({ [targetComponent]: !this.state[targetComponent] });
  }

  switchLoginRegister = () => {
    this.setState({ 
      loginModalOpen: !this.state.loginModalOpen,
      registerModalOpen: !this.state.registerModalOpen 
    });
  }

  componentDidMount() {
    this.props.getUser();
  }

  render() {
    return (
      <div className="header">
        <AppBar 
          className="title"
          title="MOBILE SHOP"
          onTitleClick={() => this.props.history.push('/')}
          showMenuIconButton={false}
          zDepth={0}
          iconElementRight={
            this.props.loggedUser.user ?
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
                      style={styles.iconMenuBtn}
                      label="ACCOUNT"
                      icon={<Person />}
                      containerElement={<Link to="/account" />}
                    /><br />
                    <FlatButton
                      style={styles.iconMenuBtn}
                      label="CART"
                      icon={<ShoppingCart />}
                      containerElement={<Link to="/cart" />}
                    /><br />
                    <FlatButton
                      style={styles.iconMenuBtn}
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
                onClick={() => this.toggleOpen('loginModalOpen')} 
              />
          }
        />
        <LoginModal 
          isOpen={this.state.loginModalOpen} 
          onRequestClose={() => this.toggleOpen('loginModalOpen')} 
          switch={this.switchLoginRegister} 
        />
        <RegisterModal 
          isOpen={this.state.registerModalOpen} 
          onRequestClose={() => this.toggleOpen('registerModalOpen')} 
          switch={this.switchLoginRegister} 
        />
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  loggedUser: state.loggedUser,
  cart: state.cart
});

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(actions.getUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
