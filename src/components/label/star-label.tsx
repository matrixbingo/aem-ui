/* eslint-disable import/order */
import React, { FC } from 'react';

const StarLabel: FC<{ title: string }> = ({ title }) => {
  return (
    <div className="ant-form-item-label">
      <label className="ant-form-item-required" title={title}>
        {title}
      </label>
    </div>
  );
};

export default StarLabel;
