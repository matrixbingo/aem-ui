/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, PropsWithChildren, useEffect } from 'react';
import RangeDatePickerFormat, { RangeDatePickerFormatProps } from './range-date-picker-format';
import { Radio, Space } from 'antd';
import { DateUtil, FormatDate, Period } from 'common-toolkits';
import { useResetState } from 'common-toolkits-hooks';
import { isBoolean, isEmpty } from 'lodash';
import { assertError } from '../../util/util';
import moment from 'moment';

const defaultFormat = 'YYYY-MM-DD';

export interface RangeDayRadioFormatProps {
  format?: string;
  formatOut?: string;
  onChange?: (value: string[], checked: any) => void;
  range?: number[];
  radioBefore?: boolean;
  mixDays?: number;
  show?: boolean;
  allowClear?: boolean;
  defaultChecked?: boolean;
  rangeDatePickerFormatProps?: Omit<RangeDatePickerFormatProps, 'value' | 'onChange' | 'format' | 'formatOut'>
}

const initDate = (defaultDay: number) => DateUtil.range(Period.day, { format: FormatDate.DAY_FORMAT, rang: [defaultDay, 0] }) as string[];

const createRadioButton = (range: number[]) => {
  return range.map((i) => <Radio.Button key={i} value={i}>近{i}天</Radio.Button>);
};

function assertstion(props: RangeDayRadioFormatProps): asserts props is RangeDayRadioFormatProps & Required<Omit<RangeDayRadioFormatProps, 'onChange'>> {
  assertError(props, ['range', 'radioBefore', 'mixDays', 'defaultChecked']);
}

const RangeDayRadioFormat: FC<PropsWithChildren<RangeDayRadioFormatProps>> = (props) => {
  assertstion(props);
  const { onChange, show, range, format, formatOut, radioBefore, mixDays, defaultChecked, allowClear, rangeDatePickerFormatProps = {} } = props;
  const defaultValue = defaultChecked ? range[0] : undefined;
  const [value, setValue, resetValue] = useResetState<string[] | undefined>(defaultChecked ? initDate(defaultValue) : undefined);
  const [period, setPeriod, resetState] = useResetState<number | undefined>(defaultValue);

  useEffect(() => {
    if (isBoolean(show)) {
      if (show) {
        if(format === formatOut){
          onChange?.(value, period);
        } else {
          onChange([moment(value[0], format).format(formatOut), moment(value[1], format).format(formatOut)], period);
        }
      } else {
        resetValue();
        resetState();
      }
    }
  }, [show]);

  const onChangeButton = (e) => {
    const { value: checkedValue } = e.target;
    setPeriod(checkedValue);
    const rangeValue = initDate(checkedValue);
    setValue(rangeValue);
    if(format === formatOut){
      onChange?.(rangeValue, checkedValue);
    } else {
      onChange([moment(rangeValue[0], format).format(formatOut), moment(rangeValue[1], format).format(formatOut)], checkedValue);
    }
  };

  const onChangeRange = (rangeDate) => {
    if(isEmpty(rangeDate)){
      setValue(rangeDate);
      setPeriod(undefined);
      onChange?.(rangeDate, period);
    } else {
      if(format === formatOut){
        setValue(rangeDate);
        setPeriod(undefined);
        onChange?.(rangeDate, period);
      } else {
        const rang = [moment(rangeDate[0], formatOut).format(format), moment(rangeDate[1], formatOut).format(format)]
        setValue(rang);
        setPeriod(undefined);
        onChange?.(rangeDate, period);
      }
    }
  };

  if (radioBefore) {
    return (
      <Space>
        <Radio.Group defaultValue={defaultValue} onChange={onChangeButton} value={period}>
          {createRadioButton(range)}
        </Radio.Group>
        <RangeDatePickerFormat allowClear={defaultChecked ? allowClear : true} value={value} onChange={onChangeRange} mixDays={mixDays} defaultChecked={defaultChecked} format={format} formatOut={formatOut} {...rangeDatePickerFormatProps} />
      </Space>
    );
  }
  return (
    <Space>
      <RangeDatePickerFormat allowClear={defaultChecked ? allowClear : true} value={value} onChange={onChangeRange} mixDays={mixDays} defaultChecked={defaultChecked} format={format} formatOut={formatOut} {...rangeDatePickerFormatProps} />
      <Radio.Group defaultValue={defaultValue} onChange={onChangeButton} value={period}>
        {createRadioButton(range)}
      </Radio.Group>
    </Space>
  );
};

RangeDayRadioFormat.defaultProps = {
  range: [7, 15],
  radioBefore: true,
  mixDays: 15,
  defaultChecked: true,
  allowClear: false,
  onChange: (v) => {},
  format: defaultFormat,
  formatOut: defaultFormat,
};

export default RangeDayRadioFormat;
