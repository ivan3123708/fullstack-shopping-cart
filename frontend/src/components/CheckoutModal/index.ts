import { compose } from 'recompose';
import { connect } from 'react-redux';
import { selectItems } from '@selectors/cart';
import { IState, ICartProduct, } from '@typings/state/index';
import { ModalProps } from '@typings/modal';
import CheckoutModal from './CheckoutModal';

interface EnhancedProps extends ModalProps {
  cart?: ICartProduct[];
}

const mapStateToProps = (state: IState) => ({
  cart: selectItems(state)
});

export default compose<ModalProps, EnhancedProps>(
  connect(mapStateToProps)
)(CheckoutModal);
