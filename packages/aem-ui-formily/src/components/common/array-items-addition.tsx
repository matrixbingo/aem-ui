import React, { PropsWithChildren } from 'react';
import { Space } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import { ArrayItems } from '@formily/antd';
import { observer } from '@formily/react';

export interface ArrayItemsAdditionProps {
  display?: any;
}

const ArrayItemsAddition: React.FC<PropsWithChildren<ArrayItemsAdditionProps>> = observer(({ display = 'block' }) => {
  return (
    <Space className="addition-button" size={0}>
      <PlusCircleFilled />
      <ArrayItems.Addition style={{ display }} type="link" />
    </Space>
  );
});

export default ArrayItemsAddition;
