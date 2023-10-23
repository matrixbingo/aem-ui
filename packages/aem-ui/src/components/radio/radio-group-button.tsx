import React from 'react';
import { Radio, RadioChangeEvent, RadioGroupProps } from 'antd';

export interface RadioButtonsProps<T extends string | number> extends Omit<RadioGroupProps, 'buttons' | 'value' | 'onChange'> {
  value: any[];
  onChange?: (value: T) => void;
}

const createRadioButton = (value: any[]) => {
  return value?.map((i) => <Radio.Button key={String(i.value)} {...i}>{i.label}</Radio.Button>);
};

const RadioGroupButton = <T extends number | string>({ value = [], onChange: inputOnChange, ...rest }) => {
  const onChange = (e: RadioChangeEvent) => {
    const { value } = e.target;
    inputOnChange?.(value as T);
  };

  return (
    <>
      <Radio.Group onChange={onChange} {...rest}>
        {createRadioButton(value)}
      </Radio.Group>
    </>
  );
};

export default RadioGroupButton;
