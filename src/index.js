import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ShoppingCart from './components/ShoppingCart';
import testReducer from './reducers/testReducer';

const store = createStore(testReducer);

ReactDOM.render(<Provider store={store}><ShoppingCart/></Provider>, document.getElementById('app_root'));