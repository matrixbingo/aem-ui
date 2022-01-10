import React, { useState } from 'react';
import { ModalEditor } from 'aem-ui';

const Demo: React.FC = () => {

  return (
    <>
      <ModalEditor button={{ children:"编辑" }}  title="ModalEditor">
        do something...
      </ModalEditor>
    </>
  );
};

export default Demo;
