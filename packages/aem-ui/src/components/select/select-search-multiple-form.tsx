/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { SelectProps } from 'antd';
import SelectSearchMultiple from './select-search-multiple';
import { isEqual, isEmpty } from 'lodash';

type SortType = 'value' | 'label' | 'none';

interface OptionType {
  value: number | string;
  label: any;
}

export interface SelectSearchMultipleFormProps extends Omit<SelectProps, 'value' | 'onChange' | 'sort'> {
  value?: (string | number)[];
  onChange?: (value: (string | number)[]) => void;
  sort?: SortType;
}

/**
 * 多选选，排序搜索
 */
const SelectSearchMultipleForm = (props: SelectSearchMultipleFormProps) => {
  const { options, value: inputValue, onChange: inputOnChange, ...rest } = props;
  const [value, setValue] = useState(inputValue);

  const update = (v) => {
    inputOnChange(v);
    setValue(v);
  };

  useEffect(() => {
    update([]);
  }, [options]);

  useEffect(() => {
    if(!isEmpty(inputValue) && !isEqual(inputValue, value)){
      update(inputValue);
    }
  }, [inputValue, value]);

  const onChange = (v) => {
    update(v);
  };

  return (
    <SelectSearchMultiple
      value={value}
      options={options}
      onChange={onChange}
      {...rest}
    />
  );
};

SelectSearchMultipleForm.defaultProps = {
  defaultFirst: true
};

export default SelectSearchMultipleForm;
