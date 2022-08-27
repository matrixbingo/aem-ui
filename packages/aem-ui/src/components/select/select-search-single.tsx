/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';
import type { SelectProps } from 'antd';
import { Select } from 'antd';

type SortType = 'value' | 'label' | 'none';

interface OptionType {
  value: number | string;
  label: any;
}

export interface SelectSearchSingleProps extends Omit<SelectProps, 'value' | 'onChange'> {
  value?: string | number;
  onChange?: (value: string | number) => void;
  sort?: SortType;
}

const filterSort = (optionA: OptionType, optionB: OptionType, sort: SortType) => {
  window.console.log('---------------->', optionA?.[sort], optionA, optionB, sort);
  return String(optionA?.[sort])?.toLowerCase().localeCompare(String(optionB?.[sort]).toLowerCase());
}

/**
 * 单选，排序搜索
 */
const SelectSearchSingle = (props: SelectSearchSingleProps) => {
  const {filterOption, filterSort, sort, ...rest} = props;
  const filterSortFn = sort === 'none' ? undefined : (optionA, optionB) => filterSort(optionA, optionB, sort);
  return (
    <Select
      showSearch
      optionFilterProp="label"
      filterSort={filterSortFn}
      {...rest}
    />
  );
};

SelectSearchSingle.defaultProps = {
  style: { width: '100%' },
  placeholder: '请选择',
  sort: 'label',
  filterSort
};

export default SelectSearchSingle;
