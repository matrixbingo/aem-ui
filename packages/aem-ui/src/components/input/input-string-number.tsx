/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { InputNumber, InputNumberProps } from 'antd';
import { isNumber } from 'lodash';

export type dataType = 'string' | 'number';

type Raw = string | number;

export interface InputStringNumberProps extends Omit<InputNumberProps, 'value' | 'onChange'> {
  value?: Raw;
  onChange?: (value: Raw) => void;
  dataType?: dataType; // 输出类型
  defaultValue?: number;
}

const toNumberValue = (defaultValue: number, inputValue?: Raw): number => {
  inputValue = inputValue ?? defaultValue;
  return isNumber(inputValue) ? inputValue as number : Number(defaultValue);
};

const toValueByDataType = (type: dataType, v: number) => type === 'number' ? v : String(v);

/**
 * 入参和返回同一类型，string 或 number
 */
const InputStringNumber = (props: InputStringNumberProps) => {
  const { value: inputValue, onChange: inputOnChange, defaultValue = 0, dataType = 'number', ...rest } = props;
  const [value, setValue] = useState<number>(toNumberValue(defaultValue, inputValue));

  const update = (v: number) => {
    inputOnChange?.(toValueByDataType(dataType, v));
    setValue(v);
  };

  const onChange = (v) => {
    update(v);
  };

  useEffect(() => {
    if (String(inputValue) !== String(value)) {
      update(toNumberValue(defaultValue, inputValue));
    }
  }, [inputValue]);

  return <InputNumber value={value} onChange={onChange} {...rest} />;
};

InputStringNumber.defaultProps = {
  onChange: (v) => {},
  dataType: 'number',
  defaultValue: 1,
};

export default InputStringNumber;
