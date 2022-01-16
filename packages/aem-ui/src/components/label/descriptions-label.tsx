/* eslint-disable import/order */
import React, { FC } from 'react';

export type DescriptionsLabelProps = { title: string };

const DescriptionsLabel: FC<DescriptionsLabelProps> = ({ title }) => {
  return (
    <div className="ant-descriptions-header">
      <div className="ant-descriptions-title">
        {title}
      </div>
    </div>
  );
};

export default DescriptionsLabel;
