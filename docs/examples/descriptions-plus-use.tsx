import React from 'react';
import { DescriptionsPlus } from 'aem-ui';

const list = [
  { label: '英文名', content: 'aem-ui' },
  { label: '类型', content: 1 },
  { label: '入参', content: <span>121</span> },
  { label: '英文名', content: 'aem-ui' },
  { label: '类型', content: 1 },
  { label: '入参', content: <span>121</span> },
];

const Demo: React.FC = () => {
  return (
    <>
      <DescriptionsPlus props={{ title: '基本信息', column: 4 }} list={list} />
    </>
  );
};

export default Demo;
