/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useMount } from 'ahooks';
import { DatePicker } from 'antd';
import { RangePickerProps } from 'antd/lib/date-picker';
import { isArray, isEmpty } from 'lodash';
import { RangeValue } from 'rc-picker/lib/interface';
import { DateUtil } from 'common-toolkits';
import dayjs, { Dayjs } from 'dayjs';

const { RangePicker } = DatePicker;

const defaultFormat = 'YYYY-MM-DD';

export interface RangeDatePickerFormatProps extends Omit<RangePickerProps, 'value' | 'onChange' | 'format'> {
  format?: string;
  formatOut?: string;
  value?: string[];
  onChange?: (dateString: string[] | undefined) => void;
  mixDays?: number;           // 最大天数，0为任意
  defaultChecked?: boolean;   // 默认选 首次刷新
}

const toMomentValue = (inputValue: string[] | undefined, format: string, defaultChecked = true): RangeValue<Dayjs> | undefined => {
  if (defaultChecked) {
    if (isArray(inputValue) && inputValue.length === 2 && DateUtil.dateIsValid(inputValue[0], format) && DateUtil.dateIsValid(inputValue[1], format)) {
      return [dayjs(inputValue[0], format), dayjs(inputValue[1], format)];
    }
    return [dayjs(), dayjs()];
  }
  return undefined;
};

const checkValue = (v, format) => {
  return !v || !Array.isArray(v) || v.length !== 2 || !DateUtil.dateIsValid(v[0], format) || !DateUtil.dateIsValid(v[1], format);
};

const getTime = (time: RangeValue<Dayjs>, index, format) => {
  if (time && time[index]) {
    return (time[index] as Dayjs).format(format);
  }
  return dayjs().format(format);
};

const RangeDatePickerFormat = (props: RangeDatePickerFormatProps) => {
  const { value, onChange, format, formatOut, mixDays, defaultChecked, allowClear = false, ...restProps } = props;
  const [dates, setDates] = useState<RangeValue<Dayjs>>(null);
  const [time, setTime] = useState<RangeValue<Dayjs> | RangeValue<undefined>>(toMomentValue(value, format, defaultChecked));

  const update = (dateStrings: string[]) => {
    if(!!dateStrings){
      setTime([dayjs(dateStrings[0], format), dayjs(dateStrings[1], format)]);
    } else {
      setTime(undefined);
    }
    if(isEmpty(dateStrings)){
      onChange(dateStrings);
    } else {
      if(format === formatOut){
        onChange(dateStrings);
      } else {
        onChange([dayjs(dateStrings[0], format).format(formatOut), dayjs(dateStrings[1], format).format(formatOut)]);
      }
    }
  };

  const resSet = (onChangeRun = true) => {
    if (onChangeRun) {
      setTime([dayjs(), dayjs()]);
      onChange([dayjs().format(formatOut), dayjs().format(formatOut)]);
    }
  };

  useMount(() => {
    if (checkValue(value, format)) {
      resSet(defaultChecked);
    }
  });

  useEffect(() => {
    const time0 = getTime(time, 0, format);
    const time1 = getTime(time, 1, format);
    const value0 = value?.[0];
    const value1 = value?.[1];
    if (!isEmpty(value0) && !isEmpty(value1) && (value0 !== time0 || value1 !== time1)) {
      if (checkValue(value, format)) {
        resSet();
      } else {
        setTime([dayjs(value?.[0], format), dayjs(value?.[1], format)]);
      }
    }
  }, [value?.[0], value?.[1]]);

  const onChangeFormat = (_, dateStrings: string[]) => {
    if(!!_){
      update(dateStrings);
    } else {
      update(undefined);
    }
  };

  const disabledDate = (current: Dayjs) => {
    if (!dates || mixDays === 0) {
      return false;
    }
    const tooLate = dates[0] && current.diff(dates[0], 'days') > mixDays;
    const tooEarly = dates[1] && dates[1].diff(current, 'days') > mixDays;
    return !!tooEarly || !!tooLate;
  };

  return (
    <RangePicker value={time} onCalendarChange={val => setDates(val)} disabledDate={disabledDate} onChange={onChangeFormat} allowClear={defaultChecked ? allowClear : true} {...restProps as any} />
  );
};

RangeDatePickerFormat.defaultProps = {
  format: defaultFormat,
  formatOut: defaultFormat,
  onChange: (v) => {},
  mixDays: 0,
  defaultChecked: true,
};

export default RangeDatePickerFormat;
