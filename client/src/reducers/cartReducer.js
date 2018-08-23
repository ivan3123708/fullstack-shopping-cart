export const defaultCartState = {
  _id: '',
  items: []
};

const cartReducer = (state = defaultCartState, action) => {
  switch(action.type) {
    case 'GET_CART':
      return action.cart || defaultCartState;
    default:
      return state;
  }
};

export default cartReducer;