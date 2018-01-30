import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header';
import FiltersList from './FiltersList';
import Products from './Products';
import '../styles/ShoppingCart.css';

const ShoppingCart = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <MuiThemeProvider>
            <Header/>
              <div className="main">
                <FiltersList/>
                <Products/>
              </div>
          </MuiThemeProvider>
        </div>
      </BrowserRouter>
    </div>
  )
};

export default ShoppingCart;