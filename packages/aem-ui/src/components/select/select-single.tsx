import React, { useState } from 'react';
import { Select } from 'antd';
import { isArray, isEmpty } from 'lodash';
import useDeepCompareEffect from 'use-deep-compare-effect';

type SelectProps = React.ComponentProps<typeof Select>;

export type dataType = 'string' | 'number';

export type Raw = string | number;

export interface SelectSingleProps extends Omit<SelectProps, 'value' | 'onChange'| 'options'> {
    value?: Raw;
    onChange?: (value: Raw) => void;
    selectOption?: (option: {id: Raw; name: string }) => void;
    dataType?: dataType;
    defaultOption?: {id: Raw; name: string } | undefined;
    options?: { id: Raw; name: string }[];
}

const toValueByDataType = (type: dataType, v: Raw): Raw => {
  if (v !== undefined) {
    return type === 'number' ? Number(v) : String(v);
  }
  return v;
};

/**
 * 单选，可搜索
 */
const SelectSingle = (props: SelectSingleProps) => {
  const { value, onChange, dataType, selectOption, defaultOption, options: inputOptions, style, placeholder, ...restProps } = props;
  const [options, setOptions] = useState<any[]>(inputOptions || []);

  useDeepCompareEffect(() => {
    setOptions(inputOptions || []);
  }, [options, inputOptions]);

  const onChangeCallBack = (id) => {
    onChange && onChange(toValueByDataType(dataType || 'string', id));
    if (selectOption) {
      const option = options.filter((i) => i.id === id);
      if (isArray(option) && !isEmpty(option)) {
        selectOption && selectOption(option[0]);
      }
    }
  };

  return (
    <Select
      showSearch
      style={style}
      value={value === undefined ? undefined : String(value)}
      placeholder={placeholder}
      optionFilterProp="children"
      filterOption={(input, option) => option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      filterSort={(optionA, optionB) => optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())}
      onChange={onChangeCallBack}
      {...restProps}
    >
      {defaultOption ? <Select.Option value={defaultOption?.id}>{defaultOption?.name}</Select.Option> : null}
      {options?.map((option) => (
        <Select.Option key={option.id} value={String(option.id)} title={String(option.id)}>
          {option.name}
        </Select.Option>
      ))}
    </Select>
  );
};

SelectSingle.defaultProps = {
  style: { width: '100%' },
  placeholder: '',
  dataType: 'string',
  options: [],
  defaultOption: null,
};

export default SelectSingle;
