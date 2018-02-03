import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ShoppingCart from './components/ShoppingCart';
import testReducer from './reducers/testReducer';
import filtersReducer from './reducers/filtersReducer';

const store = createStore(combineReducers({
  test: testReducer,
  productFilters: filtersReducer
}));

ReactDOM.render(<Provider store={store}><ShoppingCart/></Provider>, document.getElementById('app_root'));