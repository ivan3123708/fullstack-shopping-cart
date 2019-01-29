import { put, all, takeLatest } from 'redux-saga';
import {
  INIT_CATALOG
} from '../constants';
import * as actions from '../actions';

function* initCatalog() {
  try {
    const catalog = yield axios.get('/api/catalog');

    yield put(actions.initCatalog(catalog));
  } catch(e) {
    yield put(actions.initCatalogFail('COULD NOT GET CATALOG'));
  }
}

export default function*() {
  yield all([
    takeLatest(INIT_CATALOG, initCatalog),
  ]);
}
