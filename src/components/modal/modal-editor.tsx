/* eslint-disable import/order */
import { Button, ButtonProps, Spin } from 'antd';
import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import MaskCloseModal, { MaskCloseModalProps } from './mask-close-modal';

export interface ModalEditorProps extends MaskCloseModalProps{
  button?: Omit<ButtonProps, 'onClick'>;
  title: any;
  visible?: boolean;
  onClick?: () => void;
  onCancel?: () => void;
  onOk?: () => void;
  onSubmit?: (setVisible: React.Dispatch<React.SetStateAction<boolean>>, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void;
}

const createMaskCloseModal = ({ show, loading, onCancel, onOk, rest, children }) => {
  return (
    <MaskCloseModal
      visible={show}
      onCancel={onCancel}
      footer={[
        <Button key="onCancel" loading={loading} onClick={onCancel}>
          取消
        </Button>,
        <Button key="submit" type="primary" loading={loading} onClick={onOk}>
          确定
        </Button>]}
      {...rest}
    >{children}
    </MaskCloseModal>
  );
};

/**
 * 常用Modal设置
 * @param param0
 * @returns
 */
const ModalEditor: FC<PropsWithChildren<ModalEditorProps>> = ({ children, button = { children: '' }, visible = false, onCancel: inputOnCancel, onOk: inputOnOk, onSubmit: inputOnSubmit, onClick: inputOnClick, ...rest }) => {
  const { children: buttonChildren, ...buttonProps } = button;
  const [show, setVisible] = useState(visible);
  const [loading, setLoading] = useState(visible);

  const close = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (visible !== show) {
      setVisible(visible);
    }
    return close();
  }, [visible]);

  const onCancel = () => {
    inputOnCancel?.();
    setVisible(false);
  };

  const onOk = () => {
    if (inputOnSubmit) {
      setLoading(true);
      inputOnSubmit?.(setVisible, setLoading);
      return;
    }

    if (inputOnOk) {
      inputOnOk?.();
      setVisible(false);
      setLoading(false);
    }
  };

  const onClick = () => {
    inputOnClick?.();
    setVisible((prev) => !prev);
  };

  if (!buttonChildren) {
    return (
      <>
        <Button {...buttonProps} onClick={onClick} />
        {createMaskCloseModal({ show, loading, onCancel, onOk, rest, children })}
      </>
    );
  }

  return (
    <>
      <Button {...buttonProps} onClick={onClick}>{buttonChildren}</Button>
      {createMaskCloseModal({ show, loading, onCancel, onOk, rest, children })}
    </>
  );
};

export default ModalEditor;
