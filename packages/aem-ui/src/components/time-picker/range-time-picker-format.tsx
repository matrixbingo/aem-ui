/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useMount } from 'ahooks';
import { TimePicker } from 'antd';
import { RangePickerProps } from 'antd/lib/date-picker';
import dayjs, { Dayjs } from 'dayjs';
import { RangeValue } from 'rc-picker/lib/interface';
import { isArray, isEmpty } from 'lodash';

const defaultFormat = 'HH:mm:ss';

export interface RangeTimePickerFormatProps extends Omit<RangePickerProps, 'value' | 'onChange' | 'format'> {
  format: string;
  value?: string[];
  onChange: (dateString: string[]) => void;
  mixDays: number;  // 最大天数，0为任意
}

const toMomentValue = (inputValue: string[], format: string): RangeValue<Dayjs> => {
  if (isArray(inputValue) && inputValue.length === 2 && inputValue[0].length === 8 && inputValue[1].length === 8) {
    return [dayjs(inputValue[0], format), dayjs(inputValue[1], format)];
  }
  return [dayjs(), dayjs()];
};

const getTime = (time: RangeValue<Dayjs>, index, format) => {
  if (time && time[index]) {
    return (time[index] as Dayjs).format(format);
  }
  return dayjs().format(format);
};

const checkValue = (v) => {
  return !v || !Array.isArray(v) || v.length !== 2 || v[0].length !== 8 || v[1].length !== 8;
};

const RangeTimePickerFormat = (props: RangeTimePickerFormatProps) => {
  const { value, onChange, format, mixDays, ...restProps } = props;
  const [time, setTime] = useState<RangeValue<Dayjs>>(toMomentValue(value, format));

  const update = (dateStrings: string[]) => {
    onChange(dateStrings);
    setTime([dayjs(dateStrings[0], format), dayjs(dateStrings[1], format)]);
  }

  const resSet = () => {
    setTime([dayjs(), dayjs()]);
    onChange([dayjs().format(format), dayjs().format(format)]);
  };

  useMount(() => {
    if (checkValue(value)) {
      resSet();
    }
  });

  useEffect(() => {
    const time0 = getTime(time, 0, format);
    const time1 = getTime(time, 1, format);
    const value0 = value?.[0];
    const value1 = value?.[1];
    if (!isEmpty(value0) && !isEmpty(value1) && (value0 !== time0 || value1 !== time1)) {
      if (checkValue(value)) {
        resSet();
      } else {
        setTime([dayjs(value[0], format), dayjs(value[1], format)]);
      }
    }
  }, [value?.[0], value?.[1]]);

  const onChangeFormat = (_, dateStrings: string[]) => {
    update(dateStrings);
  };

  return (
    <TimePicker.RangePicker value={time as any} onChange={onChangeFormat} {...restProps} />
  );
};

RangeTimePickerFormat.defaultProps = {
  format: defaultFormat,
  onChange: (v) => window.console.error('DatePickerFormat.onChange : ', v),
  mixDays: 0,
};

export default RangeTimePickerFormat;
