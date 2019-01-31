const GET_MOVIES = 'GET_MOVIES';
const SET_MOVIES = 'SET_MOVIES';

const getMovies = () => ({
  type: GET_MOVIES,
});

const setMovies = movies => ({
  type: SET_MOVIES,
  movies
});

export const types = {
  GET_MOVIES,
  SET_MOVIES,
}

export const creators = {
  getMovies,
  setMovies,
}