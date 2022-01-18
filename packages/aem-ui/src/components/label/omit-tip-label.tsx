import { StringUtil } from '@/utils';
import { Tooltip } from 'antd';
import React, { FC } from 'react';

/**
 * 表格列表等缩略显示
 */
const OmitTipLabel: FC<{ title: string; limit: number }> = ({ title = '', limit = 10 }) => {
  if (title?.length < limit) {
    return <>{title}</>;
  }
  return (
    <Tooltip placement="top" title={title}>
      {StringUtil.omit(title, limit)}
    </Tooltip>
  );
};

OmitTipLabel.defaultProps = {
  title: '',
  limit: 10,
};

export default OmitTipLabel;
