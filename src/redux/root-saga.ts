import { all } from "redux-saga/effects";
import { filmsSaga, filmSaga } from "./films-saga";

export default function* rootSaga() {
  yield all([filmsSaga(), filmSaga()]);
}
