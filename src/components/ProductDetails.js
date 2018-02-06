import React from 'react';
import { connect } from 'react-redux';

const ProductDetails = (props) => (
  <div>
    <h3>Some details</h3>
    <p>{props.product.info.name}</p>
  </div>
);

const mapStateToProps = (state, props) => ({
  product: state.catalog.find((item) => item.id == props.match.params.id)
});

export default connect(mapStateToProps)(ProductDetails);