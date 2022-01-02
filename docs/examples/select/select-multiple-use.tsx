import React, { useState } from 'react';
import { SelectMultiple } from 'aem-ui';

const options = [
  { id: 1, name: 'v1' },
  { id: 2, name: 'v2' },
  { id: 3, name: 'v3' },
  { id: 4, name: 'v4' },
];

const Demo: React.FC = () => {
  const [value, setValue] = useState([]);

  const onChange = (v) => {
    setValue(v);
    window.console.log('SelectMultiple ---------------->', v);
  };

  return (
    <>
      <SelectMultiple<number>
        options={options}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Demo;
