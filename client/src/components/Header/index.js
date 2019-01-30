import { compose } from 'recompose';
import { connect } from 'react-redux';
import { getUser } from '@actions';
import Header from './Header';

const mapStateToProps = (state) => ({
  loggedUser: state.loggedUser,
  cart: state.cart
});

const actions = { getUser };

export default compose(
  connect(mapStateToProps, actions)
)(Header);
