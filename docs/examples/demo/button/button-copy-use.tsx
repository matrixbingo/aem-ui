import React, { useState } from 'react';
import { ButtonCopy, InputDefaultClear } from 'aem-ui';


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
