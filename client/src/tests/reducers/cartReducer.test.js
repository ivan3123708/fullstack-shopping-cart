import cartReducer, { defaultCartState } from '../../reducers/cartReducer';
import cart from '../__mocks__/cart';

test('returns cart state', () => {
  const action = {
    type: 'GET_CART',
    cart
  };
  const result = cartReducer(defaultCartState, action);

  expect(result).toEqual(cart);
});