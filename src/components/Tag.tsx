import React from 'react';

import classNames from 'classnames';

type TagProps = {
  className?: string;
  children: React.ReactNode;
};

const Tag: React.FC<TagProps> = ({ className, children }) => (
  <span
    className={classNames(
      className,
      'inline-block bg-gray-700 text-white px-2 py-1 rounded text-sm',
    )}
  >
    {children}
  </span>
);

export default Tag;
