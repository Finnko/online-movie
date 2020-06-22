import {actionTypes} from '../../action-types';
import {extend} from '../../../utils/common';

const initialState = {
  loading: false,
  error: false,
  movies: [],
  promoMovie: {}
};

export default function dataReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case actionTypes.FETCH_MOVIES_REQUEST:
      return extend(state, {
        loading: true,
      });
    case actionTypes.FETCH_MOVIES_SUCCESS:
      return extend(state, {
        loading: false,
        movies: payload,
      });
    case actionTypes.FETCH_MOVIES_ERROR:
      return extend(state, {
        loading: false,
        error: true,
      });
  }

  return state;
}
