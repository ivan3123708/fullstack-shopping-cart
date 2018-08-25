import { setFilter, clearFilters } from '../../actions/filterActions';

test('returns set filter object', () => {
  const filterType = 'brand';
  const filter = 'samsung';
  const action = setFilter(filterType, filter);

  expect(action).toEqual({
    type: 'SET_FILTER',
    filterType,
    filter
  });
});

test('returns clear filters object', () => {
  const action = clearFilters();

  expect(action).toEqual({ type: 'CLEAR_FILTERS' });
});