import { Divider, DividerProps } from 'antd';
import React, { CSSProperties, FC, PropsWithChildren } from 'react';
import './divider-center.css';

export interface DividerCenterProps extends Omit<DividerProps, 'title'> {
  title: string;
  titleStyle?:  CSSProperties;
}

const DividerCenter: FC<PropsWithChildren<DividerCenterProps>> = ({ title, titleStyle, ...rest }) => {
  return (
    <Divider className="divider-center" orientation="center" style={{ margin: '32px 0 14px', color: '#777' }} {...rest}>
      <span style={titleStyle}>{ title }</span>
    </Divider>
  );
};

DividerCenter.defaultProps = {
  titleStyle: { fontSize: 14 }
}

export default DividerCenter;
