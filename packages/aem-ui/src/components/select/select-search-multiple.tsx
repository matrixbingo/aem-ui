/* eslint-disable react-hooks/exhaustive-deps */
import React, {  } from 'react';
import { Select } from 'antd';

type SelectProps = React.ComponentProps<typeof Select>;

export interface SelectSearchMultipleProps<T extends string | number> extends Omit<SelectProps, 'value' | 'onChange' | 'options'> {
  value?: T[];
  onChange?: (value: T[]) => void;
  defaultOption?: { id: T; name: string } | undefined;
}

/**
 * 多选，可搜索
 */
const SelectSearchMultiple = <T extends number | string>(props: SelectSearchMultipleProps<T>) => {

  return (
    <>1</>
  );
};

SelectSearchMultiple.defaultProps = {
  style: { width: '100%' },
  placeholder: '',
  options: [],
};

export default SelectSearchMultiple;
