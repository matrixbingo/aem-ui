import React from 'react';
import { TextAreaJson } from 'aem-ui';

const data = {
  a: 'aaa',
  b: undefined,
  c: Symbol('dd'),
  fn: function () {
    return true;
  },
};

const Demo: React.FC = () => {
  const onChange = (v) => {
    window.console.log('TextAreaJson ---------------->', v);
  };

  return (
    <>
      <TextAreaJson value={data} />
    </>
  );
};

export default Demo;
