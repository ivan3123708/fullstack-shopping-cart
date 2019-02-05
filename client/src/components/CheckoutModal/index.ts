import { compose } from 'recompose';
import { connect } from 'react-redux';
import { selectItems } from '@selectors/cart';
import { IState, IProduct, } from '@state/index';
import { Props } from './CheckoutModal';
import CheckoutModal from './CheckoutModal';

interface EnhancedProps extends Props {
  cart?: IProduct[];
}

const mapStateToProps = (state: IState) => ({
  cart: selectItems(state)
});

export default compose<Props, EnhancedProps>(
  connect(mapStateToProps)
)(CheckoutModal);
