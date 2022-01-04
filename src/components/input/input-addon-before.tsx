/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Input, InputProps } from 'antd';
import { split, startsWith, isEmpty } from 'lodash';

export interface InputAddonBeforeProps extends Omit<InputProps, 'value' | 'addonBefore' | 'onChange'> {
  value: string;
  addonBefore: string;
  onChange: (value: string) => void;
}

const toValue = (value, addonBeforeValue) => {
  if (isEmpty(addonBeforeValue)) return value;
  if (startsWith(value, addonBeforeValue)) return split(value, addonBeforeValue)[1];
  return value;
};

/**
 * value[0] 为 addonBefore 只读，value[1] 可用, fullValue为完整字段
 */
const InputAddonBefore = (props: InputAddonBeforeProps) => {
  const { value: _inputValue, addonBefore: inputAddonBeforeValue, onChange: inputOnChange, ...restProps } = props;
  const [addonBeforeValue, setAddonBeforeValue] = useState(inputAddonBeforeValue);
  const inputValue = toValue(_inputValue, addonBeforeValue);
  const [fullValue, setFullValue] = useState(_inputValue);
  const [value, setValue] = useState(inputValue);

  useEffect(() => {
    if (_inputValue !== fullValue) setFullValue(_inputValue);
  }, [_inputValue]);

  useEffect(() => {
    if (value !== inputValue) setValue(inputValue);
    if (addonBeforeValue !== inputAddonBeforeValue) setAddonBeforeValue(inputAddonBeforeValue);
    if (fullValue !== addonBeforeValue + value) inputOnChange(addonBeforeValue + value);
  }, [value, inputValue, addonBeforeValue, inputAddonBeforeValue]);
  
  const onChange = (e) => {
    const { value: _value } = e.target;
    setValue(_value);
    inputOnChange(addonBeforeValue + toValue(_value, addonBeforeValue));
  };

  return (
    <Input
      value={value}
      addonBefore={addonBeforeValue}
      onChange={onChange}
      {...restProps}
    />
  );
};

InputAddonBefore.defaultProps = {
  value: '',
  addonBefore: '',
  onChange: (v) => {},
};

export default InputAddonBefore;
