import userReducer from '../../reducers/userReducer';
import user from '../__mocks__/user';

test('returns user state', () => {
  const action = {
    type: 'GET_USER',
    user
  }
  const result = userReducer(null, action);

  expect(result).toEqual(user);
});