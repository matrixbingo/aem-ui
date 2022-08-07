/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useMount } from 'ahooks';
import { DatePicker } from 'antd';
import { RangePickerProps } from 'antd/lib/date-picker';
import { isArray, isEmpty } from 'lodash';
import moment, { Moment } from 'moment';
import { RangeValue } from 'rc-picker/lib/interface';
import { DateUtil } from 'common-toolkits';

const defaultFormat = 'YYYY-MM-DD';

export interface RangePickerFormatProps extends Omit<RangePickerProps, 'value' | 'onChange' | 'format'> {
  format: string;
  value: string[];
  onChange: (dateString: string[]) => void;
  mixDays?: number;  // 最大天数，0为任意
}
const toMomentValue = (inputValue: string[], format: string): RangeValue<Moment> => {
  if (isArray(inputValue) && inputValue.length === 2 && DateUtil.dateIsValid(inputValue[0], format) && DateUtil.dateIsValid(inputValue[1], format)) {
    return [moment(inputValue[0], format), moment(inputValue[1], format)];
  }
  return [moment(), moment()];
};

const checkValue = (v, format) => {
  return !v || !Array.isArray(v) || v.length !== 2 || !DateUtil.dateIsValid(v[0], format) || !DateUtil.dateIsValid(v[1], format);
};

const getTime = (time: RangeValue<Moment>, index, format) => {
  if (time && time[index]) {
    return (time[index] as Moment).format(format);
  }
  return moment().format(format);
};

const RangeDatePickerFormat = (props: RangePickerFormatProps) => {
  const { RangePicker } = DatePicker;
  const { value, onChange, format, mixDays, ...restProps } = props;
  const [time, setTime] = useState<RangeValue<Moment>>(toMomentValue(value, format));

  const resSet = () => {
    setTime([moment(), moment()]);
    onChange([moment().format(format), moment().format(format)]);
  };

  useMount(() => {
    if (checkValue(value, format)) {
      resSet();
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
        setTime([moment(value[0], format), moment(value[1], format)]);
      }
    }
  }, [value?.[0], value?.[1]]);

  const onChangeFormat = (_, dateStrings: string[]) => {
    onChange(dateStrings);
    setTime([moment(dateStrings[0], format), moment(dateStrings[1], format)]);
  };

  return (
    <RangePicker value={time} onChange={onChangeFormat} {...restProps as any} />
  );
};

RangeDatePickerFormat.defaultProps = {
  format: defaultFormat,
  onChange: (v) => window.console.error('DatePickerFormat.onChange : ', v),
  mixDays: 0,
};

export default RangeDatePickerFormat;
