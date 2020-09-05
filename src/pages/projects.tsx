import React from 'react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import type { FluidObject } from 'gatsby-image';
import type { ProjectsQuery } from '../../typings/graphql';

import Layout from '../components/Layout';
import Tag from '../components/Tag';

import useContentfulPage from '../hooks/useContentfulPage';

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
        url
        languages
        preview {
          title
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
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
      <div className="space-y-16" data-testid="page-projects">
        {section.nodes
          .filter((sectionNode) => sectionNode.page?.id === contentfulPage.id)
          .map((sectionNode) => (
            <section key={sectionNode.id}>
              <h1>{sectionNode.title}</h1>
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-4"
                variants={{
                  show: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                  hide: {},
                }}
                initial="hide"
                animate="show"
                data-testid="page-projects-grid"
              >
                {project.nodes
                  .filter(
                    (projectNode) => projectNode.section?.id === sectionNode.id,
                  )
                  .map((projectNode) => (
                    <motion.div
                      key={projectNode.id}
                      className="p-4 rounded flex flex-col shadow-xl"
                      variants={{
                        show: {
                          opacity: 1,
                          y: 0,
                        },
                        hide: {
                          opacity: 0,
                          y: -20,
                        },
                      }}
                    >
                      <div className="flex justify-between">
                        <h2 className="text-xl">
                          {projectNode.url ? (
                            <a
                              href={projectNode.url}
                              aria-label={projectNode.url}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-block"
                            >
                              {projectNode.title}
                            </a>
                          ) : (
                            projectNode.title
                          )}
                        </h2>
                        {projectNode.url && (
                          <a
                            href={projectNode.url}
                            aria-label={projectNode.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block hover:text-gray-600 transition-link"
                          >
                            <FontAwesomeIcon icon={faGithubSquare} size="2x" />
                          </a>
                        )}
                      </div>
                      {projectNode.preview && (
                        <Img
                          fluid={projectNode.preview.fluid as FluidObject}
                          alt={projectNode.preview.title ?? ''}
                          className="mt-2 rounded"
                        />
                      )}
                      <div className="flex-grow mt-2 content">
                        {documentToReactComponents(
                          projectNode.description?.json,
                        )}
                      </div>
                      <div>
                        {projectNode.languages?.map((language) => (
                          <Tag
                            key={`${projectNode.id}_${language}`}
                            className="mt-2 mr-2"
                          >
                            {language}
                          </Tag>
                        ))}
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </section>
          ))}
      </div>
    </Layout>
  );
};

export default Projects;
