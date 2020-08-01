import * as React from 'react';
import Logo from '../logo/logo';
import Avatar from '../avatar/avatar';

type HeaderProps = {
  className?: string;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const {className = ``, children} = props;

  return (
    <header className={`page-header ${className}`}>
      <Logo />
      {children}
      <Avatar />
    </header>
  );
};

export default Header;
