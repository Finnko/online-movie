import {Config} from '../const';

const getFilteredMovies = (movies, genre) => {
  return movies.filter((movie) => movie.genre.toLowerCase() === genre.toLowerCase());
};

const getMoviesByFilter = (movies, query) => {
  return query === Config.DEFAULT_FILTER ? movies : getFilteredMovies(movies, query);
};

export {getMoviesByFilter};
