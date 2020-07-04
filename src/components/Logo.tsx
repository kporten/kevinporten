import React from 'react';

import { motion } from 'framer-motion';
import { Link } from 'gatsby-plugin-intl';

type LogoProps = {
  url: string;
};

const Logo: React.FC<LogoProps> = ({ url }) => (
  <Link to="/" className="block h-full" data-testid="logo">
    <motion.img
      src={url}
      alt="logo"
      className="h-full"
      initial={{ opacity: 0, translateY: '-100%' }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.4 }}
    />
  </Link>
);

export default Logo;
