/* eslint-disable react-hooks/exhaustive-deps */
import { Spin, TabsProps } from 'antd';
import React, { useState } from 'react';
import { createBaseTabs, TabSingle } from '../util/create-ant';

// export interface TabSingleProps extends Omit<TabPaneProps, 'key' | 'label'>{ key: string; label: string | ReactNode }

export interface TabsAjaxProps {
  tabsProps: TabsProps;
  promise: Promise<TabSingle>;
  dataList: TabSingle[];
  transform: (data: any) => TabSingle[];
  keyword: string;
}

export const tabsFormat = (
  arr: Record<string, any>[],
  key: string,
): TabSingle[] => {
  return arr.reduce((rs, i) => rs.push({ [key]: i }), []) as TabSingle[];
};

/**
 * 异步tabs TODO 未完成
 */
const TabsAjax = (props: TabsAjaxProps) => {
  const { tabsProps, dataList } = props;
  const [tabList] = useState<TabSingle[]>(dataList);

  return <Spin spinning={false}>{createBaseTabs({ tabsProps, tabList })}</Spin>;
};

TabsAjax.defaultProps = {
  value: '',
  dataList: [],
  transform: () => [],
  promise: new Promise(() => {}),
  keyword: '',
};

export default TabsAjax;
