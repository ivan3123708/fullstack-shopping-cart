import { Product } from './product';

export interface Catalog {
  isLoading: boolean;
  isLoaded: boolean;
  items: Product[];
  error: string | null;
}
