import React from 'react';
import { SelectSearchMultiple } from 'aem-ui';
import { isNumber } from 'lodash';
import { useToggle } from 'ahooks';
import { Button } from 'antd';

const options1 = [
  { value: 9, label: '北京' },
  { value: 2, label: 'v2 上海' },
  { value: '3', label: 'v3 广州' },
  { value: '4', label: 'v4 深圳' },
  { value: '5', label: '北凉' },
  { value: 6, label: '北大荒' },
];

const options2 = [
  { value: 8, label: '河北' },
  { value: 2, label: '山西' },
  { value: '3', label: '广州' },
  { value: '4', label: '福建' },
  { value: '5', label: '山东' },
  { value: 6, label: '广西' },
];

const Demo: React.FC = () => {

  const [options, { toggle }] = useToggle(options1, options2);

  const onChange1 = (v) => {
    window.console.log('SelectSearchMultiple 1---------------->', v);
  };

  const onChange2 = (v) => {
    window.console.log('SelectSearchMultiple 2---------------->', v);
  };

  const onChange3 = (v) => {
    window.console.log('SelectSearchMultiple 3---------------->', v);
  };

  const onClick = () => {
    toggle();
  }

  return (
    <>
      <Button onClick={onClick}>toggle options</Button>
      <br />
      <br />
      <span>默认不排序</span>
      <SelectSearchMultiple options={options} onChange={onChange1}/>
      <br />
      <br />
      <span>value 排序</span>
      <SelectSearchMultiple options={options} onChange={onChange2} sort='value' />
      <br />
      <br />
      <span>label 排序</span>
      <SelectSearchMultiple options={options} onChange={onChange3} sort='label' />
    </>
  );
};

export default Demo;
