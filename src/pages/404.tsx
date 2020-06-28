import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import { useIntl, Link } from 'gatsby-plugin-intl';

import type { NotFoundQuery } from '../../types/graphql';

import Layout from '../components/Layout';
import UndrawTaken from '../assets/UndrawTaken.svg';

import useContentfulPage from '../hooks/useContentfulPage';

const GET_NOT_FOUND_CONTENTFUL_PAGE = graphql`
  query NotFound {
    page: allContentfulPage(
      filter: { contentful_id: { eq: "3sKYqBV9aHgNpcrJKPVQMe" } }
    ) {
      nodes {
        node_locale
        title
        description {
          json
        }
      }
    }
  }
`;

const NotFound: React.FC = () => {
  const { page } = useStaticQuery<NotFoundQuery>(GET_NOT_FOUND_CONTENTFUL_PAGE);

  const intl = useIntl();

  const contentfulPage = useContentfulPage<typeof page.nodes[0]>(
    page.nodes,
    false,
  );

  if (!contentfulPage) {
    return null;
  }

  return (
    <Layout pageTitle={contentfulPage.title ?? ''}>
      <section className="space-y-16">
        <h1>{contentfulPage.title}</h1>
        <div className="flex flex-col items-center h-64">
          <UndrawTaken className="w-full" />
        </div>
        <div className="text-center">
          <Link to="/" className="hover:text-blue-500 transition-link">
            {intl.formatMessage({ id: 'notfound.back' })}
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
