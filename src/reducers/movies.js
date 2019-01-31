import { fromJS } from 'immutable'
import { types, creators } from '../actions/movies';
const initialState = fromJS({
  movies: [],
});

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_MOVIES: 
      return state.set('movies', fromJS(action.movies));
    default:
      return state;
  }
}

export default moviesReducer;
