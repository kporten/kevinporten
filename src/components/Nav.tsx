import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';

import type { NavQuery } from '../../types/graphql';

const query = graphql`
  query Nav {
    allContentfulPage(
      filter: { position: { eq: "header" } }
      sort: { order: ASC, fields: priority }
    ) {
      nodes {
        title
        pathname
        node_locale
      }
    }
  }
`;

const Nav: React.FC = () => {
  const {
    allContentfulPage: { nodes },
  } = useStaticQuery<NavQuery>(query);

  const { locale } = useIntl();

  return (
    <nav className="text-white">
      <ul>
        {nodes
          .filter((node) => node.node_locale?.startsWith(locale))
          .map((node) => (
            <li key={node.pathname ?? ''}>
              <Link to={node.pathname ?? ''}>{node.title}</Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Nav;
