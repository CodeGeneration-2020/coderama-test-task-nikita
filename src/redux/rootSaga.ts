import { all } from 'redux-saga/effects';
import { filmsSaga, filmSaga } from './filmsSaga';

export default function* rootSaga() {
  yield all([filmsSaga(), filmSaga()]);
}
