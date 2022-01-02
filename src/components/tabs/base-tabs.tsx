/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable react-hooks/exhaustive-deps */
import { TabsProps } from 'antd';
import { ArrayUtil } from 'common-toolkits';
import { ObjectType } from 'common-toolkits';
import React, { useState } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { createBaseTabs, TabSingle } from '../util/create-ant';

export interface TabsAjaxProps {
  tabsProps: TabsProps;
  dataList: TabSingle[];
}

export const tabsFormat = (arr: ObjectType[], key: string): TabSingle[] =>
  arr.reduce(
    (rs, i) =>
      ArrayUtil.push<TabSingle>(
        rs as TabSingle[],
        { [key]: { key: String(i.key), tab: String(i.tab) } } as TabSingle,
      ),
    [],
  ) as TabSingle[];

/**
 * tabs
 */
const BaseTabs = (props: TabsAjaxProps) => {
  const { tabsProps, dataList } = props;
  const [tabList, setList] = useState<TabSingle[]>(dataList);

  useDeepCompareEffect(() => {
    setList(dataList);
  }, [tabList, dataList]);

  return <>{createBaseTabs({ tabsProps, tabList })}</>;
};

BaseTabs.defaultProps = {
  value: '',
  dataList: [],
};

export default BaseTabs;
