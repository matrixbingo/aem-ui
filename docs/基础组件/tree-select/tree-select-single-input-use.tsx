import React, { useState } from 'react';
import { TreeSelectSingleInput } from 'aem-ui';

const treeData = [
  {
    level: 1,
    value: 'v1',
    title: 'title1',
    children: [
      {
        level: 2,
        value: 'v2',
        title: 'title2',
        children: [
          { level: 4, value: 'v4', title: 'title4' },
          { level: 4, value: 'v5', title: 'title5' },
          { level: 4, value: 'v6', title: 'title6' },
        ],
      },
    ],
  },
];

const Demo: React.FC = () => {
  const [value, setValue] = useState('');

  const onChange = (v) => {
    setValue(v);
    window.console.log('SelectSingle ---------------->', v);
  };

  return (
    <>
      <TreeSelectSingleInput treeData={treeData} onChange={onChange} value={value} />
    </>
  );
};

export default Demo;
