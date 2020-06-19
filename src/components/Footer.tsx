import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoSquare } from '@fortawesome/pro-duotone-svg-icons';
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

  const intl = useIntl();

  const contentfulPage = allContentfulPage.nodes.find((node) =>
    node.node_locale?.startsWith(intl.locale),
  );

  return (
    <footer className="text-white">
      <div>
        <div>{made}</div>
        <ul>
          {site?.siteMetadata?.langs?.langKeys?.map((langKey) => (
            <li key={langKey ?? ''}>
              <button
                type="button"
                onClick={() => handleChangeLocale(langKey ?? '')}
              >
                {intl.formatMessage({ id: `language.${langKey}` })}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Link to={contentfulPage?.pathname ?? ''}>
          <span>{contentfulPage?.title}</span>
          <FontAwesomeIcon icon={faInfoSquare} swapOpacity />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
