/* eslint-disable import/order */
import { Button, ButtonProps, Spin } from 'antd';
import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import MaskCloseModal, { MaskCloseModalProps } from './mask-close-modal';

export interface ModalEditorProps extends MaskCloseModalProps{
  button?: ButtonProps;
  title: any;
  visible?: boolean;
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
const ModalEditor: FC<PropsWithChildren<ModalEditorProps>> = ({ children, button = { children: '' }, visible = false, onCancel: inputOnCancel, onOk: inputOnOk, onSubmit: inputOnSubmit, ...rest }) => {
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

  if (!buttonChildren) {
    return (
      <>
        <Button {...buttonProps} onClick={() => setVisible((pev) => !pev)} />
        {createMaskCloseModal({ show, loading, onCancel, onOk, rest, children })}
      </>
    );
  }

  return (
    <>
      <Button onClick={() => setVisible((pev) => !pev)}>{buttonChildren}</Button>
      {createMaskCloseModal({ show, loading, onCancel, onOk, rest, children })}
    </>
  );
};

export default ModalEditor;
