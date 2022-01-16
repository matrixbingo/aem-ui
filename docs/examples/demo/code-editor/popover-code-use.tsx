import React from 'react';
import { PopoverCode } from 'aem-ui';

const value = {
  xField: 'year',
  yField: 'value',
  seriesField: 'category',
  yAxis: {
    label: {
      // 数值格式化为千分位
      formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
    },
  },
  color: 'COLOR_PLATE_10',
  point: {
    shape: ({ category }) => {
      return category === 'Gas fuel' ? 'square' : 'circle';
    },
    style: ({ year }) => {
      return {
        r: Number(year) % 4 ? 0 : 3, // 4 个数据示一个点标记
      };
    },
  },
};

const Demo: React.FC = () => {
  return (
    <>
      <PopoverCode value={value} title="title" />
    </>
  );
};

export default Demo;
