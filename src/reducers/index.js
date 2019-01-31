import {
  combineReducers
} from 'redux-immutable';
import moviesReducer from './movies';


export default combineReducers({
  movies: moviesReducer
})