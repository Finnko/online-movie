import {createSelector} from 'reselect';
import {getMovies} from '../data/selectors';
import NameSpace from '../../name-space';
import {getFilteredMovies} from '../../../utils/filter';
import {getMovieGenres} from '../../../utils/common';

const NAME_SPACE = NameSpace.APP;

const getActiveGenre = (state) => state[NAME_SPACE].activeGenre;

const getMoviesRenderLimit = (state) => state[NAME_SPACE].moviesRenderNumber;

const getGenres = createSelector(getMovies, (movies) => getMovieGenres(movies));

const getMoviesByGenre = createSelector(
    [getActiveGenre, getMoviesRenderLimit, getMovies],
    (genre, limit, movies) => {
      return getFilteredMovies(movies, genre).slice(0, limit);
    }
);

export {getActiveGenre, getGenres, getMoviesByGenre, getMoviesRenderLimit};
