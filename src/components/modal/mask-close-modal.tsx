/* eslint-disable import/order */
import React, { FC, PropsWithChildren } from 'react';
import { Modal, ModalProps } from 'antd';

type sizeType = 'small' | 'normal' | 'large';

export interface MaskCloseModalProps extends Omit<ModalProps, 'width' | 'maskClosable' | 'bodyStyle' | 'size'> {
  size?: sizeType;
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

/**
 * 常用Modal设置
 * @param param0
 * @returns
 */
const MaskCloseModal: FC<PropsWithChildren<MaskCloseModalProps>> = ({ children, size, ...rest }) => {
  const width = getWidth(size ?? 'large');
  return <Modal width={width} {...rest}>{children}</Modal>;
};

MaskCloseModal.defaultProps = {
  size: 'large',
  maskClosable: false,
  bodyStyle: { margin: '10px 30px 0px 30px' },
};

export default MaskCloseModal;
