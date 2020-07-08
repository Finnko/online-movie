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
  changeMoviesLimit: (count) => ({
    type: actionTypes.CHANGE_MOVIES_LIMIT,
    payload: count,
  }),
  resetMoviesLimit: () => ({
    type: actionTypes.RESET_MOVIES_LIMIT,
  }),
  setAuth: (status) => ({
    type: actionTypes.SET_AUTH,
    payload: status,
  }),
  changeUserData: (data) => ({
    type: actionTypes.AUTHORIZE_USER,
    payload: data,
  }),
  loginRequest: () => ({
    type: actionTypes.LOGIN_REQUEST,
  }),
  loginSuccess: () => ({
    type: actionTypes.LOGIN_SUCCESS,
  }),
  loginError: () => ({
    type: actionTypes.LOGIN_ERROR,
  }),
};

export {ActionCreator};
