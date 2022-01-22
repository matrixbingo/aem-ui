/* eslint-disable import/order */
import React, { FC, PropsWithChildren, useState } from 'react';
import { Button, Modal, ModalProps, Spin } from 'antd';
import { useUpdateEffect } from 'ahooks';

type sizeType = 'small' | 'normal' | 'large';

export interface MaskCloseModalProps extends Omit<ModalProps, 'width' | 'maskClosable' | 'bodyStyle' | 'size'> {
  size?: sizeType;
  loading?: boolean;  // 如果未设置则内部维护
  onCancel?: () => void;
  onSubmit?: (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void;
  [K: string]: any;
}

const getWidth = (size: sizeType) => {
  switch (size) {
    case 'small': return 400;
    case 'normal': return 800;
    case 'large': return 1200;
    default: return 1200;
  }
};

const createButton = (showSubmit, loading, onCancel, onSubmit) => {
  return showSubmit ? [<Button key="onCancel" loading={loading} onClick={onCancel}>取消</Button>, <Button key="submit" type="primary" loading={loading} onClick={onSubmit}>确定</Button>] : [<Button key="onCancel" loading={loading} onClick={onCancel}>取消</Button>];
};

/**
 * 常用Modal设置，外部控制可见 visible
 * @param param0
 * @returns
 */
const MaskCloseModal: FC<PropsWithChildren<MaskCloseModalProps>> = ({ children, visible, loading: inputLoading = false, onCancel: inputOnCancel, onSubmit: inputOnSubmit, size, ...rest }) => {
  const [loading, setLoading] = useState<boolean>(inputLoading);
  const width = getWidth(size ?? 'large');

  const close = () => {
    setLoading(false);
  };

  useUpdateEffect(() => {
    setLoading(inputLoading);
  }, [inputLoading]);

  useUpdateEffect(() => {
    if (!visible) {
      close();
    }
  }, [visible]);

  const onCancel = (e) => {
    e?.stopPropagation();
    inputOnCancel?.();
    close();
  };

  const onSubmit = () => {
    if (inputOnSubmit) {
      inputOnSubmit?.(setLoading);
    }
  };

  return (
    <Modal width={width} visible={visible} onCancel={onCancel} footer={createButton(!!inputOnSubmit, loading, onCancel, onSubmit)} {...rest}>
      <Spin spinning={inputLoading}>
        {children}
      </Spin>
    </Modal>
  );
};

MaskCloseModal.defaultProps = {
  size: 'large',
  maskClosable: false,
  bodyStyle: { margin: '10px 30px 0px 30px' },
  showSubmit: true,
};

export default MaskCloseModal;
