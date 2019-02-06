import { ICartProduct } from './state/index';

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
  onRequestClose?: (event: MouseEvent) => void;
  cart?: ICartProduct[];
  makeOrder?: () => void;
}
