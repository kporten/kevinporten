import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import type { NotFoundQuery } from '../../types/graphql';

import useContentfulPage from '../hooks/useContentfulPage';

import Layout from '../components/Layout';

const GET_NOT_FOUND_CONTENTFUL_PAGE = graphql`
  query NotFound {
    allContentfulPage(
      filter: { contentful_id: { eq: "3sKYqBV9aHgNpcrJKPVQMe" } }
    ) {
      nodes {
        title
        node_locale
      }
    }
  }
`;

const NotFound: React.FC = () => {
  const { allContentfulPage } = useStaticQuery<NotFoundQuery>(
    GET_NOT_FOUND_CONTENTFUL_PAGE,
  );

  const contentfulPage = useContentfulPage<typeof allContentfulPage.nodes[0]>(
    allContentfulPage.nodes,
  );

  return (
    <Layout pageTitle={contentfulPage?.title ?? ''}>
      <section className="text-white">{contentfulPage?.title}</section>
    </Layout>
  );
};

export default NotFound;
