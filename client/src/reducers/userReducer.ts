import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL
} from '../constants';
import { ILoggedUser } from '@typings/state/loggedUser';
import { actionTypes } from '@typings/action';

interface IAction {
  type: actionTypes;
  payload: ILoggedUser;
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
