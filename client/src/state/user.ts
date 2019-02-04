import { Order } from './order';

export interface User {
  orders: Order[];
  username: string;
  email: string;
  address: string;
  phone: string;
  _id: string;
}
