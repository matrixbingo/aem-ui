/* eslint-disable react-hooks/exhaustive-deps */
import { useMount } from 'ahooks';
import { DatePicker } from 'antd';
import { DateUtil } from 'common-toolkits';
import type { DatePickerProps } from 'antd';
import React, { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import dayjs, { Dayjs } from 'dayjs';

const defaultFormat = 'YYYY-MM-DD';

export interface DatePickerFormatProps extends Omit<DatePickerProps, 'value' | 'onChange' | 'format'> {
  format?: string;
  formatOut?: string;
  value?: string;
  onChange?: (dateString: string) => void;
}

const checkValue = (v, format) => {
  return !v || !DateUtil.dateIsValid(v, format);
};

const toMomentValue = (inputValue: string, format: string) => {
  if (!checkValue(inputValue, format)) {
    return dayjs(inputValue, format);
  }
  return dayjs(dayjs(), format);
};

const DatePickerFormat = (props: DatePickerFormatProps) => {
  const { value, onChange, format, formatOut, ...restProps } = props;
  const [time, setTime] = useState<Dayjs>(toMomentValue(value, format));

  const update = (dateString: string) => {
    if(format === formatOut){
      onChange(dateString);
    } else {
      onChange(dayjs(dateString, format).format(formatOut));
    }
    setTime(dayjs(dateString, format));
  }

  const resSet = () => {
    setTime(dayjs());
    onChange(dayjs().format(formatOut));
  };

  useMount(() => {
    if (checkValue(value, format)) {
      resSet();
    }
  });

  useEffect(() => {
    if (!isEmpty(value) && value !== time.format(format)) {
      if (checkValue(value, format)) {
        resSet();
      } else {
        setTime(dayjs(value, format));
      }
    }
  }, [time, value]);

  const onChangeFormat = (_, dateString) => {
    update(dateString);
  };

  return (
    <DatePicker value={time} onChange={onChangeFormat} format={format} {...restProps as any} />
  );
};

DatePickerFormat.defaultProps = {
  onChange: (v) => {},
  format: defaultFormat,
  formatOut: defaultFormat,
};

export default DatePickerFormat;
