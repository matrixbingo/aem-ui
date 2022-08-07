/* eslint-disable react-hooks/exhaustive-deps */
import { useMount, useSafeState } from 'ahooks';
import { Checkbox, CheckboxProps, Spin } from 'antd';
import React, { FC, PropsWithChildren, useEffect } from 'react';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { isBoolean, set } from 'lodash';

export interface CheckboxSpinProps {
  id?: string;
  title?: React.ReactNode;
  checked?: boolean;
  onChange?: (e: CheckboxChangeEvent, setChecked: React.Dispatch<React.SetStateAction<boolean>>, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void;
  onChangeCallBack?: (rs: any, setChecked: React.Dispatch<React.SetStateAction<boolean>>) => void;
  checkboxProps?: Omit<CheckboxProps, 'checked' | 'onChange'>;
  setCheckedList?: Record<string, React.Dispatch<React.SetStateAction<boolean>>>;
}

const CheckboxSpin: FC<PropsWithChildren<CheckboxSpinProps>> = ({ id, setCheckedList, title, checked: inputChecked, onChange: inputOnChange = (e, setChecked) => setChecked(e?.target?.checked), ...rest }) => {
  const [checked, setChecked] = useSafeState<boolean>(!!inputChecked);
  const [loading, setLoading] = useSafeState<boolean>(false);

  useMount(() => setCheckedList && set(setCheckedList, `id_${id}`, setChecked));

  useEffect(() => {
    isBoolean(inputChecked) && setChecked(inputChecked);
  }, [inputChecked]);

  const onChange = (e: CheckboxChangeEvent) => {
    inputOnChange(e, setChecked, setLoading);
  };

  return (
    <Spin spinning={loading}>
      <Checkbox checked={checked} onChange={onChange} {...rest}>{title as any}</Checkbox>
    </Spin>
  );
};

export default CheckboxSpin;
