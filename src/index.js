import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ShoppingCart from './components/ShoppingCart';
import testReducer from './reducers/testReducer';
import catalogReducer from './reducers/catalogReducer';
import filtersReducer from './reducers/filtersReducer';

const store = createStore(combineReducers({
  test: testReducer,
  catalog: catalogReducer,
  filters: filtersReducer
}));

ReactDOM.render(<Provider store={store}><ShoppingCart/></Provider>, document.getElementById('app_root'));