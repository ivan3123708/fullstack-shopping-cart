import { compose } from 'recompose';
import { connect } from 'react-redux';
import { getCart } from '@actions/index';
import { selectCart } from '@selectors/cart';
import { IState } from '@typings/state/index';
import Cart from './Cart';

const mapStateToProps = (state: IState) => ({
  cart: selectCart(state)
});

const actions = { getCart };

export default compose(
  connect(mapStateToProps, actions)
)(Cart);
