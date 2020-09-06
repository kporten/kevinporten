import classNames from 'classnames';
import React from 'react';

type TagProps = {
  className?: string;
  children: React.ReactNode;
};

const Tag: React.FC<TagProps> = ({ className, children }) => (
  <span
    className={classNames(
      className,
      'inline-block bg-gray-300 text-gray-600 px-2 py-1 rounded text-sm',
    )}
  >
    {children}
  </span>
);

export default Tag;
