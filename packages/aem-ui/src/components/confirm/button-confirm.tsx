import { Button, ButtonProps, Popconfirm, PopconfirmProps } from 'antd';
import React, { FC, ReactNode } from 'react';

export interface ButtonConfirmProps {
  title: ReactNode | (() => ReactNode);
  onConfirm?: (e?: React.MouseEvent<HTMLElement>) => void;
  onCancel?: (e?: React.MouseEvent<HTMLElement>) => void;
  buttonProps?: ButtonProps;
  confirmProps?: Omit<PopconfirmProps, 'title' | 'onConfirm' | 'onCancel'>;
}

const ButtonConfirm: FC<ButtonConfirmProps> = ({ title = '', onConfirm, onCancel, buttonProps = {}, confirmProps = { placement: 'topRight' } }) => {
  return (
    <Popconfirm title={title as any} onConfirm={onConfirm} onCancel={onCancel} {...confirmProps}>
      <Button {...buttonProps} />
    </Popconfirm>
  );
};

export default ButtonConfirm;
