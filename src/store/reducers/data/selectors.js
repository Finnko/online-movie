import NameSpace from '../../name-space';

const NAME_SPACE = NameSpace.DATA;

const getMovies = (state) => state[NAME_SPACE].movies;

const getPromo = (state) => state[NAME_SPACE].promo;

const getLoadingStatus = (state) => state[NAME_SPACE].loading;

const getErrorStatus = (state) => state[NAME_SPACE].error;

const getErrorText = (state) => state[NAME_SPACE].errorText;

export {
  getMovies,
  getPromo,
  getLoadingStatus,
  getErrorStatus,
  getErrorText,
};
