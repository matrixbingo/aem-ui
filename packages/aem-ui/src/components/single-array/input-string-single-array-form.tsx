/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Input, InputProps } from 'antd';
import { isArray } from 'lodash';
import { useMount, useUpdateEffect } from 'ahooks';

export interface InputStringSingleArrayFormProps extends Omit<InputProps, 'value' | 'onChange'> {
    value: string[];
    onChange: (value: string[]) => void;
}

const toStringValue = (inputValue: string[]): string => {
  if (isArray(inputValue) && inputValue.length === 1) {
    return inputValue[0] ?? '';
  }
  return '';
};

const checkValue = (v) => {
  return !v || !Array.isArray(v) || v.length !== 1;
};

/**
 * [string]
 */
const InputStringSingleArrayForm = (props: InputStringSingleArrayFormProps) => {
  const { value: inputValue, onChange: inputOnChange, disabled, ...restProps } = props;
  const [value, setValue] = useState<string>(toStringValue(inputValue));

  const resSet = () => {
    setValue('');
    inputOnChange(['']);
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
        inputOnChange(inputValue);
      }
    } else {
      resSet();
    }
  }, [inputValue]);

  const onChange = (e) => {
    const { value: _value } = e.target;
    setValue(_value);
    inputOnChange([_value]);
  };

  return <Input value={value} onChange={onChange} disabled={disabled} {...restProps} />;
};

InputStringSingleArrayForm.defaultProps = {
  defaultValue: [''],
  onChange: (v) => window.console.error('InputRenderForm.onChange : ', String(v)),
};

export default InputStringSingleArrayForm;
