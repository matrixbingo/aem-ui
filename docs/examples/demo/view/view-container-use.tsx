import React, { useState } from 'react';
import { ViewContainer } from 'aem-ui';

const Demo: React.FC = () => {
  return (
    <>
      <ViewContainer>
        <div style={{width: 2000, height: 400, backgroundColor: 'aqua' }}></div>
      </ViewContainer>
    </>
  );
};

export default Demo;
