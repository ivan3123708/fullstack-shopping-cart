import React from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions/userActions';
import { Link } from 'react-router-dom';
import { AppBar, FlatButton } from 'material-ui';
import Person from 'material-ui/svg-icons/social/person';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart.js';
import Input from 'material-ui/svg-icons/action/input.js';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import '../styles/Header.css';

class Header extends React.Component {

  state = {
    loginModalOpen: false,
    registerModalOpen: false
  }

  styles = {
    title: {
      fontFamily: 'Bungee Inline',
      fontStyle: 'italic'
    },
    menu: { 
      marginTop: '5px'
    },
    btn: {
      color: 'white'
    }
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
          title="MOBILE SHOP"
          titleStyle={this.styles.title}
          onTitleClick={() => this.props.history.push('/')}
          showMenuIconButton={false}
          zDepth={0}
          iconElementRight={
            this.props.loggedUser ? 
              <div style={this.styles.menu}>
                <FlatButton 
                  style={this.styles.btn} 
                  label="ACCOUNT" 
                  icon={<Person />} 
                  containerElement={<Link to="/account" />}
                />
                <FlatButton 
                  style={this.styles.btn} 
                  label="CART" 
                  icon={<ShoppingCart />} 
                  containerElement={<Link to="/cart" />}
                />
                <FlatButton 
                  style={this.styles.btn} 
                  label="LOGOUT" 
                  containerElement={<a href="/auth/logout"/>}
                />
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
  getUser: () => dispatch(getUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);