import React, { useState } from 'react';
import { Button, Input, Row } from 'antd';
import 'antd/dist/antd.css';
import { CollapsibleCard } from 'aem-ui';

const Demo: React.FC = () => {
  return <CollapsibleCard title="cart title">表单内容</CollapsibleCard>;
};

export default Demo;
