/* eslint-disable import/order */
import { Button, ButtonProps } from 'antd';
import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import MaskCloseModal, { MaskCloseModalProps } from './mask-close-modal';

export interface ModalEditorProps extends MaskCloseModalProps{
  button?: ButtonProps;
  title: any;
  visible?: boolean;
  onCancel?:()=> void
}

/**
 * 常用Modal设置
 * @param param0
 * @returns
 */
const ModalEditor: FC<PropsWithChildren<ModalEditorProps>> = ({ children, button = { children:'' }, visible = false, onCancel: inputOnCancel, ...rest }) => {
  const [show, setVisible] = useState(visible);

  const { children: buttonChildren, ...buttonProps} = button;
  useEffect(() => {
    if (visible !== show) {
      setVisible(visible);
    }
  }, [visible]);

  const onCancel = () => {
    inputOnCancel?.();
    setVisible(false);
  }

  if (!buttonChildren) {
    return (
      <>
        <Button {...buttonProps} onClick={() => setVisible((pev) => !pev)} />
        <MaskCloseModal visible={show} onCancel={onCancel} {...rest}>{children}</MaskCloseModal>
      </>
    );
  }

  return (
    <>
      <Button onClick={() => setVisible((pev) => !pev)}>{buttonChildren}</Button>
      <MaskCloseModal visible={show} onCancel={onCancel}  {...rest}>{children}</MaskCloseModal>
    </>
  );
};

export default ModalEditor;
