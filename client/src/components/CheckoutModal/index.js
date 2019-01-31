import { compose } from 'recompose';
import { connect } from 'react-redux';
import { selectItems } from '@selectors/cart';
import CheckoutModal from './CheckoutModal';

const mapStateToProps = (state) => ({
  cart: selectItems(state)
});

export default compose(
  connect(mapStateToProps)
)(CheckoutModal);
