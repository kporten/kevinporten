import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import type { ProjectsQuery } from '../../types/graphql';

import useContentfulPage from '../hooks/useContentfulPage';

import Layout from '../components/Layout';

const GET_PROJECTS_CONTENTFUL_PAGE = graphql`
  query Projects {
    page: allContentfulPage(
      filter: { contentful_id: { eq: "5xQ1TswXiy1miVnAmWvGz7" } }
    ) {
      nodes {
        id
        node_locale
        title
      }
    }
    section: allContentfulSection(
      filter: { page: { contentful_id: { eq: "5xQ1TswXiy1miVnAmWvGz7" } } }
      sort: { fields: priority, order: ASC }
    ) {
      nodes {
        id
        page {
          id
        }
        title
      }
    }
    project: allContentfulProject(
      filter: {
        section: { page: { contentful_id: { eq: "5xQ1TswXiy1miVnAmWvGz7" } } }
      }
      sort: { fields: priority, order: ASC }
    ) {
      nodes {
        id
        section {
          id
        }
        title
        languages
        description {
          json
        }
      }
    }
  }
`;

const Projects: React.FC = () => {
  const { page, section, project } = useStaticQuery<ProjectsQuery>(
    GET_PROJECTS_CONTENTFUL_PAGE,
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
            {project.nodes
              .filter(
                (projectNode) => projectNode.section?.id === sectionNode.id,
              )
              .map((projectNode) => (
                <div key={projectNode.id}>
                  <h2>{projectNode.title}</h2>
                  <div>
                    {documentToReactComponents(projectNode.description?.json)}
                  </div>
                  <div>
                    {projectNode.languages?.map((language) => (
                      <span key={`${projectNode.id}_${language}`}>
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </section>
        ))}
    </Layout>
  );
};

export default Projects;
