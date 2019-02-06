import { IOrder } from './order';

export interface IUser {
  orders: IOrder[];
  username: string;
  email: string;
  address: string;
  phone: string;
  _id: string;
}
