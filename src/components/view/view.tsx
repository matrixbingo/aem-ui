import React, { FC, PropsWithChildren } from 'react';
import { extend } from 'lodash';
import { Space } from 'antd';

export interface ViewProps {
    visible?: boolean;
    destroy?: boolean;
    space?: boolean;
    [K: string]: any;
  }

const View: FC<PropsWithChildren<ViewProps>> = ({ children, visible, space, destroy, ...rest }) => {
  if (destroy) {
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
};

export default View;
