import {actionTypes} from '../action-types';

const ActionCreator = {
  fetchMoviesDataRequest: () => ({
    type: actionTypes.FETCH_MOVIES_DATA_REQUEST,
  }),
  fetchMoviesDataSuccess: (movies, promo) => ({
    type: actionTypes.FETCH_MOVIES_DATA_SUCCESS,
    payload: {
      movies,
      promo
    },
  }),
  fetchMoviesDataError: () => ({
    type: actionTypes.FETCH_MOVIES_DATA_ERROR,
  }),
};

export {ActionCreator};
