import {createSelector} from 'reselect';
import NameSpace from '../../name-space';
import {DEFAULT_MOVIE} from '../../../const';

const NAME_SPACE = NameSpace.MOVIES;

const getMovies = (state) => state[NAME_SPACE].movies;

const getPromo = (state) => state[NAME_SPACE].promo;

const getLoadingStatus = (state) => state[NAME_SPACE].loading;

const getErrorStatus = (state) => state[NAME_SPACE].error;

const getFavorites = (state) => state[NAME_SPACE].favorites;

const getFavoriteLoading = (state) => state[NAME_SPACE].favoriteLoading;

const getFavoriteError = (state) => state[NAME_SPACE].favoriteError;

const getErrorText = (state) => state[NAME_SPACE].errorText;

const getMovieById = createSelector(
    getMovies,
    (state, id) => id,
    (movies, id) => {
      return movies.find((movie) => movie.id === id);
    }
);

const getSimilarMovies = createSelector(
    getMovies,
    getMovieById,
    (movies, currentMovie = DEFAULT_MOVIE) => {
      return movies.filter((movie) => movie.genre === currentMovie.genre && movie.id !== currentMovie.id);
    }
);

export {
  getMovies,
  getPromo,
  getLoadingStatus,
  getErrorStatus,
  getFavorites,
  getErrorText,
  getFavoriteError,
  getFavoriteLoading,
  getMovieById,
  getSimilarMovies,
};
