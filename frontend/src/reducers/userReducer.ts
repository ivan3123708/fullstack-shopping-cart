import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  LOGOUT_SUCCESS,
} from '../constants';
import { IUser } from '@typings/state/user';
import { ILoggedUser } from '@typings/state/loggedUser';
import { actionTypes } from '@typings/action';

interface IAction {
  type: actionTypes;
  payload: IUser;
}

const initState: ILoggedUser = {
  isLoading: false,
  isLoaded: false,
  user: null,
  error: null
}

const userReducer = (state = initState, action: IAction) => {
  switch(action.type) {
    case GET_USER:
      return {
        ...state,
        isLoading: true
      }
    case GET_USER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
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
    case LOGOUT_SUCCESS:
      localStorage.removeItem('token');
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        user: null,
        error: null
      }
    default:
      return state;
  }
}

export default userReducer;
