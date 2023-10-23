/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Input, InputProps } from 'antd';
import { useMount } from 'ahooks';
import { isEmpty } from 'lodash';

export interface InputDefaultValueProps extends Omit<InputProps, 'value' | 'onChange'> {
    value: any;
    onChange: (value: any) => void;
}

/**
 * defaultValue 如果有值，则使用，并初始化到Form
 */
const InputDefaultValue = (props: InputDefaultValueProps) => {
  const { value: inputValue, onChange: inputOnChange, defaultValue, ...restProps } = props;
  const [value, setValue] = useState(inputValue);
  useEffect(() => {
    if (inputValue !== value) {
      setValue(inputValue);
      inputOnChange && inputOnChange(inputValue);
    }
  }, [inputValue]);

  useMount(() => {
    if (isEmpty(value) && !isEmpty(defaultValue)) {
      setValue(defaultValue);
      inputOnChange && inputOnChange(defaultValue);
    }
  });

  const onChange = (e) => {
    const { value: _value } = e.target;
    setValue(_value);
    inputOnChange && inputOnChange(_value);
  };

  return <Input value={value} onChange={onChange} {...restProps} />;
};

InputDefaultValue.defaultProps = {
  value: '',
  onChange: (v) => {},
};

export default InputDefaultValue;
