import React from 'react';
import { SelectSearchSingle } from 'aem-ui';
import { isNumber } from 'lodash';

const options = [
  { value: 9, label: '北京' },
  { value: 2, label: 'v2 上海' },
  { value: '3', label: 'v3 广州' },
  { value: '4', label: 'v4 深圳' },
  { value: '5', label: '北凉' },
  { value: 6, label: '北大荒' },
];

const Demo: React.FC = () => {
  const onChange = (v) => {

    window.console.log('SelectSearchSingle ---------------->', v, ' isNumber: ', isNumber(v));
  };

  return (
    <>
      <SelectSearchSingle options={options} onChange={onChange} sort='value' />
    </>
  );
};

export default Demo;
