import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithubSquare,
  faTwitterSquare,
  faXingSquare,
} from '@fortawesome/free-brands-svg-icons';

import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';

type SocialNetworkProps = {
  link: string;
};

const SocialNetwork: React.FC<SocialNetworkProps> = ({ link }) => {
  let icon: IconDefinition | null = null;

  if (link.includes('linkedin')) {
    icon = faLinkedin;
  } else if (link.includes('github')) {
    icon = faGithubSquare;
  } else if (link.includes('twitter')) {
    icon = faTwitterSquare;
  } else if (link.includes('xing')) {
    icon = faXingSquare;
  }

  if (icon) {
    return (
      <a href={link} aria-label={link} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={icon} size="2x" />
      </a>
    );
  }

  return null;
};

export default SocialNetwork;
