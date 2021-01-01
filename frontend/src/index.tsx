import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './store/configureStore';
import ShoppingCart from './components/ShoppingCart';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ShoppingCart />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app_root')
);
