import React, { useState } from 'react';
import { MaskCloseModal } from 'aem-ui';
import { Button } from 'antd';

const Demo: React.FC = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);

  return (
    <>
      <Button onClick={() => setVisible1((pev) => !pev)}>small</Button>
      <MaskCloseModal
        size='small'
        title="size='small'"
        visible={visible1}
        onCancel={() => setVisible1(false)}
      >
        <span>21212</span>
      </MaskCloseModal>

      <br/>

      <Button onClick={() => setVisible2((pev) => !pev)}>normal</Button>
      <MaskCloseModal
        size='normal'
        title="size='normal'"
        visible={visible2}
        onCancel={() => setVisible2(false)}
      >
        <span>21212</span>
      </MaskCloseModal>

      <br/>

      <Button onClick={() => setVisible3((pev) => !pev)}>默认 large</Button>
      <MaskCloseModal
        title="size='large'"
        visible={visible3}
        onCancel={() => setVisible3(false)}
      >
        <span>21212</span>
      </MaskCloseModal>
      
      <br/>

      <Button onClick={() => setVisible4((pev) => !pev)}>自定义 宽度</Button>
      <MaskCloseModal
        width={200}
        visible={visible4}
        onCancel={() => setVisible4(false)}
      >
        <span>21212</span>
      </MaskCloseModal>
    </>
  );
};

export default Demo;
