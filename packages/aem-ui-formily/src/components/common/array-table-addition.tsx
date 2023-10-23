import React, { PropsWithChildren } from 'react';
import { Space } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import { ArrayTable } from '@formily/antd';
import { observer } from '@formily/react';

export interface ArrayTableAdditionProps {
  display?: any;
}

const ArrayTableAddition: React.FC<PropsWithChildren<ArrayTableAdditionProps>> = observer(({ display = 'block' }) => {
  return (
    <Space className="addition-button" size={0}>
      <PlusCircleFilled />
      <ArrayTable.Addition style={{ display }} type="link" />
    </Space>
  );
});

export default ArrayTableAddition;
