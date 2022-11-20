import React, { useState } from 'react';
import { Select } from 'antd';
import { useMount } from 'ahooks';
import { isEmpty } from 'lodash';

type SelectProps = React.ComponentProps<typeof Select>;

export type dataType = 'string' | 'number';

export type Raw = string | number;

export interface SelectSingleDefaultValueProps extends Omit<SelectProps, 'value' | 'onChange' | 'defaultValue'> {
    value?: Raw;
    defaultValue?: Raw;
    onChange?: (value: Raw) => void;
}

/**
 * defaultValue 如果有值，则使用，并初始化到Form
 */
const SelectSingleDefaultValue = (props: SelectSingleDefaultValueProps) => {
  const { value: inputValue, onChange: inputOnChange, defaultValue, ...restProps } = props;
  const [value, setValue] = useState<Raw>(inputValue || '');

  useMount(() => {
    if (isEmpty(value) && !isEmpty(defaultValue)) {
      setValue(defaultValue || '');
      inputOnChange && inputOnChange(defaultValue || '' as Raw);
    }
  });

  const onChange = (v) => {
    setValue(v);
    inputOnChange && inputOnChange(v);
  };

  return (
    <Select value={value} onChange={onChange} {...restProps} />
  );
};

SelectSingleDefaultValue.defaultProps = {
  style: { width: '100%' },
};

export default SelectSingleDefaultValue;
