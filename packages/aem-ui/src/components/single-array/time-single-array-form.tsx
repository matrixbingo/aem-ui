/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState }  from 'react';
import { useMount } from 'ahooks';
import { TimePicker, TimePickerProps } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { isArray, isEmpty } from 'lodash';

const defaultFormat = 'HH:mm:ss';

export interface TimeSingleArrayFormProps extends Omit<TimePickerProps, 'value' | 'onChange' | 'format'> {
  format: string;
  value: string[];
  onChange: (dateString: string[]) => void;
}

const toMomentValue = (inputValue: string[], format: string) => {
  if (isArray(inputValue) && inputValue.length === 1 && inputValue[0].length === 8) {
    return dayjs(inputValue[0], format);
  }
  return dayjs(dayjs(), format);
};

const checkValue = (v) => {
  return !v || !Array.isArray(v) || v.length !== 1 || v[0].length !== 8;
};

const TimeSingleArrayForm = (props: TimeSingleArrayFormProps) => {
  const { value, onChange, format, ...restProps } = props;
  const [time, setTime] = useState<Dayjs>(toMomentValue(value, format));

  const resSet = () => {
    setTime(dayjs(dayjs(), format));
    onChange([dayjs().format(format)]);
  };

  useMount(() => {
    if (checkValue(value)) {
      resSet();
    }
  });

  useEffect(() => {
    if (!isEmpty(value?.[0]) && value?.[0] !== time.format(format)) {
      if (checkValue(value)) {
        resSet();
      } else {
        setTime(dayjs(value?.[0], format));
      }
    }
  }, [time, value]);

  const onChangeFormat = (_, dateString) => {
    onChange([dateString]);
  };

  return (
    <TimePicker value={time} onChange={onChangeFormat} format={format} {...restProps as any} />
  );
};

TimeSingleArrayForm.defaultProps = {
  onChange: (v) => window.console.error('DatePickerFormat.onChange : ', v),
  format: defaultFormat,
};

export default TimeSingleArrayForm;
