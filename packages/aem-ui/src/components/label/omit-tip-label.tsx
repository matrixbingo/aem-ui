import React, { FC } from 'react';
import { StringUtil } from 'common-toolkits';
import { Tooltip, TooltipProps } from 'antd';

export interface OmitTipLabelProps extends Omit<TooltipProps, 'title' | 'limit'> {
  title: string; 
  limit?: number
}

/**
 * 表格列表等缩略显示
 */
const OmitTipLabel: FC<OmitTipLabelProps> = ({ title, limit, ...rest }) => {
  return (
    <Tooltip placement="top" title={title} {...rest}>
      {StringUtil.truncate(title, limit)}
    </Tooltip>
  );
};

OmitTipLabel.defaultProps = {
  limit: 30,
};

export default OmitTipLabel;
