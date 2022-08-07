import React, { useState } from 'react';
import { ButtonCopy, InputDefaultClear } from 'aem-ui';
import 'antd/dist/antd.css';

const Demo: React.FC = () => {
  const [value, setValue] = useState('')

  // const onChange = () => {

  // }

  return (
    <>
      <InputDefaultClear onChange={setValue} />
      <ButtonCopy value={value} />
    </>
  );
};

export default Demo;
