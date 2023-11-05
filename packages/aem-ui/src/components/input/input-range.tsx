/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Input, InputNumber, InputNumberProps, Space } from 'antd';
import { TypeUtil, TransformUtil } from 'common-toolkits';
import { isArray, isNumber } from 'lodash';
import { useMount } from 'ahooks';
import { dequal as deepEqual } from 'dequal';
import { assertError } from '../../util/util';
import './input-range.css';

export type dataType = 'string' | 'number';

export interface InputRangeProps extends Omit<InputNumberProps, 'value' | 'onChange' | 'dataType' | 'defaultValue' | 'onBlur'>{
    value?: number[] | string[];
    onChange?: (value: number[] | string[]) => void;
    dataType?: dataType;
    defaultValue?: number[];
}

const toNumberValue = (inputValue: string[] | number[] | undefined, defaultValue: number[]): number[] => {
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
  return !v || !Array.isArray(v) || v.length !== 2 || !(Array.isArray(v) && v.length === 2 && TypeUtil.isFloat(v?.[0]) && TypeUtil.isFloat(v?.[1]));
};

function assertstion(props: InputRangeProps): asserts props is InputRangeProps & Required<Omit<InputRangeProps, 'onChange'>> {
  assertError(props, ['defaultValue', 'dataType']);
}

/**
 * 入参是数字string, 或数字，例如'2'或2
 */
const InputRangeForm = (props: InputRangeProps) => {
  assertstion(props);
  const { value: inputValue, onChange, dataType, defaultValue, ...rest } = props;
  const [value, setValue] = useState<number[]>(toNumberValue(inputValue, defaultValue));
  const resSet = () => {
    setValue(defaultValue);
    onChange && onChange(toArrByDataType(dataType, defaultValue));
  };

  const update = (v: number[]) => {
    setValue(v);
    onChange && onChange(toArrByDataType(dataType, v));
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
          onChange && onChange(toArrByDataType(dataType, inputValue));
        }
      }
    }, [value, inputValue],
  );

  const onChange0 = (v) => {
    update([v, value[1]]);
  };

  const onChange1 = (v) => {
    update([value[0], v]);
  };

  const onBlur = () => {
    const [a, b] = value;
    if (a > b) {
      update([b, a]);
    }
  };

  return (
    <Space direction="vertical" size={0} style={{ width: '100%' }} >
      <Space.Compact block>
        <InputNumber value={value[0]} onChange={onChange0} onBlur={onBlur} {...rest} />
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
        <InputNumber value={value[1]} onChange={onChange1} onBlur={onBlur} {...rest} />
      </Space.Compact>
    </Space>
  );
};

InputRangeForm.defaultProps = {
  style: { width: 'calc(50% - 15px)' },
  onChange: (v) => {},
  dataType: 'number',
  defaultValue: [1, 2],
};

export default InputRangeForm;
