import { Product } from './product';

interface Item {
  _id: string;
  product: Product;
  quantity: number;
}

export interface Cart {
  isLoading: boolean;
  isLoaded: boolean;
  _id: string;
  items: Item[];
  error: string | null;
}
