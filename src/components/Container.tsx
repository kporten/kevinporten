import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className="container mx-auto p-8">{children}</div>
);

export default Container;
