import React from 'react';
import FiltersList from './FiltersList';
import Products from './Products';

const Homepage = () => (
  <div className="homepage">
    <FiltersList />
    <Products />
  </div>
);

export default Homepage;