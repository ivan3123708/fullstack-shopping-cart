const cartReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_CART':
      return action.cart;
    default:
      return state;
  }
};

export default cartReducer;