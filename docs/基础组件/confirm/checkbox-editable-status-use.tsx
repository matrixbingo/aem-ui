import React, { useState } from 'react';
import { message } from 'antd';
import { CheckboxEditableStatus } from 'aem-ui';
import { delay } from 'lodash';

export interface CustomerGroupEnableProps {
  status: string;
  disabled: boolean;
}

const isChecked = (status) => String(status) === 'enable';

const checkedChildren = { checkedChildren: '启用', unCheckedChildren: '暂停' };

const Demo: React.FC<CustomerGroupEnableProps> = ({ status = 'enable', disabled = false }) => {
  const stateInit = isChecked(status);
  const [state, setState] = useState(stateInit);
  const [loading, setLoading] = useState(false);

  const title = (
    <>
      确定将状态修改为<span style={{ padding: '0 2px', color: '#f5222d' }}>{state ? '停用' : '启用'}</span>吗？
    </>
  );


  const onConfirm = () => {
    setLoading(true);
    delay(() => {
      setState(!state);
      setLoading(false);
    }, 2000);
    window.console.log('onConfirm ---->');
  };

  return (
    <CheckboxEditableStatus title={title} onConfirm={onConfirm} checked={stateInit} checkboxProps={{ ...checkedChildren, loading, disabled }} popconfirmProps={{ disabled }} />
  );
};

export default Demo;
