import React from 'react';
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

  render() {
    return (
      <div className="header">
        <AppBar 
          style={this.styles}
          title="MOBILE SHOP"
          iconElementRight={<FlatButton 
            label="LOGIN"
            onClick={this.toggleLoginModal}
          />}
        />
        <LoginModal isOpen={this.state.loginModalOpen} onRequestClose={this.toggleLoginModal} switch={this.switchLoginRegister} />
        <RegisterModal isOpen={this.state.registerModalOpen} onRequestClose={this.toggleRegisterModal} switch={this.switchLoginRegister} />
      </div>
    )
  }
}

export default Header;