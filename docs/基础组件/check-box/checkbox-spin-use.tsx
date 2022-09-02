import React, { useState } from 'react';
import { CheckboxSpin } from 'aem-ui';
import { delay }  from 'lodash';
import { useBoolean } from 'ahooks';

const Demo: React.FC = () => {
  const [state, { toggle, setTrue, setFalse }] = useBoolean(true);

  const onChange = (checked, setChecked, setLoading) => {
    setLoading(true);
    toggle();
    delay(() => setLoading(false), 2000);
  };

  return (
    <>
      <CheckboxSpin id={1} title={1} onChange={onChange} checked={state} />
    </>
  );
};

export default Demo;
