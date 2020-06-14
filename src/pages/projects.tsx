import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import type { ProjectsQuery } from '../../types/graphql';

import useContentfulPage from '../hooks/useContentfulPage';

import Layout from '../components/Layout';

const GET_PROJECTS_CONTENTFUL_PAGE = graphql`
  query Projects {
    allContentfulPage(
      filter: { contentful_id: { eq: "5xQ1TswXiy1miVnAmWvGz7" } }
    ) {
      nodes {
        title
        node_locale
      }
    }
  }
`;

const Projects: React.FC = () => {
  const { allContentfulPage } = useStaticQuery<ProjectsQuery>(
    GET_PROJECTS_CONTENTFUL_PAGE,
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

export default Projects;
