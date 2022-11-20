import React from 'react';
import { ButtonConfirm } from 'aem-ui';

const isChecked = (status) => String(status) === 'enable';

const checkedChildren = { checkedChildren: '启用', unCheckedChildren: '暂停' };

const Demo: React.FC = () => {

  const onConfirm = (id) => {
    window.console.log('onConfirm ---->', id);
  };

  return (
    <ButtonConfirm title="是否确认删除?" buttonProps={{ type: 'link', children: '删除' }} onConfirm={() => onConfirm(1)} />
  );
};

export default Demo;
