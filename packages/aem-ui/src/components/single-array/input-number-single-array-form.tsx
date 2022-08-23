/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { InputNumber, InputNumberProps } from 'antd';
import { TypeUtil } from 'common-toolkits';
import { isNumber } from 'lodash';
import { useMount, useUpdateEffect } from 'ahooks';

export type dataType = 'string' | 'number';

export interface InputNumberSingleArrayFormProps extends Omit<InputNumberProps, 'value' | 'onChange'>{
    value: dataType[];
    onChange: (value: (string | number)[]) => void;
    dataType: dataType; // 输出类型
}

const toNumberValue = (inputValue: string | number, defaultValue: number): number => {
  const initValue = TypeUtil.parseValue(inputValue || '');
  return !!initValue && isNumber(initValue) ? initValue as number: Number(defaultValue);
};

const toValueByDataType = (type: dataType, v: number) => {
  return type === 'number' ? v : String(v);
};

const checkValue = (v) => {
  return !v || !Array.isArray(v) || v.length !== 1;
};

/**
 * 入参是数字string 例如'2'
 */
const InputNumberSingleArrayForm = (props: InputNumberSingleArrayFormProps) => {
  const { value: inputValue, onChange: inputOnChange, dataType, ...rest } = props;
  const { defaultValue } = rest;
  const [value, setValue] = useState<number>(toNumberValue(inputValue?.[0], Number(defaultValue?.[0])));

  const update = (v: number) => {
    const val = toValueByDataType(dataType, v);
    inputOnChange([val]);
    setValue(v);
  };

  const onChange = (v) => {
    update(v);
  };

  const resSet = () => {
    defaultValue && update(defaultValue?.[0]);
  };

  useMount(() => {
    if (checkValue(inputValue)) {
      resSet();
    }
  });

  useUpdateEffect(() => {
    if(!!inputValue || !!inputValue?.[0] ){
      if (String(inputValue?.[0]) !== String(value)) {
        update(toNumberValue(inputValue?.[0], Number(defaultValue?.[0])));
      }
    } else {
      resSet();
    }
  }, [inputValue]);

  return <InputNumber value={value} onChange={onChange} {...rest} />;
};

InputNumberSingleArrayForm.defaultProps = {
  onChange: (v) => {},
  dataType: 'number',
  defaultValue: [1],
};

export default InputNumberSingleArrayForm;
