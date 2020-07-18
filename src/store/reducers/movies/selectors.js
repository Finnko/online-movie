import NameSpace from '../../name-space';

const NAME_SPACE = NameSpace.MOVIES;

const getMovies = (state) => state[NAME_SPACE].movies;

const getPromo = (state) => state[NAME_SPACE].promo;

const getLoadingStatus = (state) => state[NAME_SPACE].loading;

const getErrorStatus = (state) => state[NAME_SPACE].error;

const getFavorites = (state) => state[NAME_SPACE].favorites;

const getFavoriteLoading = (state) => state[NAME_SPACE].favoriteLoading;

const getFavoriteError = (state) => state[NAME_SPACE].favoriteError;

const getErrorText = (state) => state[NAME_SPACE].errorText;

export {
  getMovies,
  getPromo,
  getLoadingStatus,
  getErrorStatus,
  getFavorites,
  getErrorText,
  getFavoriteError,
  getFavoriteLoading,
};
