import React from 'react';

import loadable from '@loadable/component';
import { motion } from 'framer-motion';
import { useStaticQuery, graphql } from 'gatsby';

import type { SkillsQuery } from '../../types/graphql';

import Layout from '../components/Layout';

import useContentfulPage from '../hooks/useContentfulPage';

const SimpleIcon = loadable<{
  name: string;
  size: number;
  className?: string;
  color?: string;
}>(({ name }) =>
  import(`@icons-pack/react-simple-icons/lib/components/${name}.js`),
);

const GET_SKILLS_CONTENTFUL_PAGE = graphql`
  query Skills {
    page: allContentfulPage(
      filter: { contentful_id: { eq: "KbsdcceAfRetyzCsoVEux" } }
    ) {
      nodes {
        id
        node_locale
        title
      }
    }
    section: allContentfulSection(
      filter: { page: { contentful_id: { eq: "KbsdcceAfRetyzCsoVEux" } } }
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
    skill: allContentfulSkill(
      filter: {
        section: { page: { contentful_id: { eq: "KbsdcceAfRetyzCsoVEux" } } }
      }
      sort: { fields: priority, order: ASC }
    ) {
      nodes {
        id
        section {
          id
        }
        title
        icon
        hexColor
      }
    }
  }
`;

const Skills: React.FC = () => {
  const { page, section, skill } = useStaticQuery<SkillsQuery>(
    GET_SKILLS_CONTENTFUL_PAGE,
  );

  const contentfulPage = useContentfulPage<typeof page.nodes[0]>(page.nodes);

  if (!contentfulPage) {
    return null;
  }

  return (
    <Layout pageTitle={contentfulPage.title ?? ''}>
      <div className="space-y-16" data-testid="page-skills">
        {section.nodes
          .filter((sectionNode) => sectionNode.page?.id === contentfulPage.id)
          .map((sectionNode) => (
            <section key={sectionNode.id}>
              <h1>{sectionNode.title}</h1>
              <motion.div
                className="grid grid-cols-2 lg:grid-cols-6 gap-4"
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
                data-testid="page-skills-grid"
              >
                {skill.nodes
                  .filter(
                    (skillNode) => skillNode.section?.id === sectionNode.id,
                  )
                  .map((skillNode) => (
                    <motion.div
                      key={skillNode.id}
                      className="flex flex-col-reverse items-center justify-center p-4 h-48 rounded shadow-xl text-gray-700"
                      whileHover={{
                        backgroundColor: skillNode.hexColor ?? '#000000',
                        color: '#ffffff',
                        scale: 1.1,
                      }}
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
                      <h2 className="text-center">{skillNode.title}</h2>
                      <SimpleIcon
                        name={skillNode.icon ?? ''}
                        size={80}
                        className="mb-2"
                      />
                    </motion.div>
                  ))}
              </motion.div>
            </section>
          ))}
      </div>
    </Layout>
  );
};

export default Skills;
