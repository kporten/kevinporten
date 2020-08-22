import React from 'react';

import { faInfoSquare } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
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

  const madeWithColor = made.split(/(❤)/).map((part) => {
    if (part === '❤') {
      return (
        <span key={part} className="text-red-700">
          {part}
        </span>
      );
    }

    return <span key={part}>{part}</span>;
  });

  return (
    <footer
      className={classNames(className, 'md:flex md:justify-between')}
      data-testid="footer"
    >
      <div className="mb-2 md:mb-0">
        <div className="mb-2">{madeWithColor}</div>
        <ul className="flex items-center space-x-2" data-testid="footer-langs">
          <li className="text-sm">{intl.formatMessage({ id: 'language' })}:</li>
          {site?.siteMetadata?.langs?.langKeys?.map((langKey) => (
            <li key={langKey ?? ''}>
              <button
                type="button"
                className="text-sm focus:outline-none hover:text-gray-600 transition-link"
                onClick={() => handleChangeLocale(langKey ?? '')}
              >
                {intl.formatMessage({ id: `languages.${langKey}` })}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Link
        to={contentfulPage?.pathname ?? ''}
        className="inline-block hover:text-gray-600 transition-link"
        data-testid="footer-legal-data"
      >
        <span className="mr-2">{contentfulPage?.title}</span>
        <FontAwesomeIcon icon={faInfoSquare} swapOpacity size="1x" />
      </Link>
    </footer>
  );
};

export default Footer;
