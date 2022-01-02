import React from 'react';
import { TagsSingleFrom } from 'aem-ui';

const dataList = [
  { id: 0, value: 'ALL', name: '全部' },
  { id: 2, value: 'MY', name: '我的' },
  { id: 1, value: 'music', name: '音乐' },
  { id: 3, value: 'movie', name: '电影' },
  { id: 4, value: 'OTHERS', name: '其他' },
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
