/* eslint-disable import/order */
import { Divider } from 'antd';
import React from 'react';

const DescriptionsDividerLabel: React.FC<{ title: string }> = ({ title }) => {
  return (
    <>
      <div className="ant-descriptions-header">
        <div className="ant-descriptions-title">
          {title}
        </div>
      </div>
      <Divider />
    </>
  );
};

export default DescriptionsDividerLabel;
