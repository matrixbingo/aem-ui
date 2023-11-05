import React, { PropsWithChildren } from 'react';

export interface SmallDescriptionProps {
  title: React.ReactNode;
}

const SmallDescription: React.FC<PropsWithChildren<SmallDescriptionProps>> = ({ title }) => {
  return <span style={{ fontFamily: 'PingFangSC', fontSize: 16, color: '#909090' }}>({title})</span>;
};

export default SmallDescription;
