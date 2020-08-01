import MockAdapter from "axios-mock-adapter";
import {createAPI} from '../../../api/api';
import {Operation} from './operations';
import {actionTypes} from '../../action-types';
import {renameKeys} from '../../../utils/common';
import {AuthStatus} from '../../../const.ts';
import {apiMockHandlers, promisifyApiMockReply} from '../../../utils/helpers';

const authData = {
  email: `finko85@gmail.com`,
  password: `aa1231549`,
};

const userMock = {
  [`avatar_url`]: `/wtw/static/avatar/2.jpg`,
  email: `finko85@gmail.com`,
  id: 1,
  name: `finko85`,
};
const adaptedUser = renameKeys(userMock);

describe(`User operations works correctly`, () => {
  const api = createAPI(apiMockHandlers);

  it(`Operation checkAuth should make a correct API call to login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthOperation = Operation.checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, userMock);

    return checkAuthOperation(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: actionTypes.SET_AUTH,
          payload: AuthStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: actionTypes.AUTHORIZE_USER,
          payload: adaptedUser,
        });
      });
  });

  it(`Operation login should make a correct API call to login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loginOperation = Operation.login(authData);

    apiMock
      .onPost(`/login`)
      .reply(() => promisifyApiMockReply(userMock));

    return loginOperation(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: actionTypes.SET_AUTH,
          payload: AuthStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: actionTypes.AUTHORIZE_USER,
          payload: adaptedUser,
        });
      })
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: actionTypes.SET_AUTH,
          payload: AuthStatus.NO_AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: actionTypes.AUTHORIZE_USER,
          payload: null,
        });
      });
  });
});
