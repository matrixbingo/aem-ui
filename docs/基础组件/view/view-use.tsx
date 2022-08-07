import React, { useState } from 'react';
import { View } from 'aem-ui';
import { Button } from 'antd';

const Demo: React.FC = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button onClick={()=>setVisible((prev) => !prev)}>visible</Button>
      <br />
      <View visible={visible}>
        do something....
      </View>
    </>
  );
};

export default Demo;
