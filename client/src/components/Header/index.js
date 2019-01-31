import { compose } from 'recompose';
import { connect } from 'react-redux';
import { getUser } from '@actions';
import { selectUser } from '@selectors/user';
import { selectCart } from '@selectors/cart';
import Header from './Header';

const mapStateToProps = (state) => ({
  loggedUser: selectUser(state),
  cart: selectCart(state)
});

const actions = { getUser };

export default compose(
  connect(mapStateToProps, actions)
)(Header);
