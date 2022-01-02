/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Input, InputProps } from 'antd';
import { useMount } from 'ahooks';

export interface InputFormProps extends Omit<InputProps, 'value' | 'onChange'> {
  value: string;
  onChange: (value: string) => void;
}

/**
 * 默认清空Form对应数据
 */
const InputRenderForm = (props: InputFormProps) => {
  const {
    value: inputValue,
    onChange: inputOnChange,
    disabled,
    ...restProps
  } = props;
  const [value, setValue] = useState(inputValue);

  const upData = () => {
    setValue('');
    inputOnChange('');
  };

  useEffect(() => {
    disabled && upData();
  }, [disabled]);

  useEffect(() => {
    if (inputValue !== value) {
      setValue(inputValue);
      inputOnChange(inputValue);
    }
  }, [inputValue]);

  const onChange = (e) => {
    const { value: _value } = e.target;
    setValue(_value);
    inputOnChange(_value);
  };

  return (
    <Input
      value={value}
      onChange={onChange}
      disabled={disabled}
      {...restProps}
    />
  );
};

InputRenderForm.defaultProps = {
  value: '',
  onChange: (v) =>
    window.console.error('InputRenderForm.onChange : ', String(v)),
};

export default InputRenderForm;
