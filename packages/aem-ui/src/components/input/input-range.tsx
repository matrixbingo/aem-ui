/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Input, InputNumber, InputNumberProps } from 'antd';
import { TypeUtil, TransformUtil } from 'common-toolkits';
import { isArray, isNumber } from 'lodash';
import { useMount } from 'ahooks';
import './input-range.css';
import { dequal as deepEqual } from 'dequal';

export type dataType = 'string' | 'number';

export interface InputRangeProps extends Omit<InputNumberProps, 'value' | 'onChange' | 'dataType' | 'defaultValue'>{
    value: number[] | string[];
    onChange: (value: number[] | string[]) => void;
    dataType: dataType;
    defaultValue: number[];
}

const toNumberValue = (inputValue: string[]|number[], defaultValue: number[]): number[] => {
  if (isArray(inputValue) && inputValue.length === 2) {
    const initValue0 = TypeUtil.parseValue(inputValue[0]);
    const initValue1 = TypeUtil.parseValue(inputValue[1]);
    return isNumber(initValue0) ? [initValue0, initValue1] as number[] : defaultValue;
  }
  return defaultValue;
};

const toArrByDataType = (type: dataType, arr: number[] | string[]) => {
  if (type === 'string') {
    return TransformUtil.numberArrToStringArr(arr as number[]);
  }
  return TransformUtil.stringArrToNumberArr(arr as string[]);
};

const checkValue = (v) => {
  return !v || !Array.isArray(v) || v.length !== 2 || !(Array.isArray(v) && v.length === 2 && TypeUtil.isInt(v?.[0]) && TypeUtil.isInt(v?.[1]));
};

/**
 * 入参是数字string, 或数字，例如'2'或2
 */
const InputRangeForm = (props: InputRangeProps) => {
  const { value: inputValue, onChange, dataType, defaultValue, ...rest } = props;
  const [value, setValue] = useState<number[]>(toNumberValue(inputValue, defaultValue));
  const resSet = () => {
    setValue(defaultValue);
    onChange(toArrByDataType(dataType, defaultValue));
  };

  const update = (v: number[]) => {
    setValue(v);
    onChange(toArrByDataType(dataType, v));
  };

  useMount(() => {
    if (checkValue(inputValue)) {
      resSet();
    }
  });

  useEffect(
    () => {
      if (!deepEqual(value, inputValue)) {
        if (checkValue(inputValue)) {
          resSet();
        } else {
          setValue(TransformUtil.stringArrToNumberArr(inputValue as string[]));
          onChange(toArrByDataType(dataType, inputValue));
        }
      }
    }, [value, inputValue],
  );

  const onChange0 = (v) => {
    if (v > value[1]) {
      update([value[1], v]);
    } else {
      update([v, value[1]]);
    }
  };

  const onChange1 = (v) => {
    if (value[0] > v) {
      update([v, value[0]]);
    } else {
      update([value[0], v]);
    }
  };

  return (
    <Input.Group compact>
      <InputNumber value={value[0]} onChange={onChange0} {...rest} />
      <Input
        className="site-input-split"
        style={{
          width: 30,
          borderLeft: 0,
          borderRight: 0,
          pointerEvents: 'none',
        }}
        placeholder="~"
        disabled
      />
      <InputNumber value={value[1]} onChange={onChange1} {...rest} />
    </Input.Group>
  );
};

InputRangeForm.defaultProps = {
  style: { width: 'calc(50% - 15px)' },
  onChange: (v) => {},
  dataType: 'number',
  defaultValue: [1, 2],
};

export default InputRangeForm;
