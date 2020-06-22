import {actionTypes} from '../action-types';

const ActionCreator = {
  fetchMoviesRequest: () => ({
    type: actionTypes.FETCH_MOVIES_REQUEST,
  }),
  fetchMoviesSuccess: (data) => ({
    type: actionTypes.FETCH_MOVIES_SUCCESS,
    payload: data,
  }),
  fetchMoviesError: () => ({
    type: actionTypes.FETCH_MOVIES_ERROR,
  }),
};

export {ActionCreator};
