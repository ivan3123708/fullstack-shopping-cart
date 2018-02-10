import React from 'react';
import { connect } from 'react-redux';
import { initCatalog } from '../actions/catalogActions';
import { setSortBy } from '../actions/sortActions';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Product from './Product';
import filterProducts from '../selectors/filterProducts';
import sortProducts from '../selectors/sortProducts';
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
    return (
      <div className="products">
        <div className="products-handle">
          <span>Products found: {this.props.catalog.length}</span>
          <span>Sort By: </span>
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
  initCatalog : (dispatch) => initCatalog,
  setSortBy: (sortBy) => dispatch(setSortBy(sortBy))
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);