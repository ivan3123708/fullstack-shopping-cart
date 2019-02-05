import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../Header';
import Account from '../Account';
import Cart from '../Cart';
import Homepage from '../Homepage';
import ProductDetails from '../ProductDetails';
import Footer from '../Footer';
import NotFound from '../NotFound';
import '@styles/ShoppingCart.css';

const ShoppingCart = () => (
  <BrowserRouter>
    <MuiThemeProvider>
      <div className="container">
        <Route component={Header} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/account" component={Account} />
          <Route path="/cart" component={Cart} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route component={NotFound} />
        </Switch>
        <Route component={Footer} />
      </div>
    </MuiThemeProvider>
  </BrowserRouter>
);

export default ShoppingCart;
