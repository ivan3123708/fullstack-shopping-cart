import filterProducts from '../../selectors/filterProducts';
import catalog from '../__mocks__/catalog';
import filters from '../__mocks__/filters';

test('filter the products from catalog', () => {
  const result = filterProducts(catalog, filters);

  expect(result).toHaveLength(1);
  expect(result[0].info.name).toBe('Apple iPhone 8 Plus');
});