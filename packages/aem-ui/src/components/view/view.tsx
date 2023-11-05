/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, PropsWithChildren } from 'react';
import { extend } from 'lodash';
import { Skeleton, Space } from 'antd';

export interface ViewProps {
  visible?: boolean;
  destroy?: boolean;
  space?: boolean;
  skeleton?: boolean;
  [K: string]: any;
}

const View: FC<PropsWithChildren<ViewProps>> = props => {
  const { children, visible, space, destroy, skeleton, ...rest } = props;

  if (destroy) {
    if (skeleton) {
      return <Skeleton active />;
    }
    return null;
  }

  if (space) {
    return (
      <Space {...rest}>
        <div style={extend({ display: visible ? 'block' : 'none' }, rest?.style)}>
          {children}
        </div>
      </Space>
    );
  }
  return (
    <div style={extend({ display: visible ? 'block' : 'none' }, rest?.style)}>
      {children}
    </div>
  );
};

View.defaultProps = {
  visible: true,
  space: false,
  destroy: false,
  skeleton: false,
};

export default View;
