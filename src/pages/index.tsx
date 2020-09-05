import type { FixedObject } from 'gatsby-image';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import React, { useState } from 'react';

import type { IndexQuery } from '../../typings/graphql';

import Layout from '../components/Layout';
import SocialNetwork from '../components/SocialNetwork';
import WordTransition from '../components/WordTransition';

import { useContentfulPage, useDebounce } from '../hooks';

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
  const word = useDebounce(tags[0], 2000);

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
      <section
        className="flex justify-center items-center flex-col-reverse lg:flex-row lg:space-x-20 xl:space-x-40 text-white"
        data-testid="page-index"
      >
        <div className="mt-8 lg:mt-0">
          <h1 className="text-left">
            <span className="inline-block">{section.title}&nbsp;</span>
            <WordTransition
              className="text-blue-500"
              word={word}
              onAnimationComplete={handleAnimationComplete}
            />
          </h1>
          <div className="content mb-2" data-testid="page-index-description">
            {documentToReactComponents(section.description?.json)}
          </div>
          <ul
            className="flex space-x-4"
            data-testid="page-index-social-networks"
          >
            {section.socialNetworks?.map((socialNetwork) => (
              <li key={socialNetwork ?? ''}>
                <SocialNetwork link={socialNetwork ?? ''} />
              </li>
            ))}
          </ul>
        </div>
        <div
          className="flex-shrink-0 flex justify-center items-center"
          data-testid="page-index-img"
        >
          <Img
            fixed={section.titleImage?.fixed as FixedObject}
            alt={section.titleImage?.title ?? ''}
            className="rounded-full shadow-xl"
          />
        </div>
      </section>
    </Layout>
  );
};

export default Index;
