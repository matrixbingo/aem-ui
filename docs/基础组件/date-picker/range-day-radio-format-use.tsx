import React, { useState } from 'react';
import { RangeDayRadioFormat } from 'aem-ui';
import { Typography } from 'antd';
const { Title } = Typography;

const Demo: React.FC = () => {
  const [time, setTIme] = useState<string>('');

  const onChange = (v, c) => {
    window.console.log('onChange ---------------->', v, c);
    setTIme(v);
  };

  return (
    <>

      <RangeDayRadioFormat onChange={onChange} range={[7, 15, 30]} mixDays={0}/>

      <Title level={5} style={{margin: '20px 0px 5px 0px'}}>按钮置后</Title>

      <RangeDayRadioFormat onChange={onChange} radioBefore={false} />

      <Title level={5} style={{margin: '20px 0px 5px 0px'}}>默认不选择</Title>

      <RangeDayRadioFormat radioBefore={false} defaultChecked={false}  onChange={(v, c) => window.console.log('RangeDayRadioFormat 默认不选 ------>', v, c)} />

      <Title level={5} style={{margin: '20px 0px 5px 0px'}}>范围限制</Title>

      <RangeDayRadioFormat radioBefore={false} defaultChecked={false} mixDays={15} onChange={(v) => window.console.log('RangeDayRadioFormat 默认不选 + 范围限制------>', v)} />

      <Title level={5} style={{margin: '20px 0px 5px 0px'}}>formatOut 输出格式</Title>

      <RangeDayRadioFormat formatOut="YYYYMMDD" show={true} range={[7, 14]} mixDays={14} onChange={(v, c) => window.console.log('RangeDayRadioFormat formatOut ------>', v, c)} />
    </>
  );
};

export default Demo;
