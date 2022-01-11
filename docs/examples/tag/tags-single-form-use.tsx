import React from 'react';
import { TagsSingleFrom } from 'aem-ui';

const dataList = [
  { id: 0, value: 'ALL', name: '全部' },
  { id: 2, value: 'MY', name: '我的' },
  { id: 1, value: 'music', name: '音乐' },
  { id: 3, value: 'movie', name: '电影' },
  { id: 4, value: 'OTHERS1', name: '其他1' },
  { id: 5, value: 'OTHERS2', name: '其他2' },
  { id: 6, value: 'OTHERS3', name: '其他3' },
  { id: 7, value: 'OTHERS4', name: '其他4' },
];

const Demo: React.FC = () => {
  const onChange = (v) => {
    window.console.log('v---------------->', v);
  };

  return (
    <>
      <TagsSingleFrom list={dataList} onChange={onChange} />
    </>
  );
};

export default Demo;
