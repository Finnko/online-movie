import React from 'react';
import PropTypes from 'prop-types';
import UserPropType from '../../prop-types/user';
import {AuthStatus, Config} from '../../const';
import {connect} from 'react-redux';
import {getAuthStatus, getUser} from '../../store/reducers/user/selectors';

const Avatar = ({userInfo, authStatus}) => {
  let avatar = ``;
  if (userInfo !== null) {
    avatar = userInfo.avatarUrl;
  }

  const isLogged = AuthStatus.AUTH === authStatus;

  return (
    <div className="user-block">
      <div className="user-block__avatar">
        <img
          src={`${isLogged ? `${Config.SERVER_ORIGIN}${avatar}` : `img/avatar.jpg`}`}
          alt="User avatar"
          width="63"
          height="63"
        />
      </div>
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
