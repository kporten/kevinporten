import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { changeLocale, useIntl, Link } from 'gatsby-plugin-intl';

import type { FooterQuery } from '../../types/graphql';

const GET_FOOTER_SITE_METADATA = graphql`
  query Footer {
    site {
      siteMetadata {
        langs {
          langKeyDefault
          langKeys
        }
      }
    }

    allContentfulPage(
      filter: { position: { eq: "footer" } }
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

type FooterProps = {
  made: string;
};

const handleChangeLocale = (langKey: string) => {
  changeLocale(langKey);
};

const Footer: React.FC<FooterProps> = ({ made }) => {
  const { site, allContentfulPage } = useStaticQuery<FooterQuery>(
    GET_FOOTER_SITE_METADATA,
  );

  const { locale } = useIntl();

  const contentfulPage = allContentfulPage.nodes.find((node) =>
    node.node_locale?.startsWith(locale),
  );

  return (
    <footer className="text-white">
      {made} |{' '}
      <ul>
        {site?.siteMetadata?.langs?.langKeys?.map((langKey) => (
          <li key={langKey ?? ''}>
            <button
              type="button"
              onClick={() => handleChangeLocale(langKey ?? '')}
            >
              {langKey}
            </button>
          </li>
        ))}
      </ul>
      <Link to={contentfulPage?.pathname ?? ''}>{contentfulPage?.title}</Link>
    </footer>
  );
};

export default Footer;
