import { IProduct } from './product';

export interface ICart {
  isLoading: boolean;
  isLoaded: boolean;
  _id: string;
  items: IProduct[];
  error: string | null;
}
