import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo/logo.jsx';
import Avatar from '../avatar/avatar.jsx';

const Header = ({children}) => {
  return (
    <header className={`page-header ${children ? `` : `movie-card__head`}`}>
      <Logo />
      {children}
      <Avatar />
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
