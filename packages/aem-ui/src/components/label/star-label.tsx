/* eslint-disable import/order */
import React from 'react';

export type StarLabelProps = { title: string };

const StarLabel: React.FC<{ title: string; star?: boolean }> = ({ title, star }) => {
  return (
    <div className="ant-form-item-label">
      <label className={star ? 'ant-form-item-required' : ''} title={title}>
        {title}
      </label>
    </div>
  );
};

StarLabel.defaultProps = {
  star: true,
};

export default StarLabel;

