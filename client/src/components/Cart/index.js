import { compose } from 'recompose';
import { connect } from 'react-redux';
import { getCart } from '@actions';
import Cart from './Cart';

const mapStateToProps = (state) => ({
  cart: state.cart
});

const actions = { getCart };

export default compose(
  connect(mapStateToProps, actions)
)(Cart);
