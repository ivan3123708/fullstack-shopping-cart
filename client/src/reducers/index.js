import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import userReducer from './userReducer';
import cartReducer from './cartReducer';
import catalogReducer from './catalogReducer';
import filtersReducer from './filtersReducer';
import sortReducer from './sortReducer';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  loggedUser: userReducer,
  cart: cartReducer,
  catalog: catalogReducer,
  filters: filtersReducer,
  sortBy: sortReducer
});

export default createRootReducer;
