import React from 'react';
import { connect } from 'react-redux';
import { initCatalog } from '../actions/catalogActions';
import { clearFilters } from '../actions/filterActions';
import { setSortBy } from '../actions/sortActions';
import filterProducts from '../selectors/filterProducts';
import sortProducts from '../selectors/sortProducts';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Remove from 'material-ui/svg-icons/content/remove-circle-outline.js';
import Product from './Product';
import '../styles/Products.css';

class Products extends React.Component {

  state = {
    value: 'Name: A-Z'
  }

  handleChange = (event, index, value) => {
    this.props.setSortBy(value);
    this.setState({ value });
  }

  componentWillMount() {
    this.props.initCatalog();
  }
  
  render() {
    if(this.props.catalog.length === 0) {
      return (
        <h1 className="loader">LOADING PRODUCTS...</h1>
      )
    } else return (
      <div className="products">
        <div className="products-handle">
          <div className="left">
            <span><b>Products found: </b>{this.props.catalog.length}</span>
            <RaisedButton
              className="btn"
              label="Clear Filters"
              labelPosition="before" 
              icon={<Remove/>}
              onClick={this.props.clearFilters}
              secondary={true}
            />
          </div>
          <div className="right">
            <span><b>Sort By:</b></span>
            <SelectField
              value={this.state.value}
              onChange={this.handleChange}
            >
              <MenuItem value="Name: A-Z" primaryText="Name: A-Z" />
              <MenuItem value="Name: Z-A" primaryText="Name: Z-A" />
              <MenuItem value="Price: Low to High" primaryText="Price: Low to High" />
              <MenuItem value="Price: High to Low" primaryText="Price: High to Low" />
            </SelectField>
          </div>
        </div>
        {this.props.catalog.map((item) => {
          return <Product item={item} />
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  catalog: sortProducts(filterProducts(state.catalog, state.filters), state.sortBy)
});

const mapDispatchToProps = (dispatch) => ({
  initCatalog: () => dispatch(initCatalog()),
  setSortBy: (sortBy) => dispatch(setSortBy(sortBy)),
  clearFilters: () => dispatch(clearFilters())
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);