import React, { PropsWithChildren } from 'react';
import { Space } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import { ArrayCards } from '@formily/antd';
import { observer } from '@formily/react';

export interface ArrayCardsAdditionProps {
  display?: any;
}

const ArrayCardsAddition: React.FC<PropsWithChildren<ArrayCardsAdditionProps>> = observer(({ display = 'block' }) => {
  return (
    <Space className="addition-button" size={0}>
      <PlusCircleFilled />
      <ArrayCards.Addition style={{ display }} type="link" />
    </Space>
  );
});

export default ArrayCardsAddition;
