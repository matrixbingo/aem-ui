/* eslint-disable react-hooks/exhaustive-deps */
import { useMount } from 'ahooks';
import { DatePicker, DatePickerProps } from 'antd';
import moment, { Moment } from 'moment';

import React, { useEffect, useState } from 'react';

export interface DatePickerFormatProps extends Omit<DatePickerProps, 'value' | 'onChange' | 'format'> {
  format: string;
  value: string[];
  onChange: (dateString: string[]) => void;
}

const DatePickerFormat = (props: DatePickerFormatProps) => {
  const { value, onChange, format, ...restProps } = props;
  const [time, setTime] = useState<Moment>(
    value ? moment(value, format) : moment(),
  );

  useMount(() => {
    if (!value || value.length !== 1) {
      setTime(moment());
      onChange([moment().format(format)]);
    }
  });

  useEffect(() => {
    value && setTime(moment(value, format));
  }, [value]);

  const onChangeFormat = (_, dateString) => {
    onChange([dateString]);
  };

  return (
    <DatePicker
      value={time}
      onChange={onChangeFormat}
      format={format}
      {...restProps}
    />
  );
};

DatePickerFormat.defaultProps = {
  value: '',
  onChange: (v) => {},
  format: 'YYYY-MM-DD',
};

export default DatePickerFormat;
