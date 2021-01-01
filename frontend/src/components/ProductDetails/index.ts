import { compose } from 'recompose';
import { connect } from 'react-redux';
import { selectUser } from '@selectors/user';
import { selectProduct } from '@selectors/catalog';
import { IState } from '@typings/state/index'
import ProductDetails, { Props } from './ProductDetails';

const mapStateToProps = (state: IState, ownProps: any) => ({
  loggedUser: selectUser(state),
  product: selectProduct(state, ownProps)
});

export default compose<Props, {}>(
  connect(mapStateToProps)
)(ProductDetails);
