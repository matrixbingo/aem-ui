import React, { useState } from 'react';
import { InputStringNumber } from 'aem-ui';

const Demo: React.FC = () => {
  const [value1, setValue1] = useState('11111');
  const [value2, setValue2] = useState(2222);

  const onChange1 = (v) => {
    window.console.log('v---------------->', v);
    setValue1(v);
  };

  const onChange2 = (v) => {
    window.console.log('v2---------------->', v);
    setValue2(v);
  };

  return (
    <>
      <InputStringNumber onChange={onChange1} dataType="string" />
      <InputStringNumber onChange={onChange2} dataType="number" />
    </>
  );
};

export default Demo;
