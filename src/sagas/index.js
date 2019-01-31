import { fork } from 'redux-saga/effects';
import movieSaga from './movies';

export default function* rootSaga() {
  yield fork(movieSaga)
}