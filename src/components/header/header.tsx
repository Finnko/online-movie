import * as React from 'react';
import Logo from '../logo/logo';
import Avatar from '../avatar/avatar';

type HeaderProps = {
  className?: string,
  children?: any,
}

const Header:React.FC<HeaderProps> = ({className = ``, children}) => {
  return (
    <header className={`page-header ${className}`}>
      <Logo />
      {children}
      <Avatar />
    </header>
  );
};

export default Header;
