import { createAction } from 'redux-actions';
import {
  INIT_CATALOG,
  INIT_CATALOG_SUCCESS,
  INIT_CATALOG_FAIL,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  EDIT_USER,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAIL,
  LOGOUT_SUCCESS,
  GET_CART,
  GET_CART_SUCCESS,
  GET_CART_FAIL,
  SET_FILTER,
  CLEAR_FILTERS,
  SET_SORT_BY,
} from '../constants';
import { filterTypes, filterValues } from '@typings/filters';

export const initCatalog = createAction(INIT_CATALOG);
export const initCatalogSuccess = createAction(INIT_CATALOG_SUCCESS);
export const initCatalogFail = createAction(INIT_CATALOG_FAIL);

export const getUser = createAction(GET_USER);
export const getUserSuccess = createAction(GET_USER_SUCCESS);
export const getUserFail = createAction(GET_USER_FAIL);

export const editUser = createAction(EDIT_USER);
export const editUserSuccess = createAction(EDIT_USER_SUCCESS);
export const editUserFail = createAction(EDIT_USER_FAIL);

export const logoutSuccess = createAction(LOGOUT_SUCCESS);

export const getCart = createAction(GET_CART);
export const getCartSuccess = createAction(GET_CART_SUCCESS);
export const getCartFail = createAction(GET_CART_FAIL);

export const setFilter = createAction(
  SET_FILTER,
  (filterType: filterTypes, filterValue: filterValues) => ({ filterType, filterValue })
);
export const clearFilters = createAction(CLEAR_FILTERS);

export const setSortBy = createAction(SET_SORT_BY);
