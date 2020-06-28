import {createSelector} from 'reselect';
import {getMovies} from '../data/selectors';
import NameSpace from '../../name-space';
import {getFilteredMovies} from '../../../utils/filter';
import {getMovieGenres} from '../../../utils/common';


const getActiveGenre = (state) => state[NameSpace.APP].activeGenre;

const getMoviesRenderLimit = (state) => state[NameSpace.APP].moviesRenderNumber;

const getGenres = createSelector(getMovies, (movies) => getMovieGenres(movies));

const getMoviesByGenre = createSelector(
    [getActiveGenre, getMoviesRenderLimit, getMovies],
    (genre, limit, movies) => {
      return getFilteredMovies(movies, genre).slice(0, limit);
    }
);

export {getActiveGenre, getGenres, getMoviesByGenre, getMoviesRenderLimit};
