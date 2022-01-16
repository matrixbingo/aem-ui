import React, { FC } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Button } from 'antd';
import { CopyOutlined } from '@ant-design/icons';

export interface ButtonCopyProps extends Omit<CopyToClipboard.Props, 'value' | 'onChange' | 'text' | 'children'> {
  value?: string;
  onChange?: (value: string) => void;
  children?: React.ReactNode;
}

const ButtonCopy: FC<ButtonCopyProps> = ({children, value="", ...rest}) => {
  return  <CopyToClipboard text={value} {...rest}>
    {children}
  </CopyToClipboard>
};

ButtonCopy.defaultProps = {
  children: <Button type="primary" size="large" icon={<CopyOutlined />} />
};

export default ButtonCopy;