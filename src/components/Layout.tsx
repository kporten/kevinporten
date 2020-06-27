import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import classNames from 'classnames';

import type { LayoutQuery } from '../../types/graphql';

import Background from './Background';
import Container from './Container';
import Footer from './Footer';
import Header from './Header';
import Seo from './Seo';

const GET_LAYOUT_CONTENTFUL = graphql`
  query Layout {
    contentfulLayout {
      siteTitle
      siteDescription
      made
      iconLight {
        fixed(toFormat: PNG, width: 32, quality: 100) {
          src
        }
      }
      iconDark {
        fixed(toFormat: PNG, width: 32, quality: 100) {
          src
        }
      }
      logo {
        file {
          url
        }
      }
    }
  }
`;

type LayoutProps = {
  pageTitle: string;
  isLanding?: boolean;
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ pageTitle, isLanding, children }) => {
  const { contentfulLayout } = useStaticQuery<LayoutQuery>(
    GET_LAYOUT_CONTENTFUL,
  );

  return (
    <div className="min-h-screen bg-black">
      <Background className="absolute inset-0 z-0" />
      <Seo
        title={`${contentfulLayout?.siteTitle} | ${pageTitle}`}
        description={contentfulLayout?.siteDescription ?? ''}
        icon={{
          light: contentfulLayout?.iconLight?.fixed?.src ?? '',
          dark: contentfulLayout?.iconDark?.fixed?.src ?? '',
        }}
      />
      <div className="flex flex-col items-stretch min-h-screen relative z-10">
        <Container>
          <Header logoUrl={contentfulLayout?.logo?.file?.url ?? ''} />
        </Container>
        <main className={classNames('flex-grow', { 'bg-white': !isLanding })}>
          <Container>{children}</Container>
        </main>
        <div className={classNames({ 'bg-white': !isLanding })}>
          <Container>
            <Footer
              className="text-gray-500"
              made={contentfulLayout?.made ?? ''}
            />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Layout;
