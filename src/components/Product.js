import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import NavigateNext from 'material-ui/svg-icons/image/navigate-next';
import '../styles/Product.css';

const Product = () => (
  <div className="product">
    <img src="./img/a3.JPG" />
    <div className="content">
      <div className="content-left">
        <h3>SAMSUNG A3 2015</h3>
        <div><b>Display size: </b><span>15 inches</span></div>
        <div><b>Display resolution: </b><span>1920x1440</span></div>
        <div><b>CPU: </b><span>1920x1440</span></div>
        <div><b>Internal memory: </b><span>1920x1440</span></div>
        <div><b>RAM: </b><span>1920x1440</span></div>
        <div><b>Camera: </b><span>1920x1440</span></div>
      </div>
      <div className="content-right">
        <h2>$250.50</h2>
        <RaisedButton
          className="btn"
          label="See more"
          labelPosition="before"
          primary={true}
          icon={<NavigateNext />}
        />
      </div>
    </div>
  </div>
);

export default Product;