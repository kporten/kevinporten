import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import type { SkillsQuery } from '../../types/graphql';

import useContentfulPage from '../hooks/useContentfulPage';

import Layout from '../components/Layout';

const GET_SKILLS_CONTENTFUL_PAGE = graphql`
  query Skills {
    allContentfulPage(
      filter: { contentful_id: { eq: "KbsdcceAfRetyzCsoVEux" } }
    ) {
      nodes {
        title
        node_locale
      }
    }
  }
`;

const Skills: React.FC = () => {
  const { allContentfulPage } = useStaticQuery<SkillsQuery>(
    GET_SKILLS_CONTENTFUL_PAGE,
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

export default Skills;
