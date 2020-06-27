import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-screen max-w-screen-xl mx-auto p-8 xl:px-0">
      {children}
    </div>
  );
};

export default Container;
