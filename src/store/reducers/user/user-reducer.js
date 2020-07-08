import {AuthStatus} from '../../../const';
import {actionTypes} from '../../action-types';
import {extend} from '../../../utils/common';

const initialState = {
  authStatus: AuthStatus.NO_AUTH,
  loading: true,
  error: false,
  user: null,
};

export default function userReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case actionTypes.SET_AUTH:
      return extend(state, {
        authStatus: payload,
      });
    case actionTypes.AUTHORIZE_USER:
      return extend(state, {
        user: payload,
      });
    case actionTypes.LOGIN_REQUEST:
      return extend(state, {
        loading: true,
      });
    case actionTypes.LOGIN_SUCCESS:
      return extend(state, {
        loading: false,
        error: false,
      });
    case actionTypes.LOGIN_ERROR:
      return extend(state, {
        loading: false,
        error: true,
      });
  }

  return state;
}
