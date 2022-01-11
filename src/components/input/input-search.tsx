/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Input } from 'antd';
import './input-range.css';
import { SearchProps } from 'antd/lib/input';

const { Search } = Input;

/**
 * 入参是数字string, 或数字，例如'2'或2
 */
const InputSearch = (props: SearchProps) => {
  const { allowClear, size, ...rest } = props;
  return <Search {...props} />;
};

InputSearch.defaultProps = {
  allowClear: true,
  size: 'middle',
};

export default InputSearch;
