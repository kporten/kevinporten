import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoSquare } from '@fortawesome/pro-duotone-svg-icons';
import { useStaticQuery, graphql } from 'gatsby';
import { changeLocale, useIntl, Link } from 'gatsby-plugin-intl';
import classNames from 'classnames';

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
  className?: string;
  made: string;
};

const handleChangeLocale = (langKey: string) => {
  changeLocale(langKey);
};

const Footer: React.FC<FooterProps> = ({ className, made }) => {
  const { site, allContentfulPage } = useStaticQuery<FooterQuery>(
    GET_FOOTER_SITE_METADATA,
  );

  const intl = useIntl();

  const contentfulPage = allContentfulPage.nodes.find((node) =>
    node.node_locale?.startsWith(intl.locale),
  );

  return (
    <footer className={classNames(className, 'md:flex md:justify-between')}>
      <div className="mb-2 md:mb-0">
        <div className="mb-2">{made}</div>
        <ul className="flex items-center space-x-2">
          <li className="text-sm">{intl.formatMessage({ id: 'language' })}:</li>
          {site?.siteMetadata?.langs?.langKeys?.map((langKey) => (
            <li key={langKey ?? ''}>
              <button
                type="button"
                className="text-sm focus:outline-none"
                onClick={() => handleChangeLocale(langKey ?? '')}
              >
                {intl.formatMessage({ id: `languages.${langKey}` })}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Link to={contentfulPage?.pathname ?? ''}>
        <span className="mr-2">{contentfulPage?.title}</span>
        <FontAwesomeIcon icon={faInfoSquare} swapOpacity />
      </Link>
    </footer>
  );
};

export default Footer;
