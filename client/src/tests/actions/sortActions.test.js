import { setSortBy } from '../../actions/sortActions';

test('returns sort by action object', () => {
  const sortBy = 'Price: Low to High';
  const action = setSortBy(sortBy);

  expect(action).toEqual({
    type: 'SET_SORT_BY',
    sortBy
  });
});