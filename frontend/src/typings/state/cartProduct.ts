import { ICatalogProduct } from './catalogProduct';

export interface ICartProduct {
  product: ICatalogProduct;
  _id: string;
  quantity?: number;
}
