import React from 'react';
import { connect } from 'react-redux';
import { initCatalog } from '../actions/catalogActions';
import Product from './Product';
import filterProducts from '../selectors/filterProducts';
import '../styles/Products.css';

class Products extends React.Component {

  componentWillMount() {
    this.props.initCatalog();
  }
  
  render() {
    return (
      <div className="products">
        {this.props.catalog.map((item) => {
          return <Product item={item} />
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  catalog: filterProducts(state.catalog, state.filters) 
});

const mapDispatchToProps = (dispatch) => ({
  initCatalog : (dispatch) => initCatalog
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);