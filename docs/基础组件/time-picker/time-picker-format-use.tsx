import React, { useState } from 'react';
import { TimePickerFormat } from 'aem-ui';
import { Typography } from 'antd';
const { Title } = Typography;

const Demo: React.FC = () => {
  const [time, setTIme] = useState<string>('');

  const onChange = (v) => {
    window.console.log('onChange ---------------->', v);
    setTIme(v);
  };

  return (
    <>
      <TimePickerFormat onChange={onChange} value={time} />

      <Title level={5} style={{margin: '20px 0px 5px 0px'}}>不使用value</Title>

      <TimePickerFormat onChange={(v) => window.console.log('TimePickerFormat ---------------->', v)} />
    </>
  );
};

export default Demo;
