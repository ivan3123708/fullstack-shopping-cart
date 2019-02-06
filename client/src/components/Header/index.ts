import { compose } from 'recompose';
import { connect } from 'react-redux';
import { getUser } from '@actions/index';
import { selectUser } from '@selectors/user';
import { selectCart } from '@selectors/cart';
import { IState } from '@typings/state/index';
import Header from './Header';

const mapStateToProps = (state: IState) => ({
  loggedUser: selectUser(state),
  cart: selectCart(state)
});

const actions = { getUser };

export default compose(
  connect(mapStateToProps, actions)
)(Header);
