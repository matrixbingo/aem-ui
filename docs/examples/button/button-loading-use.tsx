import React from 'react';
import { ButtonLoading } from 'aem-ui';


const Demo: React.FC = () => {
  const onChange = (v) => {
    window.console.log('v---------------->', v);
  };

  return (
    <>
      <ButtonLoading type="link">
        ButtonLoading
      </ButtonLoading>
    </>
  );
};

export default Demo;
