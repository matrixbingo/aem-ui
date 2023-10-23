/* eslint-disable import/order */
import React, { FC, ReactNode } from 'react';
import './label.less';
import Label from './label';
import { Alert, AlertProps, Space, SpaceProps } from 'antd';

export interface LabelDetailProps {
  title: string | ReactNode;
  detail: string | ReactNode;
  type?: 'success' | 'info' | 'warning' | 'error';
  level?: number;
  spaceProps?: SpaceProps;
  alertProps?: AlertProps;
}

const color = (type) => {
  if(type === 'success'){
    return '#52c41a';
  } else if(type === 'info'){
    return '#1890ff';
  } else if(type === 'warning'){
    return '#faad14';
  } else if(type === 'error'){
    return '#ff4d4f';
  }
}

const LabelDetail: FC<LabelDetailProps> = ({ title, level, detail, type='info', spaceProps={}, alertProps={} }) => {
  return <Space {...spaceProps}>
    <Label title={title} level={level} />
    <Alert message={<span style={{ color: color(type)}}>{detail}</span>} type={type} showIcon banner style={{ backgroundColor: 'white', padding: '6px 0px 0px 6px' }} {...alertProps}/>
  </Space>;
};

LabelDetail.defaultProps = {
  level: 2
}

export default LabelDetail;
