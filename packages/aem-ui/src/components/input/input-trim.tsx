/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Input, InputProps } from 'antd';
import { trim } from 'lodash';

export interface InputTrimProps<T extends string | number> extends Omit<InputProps, 'value' | 'onChange' | 'render'> {
  value: string;
  onChange: (value: T) => void;
  input: (value: string) => string;
  render?: (value: string) => T;
}

/**
 *去空格
 */
const InputTrim = <T extends number | string>(props: InputTrimProps<T>) => {
  const { value: inputValue, onChange: inputOnChange, input, render = (v) => trim(v), ...restProps } = props;

  const onChange = (e) => {
    const { value: _value } = e.target;
    inputOnChange(render(_value));
  };

  return <Input value={input(inputValue)} onChange={onChange} {...restProps} />;
};

InputTrim.defaultProps = {
  onChange: (v) => {},
  input: (v) => v,
};

export default InputTrim;
