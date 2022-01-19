/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Input } from 'antd';
import './input-range.css';
import { SearchProps } from 'antd/lib/input';

const { Search } = Input;

export type InputSearchProps = SearchProps;

/**
 * 默认搜索
 */
const InputSearch = (props: InputSearchProps) => {
  const { onChange: inputOnChange, ...rest } = props;

  const onChange = (e) => {
    const { value: _value } = e.target;
    inputOnChange?.(_value);
  };

  return <Search {...rest} onChange={onChange} />;
};

InputSearch.defaultProps = {
  allowClear: true,
  size: 'middle',
};

export default InputSearch;
