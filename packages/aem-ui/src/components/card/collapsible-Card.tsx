import React, { FC } from 'react';
import ProCard, { ProCardProps } from '@ant-design/pro-card';

export interface CollapsibleCardProps extends Omit<ProCardProps, 'collapsible' | 'headerBordered' | 'defaultCollapsed' | 'style'> {
  collapsible?: boolean;
  headerBordered?: boolean;
  defaultCollapsed?: boolean;
  style?: React.CSSProperties;
};

/**
 * 使用默认配置
 * @param param0
 * @returns
 */
const CollapsibleCard: FC<CollapsibleCardProps> = ({ children, ...rest }) => {
  return <ProCard {...rest}>{children}</ProCard>;
};

CollapsibleCard.defaultProps = {
  collapsible: true,
  headerBordered: true,
  defaultCollapsed: false,
  style: { marginBottom: 16 },
};

export default CollapsibleCard;
