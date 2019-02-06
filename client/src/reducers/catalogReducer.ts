import { INIT_CATALOG, INIT_CATALOG_SUCCESS, INIT_CATALOG_FAIL } from '../constants';
import { ICatalog } from '@typings/state/index';
import { actionTypes } from '@typings/action';

interface IAction {
  type: actionTypes;
  payload: ICatalog;
}

const initState: ICatalog = {
  isLoading: false,
  isLoaded: false,
  items: [],
  error: null
};

const catalogReducer = (state = initState, action: IAction) => {
  switch (action.type) {
    case INIT_CATALOG:
      return {
        ...state,
        isLoading: true
      }
    case INIT_CATALOG_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        items: action.payload
      }
    case INIT_CATALOG_FAIL:
      return {
        ...state,
        isLoaded: true,
        error: action.payload
      }
    default:
      return state
  }
}

export default catalogReducer;
