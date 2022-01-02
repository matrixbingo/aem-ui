import React, { useState } from 'react';
import { MaskCloseModal } from 'aem-ui';
import { Button } from 'antd';

const Demo: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button onClick={() => setVisible((pev) => !pev)}>onClick</Button>
      <MaskCloseModal
        title="Basic Modal"
        visible={visible}
        onCancel={() => setVisible(false)}
      >
        <span>21212</span>
      </MaskCloseModal>
    </>
  );
};

export default Demo;
