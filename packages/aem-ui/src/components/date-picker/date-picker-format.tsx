/* eslint-disable react-hooks/exhaustive-deps */
import { useMount } from 'ahooks';
import { DatePicker } from 'antd';
import { DateUtil } from 'common-toolkits';
import moment, { Moment } from 'moment';
import type { DatePickerProps } from 'antd';
import React, { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';

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
    return moment(inputValue, format);
  }
  return moment(moment(), format);
};

const DatePickerFormat = (props: DatePickerFormatProps) => {
  const { value, onChange, format, formatOut, ...restProps } = props;
  const [time, setTime] = useState<Moment>(toMomentValue(value, format));

  const update = (dateString: string) => {
    if(format === formatOut){
      onChange(dateString);
    } else {
      onChange(moment(dateString, format).format(formatOut));
    }
    setTime(moment(dateString, format));
  }

  const resSet = () => {
    setTime(moment());
    onChange(moment().format(formatOut));
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
        setTime(moment(value, format));
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
