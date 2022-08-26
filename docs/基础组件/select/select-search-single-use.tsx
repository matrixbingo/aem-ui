import React from 'react';
import { SelectSearchSingle } from 'aem-ui';

const options = [
  { value: 1, label: 'v1 北京' },
  { value: 2, label: 'v2 上海' },
  { value: 3, label: 'v3 广州' },
  { value: 4, label: 'v4 深圳' },
];

const Demo: React.FC = () => {
  const onChange = (v) => {
    window.console.log('SelectSearchSingle ---------------->', v);
  };

  return (
    <>
      <SelectSearchSingle<number> options={options} onChange={onChange} />
    </>
  );
};

export default Demo;
