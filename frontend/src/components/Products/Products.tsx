import React, { useState, useEffect } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { ICatalogProduct } from '@typings/state/index';
import FiltersList from '../FiltersList';
import Product from '../Product';
import '@styles/Products.css';

export interface Props {
  catalogLoaded: boolean;
  catalog: ICatalogProduct[];
  sortBy: string;
  initCatalog: () => void;
  clearFilters: () => void;
  setSortBy: (value: string) => void;
}

const Products = ({ sortBy, setSortBy, initCatalog, catalog, catalogLoaded, clearFilters }: Props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [value, setValue] = useState(sortBy || 'Name: A-Z');

  const handleChange = (e: React.ChangeEvent, index: number, value: string) => {
    setSortBy(value);
    setValue(value);
  }

  useEffect(() => {
    initCatalog();
  }, []);

  if(!catalogLoaded) {
    return (
      <div className="loader">
        <img src="/img/loader.gif" />
        <h1>LOADING PRODUCTS...</h1>
      </div>
    );
  }
  
  return (
    <div className="products">
      <div className="products-handle">
        <div className="products-found">
          <span><b>Products found: </b>{catalog.length}</span>
        </div>
        <div className="filters">
          <div className="set-filters">
            <RaisedButton
              className="btn"
              label="Filter products"
              onClick={() => setDrawerOpen(!!drawerOpen)}
              primary={true}
            />
          </div>
          <RaisedButton
            className="btn"
            label="Clear Filters"
            onClick={clearFilters}
            secondary={true}
          />
        </div>
        <div className="products-sort">
          <span><b>Sort By:</b></span>
          <SelectField
            className="sort-field"
            value={value}
            onChange={handleChange}
          >
            <MenuItem value="Name: A-Z" primaryText="Name: A-Z" />
            <MenuItem value="Name: Z-A" primaryText="Name: Z-A" />
            <MenuItem value="Price: Low to High" primaryText="Price: Low to High" />
            <MenuItem value="Price: High to Low" primaryText="Price: High to Low" />
          </SelectField>
          <Drawer 
            docked={false}
            width={200}
            open={drawerOpen}
            onRequestChange={() => setDrawerOpen(!!drawerOpen)}
          >
            <FiltersList />
          </Drawer>
        </div>
      </div>
      {catalog.length ?
        catalog.map((item) => {
          return <Product key={item.info.name} item={item} />
        }) :
        <h1 className="no-products">No products found.</h1>}
    </div>
  );
}

export default Products;
