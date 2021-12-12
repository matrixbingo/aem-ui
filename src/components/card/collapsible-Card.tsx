/* eslint-disable import/order */
import ProCard from '@ant-design/pro-card';
import React, { FC } from 'react';

export interface CollapsibleCardProps {
  [K: string]: any;
}

const CollapsibleCard: FC<CollapsibleCardProps> = ({ children, ...rest }) => {
  return (
    <ProCard {...rest}>
      {children}
    </ProCard>
  );
};

CollapsibleCard.defaultProps = {
  collapsible: true,
  headerBordered: true,
  defaultCollapsed: false,
  style: { marginBottom: 16 },
};

export default CollapsibleCard;
