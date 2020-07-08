import {ActionCreator} from '../../actions/action-creator';
import {AuthStatus} from '../../../const';

const Operation = {
  checkAuth: () => (dispatch, _, api) => {
    return api.get(`/login`)
      .then(() => {
        dispatch(ActionCreator.setAuth(AuthStatus.AUTH));
      })
      .catch((err) => {
        throw err;
      });
  },
  login: (authData) => (dispatch, _, api) => {
    const {email, password} = authData;
    dispatch(ActionCreator.loginRequest());

    return api.post(`/login`, {
      email,
      password,
    })
      .then(() => {
        dispatch(ActionCreator.setAuth(AuthStatus.AUTH));
        dispatch(ActionCreator.changeUserData(authData));
        dispatch(ActionCreator.loginSuccess());
      })
      .catch(() => {
        dispatch(ActionCreator.setAuth(AuthStatus.NO_AUTH));
        dispatch(ActionCreator.changeUserData(null));
        dispatch(ActionCreator.loginError());
      });
  },
};

export {Operation};
