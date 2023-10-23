/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Input, InputProps, Tooltip, TooltipProps } from 'antd';
import { trim } from 'lodash';

export interface InputTooltipProps extends Omit<InputProps, 'value' | 'onChange' | 'render' | 'title'> {
  title: React.ReactNode | (() => React.ReactNode);
  width?: number;
  value?: string;
  onChange?: (value: any) => void;
  render?: (value: any) => any;
  useTrim?: boolean;
  tooltipProps?: Omit<TooltipProps, 'title'>;
}

/**
 * 输入时格式化展示
 */
const InputTooltip = (props: InputTooltipProps) => {
  const { useTrim = true } = props;
  const { value, onChange: inputOnChange, render = (v: any) => (useTrim ? trim(v) : v), title = '', width, tooltipProps, ...restProps } = props;
  const inputValue = useTrim ? trim(value) : value;

  const onChange = (e) => {
    const { value: _value } = e.target;
    inputOnChange?.(render(_value));
  };

  return (
    <Tooltip trigger={['focus']} title={title} placement="topLeft" overlayStyle={{ maxWidth: width }} {...tooltipProps}>
      <Input value={inputValue} onChange={onChange} {...restProps} />
    </Tooltip>
  );
};

InputTooltip.defaultProps = {
  onChange: (v) => {},
  width: 800,
};

export default InputTooltip;
