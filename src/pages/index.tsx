import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import type { IndexQuery } from '../../types/graphql';

import useContentfulPage from '../hooks/useContentfulPage';

import Layout from '../components/Layout';

const GET_INDEX_CONTENTFUL_PAGE = graphql`
  query Index {
    allContentfulPage(
      filter: { contentful_id: { eq: "2xHVTihrzQEjdBQyBJB2F5" } }
    ) {
      nodes {
        id
        title
        section {
          title
          description {
            json
          }
          socialNetworks
          tags
          titleImage {
            fixed(width: 300, height: 300, quality: 100) {
              src
              srcSet
            }
            title
          }
        }
        node_locale
      }
    }
  }
`;

const Index: React.FC = () => {
  const { allContentfulPage } = useStaticQuery<IndexQuery>(
    GET_INDEX_CONTENTFUL_PAGE,
  );

  const contentfulPage = useContentfulPage<typeof allContentfulPage.nodes[0]>(
    allContentfulPage.nodes,
  );

  const section = contentfulPage?.section?.[0];

  return (
    <Layout pageTitle={contentfulPage?.title ?? ''}>
      <div>
        <section className="text-white">
          <h1>
            {section?.title} {section?.tags?.join(', ')}
          </h1>
          <div>{documentToReactComponents(section?.description?.json)}</div>
          {section?.socialNetworks && <div>SOCIAL</div>}
        </section>
        <img
          src={section?.titleImage?.fixed?.src}
          srcSet={section?.titleImage?.fixed?.srcSet}
          alt={section?.titleImage?.title ?? ''}
        />
      </div>
    </Layout>
  );
};

export default Index;
