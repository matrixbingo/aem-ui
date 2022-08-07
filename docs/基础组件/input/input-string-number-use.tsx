import React, { useState } from 'react';
import { InputStringNumber } from 'aem-ui';

const Demo: React.FC = () => {
  const [value1, setValue1] = useState('11111');
  const [value2, setValue2] = useState(2222);

  const onChange1 = (v) => {
    window.console.log('onChange1 string ---------------->', v, typeof v);
    setValue1(v);
  };

  const onChange2 = (v) => {
    window.console.log('onChange2 number---------------->', v, typeof v);
    setValue2(v);
  };

  return (
    <>
      string： <InputStringNumber onChange={onChange1} dataType="string" defaultValue={0} value="1" />
      number： <InputStringNumber onChange={onChange2} dataType="number" defaultValue={0}/>
    </>
  );
};

export default Demo;
