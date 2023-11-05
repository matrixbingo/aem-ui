import React, { FC, PropsWithChildren } from 'react';
import { Button, Space, Tooltip } from 'antd';
import { CopyOutlined } from '@ant-design/icons';

export interface CopyButtonProps {
  copy?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const CopyButton: FC<CopyButtonProps> = ({ children, copy, onClick }) => {
  if(copy){
    return <Space.Compact block>
      {children}
      <Tooltip title="点击复制">
        <Button icon={<CopyOutlined />} onClick={onClick} />
      </Tooltip>
  </Space.Compact>
  }
  return <>{children}</>;
};

export default CopyButton;
