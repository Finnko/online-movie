import {actionTypes} from '../../action-types';
import {extend} from '../../../utils/common';
import {Config} from '../../../const';

const initialState = {
  activeGenre: Config.DEFAULT_FILTER,
};

export default function appReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case actionTypes.CHANGE_ACTIVE_GENRE:
      return extend(state, {
        activeGenre: payload,
      });
  }

  return state;
}
