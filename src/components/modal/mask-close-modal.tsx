/* eslint-disable import/order */
import React, { FC, PropsWithChildren } from 'react';
import { Modal, ModalProps } from 'antd';

export interface MaskCloseModalProps extends Omit<ModalProps, 'width' | 'maskClosable' | 'bodyStyle'> {
  [K: string]: any;
}

/**
 * 常用Modal设置
 * @param param0
 * @returns
 */
const MaskCloseModal: FC<PropsWithChildren<MaskCloseModalProps>> = ({ children, ...rest }) => {
  return <Modal {...rest}>{children}</Modal>;
};

MaskCloseModal.defaultProps = {
  width: 1200,
  maskClosable: false,
  bodyStyle: { margin: '10px 30px 0px 30px' },
};

export default MaskCloseModal;
