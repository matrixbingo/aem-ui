import React from 'react';
import { BaseTabs, tabsFormat } from 'aem-ui';

const dataList = [
  {
    key: 'all',
    tab: '全部',
  },
  {
    key: 'my',
    tab: '我的收藏',
  },
  {
    key: 'other',
    tab: '其他',
  },
];

const Demo: React.FC = () => {
  const onChange = (v) => {
    window.console.log('v---------------->', v);
  };

  return (
    <>
      <BaseTabs tabsProps={{ onChange }} dataList={tabsFormat(dataList)} />
    </>
  );
};

export default Demo;
