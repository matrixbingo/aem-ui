import React, { FC } from 'react';
import { Checkbox, Popconfirm, PopconfirmProps, CheckboxProps, Spin } from 'antd';

export interface CheckboxEditableStatusProps {
  title: PopconfirmProps['title'];
  checked?: boolean;
  onConfirm?: (e?: React.MouseEvent<HTMLElement>) => void;
  checkboxProps?: Omit<CheckboxProps, 'checked'> & { loading: boolean };
  popconfirmProps?: Omit<PopconfirmProps, 'onConfirm' | 'title' >;
}

const CheckboxEditableStatus: FC<CheckboxEditableStatusProps> = ({ checked = false, title = '', onConfirm, checkboxProps = { loading: false }, popconfirmProps = { placement: 'topLeft' } }) => {
  const { loading, ...restCheckboxProps } = checkboxProps;
  return (
    <Popconfirm title={title} onConfirm={onConfirm} {...popconfirmProps}>
      <Spin spinning={loading}>
        <Checkbox checked={checked} {...restCheckboxProps} />
      </Spin>
    </Popconfirm>
  );
};

export default CheckboxEditableStatus;
