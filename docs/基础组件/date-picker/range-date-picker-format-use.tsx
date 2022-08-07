import React from 'react';
import { RangeDatePickerFormat } from 'aem-ui';

const Demo: React.FC = () => {

  const onChange = (v) => {
    window.console.log('RangeDatePickerFormat ---------------->', v);
  };

  return (
    <>
      <RangeDatePickerFormat onChange={onChange} />
    </>
  );
};

export default Demo;
