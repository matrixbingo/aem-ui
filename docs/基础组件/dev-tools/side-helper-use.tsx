import React, { useState } from 'react';
import { SideHelper } from 'aem-ui';
import { Segmented } from 'antd';

const Demo: React.FC = () => {
  const [position, setPosition] = useState<any>('right');

  const onClick = (v) => {
    window.console.log('SideHelper ---------------->', v);
  };

  return (
    <>
      <Segmented options={['right', 'left']} onChange={setPosition}/>
      <SideHelper onClick={onClick} position={position}/>
    </>
  );
};

export default Demo;
