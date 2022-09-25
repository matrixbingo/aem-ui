import React from 'react';
import { SideHelper } from 'aem-ui';



const Demo: React.FC = () => {

  const onClick = (v) => {
    window.console.log('SideHelper ---------------->', v);
  };

  return (
    <>
      <SideHelper onClick={onClick} />
    </>
  );
};

export default Demo;
