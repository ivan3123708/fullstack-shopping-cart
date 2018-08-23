import sortProducts from '../../selectors/sortProducts';
import catalog from '../__mocks__/catalog';

test('sort products in catalog by name', () => {
  const result = sortProducts(catalog, 'Name: Z-A');

  expect(result[0].info.name).toBe('Samsung Galaxy S8');
  expect(result[2].info.name).toBe('Apple iPhone 8 Plus');
});

test('sort products in catalog by price', () => {
  const result = sortProducts(catalog, 'Price: Low to High');

  expect(result[0].info.name).toBe('Apple iPhone 8 Plus');
  expect(result[2].info.name).toBe('LG G6');
});