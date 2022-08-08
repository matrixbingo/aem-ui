/* eslint-disable react-hooks/exhaustive-deps */
import { useMount } from 'ahooks';
import { DatePicker } from 'antd';
import { DateUtil } from 'common-toolkits';
import moment, { Moment } from 'moment';
import type { TimePickerProps } from 'antd';
import React, { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';

const defaultFormat = 'HH:mm:ss';

export interface TimePickerFormatProps extends Omit<TimePickerProps, 'value' | 'onChange' | 'format'> {
  format?: string;
  value?: string;
  onChange: (dateString: string) => void;
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

const TimePickerFormat = (props: TimePickerFormatProps) => {
  const { value, onChange, format, ...restProps } = props;
  const [time, setTime] = useState<Moment>(toMomentValue(value, format));

  const update = (dateString: string) => {
    onChange(dateString);
    setTime(moment(dateString, format));
  }

  const resSet = () => {
    setTime(moment());
    onChange(moment().format(format));
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

TimePickerFormat.defaultProps = {
  onChange: (v) => {},
  format: defaultFormat,
};

export default TimePickerFormat;
