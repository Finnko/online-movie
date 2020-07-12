import {actionTypes} from '../../action-types';
import {extend} from '../../../utils/common';

const initialState = {
  loading: false,
  error: false,
  movies: [],
  promo: {},
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
        movies: payload.movies,
        promo: extend(state.promo, payload.promo),
      });
    case actionTypes.FETCH_MOVIES_DATA_ERROR:
      return extend(state, {
        loading: false,
        error: true,
      });
  }

  return state;
}
