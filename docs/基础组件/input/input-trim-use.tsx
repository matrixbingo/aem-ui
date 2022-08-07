import React, { useState } from 'react';
import { InputTrim } from 'aem-ui';

const Demo: React.FC = () => {
  const [value, setValue] = useState('');

  const onChange = (v) => {
    window.console.log('v---------------->', v);
    setValue(v);
  };

  return (
    <>
      <InputTrim value={value} onChange={onChange} />
    </>
  );
};

export default Demo;
