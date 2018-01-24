import React from 'react';
import { connect } from 'react-redux';
import { toggleLogged } from '../actions/testActions';
import { AppBar, FlatButton } from 'material-ui';

class Header extends React.Component {
  render() {
    return (
      <AppBar 
        title="MobileHouse"
        iconElementRight={<FlatButton 
          label={this.props.isLogged ? 'LOGOUT' : 'LOGIN'} 
          onClick={this.props.login}
        />}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  isLogged: state.isLogged
});

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(toggleLogged())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);