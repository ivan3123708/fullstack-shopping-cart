import { GET_CART, GET_CART_SUCCESS, GET_CART_FAIL } from '../constants';

export const initState = {
  isLoading: false,
  isLoaded: false,
  _id: '',
  items: [],
  error: null
};

const cartReducer = (state = initState, action) => {
  switch(action.type) {
    case GET_CART:
      return {
        ...state,
        isLoading: true
      }
    case GET_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        items: action.payload
      }
    case GET_CART_FAIL:
      return {
        ...state,
        isLoaded: true,
        error: action.payload
      }
    default:
      return state;
  }
};

export default cartReducer;
