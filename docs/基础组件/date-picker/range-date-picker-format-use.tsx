import React, { useState } from 'react';
import { RangeDatePickerFormat } from 'aem-ui';
import { Typography } from 'antd';
const { Title } = Typography;

const Demo: React.FC = () => {
  const [time, setTIme] = useState<string[]>([]);

  const [value, setVale] = useState<string[]| undefined>(undefined);

  const onChange = (v) => {
    window.console.log('onChange ---------------->', v);
    setTIme(v);
  };

  return (
    <>
      <RangeDatePickerFormat onChange={onChange} value={time} />

      <Title level={5} style={{margin: '20px 0px 5px 0px'}}>不使用value</Title>

      <RangeDatePickerFormat onChange={(v) => window.console.log('RangeDatePickerFormat 不使用value ------>', v)} />

      <Title level={5} style={{margin: '20px 0px 5px 0px'}}>默认不选</Title>

      <RangeDatePickerFormat value={value} defaultChecked={false} onChange={(v) => window.console.log('RangeDatePickerFormat 默认不选 ------>', v)} />

    </>
  );
};

export default Demo;
