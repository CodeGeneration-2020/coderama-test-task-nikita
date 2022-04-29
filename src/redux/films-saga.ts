import { call, put, takeLatest } from 'redux-saga/effects';
import { requestFilms } from '../common/services/films.service';
import {
  filmData,
  filmError,
  filmLoading,
  routineSearchFilm,
} from './slices/film-current';
import {
  filmsData,
  filmsError,
  filmsLoading,
  routineSearch,
} from './slices/film-search';

function* workGetFilms(actions: any) {
  yield put(filmsLoading());
  const { data } = yield call(requestFilms, actions.payload);

  if (data.Response !== 'False') {
    yield put(filmsData(data));
  } else {
    yield put(filmsError());
  }
}

function* workGetFilm(actions: any) {
  yield put(filmLoading());
  const { data } = yield call(requestFilms, actions.payload);

  if (data.Response !== 'False') {
    yield put(filmData(data));
  } else {
    yield put(filmError());
  }
}

function* filmsSaga() {
  yield takeLatest(routineSearch.trigger, workGetFilms);
}
function* filmSaga() {
  yield takeLatest(routineSearchFilm.trigger, workGetFilm);
}

export { filmsSaga, filmSaga };
