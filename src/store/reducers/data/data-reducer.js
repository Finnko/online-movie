import {actionTypes} from '../../action-types';
import {extend} from '../../../utils/common';

const initialState = {
  loading: false,
  error: false,
  errorText: ``,
  movies: [],
  promo: {},
  favorites: [],
};

export default function dataReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case actionTypes.FETCH_MOVIES_DATA_REQUEST:
      return extend(state, {
        loading: true,
      });
    case actionTypes.FETCH_MOVIES_DATA_SUCCESS:
      return extend(state, {
        loading: false,
        error: false,
        movies: payload.movies,
        promo: extend(state.promo, payload.promo),
      });
    case actionTypes.FETCH_MOVIES_DATA_ERROR:
      return extend(state, {
        loading: false,
        error: true,
      });
    case actionTypes.FETCH_FAVORITES_MOVIES_REQUEST:
      return extend(state, {
        loading: true,
      });
    case actionTypes.FETCH_FAVORITES_MOVIES_SUCCESS:
      return extend(state, {
        loading: false,
        error: false,
        favorites: payload,
      });
    case actionTypes.FETCH_FAVORITES_MOVIES_ERROR:
      return extend(state, {
        loading: false,
        error: true,
      });
    case actionTypes.SET_ERROR:
      return extend(state, {
        errorText: payload,
      });
  }

  return state;
}
