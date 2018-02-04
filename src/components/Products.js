import React from 'react';
import { connect } from 'react-redux';
import { initCatalog } from '../actions/catalogActions';
import Product from './Product';
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
  catalog: state.catalog
});

const mapDispatchToProps = (dispatch) => ({
  initCatalog : (dispatch) => initCatalog
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);