import { ICartProduct } from './cartProduct';

export interface ICart {
  isLoading: boolean;
  isLoaded: boolean;
  _id: string;
  items: ICartProduct[];
  error: string | null;
}
