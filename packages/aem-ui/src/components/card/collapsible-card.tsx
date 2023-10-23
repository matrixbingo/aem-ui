import React, { FC } from 'react';
import ProCard, { ProCardProps } from '@ant-design/pro-card';
import './collapsible-card.less';
import { isEmpty } from 'lodash';
import { Space } from 'antd';
import SmallDescription from './small-description';

export interface CollapsibleCardProps extends Omit<ProCardProps, 'collapsible' | 'headerBordered' | 'defaultCollapsed' | 'style' | 'desc'> {
  collapsible?: boolean;
  headerBordered?: boolean;
  defaultCollapsed?: boolean;
  style?: React.CSSProperties;
  desc? : React.ReactNode;
}

/**
 * 使用默认配置
 * @param param0
 * @returns
 */
const CollapsibleCard: FC<CollapsibleCardProps> = ({ children, desc, ...rest }) => {
  if (isEmpty(desc)) {
    return <ProCard {...rest} className="collapsible-card">{children}</ProCard>;
  }
  const { title, ...props } = rest;
  return <ProCard title={<Space><span>{title}</span><SmallDescription title={desc} /></Space>} {...props} className="collapsible-card">{children}</ProCard>;
};

CollapsibleCard.defaultProps = {
  collapsible: true,
  headerBordered: true,
  defaultCollapsed: false,
};

export default CollapsibleCard;
