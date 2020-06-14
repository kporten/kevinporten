import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import type { LayoutQuery } from '../../types/graphql';

import Background from './Background';
import Footer from './Footer';
import Header from './Header';
import Seo from './Seo';

const GET_LAYOUT_CONTENTFUL = graphql`
  query Layout {
    contentfulLayout {
      siteDescription
      siteTitle
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
      made
    }
  }
`;

type LayoutProps = {
  pageTitle: string;
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  const { contentfulLayout } = useStaticQuery<LayoutQuery>(
    GET_LAYOUT_CONTENTFUL,
  );

  return (
    <div className="bg-black min-h-screen">
      <Background className="absolute inset-0 z-0" />
      <Seo
        title={`${contentfulLayout?.siteTitle} | ${pageTitle}`}
        description={contentfulLayout?.siteDescription ?? ''}
        icon={{
          light: contentfulLayout?.iconLight?.fixed?.src ?? '',
          dark: contentfulLayout?.iconDark?.fixed?.src ?? '',
        }}
      />
      <div className="relative z-10">
        <Header logoUrl={contentfulLayout?.logo?.file?.url ?? ''} />
        <main>{children}</main>
        <Footer made={contentfulLayout?.made ?? ''} />
      </div>
    </div>
  );
};

export default Layout;
