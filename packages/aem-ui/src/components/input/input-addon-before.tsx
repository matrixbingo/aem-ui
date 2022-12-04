/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { Input, InputProps } from 'antd';
import { split, startsWith, isEmpty } from 'lodash';

export interface InputAddonBeforeProps extends Omit<InputProps, 'value' | 'addonBeforeValue' | 'onChange'> {
    value: string;
    addonBeforeValue: string;
    onChange: (value: string) => void;
}

export const toValue = (value, addonBeforeValue) => {
  if (isEmpty(addonBeforeValue)) return value;
  if (startsWith(value, addonBeforeValue)) return split(value, addonBeforeValue)[1];
  return value;
};

/**
 * value[0] 为 addonBefore 只读，value[1] 可用, fullValue为完整字段
 */
const InputAddonBefore = (props: InputAddonBeforeProps) => {
  const { value: _inputValue, addonBeforeValue: inputAddonBeforeValue, onChange: inputOnChange, ...restProps } = props;
  const addonBeforeValueRef = useRef('');
  const inputValue = toValue(_inputValue, inputAddonBeforeValue);
  const [fullValue, setFullValue] = useState(_inputValue);
  const [value, setValue] = useState(inputValue);
  const [addonBeforeValue, setAddonBeforeValue] = useState(inputAddonBeforeValue);

  useEffect(() => {
    if (_inputValue !== fullValue) setFullValue(_inputValue);
  }, [_inputValue]);

  useEffect(() => {
    const _fullValue = inputAddonBeforeValue + toValue(value, addonBeforeValueRef.current);
    if (fullValue !== _fullValue) {
      inputOnChange && inputOnChange(_fullValue);
    }
    addonBeforeValueRef.current = inputAddonBeforeValue;
  }, [inputAddonBeforeValue]);

  useEffect(() => {
    if (value !== inputValue) setValue(inputValue);
    if (addonBeforeValue !== inputAddonBeforeValue) setAddonBeforeValue(inputAddonBeforeValue);
  }, [value, inputValue, addonBeforeValue, inputAddonBeforeValue]);

  const onChange = (e) => {
    const { value: _value } = e.target;
    setValue(_value);
    inputOnChange && inputOnChange(addonBeforeValue + _value);
  };

  return <Input {...restProps} value={value} addonBefore={addonBeforeValue} onChange={onChange} />;
};

InputAddonBefore.defaultProps = {
  value: '',
  addonBeforeValue: '',
  onChange: (v) => {},
};

export default InputAddonBefore;
