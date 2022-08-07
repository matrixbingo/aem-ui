import React, { FC } from 'react';
import { Popconfirm, PopconfirmProps, Switch, SwitchProps } from 'antd';

export interface EditableStatusProps {
  title: PopconfirmProps['title'];
  checked?: boolean;
  onConfirm?: (e?: React.MouseEvent<HTMLElement>) => void;
  switchProps?: Omit<SwitchProps, 'checked'>;
  popconfirmProps?: Omit<PopconfirmProps, 'onConfirm' | 'title' >;
}

const EditableStatus: FC<EditableStatusProps> = ({ checked = false, title = '', onConfirm, switchProps = {}, popconfirmProps = { placement: 'topLeft' } }) => {
  return (
    <Popconfirm title={title} onConfirm={onConfirm} {...popconfirmProps}>
      <Switch checked={checked} {...switchProps} />
    </Popconfirm>
  );
};

export default EditableStatus;
