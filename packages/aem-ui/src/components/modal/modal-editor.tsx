/* eslint-disable react-hooks/exhaustive-deps */
import { Button, ButtonProps } from 'antd';
import React, { FC, PropsWithChildren, useCallback, useEffect, useState } from 'react';
import MaskCloseModal, { MaskCloseModalProps } from './mask-close-modal';

export interface ModalEditorProps extends Omit<MaskCloseModalProps, 'onSubmit'> {
  button?: Omit<ButtonProps, 'onClick'>;
  title: any;
  visible?: boolean;
  onClick?: () => void;
  loading?: boolean;
  onCancel?: () => void;
  onSubmit?: (setVisible: React.Dispatch<React.SetStateAction<boolean>>, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void;
}

const createMaskCloseModal = ({ visible, loading, onCancel, onSubmit, showSubmit, rest, children }) => {
  // const footer = showSubmit ? [<Button key="onCancel" loading={loading} onClick={onCancel}>取消</Button>, <Button key="submit" type="primary" loading={loading} onClick={onSubmit}>确定</Button>] : [<Button key="onCancel" loading={loading} onClick={onCancel}>取消</Button>];
  return (
    <MaskCloseModal open={visible} onCancel={onCancel} onSubmit={onSubmit} loading={loading} {...rest}>
      {children}
    </MaskCloseModal>
  );
};

/**
 * 常用Modal设置
 * @param param0
 * @returns
 */
const ModalEditor: FC<PropsWithChildren<ModalEditorProps>> = ({ children, button = { children: '' }, visible: inputVisible = false, loading: inputLoading = false, onCancel: inputOnCancel, onOk: inputOnOk, onSubmit: inputOnSubmit, onClick: inputOnClick, ...rest }) => {
  const { children: buttonChildren, ...buttonProps } = button;
  const [visible, setVisible] = useState(inputVisible);
  const [loading, setLoading] = useState(inputLoading);
  const showSubmit = !!inputOnSubmit;

  const close = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (inputVisible !== visible) {
      setVisible(inputVisible);
    }
    if (!inputVisible) {
      close();
    }
  }, [inputVisible]);

  const onCancel = useCallback(() => {
    inputOnCancel?.();
    setVisible(false);
  }, [inputOnCancel]);

  const onSubmit = useCallback(() => {
    if (inputOnSubmit) {
      setLoading(true);
      inputOnSubmit?.(setVisible, setLoading);
    }
  }, [inputOnSubmit]);

  const onClick = useCallback(() => {
    inputOnClick?.();
    setVisible((prev) => !prev);
  },
  [inputOnClick]);

  if (!buttonChildren) {
    return (
      <>
        <Button {...buttonProps} onClick={onClick} />
        {createMaskCloseModal({ visible, loading, onCancel, onSubmit: inputOnSubmit ? onSubmit : undefined, showSubmit, rest, children })}
      </>
    );
  }

  return (
    <>
      <Button {...buttonProps} onClick={onClick}>{buttonChildren}</Button>
      {createMaskCloseModal({ visible, loading, onCancel, onSubmit: inputOnSubmit ? onSubmit : undefined, showSubmit, rest, children })}
    </>
  );
};

export default ModalEditor;
