/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, PropsWithChildren, useEffect } from 'react';
import RangeDatePickerFormat, { RangeDatePickerFormatProps } from './range-date-picker-format';
import { Radio, Space } from 'antd';
import { DateUtil, FormatDate, Period } from 'common-toolkits';
import { useResetState } from 'common-toolkits-hooks';
import { isBoolean } from 'lodash';
import { assertError } from '../../util/util';

export interface RangeDayRadioFormatProps {
  onChange?: (value: string[], checked: any) => void;
  range?: number[];
  radioBefore?: boolean;
  mixDays?: number;
  show?: boolean;
  allowClear?: boolean;
  defaultChecked?: boolean;
  rangeDatePickerFormatProps?: RangeDatePickerFormatProps;
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
  const { onChange, show, range, radioBefore, mixDays, defaultChecked, allowClear, rangeDatePickerFormatProps = {} } = props;
  const defaultValue = defaultChecked ? range[0] : undefined;
  const [value, setValue, resetValue] = useResetState<string[] | undefined>(defaultChecked ? initDate(defaultValue) : undefined);
  const [period, setPeriod, resetState] = useResetState<number | undefined>(defaultValue);
  useEffect(() => {
    if (isBoolean(show)) {
      if (show) {
        onChange?.(value, period);
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
    onChange?.(rangeValue, checkedValue);
  };

  const onChangeRange = (rangeDate) => {
    setValue(rangeDate);
    setPeriod(undefined);
    onChange?.(rangeDate, period);
  };

  if (radioBefore) {
    return (
      <Space>
        <Radio.Group defaultValue={defaultValue} onChange={onChangeButton} value={period}>
          {createRadioButton(range)}
        </Radio.Group>
        <RangeDatePickerFormat allowClear={defaultChecked ? allowClear : true} value={value} onChange={onChangeRange} mixDays={mixDays} defaultChecked={defaultChecked} {...rangeDatePickerFormatProps} />
      </Space>
    );
  }
  return (
    <Space>
      <RangeDatePickerFormat allowClear={defaultChecked ? allowClear : true} value={value} onChange={onChangeRange} mixDays={mixDays} defaultChecked={defaultChecked} {...rangeDatePickerFormatProps} />
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
};

export default RangeDayRadioFormat;
