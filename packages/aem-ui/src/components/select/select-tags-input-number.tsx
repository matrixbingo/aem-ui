/* eslint-disable radix */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from 'react';
import { Select } from 'antd';
import { isEmpty } from 'lodash';

export type SelectProps = React.ComponentProps<typeof Select>;

export interface SelectTagsInputNumberProps extends Omit<SelectProps, 'value' | 'onChange' | 'checkValue'> {
  value?: any[];
  onChange?: (v: any[]) => void;
  checkValue?: (v: any[]) => { check: boolean; value: any};
}

const toValue = (inputValue: any[], checkValue) => {
  if (isEmpty(inputValue)) {
    return [];
  }
  const list = [] as any[];
  inputValue.forEach((i) => {
    const { check, value } = checkValue(i);
    if (check) {
      list.push(value);
    }
  });
  return list;
};

/**
 * 过滤非数字
 */
const SelectTagsInputNumber = (props: SelectTagsInputNumberProps) => {
  const { value: inputValue, onChange: inputOnChange, tokenSeparators, checkValue, ...rest } = props;
  const [value, setValue] = useState(toValue(inputValue ?? [], checkValue));
  const update = (val: any[]) => {
    setValue(val);
    inputOnChange && inputOnChange(val);
  };

  const onChange = (v: any) => {
    const _value = toValue(v, checkValue);
    update(_value);
  };

  return (
    <Select
      mode="tags"
      value={value}
      tokenSeparators={tokenSeparators}
      onChange={onChange}
      {...rest}
    />
  );
};

SelectTagsInputNumber.defaultProps = {
  style: { width: '100%' },
  placeholder: '多个条件，请使用逗号或回车分割',
  tokenSeparators: [',', '，', '、'],
  checkValue: (v) => {
    const value = parseInt(v);
    return { check: String(value) !== 'NaN', value };
  },
};

export default SelectTagsInputNumber;
