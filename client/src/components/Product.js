import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import NavigateNext from 'material-ui/svg-icons/image/navigate-next';
import '../styles/Product.css';

const Product = ({ item }) => (
  <div className="product">
    <img src={item.info.photo} />
    <div className="content">
      <div className="content-left">
        <h3>{item.info.name}</h3>
        <div><b>Display size: </b><span>{item.info.displaySize}</span></div>
        <div><b>Display resolution: </b><span>{item.info.displayResolution}</span></div>
        <div><b>CPU: </b><span>{item.info.cpu}</span></div>
        <div><b>Internal memory: </b><span>{item.info.internalMemory}</span></div>
        <div><b>RAM: </b><span>{item.info.ram}</span></div>
        <div><b>Camera: </b><span>{item.info.camera}</span></div>
      </div>
      <div className="content-right">
        <h2>${item.info.price}.00</h2>
        <RaisedButton
          containerElement={<Link to={`/product/${item.id}`} />}
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