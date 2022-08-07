import React, { useState } from 'react';
import { TagsListEditor } from 'aem-ui';
import { ArrayUtil } from 'common-toolkits';
import { Button } from 'antd';
import { delay } from 'lodash';

const dataList = [
  { id: 'ALL', name: '全部' },
  { id: 'MY', name: '我的' },
  { id: 'music', name: '音乐' },
  { id: 'movie', name: '电影' },
  { id: 'OTHERS', name: '其他' },
  { id: 'OTHERS1', name: '其他1' },
  { id: 'OTHERS2', name: '其他2' },
  { id: 'OTHERS3', name: '其他3' },
  { id: 'OTHERS4', name: '其他4' },
  { id: 'OTHERS5', name: '其他5' },
];

const Demo: React.FC = () => {

  const [state, setstate] = useState(dataList);

  const onChange = (v) => {
    window.console.log('v---------------->', v);
    delay(( )=> setstate((prev)=> ArrayUtil.omit(dataList, (i) => v.id === i.id)), 2000);
  };

  window.console.log('state---------------->', state);

  return (
    <>
      <TagsListEditor data={state} onChange={onChange} />

      <Button onClick={()=>  setstate((prev)=> ArrayUtil.omit(dataList, (i) => 'music' === i.id))}>test</Button>
    </>
  );
};

export default Demo;
