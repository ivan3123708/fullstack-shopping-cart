import filtersReducer, { defaultFiltersState } from '../../reducers/filtersReducer';

test('returns filters state', () => {
  const action = {
    type: 'SET_FILTER',
    filterType: 'brand',
    filter: 'samsung'
  };
  const result = filtersReducer(defaultFiltersState, action);

  expect(result).toEqual({
    ...defaultFiltersState,
    brand: ['samsung']
  });
});

test('returns cleared (default) filter state', () => {
  const action = {
    type: 'CLEAR_FILTERS'
  };
  const result = filtersReducer(defaultFiltersState, action);

  expect(result).toEqual(defaultFiltersState);
});