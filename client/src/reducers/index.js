import { combineReducers } from 'redux';
import userReducer from './userReducer';
import cartReducer from './cartReducer';
import catalogReducer from './catalogReducer';
import filtersReducer from './filtersReducer';
import sortReducer from './sortReducer';

const rootReducer = combineReducers({
  loggedUser: userReducer,
  cart: cartReducer,
  catalog: catalogReducer,
  filters: filtersReducer,
  sortBy: sortReducer
});

export default rootReducer;
