import NameSpace from '../../name-space';

const getMovies = (state) => state[NameSpace.DATA].movies;

const getPromo = (state) => state[NameSpace.DATA].promo;

const getLoadingStatus = (state) => state[NameSpace.DATA].loading;

const getErrorStatus = (state) => state[NameSpace.DATA].error;


export {getMovies, getPromo, getLoadingStatus, getErrorStatus};
