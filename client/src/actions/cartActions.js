import axios from 'axios';

const getCart = () => {
  return (dispatch) => {
    axios.get('/api/cart')
      .then((res) => dispatch({
        type: 'GET_CART',
        cart: res.data
      }))
      .catch((err) => console.log(err));
  }
}

export { getCart };