import React, { useState } from 'react';
import { InputSearch } from 'aem-ui';

const Demo: React.FC = () => {
  const [value, setValue] = useState('');

  const onChange = (v) => {
    window.console.log('onChange---------------->', v);
    setValue(v);
  };

  const onSearch = (v) => {
    window.console.log('onSearch---------------->', v);
  }

  return (
    <>
      <InputSearch value={value} onChange={onChange} onSearch={onSearch} />
    </>
  );
};

export default Demo;
