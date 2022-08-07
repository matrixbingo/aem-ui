import React, { useState } from 'react';
import { InputRenderCustomer } from 'aem-ui';

const Demo: React.FC = () => {
  const [value, setValue] = useState('11111');

  const onChange = (v) => {
    window.console.log('v---------------->', v);
    setValue(v);
  };

  const input = (v) => {
    return v.replace('aa_', '');
  };

  return (
    <>
      <InputRenderCustomer
        value={value}
        onChange={onChange}
        input={input}
        render={(v) => 'aa_' + v}
      />
    </>
  );
};

export default Demo;
