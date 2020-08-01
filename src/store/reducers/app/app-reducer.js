import {actionTypes} from '../../action-types';
import {extend} from '../../../utils/common';
import {Config} from '../../../const.ts';

const initialState = {
  activeGenre: Config.DEFAULT_FILTER,
  moviesRenderNumber: Config.MOVIES_NUMBER_LIMIT,
};

export default function appReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case actionTypes.CHANGE_ACTIVE_GENRE:
      return extend(state, {
        activeGenre: payload,
      });
    case actionTypes.CHANGE_MOVIES_LIMIT:
      return extend(state, {
        moviesRenderNumber: state.moviesRenderNumber + payload,
      });
    case actionTypes.RESET_MOVIES_LIMIT:
      return extend(state, {
        moviesRenderNumber: Config.MOVIES_NUMBER_LIMIT,
      });
  }

  return state;
}
