const langs = require('./src/i18n/langs');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
  });
}

module.exports = {
  siteMetadata: {
    langs,
  },
  plugins: [
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        start_url: '/',
        name: 'Kevin Porten',
        short_name: 'KP',
        icon: './src/assets/IconLight.png',
        include_favicon: false,
        background_color: '#1a202c',
        theme_color: '#1a202c',
        display: 'standalone',
      },
    },
    // https://www.gatsbyjs.org/packages/gatsby-plugin-graphql-codegen/
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: './typings/graphql.ts',
        codegenConfig: {
          preResolveTypes: true,
        },
      },
    },
    // https://www.gatsbyjs.org/docs/tailwind-css/
    'gatsby-plugin-postcss',
    // https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/
    'gatsby-plugin-react-helmet',
    // https://www.gatsbyjs.org/packages/gatsby-plugin-prefetch-google-fonts/
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Montserrat',
            variants: ['400', '700'],
          },
        ],
      },
    },
    // https://www.gatsbyjs.org/packages/gatsby-plugin-react-svg/
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    // https://www.gatsbyjs.org/packages/gatsby-plugin-intl/
    {
      resolve: 'gatsby-plugin-intl',
      options: {
        path: `${__dirname}/src/i18n`,
        languages: langs.langKeys,
        defaultLanguage: langs.langKeyDefault,
        redirect: true,
      },
    },
    // https://www.gatsbyjs.org/packages/gatsby-source-contentful/
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
