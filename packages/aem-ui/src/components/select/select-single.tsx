import React from 'react';
import { Select } from 'antd';
import { isArray, isEmpty } from 'lodash';

type SelectProps = React.ComponentProps<typeof Select>;

export interface SelectSingleProps<T extends string | number> extends Omit<SelectProps, 'value' | 'onChange'| 'options'> {
    value?: T;
    onChange?: (value: T) => void;
    selectOption?: (option: {id: T; name: string }) => void;
    defaultOption?: {id: T; name: string } | undefined;
    options: { id: T; name: string }[];
}

/**
 * 单选，可搜索
 */
const SelectSingle = <T extends number|string>(props: SelectSingleProps<T>) => {
  const { value, onChange, selectOption, defaultOption, options, style, placeholder, ...restProps } = props;

  const onChangeCallBack = (id) => {
    onChange && onChange(id);
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
      value={value}
      placeholder={placeholder}
      optionFilterProp="children"
      filterOption={(input, option) => option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      filterSort={(optionA, optionB) => optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())}
      onChange={onChangeCallBack}
      {...restProps}
    >
      {defaultOption ? <Select.Option value={defaultOption?.id}>{defaultOption?.name}</Select.Option> : null}
      {options?.map((option) => (
        <Select.Option key={option.id} value={option.id} title={String(option.id)}>
          {option.name}
        </Select.Option>
      ))}
    </Select>
  );
};

SelectSingle.defaultProps = {
  style: { width: '100%' },
  placeholder: '',
};

export default SelectSingle;
