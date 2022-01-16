import React from 'react';
import { RangePickerFormat } from 'aem-ui';

const Demo: React.FC = () => {
  const onChange = (v) => {
    window.console.log('RangePickerFormat ---------------->', v);
  };

  return (
    <>
      <RangePickerFormat onChange={onChange} />
    </>
  );
};

export default Demo;
