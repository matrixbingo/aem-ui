/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { isValidElement, useState } from 'react';
import { TabsProps } from 'antd';
import { ArrayUtil, ObjectType } from 'common-toolkits';
import useDeepCompareEffect from 'use-deep-compare-effect';
import lodash from 'lodash';
import { createBaseTabs, TabSingle } from '../../util/create-ant';

export interface BaseTabsProps {
  tabsProps: TabsProps;
  list: ObjectType[];
  transform?: (arr: ObjectType[]) => TabSingle[];
}

export const tabsFormat = (arr: ObjectType[], key = 'tabPaneProps'): TabSingle[] => arr.reduce(
  (rs, i) => ArrayUtil.push<TabSingle>(
      rs as TabSingle[],
      { [key]: { key: String(i.key), tab: String(i.tab) }, children: i?.children } as TabSingle,
  ),
  [],
) as TabSingle[];

const omit = (list): TabSingle[] => {
  return list.reduce((rs, next) => {
    if (isValidElement(next.children)) {
      rs.push(lodash.omit(next, ['children']));
    } else {
      rs.push(next);
    }
    return rs;
  }, []);
};

/**
 * tabs
 */
const BaseTabs = (props: BaseTabsProps) => {
  const { tabsProps, list: inputList, transform=tabsFormat } = props;
  const dataList = transform(inputList);
  const _dataList = omit(dataList);
  const [tabList, setList] = useState<TabSingle[]>(_dataList);

  useDeepCompareEffect(() => {
    setList(_dataList);
  }, [_dataList, tabList]);

  return <>{createBaseTabs({ tabsProps, tabList: _dataList })}</>;
};

BaseTabs.defaultProps = {
  value: '',
  dataList: [],
  transform: tabsFormat,
};

export default BaseTabs;
