/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Input, InputNumber, InputNumberProps, InputProps } from 'antd';
import { useMount } from 'ahooks';
import { DataUtil } from '@/utils';
import { isNumber } from 'lodash';

export type dataType = 'string' | 'number';

type InputPropsInt = Omit<InputProps, 'value' | 'onChange'>;

type InputNumberPropsInt = Omit<InputNumberProps, 'value' | 'onChange'>;

type InputNumberPropsALL = InputPropsInt | InputNumberPropsInt;

export interface InputDataTypeProps<P = InputNumberPropsALL> {
  value: string;
  onChange: (value: string) => void;
  dataType: dataType;
  restProps?: P;
}

/**
 * 入参是string
 */
const InputTypeString = (
  props: Omit<InputDataTypeProps<InputPropsInt>, 'dataType'>,
) => {
  const { value: inputValue, onChange: inputOnChange, ...rest } = props;
  const [value, setValue] = useState(inputValue);

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

  return <Input value={value} onChange={onChange} {...rest} />;
};

/**
 * 入参是数字string，例如‘3’
 */
const InputTypeNumber = (
  props: Omit<InputDataTypeProps<InputNumberPropsInt>, 'dataType'>,
) => {
  const { value: inputValue, onChange: inputOnChange, ...rest } = props;
  const initValue = DataUtil.unknown.parseValue(inputValue);
  const [value, setValue] = useState<number>(1);

  window.console.log('InputTypeNumber ---------------->', inputValue, rest);

  useMount(() => {
    window.console.log('InputTypeNumber useMount---------------->', 111111);
  });

  const upate = (v: number) => {
    inputOnChange(String(v));
    setValue(v);
  };

  const onChange = (v) => {
    upate(v);
  };

  useEffect(() => {
    if (inputValue !== String(value)) {
      upate(Number(inputValue));
    }
  }, [inputValue]);

  return <InputNumber value={value} onChange={onChange} {...rest} />;
};

const InputDataType = <T extends InputNumberPropsALL>(
  props: InputDataTypeProps<T>,
) => {
  const { dataType, restProps, ...rest } = props;
  return dataType === 'string' ? (
    <InputTypeString
      {...(restProps as Omit<InputDataTypeProps<InputPropsInt>, 'dataType'>)}
      {...rest}
    />
  ) : (
    <InputTypeNumber
      {...(restProps as Omit<
        InputDataTypeProps<InputNumberPropsInt>,
        'dataType'
      >)}
      {...rest}
    />
  );
};

InputDataType.defaultProps = {
  value: '',
  onChange: (v) => window.console.error('InputForm.onChange : ', String(v)),
  dataType: 'string',
};

export default InputDataType;
