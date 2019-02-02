import { compose } from 'recompose';
import { connect } from 'react-redux';
import { selectUser } from '@selectors/user';
import { selectProduct } from '@selectors/catalog';
import ProductDetails from './ProductDetails';

const mapStateToProps = (state, props) => ({
  loggedUser: selectUser(state),
  product: selectProduct(state, props)
});

export default compose(
  connect(mapStateToProps)
)(ProductDetails);
