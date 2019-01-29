import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL
} from '../constants';

const initState = {
  isLoading: false,
  isLoaded: false,
  user: null,
  error: null
}

const userReducer = (state = initState, action) => {
  switch(action.type) {
    case GET_USER:
      return {
        ...state,
        isLoading: true
      }
    case GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        user: action.payload,
        error: null
      }
    case GET_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        user: null,
        error: action.payload
      }
    default: 
      return state;
  }
}

export default userReducer;
