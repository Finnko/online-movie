import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getAuthStatus} from '../../store/reducers/user/selectors';
import {AuthStatus, PathName} from '../../const';


const PrivateRoute = ({
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

PrivateRoute.propTypes = {
  authStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state),
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
