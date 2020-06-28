import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import type { FixedObject } from 'gatsby-image';
import type { IndexQuery } from '../../types/graphql';

import useContentfulPage from '../hooks/useContentfulPage';

import Layout from '../components/Layout';
import SocialNetwork from '../components/SocialNetwork';
import WordTransition from '../components/WordTransition';

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
            fixed(width: 300, quality: 100) {
              ...GatsbyContentfulFixed_withWebp_noBase64
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

  const [tags, setTags] = useState(section?.tags as string[]);

  if (!contentfulPage || !section) {
    return null;
  }

  const handleAnimationComplete = () => {
    let nextTags = tags?.slice(1);

    if (nextTags?.length === 0) {
      nextTags = section?.tags as string[];
    }

    setTags(nextTags);
  };

  return (
    <Layout pageTitle={contentfulPage.title ?? ''} isLanding>
      <section className="flex justify-center items-center flex-col-reverse lg:flex-row lg:space-x-20 xl:space-x-40 text-white">
        <div className="mt-8 lg:mt-0">
          <h1>
            <span className="inline-block mr-1">{section.title}</span>
            <WordTransition
              className="text-blue-500"
              word={tags?.[0] ?? ''}
              onAnimationComplete={handleAnimationComplete}
            />
          </h1>
          <div className="mb-2">
            {documentToReactComponents(section.description?.json)}
          </div>
          <ul className="flex space-x-4">
            {section.socialNetworks?.map((socialNetwork) => (
              <li key={socialNetwork ?? ''}>
                <SocialNetwork link={socialNetwork ?? ''} />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-shrink-0 flex justify-center items-center">
          <Img
            fixed={section.titleImage?.fixed as FixedObject}
            alt={section.titleImage?.title ?? ''}
            className="rounded-full"
          />
        </div>
      </section>
    </Layout>
  );
};

export default Index;
