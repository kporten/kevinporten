import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import type { LegalQuery } from '../../types/graphql';

import useContentfulPage from '../hooks/useContentfulPage';

import Layout from '../components/Layout';

const GET_LEGAL_CONTENTFUL_PAGE = graphql`
  query Legal {
    allContentfulPage(
      filter: { contentful_id: { eq: "W412bZfECeMpRQPf7d5OU" } }
    ) {
      nodes {
        title
        node_locale
      }
    }
  }
`;

const Legal: React.FC = () => {
  const { allContentfulPage } = useStaticQuery<LegalQuery>(
    GET_LEGAL_CONTENTFUL_PAGE,
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

export default Legal;
