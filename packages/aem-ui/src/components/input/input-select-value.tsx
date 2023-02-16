/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Input, InputProps } from 'antd';
import { isEmpty } from 'lodash';
import SelectSingle from '../select/select-single';

type InputSelectValueValue = string | undefined | null;

export interface InputSelectValueProps extends Omit<InputProps, 'value' | 'onChange' | 'defaultValue'> {
  value: InputSelectValueValue;
  onChange: (value: InputSelectValueValue) => void;
  void: InputSelectValueValue;
  defaultValue: InputSelectValueValue;
}

const options = [
  { id: 0, name: '无值' },
  { id: 1, name: '有值' },
];

/**
 * 如果选无值则清空 Type 0：无值 1：有值
 */
const InputSelectValue = (props: InputSelectValueProps) => {
  const { value: _inputValue, onChange: inputOnChange, void: voidValue, defaultValue, ...restProps } = props;
  const inputValue = isEmpty(_inputValue) ? defaultValue : _inputValue;
  const _type = undefined === inputValue || inputValue === null || voidValue === inputValue ? 0 : 1;
  const [type, setType] = useState<number>(_type);
  const [value, setValue] = useState<any>(voidValue === inputValue ? '' : inputValue);

  useEffect(() => {
    if (type === 0) {
      inputOnChange(voidValue);
      setValue('');
    } else if (!value) {
      inputOnChange('');
    }
  }, [type]);

  const onChange = (e) => {
    const { value: _value } = e.target;
    setValue(_value);
    inputOnChange(_value);
  };

  return (
    <Input
      {...restProps}
      value={value}
      disabled={type === 0}
      onChange={onChange}
      addonBefore={<SelectSingle options={options} value={type} onSelect={(v) => setType(Number(v))} style={{ width: 70 }} />}
    />
  );
};

InputSelectValue.defaultProps = {
  value: undefined,
  onChange: (v) => {},
  void: undefined,
  defaultValue: undefined,
};

export default InputSelectValue;
