import React, { useState } from 'react';
import { InputRange } from 'aem-ui';

const Demo: React.FC = () => {
  const [value, setValue] = useState([1, 10]);

  const onChange = (v) => {
    window.console.log('v---------------->', v);
    setValue(v);
  };

  return (
    <>
      <InputRange value={value} onChange={onChange} style={{ width: '100%'}} />
    </>
  );
};

export default Demo;
