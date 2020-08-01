import {Config} from '../const.ts';

const getMoviesByGenre = (movies, genre) => {
  return movies.filter((movie) => movie.genre.toLowerCase() === genre.toLowerCase());
};

const getFilteredMovies = (movies, query) => {
  return query === Config.DEFAULT_FILTER ? movies : getMoviesByGenre(movies, query);
};

export {getFilteredMovies};
