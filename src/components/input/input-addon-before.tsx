/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Input, InputProps } from 'antd';
import { split, startsWith, isEmpty } from 'lodash';

export interface InputAddonBeforeProps
  extends Omit<InputProps, 'value' | 'addonBeforeValue' | 'onChange'> {
  value: string;
  addonBeforeValue: string;
  onChange: (value: string) => void;
}

const toValue = (value, addonBeforeValue) => {
  if (isEmpty(addonBeforeValue)) return value;
  if (startsWith(value, addonBeforeValue))
    return split(value, addonBeforeValue)[1];
  return value;
};

/**
 * value[0] 为 addonBefore 只读，value[1] 可用
 */
const InputAddonBefore = (props: InputAddonBeforeProps) => {
  const {
    value: _inputValue,
    addonBeforeValue: inputAddonBeforeValue,
    onChange: inputOnChange,
    ...restProps
  } = props;
  const [addonBeforeValue, setAddonBeforeValue] = useState(
    inputAddonBeforeValue,
  );
  const inputValue = toValue(_inputValue, addonBeforeValue);
  const [value, setValue] = useState(inputValue);

  useEffect(() => {
    if (value !== inputValue) setValue(inputValue);
    if (addonBeforeValue !== inputAddonBeforeValue)
      setAddonBeforeValue(inputAddonBeforeValue);
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
  addonBeforeValue: '',
  onChange: (v) => {},
};

export default InputAddonBefore;
