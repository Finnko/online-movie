import {actionTypes} from '../action-types';

const ActionCreator = {
  fetchMoviesDataRequest: () => ({
    type: actionTypes.FETCH_MOVIES_DATA_REQUEST,
  }),
  fetchMoviesDataSuccess: (movies, promo, reviews) => ({
    type: actionTypes.FETCH_MOVIES_DATA_SUCCESS,
    payload: {
      movies,
      promo,
      reviews,
    },
  }),
  fetchMoviesDataError: () => ({
    type: actionTypes.FETCH_MOVIES_DATA_ERROR,
  }),
  changeActiveGenre: (genre) => ({
    type: actionTypes.CHANGE_ACTIVE_GENRE,
    payload: genre,
  }),
};

export {ActionCreator};
