import { ICatalogProduct } from './catalogProduct';

export interface ICatalog {
  isLoading: boolean;
  isLoaded: boolean;
  items: ICatalogProduct[];
  error: string | null;
}
