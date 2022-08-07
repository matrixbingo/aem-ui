import React, { useState } from 'react';
import { ModalEditor } from 'aem-ui';
import { delay } from 'lodash';

const Demo: React.FC = () => {

  const onSubmit = (setVisible, setLoading) => {
    delay(()=> {
      setLoading(false);
     // setVisible(false);
    }, 3000);
  }

  return (
    <>
      <ModalEditor button={{ children:"编辑1" }}  title="ModalEditor" onSubmit={onSubmit} onClick={() => window.console.log('onClick')} onCancel={() => window.console.log('onCancel')}>
        do something...
      </ModalEditor>

      <br />
      <ModalEditor button={{ children:"编辑2" }}  title="ModalEditor" onOk={()=>{}}>
        do something...
      </ModalEditor>
    </>
  );
};

export default Demo;
