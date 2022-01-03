/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, PropsWithChildren } from 'react';
import { extend } from 'lodash';
import { Space } from 'antd';

export interface ViewProps {
  visible?: boolean;
  destroy?: boolean;
  space?: boolean;
  [K: string]: any;
}

const View: FC<PropsWithChildren<ViewProps>> = (props) => {
  const { children, visible, space, destroy, ...rest } = props;

  if (destroy) {
    return null;
  }

  if (space) {
    return (<Space {...rest}>
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
