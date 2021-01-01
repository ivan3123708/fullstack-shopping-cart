import { IState, ICart, ICartProduct } from '@typings/state/index';

export const selectCart = (state: IState): ICart => state.cart;
export const selectItems = (state: IState): ICartProduct[] => state.cart.items;
