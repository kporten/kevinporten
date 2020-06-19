import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import type { LegalQuery } from '../../types/graphql';

import useContentfulPage from '../hooks/useContentfulPage';

import Layout from '../components/Layout';

const GET_LEGAL_CONTENTFUL_PAGE = graphql`
  query Legal {
    page: allContentfulPage(
      filter: { contentful_id: { eq: "W412bZfECeMpRQPf7d5OU" } }
    ) {
      nodes {
        id
        node_locale
        title
      }
    }
    section: allContentfulSection(
      filter: { page: { contentful_id: { eq: "W412bZfECeMpRQPf7d5OU" } } }
      sort: { fields: priority, order: ASC }
    ) {
      nodes {
        id
        page {
          id
        }
        title
        description {
          json
        }
      }
    }
  }
`;

const Legal: React.FC = () => {
  const { page, section } = useStaticQuery<LegalQuery>(
    GET_LEGAL_CONTENTFUL_PAGE,
  );

  const contentfulPage = useContentfulPage<typeof page.nodes[0]>(page.nodes);

  if (!contentfulPage) {
    return null;
  }

  return (
    <Layout pageTitle={contentfulPage.title ?? ''}>
      {section.nodes
        .filter((sectionNode) => sectionNode.page?.id === contentfulPage.id)
        .map((sectionNode) => (
          <section key={sectionNode.id} className="text-white">
            <h1>{sectionNode.title}</h1>
            <div>
              {documentToReactComponents(sectionNode.description?.json)}
            </div>
          </section>
        ))}
    </Layout>
  );
};

export default Legal;
