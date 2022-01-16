import React, { useState } from 'react';
import { InputSelectValue } from 'aem-ui';

const Demo: React.FC = () => {
  const [value, setValue] = useState('');

  const onChange = (v) => {
    window.console.log('v---------------->', v);
    setValue(v);
  };

  return (
    <>
      <InputSelectValue value={value} onChange={onChange} />
    </>
  );
};

export default Demo;
