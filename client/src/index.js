import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ShoppingCart from './components/ShoppingCart';
import userReducer from './reducers/userReducer';
import catalogReducer from './reducers/catalogReducer';
import filtersReducer from './reducers/filtersReducer';
import sortReducer from './reducers/sortReducer';

const store = createStore(combineReducers({
  user: userReducer,
  catalog: catalogReducer,
  filters: filtersReducer,
  sortBy: sortReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}><ShoppingCart/></Provider>, document.getElementById('app_root'));