import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useIntl, Link } from 'gatsby-plugin-intl';
import { AnimatePresence, motion } from 'framer-motion';

import NavButton from './NavButton';

import type { NavQuery } from '../../types/graphql';

const query = graphql`
  query Nav {
    allContentfulPage(
      filter: { position: { eq: "header" } }
      sort: { fields: priority, order: ASC }
    ) {
      nodes {
        node_locale
        title
        pathname
      }
    }
  }
`;

const Nav: React.FC = () => {
  const {
    allContentfulPage: { nodes },
  } = useStaticQuery<NavQuery>(query);

  const intl = useIntl();

  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center lg:relative">
      <NavButton
        isMenuOpen={isMenuOpen}
        onClick={() => setMenuOpen(!isMenuOpen)}
      />
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            key="menuList"
            className="lg:flex absolute inset-0 lg:left-auto lg:bottom-auto z-20 mt-32 lg:mt-0 lg:mr-12 bg-black lg:bg-transparent"
            variants={{
              open: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                  staggerDirection: -1,
                },
              },
              close: {
                transition: { staggerChildren: 0.1 },
              },
            }}
            initial="close"
            animate="open"
            exit="close"
          >
            {nodes
              .filter((node) => node.node_locale?.startsWith(intl.locale))
              .map((node) => (
                <motion.li
                  key={node.pathname ?? ''}
                  variants={{
                    open: { opacity: 1, transition: { duration: 0.4 } },
                    close: { opacity: 0, transition: { duration: 0.4 } },
                  }}
                >
                  <Link
                    to={node.pathname ?? ''}
                    className="block p-4 uppercase text-xl text-center text-white hover:text-blue-500 transition-colors duration-200"
                  >
                    {node.title}
                  </Link>
                </motion.li>
              ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
