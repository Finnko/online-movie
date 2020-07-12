import React from 'react';
import PropTypes from 'prop-types';
import UserPropType from '../../prop-types/user';
import Logo from '../logo/logo.jsx';
import Avatar from '../avatar/avatar.jsx';

const Header = ({className = ``, children}) => {
  return (
    <header className={`page-header ${className}`}>
      <Logo />
      {children}
      <Avatar />
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  authStatus: PropTypes.string,
  children: PropTypes.node,
  userInfo: UserPropType,
};

export default Header;
