import React from 'react';
import { SelectTags } from 'aem-ui';



const Demo: React.FC = () => {
  const onChange = (v) => {
    window.console.log('SelectTags ---------------->', v);
  };

  return (
    <>
      <SelectTags onChange={onChange} />
    </>
  );
};

export default Demo;
