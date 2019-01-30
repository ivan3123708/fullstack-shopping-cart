import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import numeral from 'numeral';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import AddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';
import KeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import '@styles/ProductDetails.css';

export class ProductDetails extends React.Component {
  state = {
    postData: {
      user: this.props.loggedUser._id,
      product: this.props.product._id,
      quantity: 1
    },
    snackbarOpen: false
  }

  onQuantityChange = (e) => {
    let value = e.target.value;
    this.setState((prevState) => ({
      postData: { ...prevState.postData, quantity: value*1 }
    }));
  }

  addToCart = () => {
    axios.post('/api/cart', this.state.postData);
    this.setState({ snackbarOpen: true });
  }

  render() {
    const {
      loggedUser,
      product: {
        info: {
          name,
          photo,
          dimensions,
          weight,
          displayType,
          displaySize,
          displayResolution,
          os,
          cpu,
          internalMemory,
          ram,
          camera,
          batery,
          color,
          price
        }
      }
    } = this.props;

    return (
      <div className="product-details-container">
        <h1>{name}</h1>
        <div className="product-details">
          <div className="product-image">
            <img src={photo} />
          </div>
          <div className="product-info">
            <table>
              <tr>
                <th>Model</th>
                <td>{name}</td>
              </tr>
              <tr>
                <th>Dimensions</th>
                <td>{dimensions}</td>
              </tr>
              <tr>
                <th>Weight</th>
                <td>{weight}</td>
              </tr>
              <tr>
                <th>Display Type</th>
                <td>{displayType}</td>
              </tr>
              <tr>
                <th>Display Size</th>
                <td>{displaySize}</td>
              </tr>
              <tr>
                <th>Display Resolution</th>
                <td>{displayResolution}</td>
              </tr>
              <tr>
                <th>OS</th>
                <td>{os}</td>
              </tr>
              <tr>
                <th>CPU</th>
                <td>{cpu}</td>
              </tr>
              <tr>
                <th>Internal Memory</th>
                <td>{internalMemory}</td>
              </tr>
              <tr>
                <th>RAM</th>
                <td>{ram}</td>
              </tr>
              <tr>
                <th>Camera</th>
                <td>{camera}</td>
              </tr>
              <tr>
                <th>Batery</th>
                <td>{batery}</td>
              </tr>
              <tr>
                <th>Color</th>
                <td>{color}</td>
              </tr>
            </table>
            <Snackbar
              open={this.state.snackbarOpen}
              message={loggedUser ? 'Item added to your cart.' : 'You must be logged in!'}
              autoHideDuration={4000}
              bodyStyle={loggedUser ? { 'background': '#64DD17' } : { 'background': '#F44336' }}
            />
          </div>
        </div>
        <div className="product-handle">
          <div className="left">
            <RaisedButton
              containerElement={<Link to="/" />}
              className="btn"
              label="Back to catalog"
              labelPosition="after"
              secondary={true}
              icon={<KeyboardArrowLeft />}
            />
          </div>
          <div className="right">
            <div className="price">
              <span className="price-text">Price: </span>
              <span className="price-num">{numeral(price).format('$0,0.00')}</span>
            </div>
            <div className="quantity">
              <span className="price-text">Quantity: </span>
              <span><input type="number" value={this.state.postData.quantity} min="1" max="5" onChange={this.onQuantityChange} /></span>
            </div>
            <div className="btn">
              <RaisedButton
                onClick={this.addToCart}
                label="Add to cart"
                labelPosition="before"
                primary={true}
                icon={<AddShoppingCart />}
              />
            </div>
           </div> 
        </div>
      </div>
    );
  }
}

export default ProductDetails;