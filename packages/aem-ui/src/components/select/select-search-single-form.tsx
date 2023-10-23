/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { isArray } from 'lodash';
import { useUpdateEffect } from 'ahooks';
import SelectSearchSingle, { SelectSearchSingleProps } from './select-search-single';

type SortType = 'value' | 'label' | 'none';

interface OptionType {
  value: number | string;
  label: any;
}

export interface SelectSearchSingleFormProps extends SelectSearchSingleProps{
  defaultFirst?: boolean;
}

const getFirstOptionValue = (options: SelectSearchSingleFormProps['options']) => {
  if(isArray(options) && options.length > 0){
    return options[0].value;
  }
  return undefined;
}

/**
 * 单选，排序搜索
 */
const SelectSearchSingleForm = (props: SelectSearchSingleFormProps) => {
  const {defaultFirst, options, value: inputValue, onChange: inputOnChange, ...rest} = props;
  const [value, setValue] = useState(inputValue);

  const update = (v) => {
    inputOnChange?.(v);
    setValue(v);
  };

  useEffect(() => {
    if(defaultFirst){
      const firstOptionValue = getFirstOptionValue(options)
      update(firstOptionValue);
    }
  }, [options]);

  useUpdateEffect(() => {
    if(inputValue !== undefined && value !== inputValue){
      update(inputValue);
    }
  }, [inputValue]);

  const onChange = (v) => {
    update(v);
  };

  return (
    <SelectSearchSingle
      value={value}
      options={options}
      onChange={onChange}
      {...rest}
    />
  );
};

SelectSearchSingleForm.defaultProps = {
  defaultFirst: true
};

export default SelectSearchSingleForm;
