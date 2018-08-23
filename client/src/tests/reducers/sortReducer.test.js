import sortReducer, { defaultSortState } from '../../reducers/sortReducer';

test('return sort by state', () => {
  const action = {
    type: 'SET_SORT_BY',
    sortBy: 'Price: Low to High'
  }
  const result = sortReducer(defaultSortState, action);

  expect(result).toBe('Price: Low to High');
});