import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import simpleIcons from 'simple-icons';

import type { SkillsQuery } from '../../types/graphql';

import useContentfulPage from '../hooks/useContentfulPage';

import Layout from '../components/Layout';

import styles from '../styles/skills.module.css';

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
      {section.nodes
        .filter((sectionNode) => sectionNode.page?.id === contentfulPage.id)
        .map((sectionNode) => (
          <section key={sectionNode.id} className="text-white">
            <h1>{sectionNode.title}</h1>
            {skill.nodes
              .filter((skillNode) => skillNode.section?.id === sectionNode.id)
              .map((skillNode) => (
                <div
                  key={skillNode.id}
                  style={{ backgroundColor: skillNode.hexColor ?? '#ffffff' }}
                >
                  <h2>{skillNode.title}</h2>
                  <div
                    className={styles.skill}
                    dangerouslySetInnerHTML={{
                      __html: simpleIcons.get(skillNode.icon ?? '')?.svg,
                    }}
                  />
                </div>
              ))}
          </section>
        ))}
    </Layout>
  );
};

export default Skills;
