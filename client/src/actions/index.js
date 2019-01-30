import { createAction } from 'redux-actions';
import {
  INIT_CATALOG,
  INIT_CATALOG_SUCCESS,
  INIT_CATALOG_FAIL,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  GET_CART,
  GET_CART_SUCCESS,
  GET_CART_FAIL,
  SET_FILTER,
  CLEAR_FILTER,
  SET_SORT_BY,
} from '../constants';

export const initCatalog = createAction(INIT_CATALOG);
export const initCatalogSuccess = createAction(INIT_CATALOG_SUCCESS);
export const initCatalogFail = createAction(INIT_CATALOG_FAIL);

export const getUser = createAction(GET_USER);
export const getUserSucces = createAction(GET_USER_SUCCESS);
export const getUserFail = createAction(GET_USER_FAIL);

export const getCart = createAction(GET_CART);
export const getCartSuccess = createAction(GET_CART_SUCCESS);
export const getCartFail = createAction(GET_CART_FAIL);

export const setFilter = createAction(SET_FILTER, (filterType, filter) => ({ filterType, filter }));
export const clearFilters = createAction(CLEAR_FILTER);

export const setSortBy = createAction(SET_SORT_BY);
