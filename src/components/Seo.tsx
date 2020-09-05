import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { Helmet } from 'react-helmet';

type SeoProps = {
  title: string;
  description: string;
  icon: {
    light: string;
    dark: string;
  };
};

const Seo: React.FC<SeoProps> = ({ title, description, icon }) => {
  const intl = useIntl();

  let favicon = icon.light;

  if (typeof window !== 'undefined') {
    favicon = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? icon.dark
      : icon.light;
  }

  return (
    <Helmet>
      <html lang={intl.locale} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href={favicon} type="image/png" />
    </Helmet>
  );
};

export default Seo;
