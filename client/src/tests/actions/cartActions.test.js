import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { getCart } from '../../actions/cartActions';
import cart from '../__mocks__/cart';

const mockStore = configureMockStore([thunk]);

beforeEach(() => moxios.install());
afterEach(() => moxios.uninstall());

test('dispatches GET_CART action and returns cart', () => {
  moxios.wait(() => {
    const request = moxios.requests.mostRecent();
    request.respondWith({
      status: 200,
      response: cart,
    });
  });

  const store = mockStore({});

  return store.dispatch(getCart())
    .then(() => {
      expect(store.getActions()).toEqual([{ type: 'GET_CART', cart }]);
    });
});