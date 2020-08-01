import {actionTypes} from '../../action-types';
import userReducer from './user-reducer';
import {AuthStatus} from '../../../const.ts';
import {renameKeys} from '../../../utils/common';

const initialState = {
  authStatus: AuthStatus.NO_AUTH,
  loading: false,
  error: false,
  user: null,
};

const userMock = {
  [`avatar_url`]: `/wtw/static/avatar/2.jpg`,
  email: `finko85@gmail.com`,
  id: 1,
  name: `finko85`,
};
const adaptedUser = renameKeys(userMock);

describe(`User reducer works correctly`, () => {
  it(`User reducer without additional parameters should return initial state`, () => {
    expect(userReducer(void 0, {})).toEqual(initialState);
  });

  it(`User reducer should set correct auth status`, () => {
    expect(userReducer({
      authStatus: `NO_AUTH`,
    }, {
      type: actionTypes.SET_AUTH,
      payload: `AUTH`,
    })).toEqual({
      authStatus: `AUTH`,
    });
  });

  it(`User reducer should change loading value when the request is sent`, () => {
    expect(userReducer({
      loading: false
    }, {
      type: actionTypes.LOGIN_REQUEST,
    })).toEqual({
      loading: true,
    });
  });

  it(`User reducer should change loading and error value when the error is occurred`, () => {
    expect(userReducer({
      error: true,
    }, {
      type: actionTypes.LOGIN_ERROR,
    })).toEqual({
      error: true,
      loading: false,
    });
  });

  it(`User reducer should change loading and error value on success`, () => {
    expect(userReducer({
      error: false,
      loading: true,
    }, {
      type: actionTypes.LOGIN_SUCCESS,
    })).toEqual({
      error: false,
      loading: false,
    });
  });

  it(`User reducer should change promo data on success`, () => {
    expect(userReducer({
      user: null,
    }, {
      type: actionTypes.AUTHORIZE_USER,
      payload: renameKeys(userMock),
    })).toEqual({
      user: adaptedUser,
    });
  });
});
