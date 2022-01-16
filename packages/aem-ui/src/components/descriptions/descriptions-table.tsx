import { Descriptions, DescriptionsProps } from 'antd';
import { DescriptionsItemProps } from 'antd/lib/descriptions/Item';
import { isArray, isEmpty } from 'lodash';
import React, { FC } from 'react';

export interface DescriptionsTableProps {
  props?: DescriptionsProps;
  list: { label: string; content: any; item?: DescriptionsItemProps }[];
}

/**
 *
 * @param param0
 * @returns
 */
const DescriptionsTable: FC<DescriptionsTableProps> = ({ props, list }) => {
  if (!isArray(list) || isEmpty(list)) {
    return null;
  }
  return (
    <Descriptions {...props}>
      {list.map((v, i) => {
        return (
          <Descriptions.Item key={String(i)} label={v.label} {...v?.item}>
            {v.content}
          </Descriptions.Item>
        );
      })}
    </Descriptions>
  );
};

export default DescriptionsTable;
