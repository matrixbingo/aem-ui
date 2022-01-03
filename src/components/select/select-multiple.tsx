/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from 'react';
import { Checkbox, Divider, Select } from 'antd';
import { isEqual } from 'lodash';
import { TransformUtil } from 'common-toolkits';

type SelectProps = React.ComponentProps<typeof Select>;

export interface SelectMultipleProps<T extends string | number> extends Omit<SelectProps, 'value' | 'onChange' | 'options'> {
  value?: T[];
  onChange?: (value: T[]) => void;
  defaultOption?: { id: T; name: string } | undefined;
  options: { id: T; name: string }[];
}

/**
 * 多选，可搜索
 */
const SelectMultiple = <T extends number | string>(props: SelectMultipleProps<T>) => {
  const { value: initValue, onChange, defaultOption, options, style, placeholder, ...restPros} = props;
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState<any>(initValue || []);

  useEffect(() => {
    if (!isEqual(initValue, value || initValue?.length !== value?.length)) {
      setValue(initValue || []);
    }
  }, [initValue]);

  const allIds = useMemo(() => {
    return TransformUtil.toArrByPath(options, 'id');
  }, [options]);

  const onChangeCallBack = (ids) => {
    onChange && onChange(ids);
    if (isEqual(allIds, ids) || allIds?.length === ids?.length) {
      // TODO isEqual
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  const onChangeCheckbox = (e) => {
    const { checked: _checked } = e.target;
    setChecked(_checked);
    if (_checked) {
      setValue(allIds);
      onChange && onChange(allIds);
    } else {
      setValue([]);
      onChange && onChange([]);
    }
  };

  return (
    <Select
      showSearch
      mode="multiple"
      style={style}
      value={value}
      placeholder={placeholder}
      optionFilterProp="children"
      onChange={onChangeCallBack}
      {...restPros}
      dropdownRender={(allSelectValue) => (
        <div>
          <div style={{ padding: '4px 8px 8px 8px', cursor: 'pointer' }}>
            <Checkbox checked={checked} onChange={onChangeCheckbox}>
              全选
            </Checkbox>
          </div>
          <Divider style={{ margin: '0' }} />
          {/* Option 标签值 */}
          {allSelectValue}
        </div>
      )}
    >
      {defaultOption ? (
        <Select.Option value={defaultOption?.id}>
          {defaultOption?.name}
        </Select.Option>
      ) : null}
      {options?.map((option) => (
        <Select.Option
          key={option.id}
          value={option.id}
          title={String(option.id)}
        >
          {option.name}
        </Select.Option>
      ))}
    </Select>
  );
};

SelectMultiple.defaultProps = {
  style: { width: '100%' },
  placeholder: '',
  options: [],
};

export default SelectMultiple;
