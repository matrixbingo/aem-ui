/* eslint-disable import/order */
import React, { FC } from 'react';
import { Modal } from 'antd';

export interface MaskCloseModalProps {
  [K: string]: any;
}

/**
 * 常用Modal设置
 * @param param0
 * @returns
 */
const MaskCloseModal: FC<MaskCloseModalProps> = ({ children, ...rest }) => {
  return <Modal {...rest}>{children}</Modal>;
};

MaskCloseModal.defaultProps = {
  width: 1200,
  maskClosable: true,
  bodyStyle: { margin: '10px 30px 0px 30px' },
};

export default MaskCloseModal;
