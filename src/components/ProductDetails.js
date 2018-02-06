import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import AddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';
import '../styles/ProductDetails.css';

const ProductDetails = ({ product }) => (
  <div>
    <h1>{product.info.name}</h1>
    <div className="product-details">
      <div className="product-image">
        <img src={product.info.photo} />
      </div>
      <div className="product-info">
        <table>
          <tr>
            <th>Model</th>
            <td>{product.info.name}</td>
          </tr>
          <tr>
            <th>Dimensions</th>
            <td>{product.info.dimensions}</td>
          </tr>
          <tr>
            <th>Weight</th>
            <td>{product.info.weight}</td>
          </tr>
          <tr>
            <th>Display Type</th>
            <td>{product.info.displayType}</td>
          </tr>
          <tr>
            <th>Display Size</th>
            <td>{product.info.displaySize}</td>
          </tr>
          <tr>
            <th>Display Resolution</th>
            <td>{product.info.displayResolution}</td>
          </tr>
          <tr>
            <th>OS</th>
            <td>{product.info.os}</td>
          </tr>
          <tr>
            <th>CPU</th>
            <td>{product.info.cpu}</td>
          </tr>
          <tr>
            <th>Internal Memory</th>
            <td>{product.info.internalMemory}</td>
          </tr>
          <tr>
            <th>RAM</th>
            <td>{product.info.ram}</td>
          </tr>
          <tr>
            <th>Camera</th>
            <td>{product.info.camera}</td>
          </tr>
          <tr>
            <th>Batery</th>
            <td>{product.info.batery}</td>
          </tr>
          <tr>
            <th>Color</th>
            <td>{product.info.color}</td>
          </tr>
        </table>
        <span className="price-text">Price: </span>
        <span className="price-num">{product.info.price}</span>
        <span className="price-text">Amount: </span>
        <span><input type="number" name="amount"/></span>
        <RaisedButton
          containerElement={<Link to="/" />}
          className="btn"
          label="Add to cart"
          labelPosition="before"
          primary={true}
          icon={<AddShoppingCart />}
        />
      </div>
    </div>
  </div>
);

const mapStateToProps = (state, props) => ({
  product: state.catalog.find((item) => item.id == props.match.params.id)
});

export default connect(mapStateToProps)(ProductDetails);