import { Tooltip } from 'antd';
import { StringUtil } from 'common-toolkits';
import React, { FC } from 'react';

export interface OmitTipLabelProps {
  title: string;
  limit: number;
}

/**
 * 表格列表等缩略显示
 */
const OmitTipLabel: FC<OmitTipLabelProps> = ({ title = '', limit = 10 }) => {
  if (title?.length < limit) {
    return <>{title}</>;
  }
  return (
    <Tooltip placement="top" title={title}>
      {StringUtil.truncate(title, limit)}
    </Tooltip>
  );
};

OmitTipLabel.defaultProps = {
  title: '',
  limit: 10,
};

export default OmitTipLabel;
