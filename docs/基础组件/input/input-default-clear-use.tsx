import React, { useState } from 'react';
import { InputDefaultClear } from 'aem-ui';
import { Button } from 'antd';

const Demo: React.FC = () => {
  const [value, setValue] = useState('11111');
  const [disabled, setDisabled] = useState(false);

  const onChange = (v) => {
    window.console.log('v---------------->', v);
    setValue(v);
  };

  return (
    <>
      <Button onClick={() => setDisabled(!disabled)}>
        {'disabled : ' + disabled}
      </Button>
      <InputDefaultClear value={value} onChange={onChange} disabled={disabled} />
    </>
  );
};

export default Demo;
