import { createAction } from 'redux-actions';
import {
  INIT_CATALOG,
  INIT_CATALOG_SUCCESS,
  INIT_CATALOG_FAIL,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL
} from '../constants';

export const initCatalog = createAction(INIT_CATALOG);
export const initCatalogSuccess = createAction(INIT_CATALOG_SUCCESS);
export const initCatalogFail = createAction(INIT_CATALOG_FAIL);

export const getUser = createAction(GET_USER);
export const getUserSucces = createAction(GET_USER_SUCCESS);
export const getUserFail = createAction(GET_USER_FAIL);
