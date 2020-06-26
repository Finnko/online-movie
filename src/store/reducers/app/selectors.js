import {createSelector} from 'reselect';
import {getMovies} from '../data/selectors';
import NameSpace from '../../name-space';
import {getMoviesByFilter} from '../../../utils/filter';
import {getMovieGenres} from '../../../utils/common';


const getActiveGenre = (state) => state[NameSpace.APP].activeGenre;

const getGenres = createSelector(getMovies, (movies) => getMovieGenres(movies));

const getMoviesByGenre = createSelector(
    [getActiveGenre, getMovies],
    (genre, movies) => {
      return getMoviesByFilter(movies, genre);
    }
);

export {getActiveGenre, getGenres, getMoviesByGenre};
