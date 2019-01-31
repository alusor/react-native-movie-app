import { BASE_URL } from './contants';


async function getMovies() {
  const response = await fetch(BASE_URL);
  const data = await response.json()
  return data;
}

export {
  getMovies,
} 