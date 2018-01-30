import React from 'react';
import Product from './Product';
import '../styles/Products.css';

const Products = () => (
  <div className="products">
    <Product/>
    <Product />
    <Product />
    <Product />
  </div>
);

export default Products;