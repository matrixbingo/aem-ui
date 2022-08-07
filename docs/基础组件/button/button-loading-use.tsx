import React from 'react';
import { ButtonLoading } from 'aem-ui';


const Demo: React.FC = () => {
  const onClick = (v) => {
    window.console.log('v----------->', v);
  };

  return (
    <>
      <ButtonLoading type="link" onClick={onClick}>
        ButtonLoading
      </ButtonLoading>
    </>
  );
};

export default Demo;
