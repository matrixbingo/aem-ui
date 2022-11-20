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

      <Title level={5} style={{margin: '20px 0px 5px 0px'}}>范围限制</Title>

      <RangeDatePickerFormat value={value} defaultChecked={false} mixDays={15} onChange={(v) => window.console.log('RangeDatePickerFormat 默认不选 + 范围限制------>', v)} />


      <Title level={5} style={{margin: '20px 0px 5px 0px'}}>formatOut 输出格式</Title>

      <RangeDatePickerFormat formatOut="YYYYMMDD" onChange={(v) => window.console.log('RangeDatePickerFormat formatOut ------>', v)} />

    </>
  );
};

export default Demo;
