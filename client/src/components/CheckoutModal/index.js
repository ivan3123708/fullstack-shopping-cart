import { compose } from 'recompose';
import { connect } from 'react-redux';
import CheckoutModal from './CheckoutModal';

const mapStateToProps = (state) => ({
  cart: state.cart.items
});

export default compose(
  connect(mapStateToProps)
)(CheckoutModal);
