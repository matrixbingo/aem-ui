/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, PropsWithChildren, useEffect } from 'react';
import RangeDatePickerFormat from './range-date-picker-format';
import { Radio, Space } from 'antd';
import { DateUtil, FormatDate, Period } from 'common-toolkits';
import { useResetState } from 'common-toolkits-hooks';
import { isBoolean, isNumber } from 'lodash';

export interface RangeDayRadioFormatProps {
  onChange?: (value: string[]) => void;
  range?: number[];
  radioBefore?: boolean;
  mixDays?: number;
  show?: boolean;
}

const initDate = (defaultDay: number) => DateUtil.range(Period.day, { format: FormatDate.DAY_FORMAT, rang: [defaultDay, 0] }) as string[];

const createRadioButton = (range: number[]) => {
  return range.map((i) => <Radio.Button key={i} value={i}>近{i}天</Radio.Button>);
};

const assertError = (props: any, keys: string[]) => {
  keys.forEach((key) => {
    const value = props[key];
    if (!isNumber(value) && !isBoolean(value) && !value) {
      throw new Error(`${key} is not existed!`);
    }
  });
};

function assertstion(props: RangeDayRadioFormatProps): asserts props is RangeDayRadioFormatProps & Required<Omit<RangeDayRadioFormatProps, 'onChange'>> {
  assertError(props, ['range', 'radioBefore', 'mixDays']);
}

const RangeDayRadioFormat: FC<PropsWithChildren<RangeDayRadioFormatProps>> = (props) => {
  assertstion(props);
  const { onChange, show, range, radioBefore, mixDays } = props;
  const defaultValue = range[0];
  const [value, setValue, resetValue] = useResetState<string[]>(initDate(defaultValue));
  const [period, setPeriod, resetState] = useResetState<number | undefined>(defaultValue);

  useEffect(() => {
    if (isBoolean(show)) {
      if (show) {
        onChange?.(value);
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
    onChange?.(rangeValue);
  };

  const onChangeRange = (rangeDate) => {
    setValue(rangeDate);
    setPeriod(undefined);
    onChange?.(rangeDate);
  };

  if (radioBefore) {
    return (
      <Space>
        <Radio.Group defaultValue={defaultValue} onChange={onChangeButton} value={period}>
          {createRadioButton(range)}
        </Radio.Group>
        <RangeDatePickerFormat allowClear={false} value={value} onChange={onChangeRange} mixDays={mixDays} />
      </Space>
    );
  }
  return (
    <Space>
      <RangeDatePickerFormat allowClear={false} value={value} onChange={onChangeRange} mixDays={mixDays} />
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
};

export default RangeDayRadioFormat;
