import {actionTypes} from '../../action-types';
import {extend} from '../../../utils/common';

const initialState = {
  loading: false,
  error: false,
  errorText: ``,
  movies: [],
  promo: {},
  favorites: [],
  favoriteLoading: false,
  favoriteError: false,
};

export default function moviesReducer(state = initialState, action) {
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
    case actionTypes.FETCH_PROMO:
      return extend(state, {
        promo: extend(state.promo, payload),
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
    case actionTypes.UPDATE_FAVORITE_STATUS_REQUEST:
      return extend(state, {
        favoriteLoading: true,
      });
    case actionTypes.UPDATE_FAVORITE_STATUS_SUCCESS:
      const updatedMovies = state.movies.map((movie) => {
        return movie.id === payload.id ? payload : movie;
      });

      return extend(state, {
        favoriteLoading: false,
        favoriteError: false,
        movies: updatedMovies,
      });
    case actionTypes.UPDATE_FAVORITE_STATUS_ERROR:
      return extend(state, {
        favoriteLoading: false,
        favoriteError: true,
      });
  }

  return state;
}
