import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { DatePickerFormat, RangePickerFormat } from 'aem-ui';

const Demo: React.FC = () => {
  const onChange = (v) => {
    window.console.log('DatePickerFormat ---------------->', v);
  };

  const onChange1 = (v) => {
    window.console.log('DatePickerFormat ---------------->', v);
  };

  return (
    <>
      <DatePickerFormat onChange={onChange} />
      <br />
      <RangePickerFormat onChange={onChange1} />
    </>
  );
};

export default Demo;
