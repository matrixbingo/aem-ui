/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from 'react';
import { Select } from 'antd';
import { useMount } from 'ahooks';
import { isArray, isEmpty, split } from 'lodash';
import { TypeUtil } from 'common-toolkits';

export type SelectProps = React.ComponentProps<typeof Select>;

export interface SelectTagsInputStringProps extends Omit<SelectProps, 'value' | 'onChange' | 'separator' > {
  value?: string;
  onChange?: (dateString: string) => void;
  separator?:string
}

const toArray = (inputValue: string, separator: string) => split(inputValue, separator);

const checkValue = (inputValue: any, separator: string) => {
  return !!inputValue && isArray(toArray(inputValue, separator));
};

const toValue = (inputValue: any, separator: string) => {
  if(isEmpty(inputValue)){
    return [];
  }
  inputValue = toArray(inputValue, separator);
  if (checkValue(inputValue, separator) && inputValue.every((i: unknown) => !TypeUtil.isVoid(i))) {
    return inputValue;
  }
  return [];
};

/**
 * 多选,入参由分隔符控制
 */
const SelectTagsInputString = (props: SelectTagsInputStringProps) => {
  const { value: inputValue, onChange: inputOnChange, separator, ...rest } = props;
  const [value, setValue] = useState(toValue(inputValue, separator));
  const update = (val: any) => {
    setValue(val);
    inputOnChange(val.join(separator));
  };

  useMount(() => {
    if (!checkValue(inputValue, separator)) {
      update([]);
    }
  });

  const onChange = (v: any) => {
    update(v);
  };

  return (
    <Select
      mode="tags"
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

SelectTagsInputString.defaultProps = {
  style: { width: '100%' },
  placeholder: '多个条件，请使用回车分割',
  separator: ','
};

export default SelectTagsInputString;
