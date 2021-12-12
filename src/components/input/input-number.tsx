/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { InputNumber, InputNumberProps } from 'antd';
import { DataUtil } from 'common-toolkits';
import { isNumber } from 'lodash';

export type dataType = 'string' | 'number';

export interface InputStringNumberProps extends Omit<InputNumberProps, 'value' | 'onChange'>{
    value: dataType;
    onChange: (value: string | number) => void;
    dataType: dataType; // 输出类型
}

const toNumberValue = (inputValue: string|number, defaultValue: number): number => {
  const initValue = DataUtil.unknown.parseValue(inputValue);
  return initValue && isNumber(initValue) ? initValue : Number(defaultValue);
};

const toValueByDataType = (type: dataType, v: number) => {
  return type === 'number' ? v : String(v);
};

/**
 * 入参是数字string 例如'2'
 */
const InputStringNumber = (props: InputStringNumberProps) => {
  const { value: inputValue, onChange: inputOnChange, dataType, ...rest } = props;
  const { defaultValue } = rest;
  const [value, setValue] = useState<number>(toNumberValue(inputValue, Number(defaultValue)));

  // useMount(() => {
  //   window.console.log('InputTypeNumber useMount---------------->', 111111);
  // });

  const update = (v: number) => {
    inputOnChange(toValueByDataType(dataType, v));
    setValue(v);
  };

  const onChange = (v) => {
    update(v);
  };

  useEffect(() => {
    if (inputValue !== String(value)) {
      update(toNumberValue(inputValue, Number(defaultValue)));
    }
  }, [inputValue]);

  return <InputNumber value={value} onChange={onChange} {...rest} />;
};

InputStringNumber.defaultProps = {
  value: '1',
  // onChange: (v) => window.console.error('InputNumber.onChange : ', String(v)),
  dataType: 'number',
  defaultValue: '1',
};

export default InputStringNumber;
