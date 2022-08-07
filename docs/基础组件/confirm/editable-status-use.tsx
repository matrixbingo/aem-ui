import React, { FC, useCallback } from 'react';
import { message } from 'antd';
import { EditableStatus } from 'aem-ui';

export interface CustomerGroupEnableProps {
  status: string;
  disabled: boolean;
}

const isChecked = (status) => String(status) === 'enable';

const checkedChildren = { checkedChildren: '启用', unCheckedChildren: '暂停' };

const SubscribeStatusEnable: FC<CustomerGroupEnableProps> = ({ status = 'enable', disabled = false }) => {
  const state = isChecked(status);

  const title = (
    <>
      确定将状态修改为<span style={{ padding: '0 2px', color: '#f5222d' }}>{state ? '停用' : '启用'}</span>吗？
    </>
  );


  const onConfirm = () => {
    window.console.log('onConfirm ---->');
  };

  return (
    <EditableStatus title={title} onConfirm={onConfirm} checked={state} switchProps={{ ...checkedChildren, disabled }} popconfirmProps={{ disabled }} />
  );
};

export default SubscribeStatusEnable;
