import axios from 'axios';
import { put, all, takeLatest } from 'redux-saga/effects';
import {
  INIT_CATALOG,
  GET_USER
} from '../constants';
import * as actions from '../actions';

function* initCatalog() {
  try {
    const catalog = yield axios.get('/api/catalog');

    yield put(actions.initCatalogSuccess(catalog.data));
  } catch(e) {
    yield put(actions.initCatalogFail('COULD NOT GET CATALOG'));
  }
}

function* getUser() {
  try {
    const user = yield axios.get('/api/user');

    yield put(actions.getUserSucces(user.data));
  } catch(e) {
    yield put(actions.getUserFail('UNABLE TO GET USER'));
  }
}

export default function*() {
  yield all([
    takeLatest(INIT_CATALOG, initCatalog),
    takeLatest(GET_USER, getUser)
  ]);
}
