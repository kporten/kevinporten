import React from 'react';

type LogoProps = {
  url: string;
};

const Logo: React.FC<LogoProps> = ({ url }) => {
  return <img src={url} alt="logo" />;
};

export default Logo;
