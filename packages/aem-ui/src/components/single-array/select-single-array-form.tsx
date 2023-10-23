/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { Select, SelectProps } from 'antd';
import { isArray } from 'lodash';
import { useMount, useUpdateEffect } from 'ahooks';
import SelectSearchSingle from '../select/select-search-single';

export interface SelectSingleArrayFormProps extends Omit<SelectProps, 'value' | 'onChange'> {
    value?: string[];
    onChange?: (value: string[]) => void;
}

const toValue = (inputValue: string[]): string => {
  if (isArray(inputValue) && inputValue.length === 1) {
    return inputValue?.[0];
  }
  return undefined;
};

const checkValue = (v) => {
  return !v || !Array.isArray(v) || v.length !== 1;
};

/**
 * [string]
 */
const SelectSingleArrayForm = (props: SelectSingleArrayFormProps) => {
  const {options, value: inputValue, onChange: inputOnChange, ...rest} = props;
  const [value, setValue] = useState<string>(toValue(inputValue));

  const resSet = () => {
    setValue(undefined);
    inputOnChange?.([]);
  };

  useMount(() => {
    if (checkValue(inputValue)) {
      resSet();
    }
  });

  useUpdateEffect(() => {
    if(!!inputValue || (!!inputValue?.[0] && inputValue?.[0] !== '')){
      if (inputValue?.[0] !== value) {
        setValue(inputValue?.[0]);
        inputOnChange?.(inputValue);
      }
    } else {
      resSet();
    }
  }, [inputValue]);

  const onChange = (_value) => {
    setValue(_value);
    inputOnChange?.([_value]);
  };

  return <SelectSearchSingle value={value} options={options} onChange={onChange} {...rest} />;
};

SelectSingleArrayForm.defaultProps = {
  defaultValue: [''],
  onChange: (v) => window.console.error('SelectSingleArrayForm.onChange : ', String(v)),
};

export default SelectSingleArrayForm;
