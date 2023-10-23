/* eslint-disable react-hooks/exhaustive-deps */
import React, { PropsWithChildren, useCallback, useEffect, useRef, useState } from 'react';
import { Divider, Input, InputRef, Select, Spin } from 'antd';
import type { SelectProps } from 'antd/es/select';
import debounce from 'lodash/debounce';
import { useDeepCompareEffect } from 'ahooks';
import { SearchOutlined } from '@ant-design/icons';
import { delay, isEmpty, trim } from 'lodash';

export interface DebounceSelectProps<ValueType = any> extends Omit<SelectProps<ValueType | ValueType[]>, 'children' | 'onChange'> {
  fetchOptions: (value: string, setOptions: any, setFetching: any) => void;
  debounceTimeout?: number;
  onChange?: (value: string | number) => void;
}

const DebounceSelect: React.FC<PropsWithChildren<DebounceSelectProps>> = <ValueType extends { key?: string; label: React.ReactNode; value: string | number } = any>(props: DebounceSelectProps<ValueType>) => {
  const { fetchOptions, debounceTimeout = 800, value: inputValue, onChange: inputOnChange, options: initOptions = [], ...rest } = props;
  const [fetching, setFetching] = useState(false);
  const inputRef = useRef<InputRef>(null);
  const [value, setValue] = useState(inputValue);
  const [options, setOptions] = useState<ValueType[]>(initOptions as ValueType[]);

  const update = (v) => {
    inputOnChange && inputOnChange(v);
    setValue(v);
  };

  useDeepCompareEffect(() => {
    setOptions(initOptions as any);
  }, [initOptions]);

  const onChange = (v: any) => {
    update(v);
  };

  useEffect(() => {
    if (value !== inputValue) {
      setValue(inputValue);
    }
  }, [inputValue]);

  const loadOptions = ({ target: { value: _value } }) => {
    _value = trim(_value);
    if (isEmpty(_value)) {
      setFetching(true);
      delay(() => setFetching(false), 500);
    }
    setFetching(true);
    fetchOptions(_value, setOptions, setFetching);
  };

  const debounceFetcher = debounce(loadOptions, debounceTimeout);

  const onDropdownVisibleChange = useCallback(() => delay(() => inputRef?.current?.focus?.(), 300), []);

  return (
    <Select
      value={value}
      filterOption={false}
      getPopupContainer={(triggerNode: any) => triggerNode.parentNode}
      onChange={onChange}
      options={options}
      onDropdownVisibleChange={onDropdownVisibleChange}
      dropdownRender={(menu) => (
        <div onKeyDown={(e) => e.stopPropagation()}>
          <Spin spinning={fetching}>
            <Input prefix={<SearchOutlined />} placeholder="请输入关键字查询" onChange={debounceFetcher} ref={inputRef} allowClear />
            <Divider style={{ margin: '4px 0' }} />
            {menu}
          </Spin>
        </div>
      )}
      {...rest}
    />
  );
};

export default DebounceSelect;
