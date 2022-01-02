import React, { FC } from 'react';

export interface ViewContainerProps {
  [K: string]: any;
}

/**
 * 默认加滚动
 * @param param
 * @returns
 */
const ViewContainer: FC<ViewContainerProps> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

ViewContainer.defaultProps = {
  style: { minWidth: 1300 },
};

export default ViewContainer;
