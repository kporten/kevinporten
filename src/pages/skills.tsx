import React from 'react';

import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useStaticQuery, graphql } from 'gatsby';
import simpleIcons from 'simple-icons';

import type { SkillsQuery } from '../../types/graphql';

import Layout from '../components/Layout';

import styles from '../styles/skills.module.css';

import useContentfulPage from '../hooks/useContentfulPage';

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
      <div className="space-y-16">
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
              >
                {skill.nodes
                  .filter(
                    (skillNode) => skillNode.section?.id === sectionNode.id,
                  )
                  .map((skillNode) => (
                    <motion.div
                      key={skillNode.id}
                      className="flex flex-col-reverse items-center p-4 rounded"
                      style={{
                        backgroundColor: skillNode.hexColor ?? '#ffffff',
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
                      <h2 className="text-center text-white">
                        {skillNode.title}
                      </h2>
                      <div
                        className={classNames(styles.skill, 'w-20 mb-2')}
                        dangerouslySetInnerHTML={{
                          __html: simpleIcons.get(skillNode.icon ?? '')?.svg,
                        }}
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
