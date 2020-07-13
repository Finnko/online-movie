import {ActionCreator} from '../../actions/action-creator';
import {AuthStatus, PathName} from '../../../const';
import history from '../../../history';
import {renameKeys} from '../../../utils/common';

const Operation = {
  checkAuth: () => (dispatch, _, api) => {
    return api.get(`/login`)
      .then(({data}) => {
        const adaptedData = renameKeys(data);

        dispatch(ActionCreator.setAuth(AuthStatus.AUTH));
        dispatch(ActionCreator.changeUserData(adaptedData));
      })
      .catch((err) => {
        throw err;
      });
  },
  login: ({email, password}) => (dispatch, _, api) => {
    dispatch(ActionCreator.loginRequest());

    return api.post(`/login`, {
      email,
      password,
    })
      .then(({data}) => {
        const adaptedData = renameKeys(data);

        dispatch(ActionCreator.setAuth(AuthStatus.AUTH));
        dispatch(ActionCreator.changeUserData(adaptedData));
        dispatch(ActionCreator.loginSuccess());

        history.push(PathName.ROOT);
      })
      .catch(() => {
        dispatch(ActionCreator.setAuth(AuthStatus.NO_AUTH));
        dispatch(ActionCreator.changeUserData(null));
        dispatch(ActionCreator.loginError());
      });
  },
};

export {Operation};
