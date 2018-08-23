import catalogReducer, { defaultCatalogState } from '../../reducers/catalogReducer';
import catalog from '../__mocks__/catalog';

test('returns catalog state', () => {
  const action = {
    type: 'INIT_CATALOG',
    catalog
  };
  const result = catalogReducer(defaultCatalogState, action);

  expect(result).toEqual({
    isLoaded: true,
    items: catalog
  });
});