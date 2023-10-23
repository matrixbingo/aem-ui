/* eslint-disable import/order */
import React, { FC, ReactNode } from 'react';
import './label.less';
import Label from './label';
import { Alert, AlertProps, Space, SpaceProps, Typography } from 'antd';
import { TitleProps } from 'antd/lib/typography/Title';
const { Title } = Typography;

export interface TitleDetailProps {
  title: string | ReactNode;
  detail: string | ReactNode;
  type?: 'success' | 'info' | 'warning' | 'error';
  level?: 1 | 2 | 3 | 4 | 5;
  spaceProps?: SpaceProps;
  alertProps?: AlertProps;
  titleProps?: TitleProps;
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

const TitleDetail: FC<TitleDetailProps> = ({ title, level, detail, type='info', spaceProps={}, alertProps={}, titleProps={} }) => {
  return <Space {...spaceProps}>
    <Title level={level} {...titleProps}>{title}</Title>
    <Alert message={<span style={{ color: color(type)}}>{detail}</span>} type={type} showIcon banner style={{ backgroundColor: 'white', padding: '0px 0px 0px 6px', marginBottom: 8 }} {...alertProps}/>
  </Space>;
};

TitleDetail.defaultProps = {
  level: 2
}

export default TitleDetail;
