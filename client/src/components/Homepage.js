import React from 'react';
import FiltersList from './FiltersList';
import Products from './Products';
import '../styles/Homepage.css';

const Homepage = () => (
  <div className="homepage-container">
    <FiltersList />
    <Products />
  </div>
);

export default Homepage;