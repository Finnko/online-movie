import React from 'react';
import PropTypes from 'prop-types';
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
  children: PropTypes.node,
};

export default Header;
