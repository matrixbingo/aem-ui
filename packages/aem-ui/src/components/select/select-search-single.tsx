/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';
import type { SelectProps } from 'antd';
import { Select } from 'antd';

export interface SelectSearchSingleProps<T extends string | number> extends Omit<SelectProps, 'value' | 'onChange'> {
  value?: T;
  onChange?: (value: T) => void;
}

const filterOption = (input, option) => {
  window.console.log('-filterOption--------------->', input, option);
  return  option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
}

/**
 * 单选，排序搜索
 */
const SelectSearchSingle = <T extends number|string>(props: SelectSearchSingleProps<T>) => {
  const {filterOption, ...rest} = props;
  return (
    <Select
      showSearch
      optionFilterProp="label"
      filterOption={filterOption}
      // filterSort={(optionA, optionB) => (optionA!.children as unknown as string)?.toLowerCase().localeCompare((optionB!.children as unknown as string).toLowerCase())}
      {...rest}
    />
  );
};

SelectSearchSingle.defaultProps = {
  style: { width: '100%' },
  placeholder: '请选择',
  // dataType: 'string',
  filterOption,
  options: [],
};

export default SelectSearchSingle;
