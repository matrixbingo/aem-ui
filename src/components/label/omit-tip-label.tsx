import { StringUtil } from 'common-toolkits/src/index';
import { Tooltip } from 'antd';
import React, { FC } from 'react';

/**
 * 表格列表等缩略显示
 */
const OmitTipLabel: FC<{ title: string; limit?: number }> = ({
  title,
  limit,
}) => {
  return (
    <Tooltip placement="top" title={title}>
      {StringUtil.truncate(title, limit)}
    </Tooltip>
  );
};

OmitTipLabel.defaultProps = {
  limit: 30,
};

export default OmitTipLabel;
