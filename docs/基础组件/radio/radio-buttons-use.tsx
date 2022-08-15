import React, { useState } from 'react';
import { RadioButtons } from 'aem-ui';
import { Typography } from 'antd';
const { Title } = Typography;

const buttons = [{ value: 7, children: '7天' }, { value: 15, children: '15天' }];

const Demo: React.FC = () => {
  const [time, setTIme] = useState<string[]>([]);

  const onChange = (v) => {
    window.console.log('onChange ---------------->', v);
    setTIme(v);
  };
  return (
    <>
      <RadioButtons<number> buttons={buttons} onChange={onChange} />
    </>
  );
};

export default Demo;
