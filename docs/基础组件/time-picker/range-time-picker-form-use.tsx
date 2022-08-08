import React, { useState } from 'react';
import { RangeTimePickerFormat } from 'aem-ui';
import { Typography } from 'antd';
const { Title } = Typography;

const Demo: React.FC = () => {
  const [time, setTIme] = useState<string[]>([]);

  const onChange = (v) => {
    window.console.log('onChange ---------------->', v);
    setTIme(v);
  };
  return (
    <>
      <RangeTimePickerFormat onChange={onChange} value={time}/>

      <Title level={5} style={{margin: '20px 0px 5px 0px'}}>不使用value</Title>

      <RangeTimePickerFormat onChange={(v) => window.console.log('RangeTimePickerFormat ---------------->', v)} />


    </>
  );
};

export default Demo;
