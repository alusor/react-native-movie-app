import { call, put, takeLatest } from "redux-saga/effects";
import { types, creators } from '../actions/movies';
import { getMovies } from '../services/api';

function* requestMovies () {
  const movies = yield call(getMovies);
  yield put(creators.setMovies(movies));
}

export default function* () {
  yield takeLatest(types.GET_MOVIES, requestMovies);
}