import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { getUser } from '../../actions/userActions';
import user from '../__mocks__/user';

const mockStore = configureMockStore([thunk]);

beforeEach(() => moxios.install());
afterEach(() => moxios.uninstall());

test('dispatches GET_USER action and returns user', () => {
  moxios.wait(() => {
    const request = moxios.requests.mostRecent();
    request.respondWith({
      status: 200,
      response: user
    });
  });

  const store = mockStore({});

  return store.dispatch(getUser())
    .then(() => {
      expect(store.getActions()).toEqual([{ type: 'GET_USER', user }]);
    });
});