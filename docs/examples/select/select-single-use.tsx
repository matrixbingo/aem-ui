import React from 'react';
import { SelectSingle } from 'aem-ui';

const options = [
  { id: 1, name: 'v1' },
  { id: 2, name: 'v2' },
  { id: 3, name: 'v3' },
  { id: 4, name: 'v4' },
];

const Demo: React.FC = () => {
  const onChange = (v) => {
    window.console.log('SelectSingle ---------------->', v);
  };

  return (
    <>
      <SelectSingle<number> options={options} onChange={onChange} />
    </>
  );
};

export default Demo;
