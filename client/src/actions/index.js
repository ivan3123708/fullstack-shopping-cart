import { createAction } from 'redux-actions';
import {
  INIT_CATALOG,
  INIT_CATALOG_SUCCESS,
  INIT_CATALOG_FAIL
} from '../constants';

export const initCatalog = createAction(INIT_CATALOG);
export const initCatalogSuccess = createAction(INIT_CATALOG_SUCCESS);
export const initCatalogFail = createAction(INIT_CATALOG_FAIL);
