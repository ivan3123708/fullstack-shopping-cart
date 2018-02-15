import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import ShoppingCart from './components/ShoppingCart';
import userReducer from './reducers/userReducer';
import cartReducer from './reducers/cartReducer';
import catalogReducer from './reducers/catalogReducer';
import filtersReducer from './reducers/filtersReducer';
import sortReducer from './reducers/sortReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    loggedUser: userReducer,
    cart: cartReducer,
    catalog: catalogReducer,
    filters: filtersReducer,
    sortBy: sortReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(<Provider store={store}><ShoppingCart/></Provider>, document.getElementById('app_root'));