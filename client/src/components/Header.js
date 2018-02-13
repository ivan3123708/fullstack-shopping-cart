import React from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions/userActions';
import { AppBar, FlatButton } from 'material-ui';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

class Header extends React.Component {

  state = {
    loginModalOpen: false,
    registerModalOpen: false
  }

  styles = {
    fontFamily: 'Bungee Inline',
    fontStyle: 'italic'
  }

  toggleLoginModal = () => {
    this.setState((prevState) => ({ loginModalOpen: !prevState.loginModalOpen }))
  }

  toggleRegisterModal = () => {
    this.setState((prevState) => ({ registerModalOpen: !prevState.registerModalOpen }))
  }

  switchLoginRegister = () => {
    this.setState((prevState) => ({ 
      loginModalOpen: !prevState.loginModalOpen,
      registerModalOpen: !prevState.registerModalOpen 
    }))
  }

  componentWillMount() {
    this.props.getUser();
  }

  render() {
    console.log(this.props);
    return (
      <div className="header">
        <AppBar 
          title="MOBILE SHOP"
          titleStyle={this.styles}
          showMenuIconButton={false}
          iconElementRight={
            this.props.loggedUser ? 
              <FlatButton label="LOGOUT" containerElement={<a href="/auth/logout"/>} /> : 
              <FlatButton label="LOGIN" onClick={this.toggleLoginModal} />
          }
        />
        <LoginModal isOpen={this.state.loginModalOpen} onRequestClose={this.toggleLoginModal} switch={this.switchLoginRegister} />
        <RegisterModal isOpen={this.state.registerModalOpen} onRequestClose={this.toggleRegisterModal} switch={this.switchLoginRegister} />
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  loggedUser: state.loggedUser 
});

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);