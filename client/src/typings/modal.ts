import { IProduct } from './state/index';
import { IOrder } from './state/index';

export type targetModal =
  'snackbarOpen' |
  'checkoutModalOpen' |
  'orderSuccessModalOpen' |
  'dialogOpen' |
  'loginModalOpen' |
  'registerModalOpen';

export interface ModalProps {
  isOpen: boolean;
  toggle: (targetComponent: targetModal) => void;
  onRequestClose: (targetComponent: targetModal) => void;
  cart?: IProduct[];
  makeOrder?: () => IOrder;
}
