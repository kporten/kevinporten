import React from 'react';

import {
  faLinkedin,
  faGithubSquare,
  faTwitterSquare,
  faXingSquare,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';

type SocialNetworkProps = {
  link: string;
};

const SocialNetwork: React.FC<SocialNetworkProps> = ({ link }) => {
  let icon: IconDefinition | null = null;
  let color = 'hover:text-blue-500';

  if (link.includes('linkedin')) {
    icon = faLinkedin;
    color = 'hover:text-blue-600';
  } else if (link.includes('github')) {
    icon = faGithubSquare;
    color = 'hover:text-gray-600';
  } else if (link.includes('twitter')) {
    icon = faTwitterSquare;
    color = 'hover:text-blue-500';
  } else if (link.includes('xing')) {
    icon = faXingSquare;
    color = 'hover:text-teal-600';
  }

  if (icon) {
    return (
      <a
        href={link}
        aria-label={link}
        target="_blank"
        rel="noreferrer"
        className={classNames(`inline-block ${color} transition-link`)}
      >
        <FontAwesomeIcon icon={icon} size="2x" />
      </a>
    );
  }

  return null;
};

export default SocialNetwork;
