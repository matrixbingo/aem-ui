import React, { useState } from 'react';
import { DatePickerFormat } from 'aem-ui';
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
      <Title level={5} style={{margin: '20px 0px 5px 0px'}}>使用value</Title>

      <DatePickerFormat onChange={onChange} value={time} />

      <Title level={5} style={{margin: '20px 0px 5px 0px'}}>不使用value</Title>

      <DatePickerFormat onChange={(v) => window.console.log('DatePickerFormat ---------------->', v)} />

      <Title level={5} style={{margin: '20px 0px 5px 0px'}}>formatOut 输出格式</Title>

      <DatePickerFormat formatOut="YYYYMMDD" onChange={(v) => window.console.log('DatePickerFormat formatOut ---------------->', v)} />
    </>
  );
};

export default Demo;
