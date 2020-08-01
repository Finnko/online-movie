import * as React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getAuthStatus} from '../../store/reducers/user/selectors';
import {AuthStatus, PathName} from '../../const';

type Props = {
  authStatus: string,
  exact: boolean,
  path: string,
  children?: any,
}

const PrivateRoute:React.FC<Props> = ({
  authStatus,
  path,
  exact,
  children,
}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return (
          authStatus === AuthStatus.AUTH
            ? children
            : <Redirect to={PathName.SIGN_IN} />
        );
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state),
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
