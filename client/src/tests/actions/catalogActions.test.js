import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { initCatalog } from '../../actions/catalogActions';
import catalog from '../__mocks__/catalog';

const mockStore = configureMockStore([thunk]);

beforeEach(() => moxios.install());
afterEach(() => moxios.uninstall());

test('dispatches INIT_CATALOG action and returns catalog', () => {
  moxios.wait(() => {
    const request = moxios.requests.mostRecent();
    request.respondWith({
      status: 200,
      response: catalog
    });
  });

  const store = mockStore({});

  return store.dispatch(initCatalog())
    .then(() => {
      expect(store.getActions()).toEqual([{ type: 'INIT_CATALOG', catalog }]);
    });
});