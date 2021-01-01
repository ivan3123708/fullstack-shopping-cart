import { compose } from 'recompose';
import { connect } from 'react-redux';
import { getUser, getUserSuccess, logoutSuccess } from '@actions/index';
import { selectUser } from '@selectors/user';
import { selectCart } from '@selectors/cart';
import { IState } from '@typings/state/index';
import Header, { Props } from './Header';

const mapStateToProps = (state: IState) => ({
  loggedUser: selectUser(state),
  cart: selectCart(state)
});

const actions = { getUser, getUserSuccess, logoutSuccess };

export default compose<Props, {}>(
  connect(mapStateToProps, actions)
)(Header);
