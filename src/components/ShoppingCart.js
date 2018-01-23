import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const ShoppingCart = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <MuiThemeProvider>
            <Header/>
          </MuiThemeProvider>
        </div>
      </BrowserRouter>
    </div>
  )
};

export default ShoppingCart;