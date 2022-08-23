/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from 'react';
import { Select } from 'antd';
import { useMount } from 'ahooks';
import { isArray } from 'lodash';
import { TypeUtil } from 'common-toolkits';

export type SelectProps = React.ComponentProps<typeof Select>;

export interface SelectTagsProps extends Omit<SelectProps, 'value' | 'onChange' > {
  value: string[];
  onChange: (dateString: string[]) => void;
}

const checkValue = (v: any) => {
  return !!v && isArray(v);
};

const toValue = (inputValue: any) => {
  if (checkValue(inputValue) && inputValue.every((i: unknown) => !TypeUtil.isVoid(i))) {
    return inputValue;
  }
  return [];
};

/**
 * 回车多选
 */
const SelectTags = (props: SelectTagsProps) => {
  const { value: inputValue, onChange: inputOnChange, ...rest } = props;
  const [value, setValue] = useState(toValue(inputValue));
  const update = (val: any) => {
    setValue(val);
    inputOnChange(val);
  };

  useMount(() => {
    if (!checkValue(inputValue)) {
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

SelectTags.defaultProps = {
  style: { width: '100%' },
  placeholder: '多个条件，请使用回车分割',
};

export default SelectTags;
