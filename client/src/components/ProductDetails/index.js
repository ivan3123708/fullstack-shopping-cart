import { compose } from 'recompose';
import { connect } from 'react-redux';
import ProductDetails from './ProductDetails';

const mapStateToProps = (state, props) => ({
  loggedUser: state.loggedUser.user,
  product: state.catalog.items.find((item) => item._id == props.match.params.id)
});

export default compose(
  connect(mapStateToProps)
)(ProductDetails);
