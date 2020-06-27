import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import type { IndexQuery } from '../../types/graphql';

import useContentfulPage from '../hooks/useContentfulPage';

import Layout from '../components/Layout';
import SocialNetwork from '../components/SocialNetwork';

const GET_INDEX_CONTENTFUL_PAGE = graphql`
  query Index {
    page: allContentfulPage(
      filter: { contentful_id: { eq: "2xHVTihrzQEjdBQyBJB2F5" } }
    ) {
      nodes {
        node_locale
        title
        section {
          title
          titleImage {
            title
            fixed(width: 300, height: 300, quality: 100) {
              src
              srcSet
            }
          }
          description {
            json
          }
          socialNetworks
          tags
        }
      }
    }
  }
`;

const Index: React.FC = () => {
  const { page } = useStaticQuery<IndexQuery>(GET_INDEX_CONTENTFUL_PAGE);

  const contentfulPage = useContentfulPage<typeof page.nodes[0]>(page.nodes);

  const section = contentfulPage?.section?.[0];

  if (!contentfulPage || !section) {
    return null;
  }

  return (
    <Layout pageTitle={contentfulPage.title ?? ''} isLanding>
      <section className="text-white">
        <div>
          <h1>
            {section.title} {section.tags?.join(', ')}
          </h1>
          <div>{documentToReactComponents(section.description?.json)}</div>
          <ul>
            {section.socialNetworks?.map((socialNetwork) => (
              <li key={socialNetwork ?? ''}>
                <SocialNetwork link={socialNetwork ?? ''} />
              </li>
            ))}
          </ul>
        </div>
        <img
          src={section.titleImage?.fixed?.src}
          srcSet={section.titleImage?.fixed?.srcSet}
          alt={section.titleImage?.title ?? ''}
          className="rounded-full"
        />
      </section>
    </Layout>
  );
};

export default Index;
