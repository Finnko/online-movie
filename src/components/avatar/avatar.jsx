import React from 'react';
import PropTypes from 'prop-types';
import UserPropType from '../../prop-types/user';
import {AuthStatus, Config, PathName} from '../../const';
import {connect} from 'react-redux';
import {getAuthStatus, getUser} from '../../store/reducers/user/selectors';
import {Link} from 'react-router-dom';

const Avatar = ({userInfo, authStatus}) => {
  let avatar = ``;
  if (userInfo !== null) {
    avatar = userInfo.avatarUrl;
  }

  const isLogged = AuthStatus.AUTH === authStatus;

  return (
    <div className="user-block">
      {isLogged
        ?
        <Link
          to={PathName.MY_LIST}
          className="user-block__avatar"
        >
          <img
            src={`${isLogged ? `${Config.SERVER_ORIGIN}${avatar}` : `img/avatar.jpg`}`}
            alt="User avatar"
            width="63"
            height="63"
          />
        </Link>
        :
        <Link
          to={PathName.SIGN_IN}
          className="user-block__link"
        >
            Sign In
        </Link>
      }
    </div>
  );
};

Avatar.propTypes = {
  authStatus: PropTypes.string,
  userInfo: UserPropType,
};

const mapStateToProps = (state) => {
  return {
    authStatus: getAuthStatus(state),
    userInfo: getUser(state),
  };
};

export {Avatar};
export default connect(mapStateToProps)(Avatar);
