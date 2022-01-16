/* eslint-disable react-hooks/exhaustive-deps */
import { useMount } from 'ahooks';
import { DatePicker } from 'antd';
import { RangePickerProps } from 'antd/lib/date-picker';
import moment, { Moment } from 'moment';
import { RangeValue } from 'rc-picker/lib/interface';

import React, { useEffect, useState } from 'react';

const defaultFormat = 'YYYY-MM-DD';

export interface RangePickerFormatProps extends Omit<RangePickerProps, 'value' | 'onChange' | 'format'> {
  format: string;
  value: string[];
  onChange: (dateString: string[]) => void;
  mixDays: number;  // 最大天数，0为任意
}

const RangePickerFormat = (props: RangePickerFormatProps) => {
  const { RangePicker } = DatePicker;
  const [dates, setDates] = useState<any>([]);
  const { value, onChange, format, mixDays, ...restProps } = props;
  const [time, setTime] = useState<RangeValue<Moment>>(value && value.length > 0 ? [moment(value[0], format), moment(value[1], format)] : [moment(), moment()]);

  useMount(() => {
    if (!value || value.length !== 2) {
      setTime([moment(), moment()]);
      onChange([moment().format(format), moment().format(format)]);
    }
  });

  useEffect(() => {
    value && setTime([moment(value[0], format), moment(value[1], format)]);
  }, [value[0], value[1]]);

  const onChangeFormat = (_, dateStrings: string[]) => {
    onChange(dateStrings);
  };

  const disabledDate = (current) => {
    if (mixDays === 0) {
      return false;
    }
    if (!dates || dates.length === 0) {
      return false;
    }
    const tooLate = dates[0] && current.diff(dates[0], 'days') > mixDays;
    const tooEarly = dates[1] && dates[1].diff(current, 'days') > mixDays;
    return tooEarly || tooLate;
  };

  return (
    <RangePicker value={time} onChange={onChangeFormat} disabledDate={disabledDate} onCalendarChange={(val) => mixDays !== 0 && setDates(val)} {...restProps} />
  );
};

RangePickerFormat.defaultProps = {
  format: defaultFormat,
  value: [moment().format(defaultFormat), moment().format(defaultFormat)],
  onChange: (v) => window.console.error('DatePickerFormat.onChange : ', v),
  mixDays: 0,
};

export default RangePickerFormat;
