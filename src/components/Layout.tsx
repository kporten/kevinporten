import React from 'react';

import classNames from 'classnames';
import { useStaticQuery, graphql } from 'gatsby';

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
      siteMade
      iconLightTheme {
        fixed(toFormat: PNG, width: 32, quality: 100) {
          src
        }
      }
      iconDarkTheme {
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
          light: contentfulLayout?.iconLightTheme?.fixed?.src ?? '',
          dark: contentfulLayout?.iconDarkTheme?.fixed?.src ?? '',
        }}
      />
      <div className="flex flex-col items-stretch min-h-screen relative z-10">
        <Container>
          <Header logoUrl={contentfulLayout?.logo?.file?.url ?? ''} />
        </Container>
        <main
          className={classNames('flex-grow', {
            'bg-white': !isLanding,
            'flex items-center': isLanding,
          })}
        >
          <Container>{children}</Container>
        </main>
        <div className={classNames({ 'bg-white': !isLanding })}>
          <Container>
            <Footer
              className="text-gray-500"
              made={contentfulLayout?.siteMade ?? ''}
            />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Layout;
