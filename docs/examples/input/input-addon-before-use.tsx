import React, { useState } from 'react';
import { InputForm, InputAddonBefore } from 'aem-ui';

const Demo: React.FC = () => {
  const [value, setValue] = useState('abc_name_code');
  const [addonBefore, setAddonBefore] = useState('abc_');

  const onChange = (v) => {
    window.console.log('v---------------->', v);
    setValue(v);
  };

  return (
    <>
      <InputForm value={addonBefore} onChange={setAddonBefore} />
      <InputAddonBefore
        value={value}
        addonBefore={addonBefore}
        onChange={onChange}
      />
    </>
  );
};

export default Demo;
