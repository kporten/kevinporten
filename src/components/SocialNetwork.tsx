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
  let color = 'blue-500';

  if (link.includes('linkedin')) {
    icon = faLinkedin;
    color = 'blue-700';
  } else if (link.includes('github')) {
    icon = faGithubSquare;
    color = 'gray-500';
  } else if (link.includes('twitter')) {
    icon = faTwitterSquare;
    color = 'blue-500';
  } else if (link.includes('xing')) {
    icon = faXingSquare;
    color = 'teal-700';
  }

  if (icon) {
    return (
      <a
        href={link}
        aria-label={link}
        target="_blank"
        rel="noreferrer"
        className={classNames(
          `inline-block hover:text-${color} transition-link`,
        )}
      >
        <FontAwesomeIcon icon={icon} size="2x" />
      </a>
    );
  }

  return null;
};

export default SocialNetwork;
