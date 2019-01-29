import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { clearFilters } from '../actions/filterActions';
import { setSortBy } from '../actions/sortActions';
import filterProducts from '../selectors/filterProducts';
import sortProducts from '../selectors/sortProducts';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FiltersList from './FiltersList';
import Product from './Product';
import '../styles/Products.css';

export class Products extends React.Component {
  state = {
    drawerOpen: false,
    value: 'Name: A-Z'
  }

  toggleDrawer = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }

  handleChange = (event, index, value) => {
    this.props.setSortBy(value);
    this.setState({ value });
  }

  componentWillMount() {
    this.props.initCatalog();
  }
  
  render() {
    if(!this.props.catalogLoaded) {
      return (
        <div className="loader">
          <img src="/img/loader.gif" />
          <h1>LOADING PRODUCTS...</h1>
        </div>
      );
    } else return (
      <div className="products">
        <div className="products-handle">
          <div className="products-found">
            <span><b>Products found: </b>{this.props.catalog.length}</span>
          </div>
          <div className="filters">
            <div className="set-filters">
              <RaisedButton
                className="btn"
                label="Filter products"
                onClick={this.toggleDrawer}
                primary={true}
              />
            </div>
            <RaisedButton
              className="btn"
              label="Clear Filters"
              onClick={this.props.clearFilters}
              secondary={true}
            />
          </div>
          <div className="products-sort">
            <span><b>Sort By:</b></span>
            <SelectField
              className="sort-field"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <MenuItem value="Name: A-Z" primaryText="Name: A-Z" />
              <MenuItem value="Name: Z-A" primaryText="Name: Z-A" />
              <MenuItem value="Price: Low to High" primaryText="Price: Low to High" />
              <MenuItem value="Price: High to Low" primaryText="Price: High to Low" />
            </SelectField>
            <Drawer 
              docked={false}
              width={200}
              open={this.state.drawerOpen}
              onRequestChange={this.toggleDrawer}
            >
              <FiltersList />
            </Drawer>
          </div>
        </div>
        {this.props.catalog.length ? 
          this.props.catalog.map((item) => {
            return <Product key={item.info.name} item={item} />
          }) : 
          <h1 className="no-products">No products found.</h1>}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  catalogLoaded: state.catalog.isLoaded,
  catalog: sortProducts(filterProducts(state.catalog.items, state.filters), state.sortBy)
});

const mapDispatchToProps = (dispatch) => ({
  initCatalog: () => dispatch(actions.initCatalog()),
  setSortBy: (sortBy) => dispatch(setSortBy(sortBy)),
  clearFilters: () => dispatch(clearFilters())
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);