import React from 'react';
import { Tooltip, TooltipProps } from 'antd';
import { StringUtil } from 'common-toolkits';
import { isArray, isEmpty, isString, split } from 'lodash';

export interface OmitTipLabelProps extends Omit<TooltipProps, 'title' | 'limit' | 'width' | 'separator'> {
  title: string | string[];
  limit?: number;
  width?: number;
  separator?: string;
}

/**
 * 表格列表等缩略显示
 */
const OmitTipLabel: React.FC<OmitTipLabelProps> = ({ title = '', limit = 10, separator = undefined, width= 600, ...rest }) => {
  if (isString(title) && title?.length < limit) {
    return <>{title}</>;
  }
  let tipTitle = '' as any;
  let content = title as string;
  if(isArray(title)){
    tipTitle = (title as string[]).map((i) => <div>{i}</div>);
    content = (title as string[]).join(' ')
  } else{
    tipTitle = title as string;
    if(!isEmpty(separator)){
      tipTitle = split(title, separator).map((i) => <div>{i}</div>);
    }
  }
  return (
    <Tooltip placement="top" title={tipTitle} overlayStyle={{ maxWidth: width }} {...rest}>
      {StringUtil.truncate(content, limit)}
    </Tooltip>
  );
};

OmitTipLabel.defaultProps = {
  title: '',
  limit: 10,
};

export default OmitTipLabel;
