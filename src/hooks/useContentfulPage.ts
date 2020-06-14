import { useEffect } from 'react';
import { useIntl, navigate } from 'gatsby-plugin-intl';

const useContentfulPage = <N extends { node_locale?: string | null }>(
  allContentfulPageNodes: N[],
) => {
  const { locale } = useIntl();

  const contentfulPage = allContentfulPageNodes.find((node) =>
    node.node_locale?.startsWith(locale),
  );

  useEffect(() => {
    if (!contentfulPage) {
      navigate('/404');
    }
  });

  return contentfulPage;
};

export default useContentfulPage;
