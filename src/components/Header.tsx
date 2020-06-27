import React from 'react';

import Logo from './Logo';
import Nav from './Nav';

type HeaderProps = {
  logoUrl: string;
};

const Header: React.FC<HeaderProps> = ({ logoUrl }) => (
  <header className="flex justify-between h-16">
    <Logo url={logoUrl} />
    <Nav />
  </header>
);

export default Header;
