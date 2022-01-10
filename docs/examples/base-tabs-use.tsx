import React from 'react';
import { BaseTabs, tabsFormat } from 'aem-ui';
import { Button } from 'antd';

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

const dataList2 = [
  {
    key: 'abc',
    tab: 'abc',
    children: <div>asasas</div>,
  },
  {
    key: 'bbb',
    tab: 'bbb',
    children: 'bbbb',
  },
  {
    key: 'ccc',
    tab: 'ccc',
    children: <Button>ccccc</Button>,
  },
  {
    key: 'ddd',
    tab: 'ddd',
    children: 2324,
  },
];


const Demo: React.FC = () => {
  const onChange = (v) => {
    window.console.log('v---------------->', v);
  };

  return (
    <>
      {/* <BaseTabs tabsProps={{ onChange }} dataList={tabsFormat(dataList)} /> */}
      <BaseTabs tabsProps={{ onChange }} dataList={tabsFormat(dataList2)} />
    </>
  );
};

export default Demo;
