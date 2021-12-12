/* eslint-disable import/order */
import React, { FC } from 'react';

const DescriptionsLabel: FC<{ title: string }> = ({ title }) => {
  return (
    <div className="ant-descriptions-header">
      <div className="ant-descriptions-title">
        {title}
      </div>
    </div>
  );
};

export default DescriptionsLabel;
