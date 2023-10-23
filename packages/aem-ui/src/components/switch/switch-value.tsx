/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Switch, SwitchProps } from 'antd';
import { isEmpty, isBoolean, isNumber } from 'lodash';


export interface SwitchValueProps<T extends string | number | boolean> extends Omit<SwitchProps, 'options' | 'onChange' | 'value'> {
  value?: T;
  onChange?: (value: T) => void;
  options?: { checkedValue: T, unCheckedValue: T };
}


const initValue = (options, inputValue, defaultChecked) => {
  if(isBoolean(inputValue)){
    return inputValue;
  }
  if(isNumber(inputValue) || !isEmpty(inputValue)){
    return inputValue === options.checkedValue;
  }
  return defaultChecked;
}

const SwitchValue = <T extends number | string | boolean>(props: SwitchValueProps<T>) => {
  const { value: inputValue, onChange: inputOnChange, options = { checkedValue: true, unCheckedValue: false }, defaultChecked, ...restProps } = props;
  const [ checked, setChecked ] = useState<boolean>(initValue(options, inputValue, defaultChecked)) ;

  useEffect(() => {
    const _checked = initValue(options, inputValue, defaultChecked);
    setChecked(_checked);
  }, [inputValue]);

  const onChange = (checked) => {
    const v = (checked ? options.checkedValue : options.unCheckedValue) as T;
    inputOnChange?.(v);
  };

  return <Switch checked={checked} onChange={onChange} {...restProps} />;
};

export default SwitchValue;
