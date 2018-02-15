import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import AddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';
import '../styles/ProductDetails.css';

class ProductDetails extends React.Component {

  addToCart = () => {
    axios.post('/api/cart', {
      user: this.props.loggedUser._id,
      item: this.props.product._id
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.product.info.name}</h1>
        <div className="product-details">
          <div className="product-image">
            <img src={this.props.product.info.photo} />
          </div>
          <div className="product-info">
            <table>
              <tr>
                <th>Model</th>
                <td>{this.props.product.info.name}</td>
              </tr>
              <tr>
                <th>Dimensions</th>
                <td>{this.props.product.info.dimensions}</td>
              </tr>
              <tr>
                <th>Weight</th>
                <td>{this.props.product.info.weight}</td>
              </tr>
              <tr>
                <th>Display Type</th>
                <td>{this.props.product.info.displayType}</td>
              </tr>
              <tr>
                <th>Display Size</th>
                <td>{this.props.product.info.displaySize}</td>
              </tr>
              <tr>
                <th>Display Resolution</th>
                <td>{this.props.product.info.displayResolution}</td>
              </tr>
              <tr>
                <th>OS</th>
                <td>{this.props.product.info.os}</td>
              </tr>
              <tr>
                <th>CPU</th>
                <td>{this.props.product.info.cpu}</td>
              </tr>
              <tr>
                <th>Internal Memory</th>
                <td>{this.props.product.info.internalMemory}</td>
              </tr>
              <tr>
                <th>RAM</th>
                <td>{this.props.product.info.ram}</td>
              </tr>
              <tr>
                <th>Camera</th>
                <td>{this.props.product.info.camera}</td>
              </tr>
              <tr>
                <th>Batery</th>
                <td>{this.props.product.info.batery}</td>
              </tr>
              <tr>
                <th>Color</th>
                <td>{this.props.product.info.color}</td>
              </tr>
            </table>
            <span className="price-text">Price: </span>
            <span className="price-num">${this.props.product.info.price}.00</span>
            <span className="price-text">Amount: </span>
            <span><input type="number" name="amount"/></span>
            <RaisedButton
              onClick={this.addToCart}
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
  }
}

const mapStateToProps = (state, props) => ({
  loggedUser: state.loggedUser,
  product: state.catalog.find((item) => item._id == props.match.params.id)
});

export default connect(mapStateToProps)(ProductDetails);