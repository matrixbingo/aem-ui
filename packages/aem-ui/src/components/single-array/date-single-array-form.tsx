/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useMount } from 'ahooks';
import { DatePicker, DatePickerProps } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { isArray, isEmpty } from 'lodash';

const defaultFormat = 'YYYY-MM-DD';

export interface DateSingleArrayFormProps extends Omit<DatePickerProps, 'value' | 'onChange' | 'format' | 'defaultValue'> {
  format: string;
  value: string[];
  onChange: (dateString: string[]) => void;
}

const checkValue = (v) => {
  return !v || !Array.isArray(v) || v?.length !== 1 || v?.[0]?.length !== 10;
};

const toMomentValue = (inputValue: string[], format: string) => {
  if (isArray(inputValue) && inputValue?.length === 1 && inputValue?.[0]?.length === 10) {
    return dayjs(inputValue[0], format);
  }
  return dayjs(dayjs(), format);
};

const DateSingleArrayForm = (props: DateSingleArrayFormProps) => {
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
    <DatePicker value={time} onChange={onChangeFormat} format={format} {...restProps as any} />
  );
};

DateSingleArrayForm.defaultProps = {
  onChange: (v) => window.console.error('DatePickerFormat.onChange : ', v),
  format: defaultFormat,
};

export default DateSingleArrayForm;
