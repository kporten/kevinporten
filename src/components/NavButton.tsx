import { faBars, faTimes } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';

type NavButtonProps = {
  isMenuOpen: boolean;
  onClick: () => void;
};

const NavButton: React.FC<NavButtonProps> = ({ isMenuOpen, onClick }) => {
  const intl = useIntl();

  return (
    <button
      type="button"
      aria-label={intl.formatMessage({ id: 'menu' })}
      onClick={onClick}
      className="relative w-8 h-8 text-white focus:outline-none lg:hover:text-blue-500 transition-link"
    >
      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            key="navButtonOpened"
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 360 }}
            exit={{ opacity: 0, scale: 0, rotate: 0 }}
            transition={{ duration: 0.2 }}
          >
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </motion.div>
        ) : (
          <motion.div
            key="navButtonClosed"
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            <FontAwesomeIcon icon={faBars} size="2x" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default NavButton;
