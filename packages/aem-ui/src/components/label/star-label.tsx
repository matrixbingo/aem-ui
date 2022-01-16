/* eslint-disable import/order */
import React, { FC } from 'react';

export type StarLabelProps = { title: string };

const StarLabel: FC<StarLabelProps> = ({ title }) => {
  return (
    <div className="ant-form-item-label">
      <label className="ant-form-item-required" title={title}>
        {title}
      </label>
    </div>
  );
};

export default StarLabel;
