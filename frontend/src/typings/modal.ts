import { ICartProduct } from './state/index';

export type modal =
  null |
  'snackbar' |
  'checkout' |
  'orderSuccess' |
  'dialog' |
  'login' |
  'register';

export interface ModalProps {
  isOpen: boolean;
  setActiveModal: (modal: modal) => void;
  onRequestClose: (event?: any) => void;
  cart?: ICartProduct[];
  makeOrder?: () => void;
  setUser?: (data: Record<string, any>) => void;
}
