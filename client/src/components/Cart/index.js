import { compose } from 'recompose';
import { connect } from 'react-redux';
import { getCart } from '@actions';
import { selectCart } from '@selectors/cart';
import Cart from './Cart';

const mapStateToProps = (state) => ({
  cart: selectCart(state)
});

const actions = { getCart };

export default compose(
  connect(mapStateToProps, actions)
)(Cart);
