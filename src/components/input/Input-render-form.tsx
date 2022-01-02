/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Input, InputProps } from 'antd';

export interface InputRenderFormProps<T extends string | number>
  extends Omit<InputProps, 'value' | 'onChange' | 'render'> {
  value: string;
  onChange: (value: T) => void;
  input: (value: string) => string;
  render: (value: string) => T;
}

/**
 * 自定义返回值
 */
const InputRenderForm = <T extends number | string>(
  props: InputRenderFormProps<T>,
) => {
  const {
    value: inputValue,
    onChange: inputOnChange,
    input,
    render,
    ...restProps
  } = props;

  const onChange = (e) => {
    const { value: _value } = e.target;
    inputOnChange(render(_value));
  };

  return <Input value={input(inputValue)} onChange={onChange} {...restProps} />;
};

InputRenderForm.defaultProps = {
  value: '',
  onChange: (v) => {},
  input: (v) => v,
  render: (v) => v,
};

export default InputRenderForm;
