import React from 'react';
import { Radio, RadioChangeEvent, RadioGroupProps } from 'antd';
import { AbstractCheckboxProps } from 'antd/lib/checkbox/Checkbox';

export interface RadioButtonsProps<T extends string | number> extends Omit<RadioGroupProps, 'buttons' | 'value' | 'onChange'> {
  buttons: AbstractCheckboxProps<T>[];
  onChange?: (value: T) => void;
}

const createRadioButton = (buttons: AbstractCheckboxProps<any>[]) => {
  return buttons.map((i) => <Radio.Button key={String(i.value)} {...i}>{i.children}</Radio.Button>);
};

const RadioButtons = <T extends number | string>({ buttons, onChange: inputOnChange, ...rest }) => {
  const onChange = (e: RadioChangeEvent) => {
    const { value } = e.target;
    inputOnChange?.(value as T);
  };

  return (
    <>
      <Radio.Group onChange={onChange} {...rest}>
        {createRadioButton(buttons)}
      </Radio.Group>
    </>
  );
};

export default RadioButtons;
