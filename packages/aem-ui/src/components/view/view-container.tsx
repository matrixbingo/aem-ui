import React, { PropsWithChildren } from 'react';

export type ViewContainerProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

/**
 * 默认加滚动
 * @param param
 * @returns
 */
const ViewContainer: React.FC<PropsWithChildren<ViewContainerProps>> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

ViewContainer.defaultProps = {
  style: { minWidth: 1300 },
};

export default ViewContainer;
