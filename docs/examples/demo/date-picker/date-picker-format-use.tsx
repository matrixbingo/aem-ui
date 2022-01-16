import React from 'react';
import { DatePickerFormat } from 'aem-ui';

const Demo: React.FC = () => {
  
  const onChange = (v) => {
    window.console.log('DatePickerFormat ---------------->', v);
  };

  return (
    <>
      <DatePickerFormat onChange={onChange} />
    </>
  );
};

export default Demo;
