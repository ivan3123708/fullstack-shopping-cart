import { IProduct } from './product';

export interface ICatalog {
  isLoading: boolean;
  isLoaded: boolean;
  items: IProduct[];
  error: string | null;
}
