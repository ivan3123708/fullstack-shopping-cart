import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import ShoppingCart from './components/ShoppingCart';


ReactDOM.render(
  <Provider store={store}>
    <ShoppingCart />
  </Provider>,
  document.getElementById('app_root')
);
