import React from 'react';
import { SelectTagsInputString } from 'aem-ui';



const Demo: React.FC = () => {
  const onChange = (v) => {
    window.console.log('SelectTagsInputString ---------------->', v);
  };

  return (
    <>
      <SelectTagsInputString onChange={onChange} value="aa,cc,dd"/>
    </>
  );
};

export default Demo;
