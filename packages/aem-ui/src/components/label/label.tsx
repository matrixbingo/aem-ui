/* eslint-disable import/order */
import React, { FC, ReactNode } from 'react';
import './label.less';

export type LabelProps = { title: string | ReactNode; level?: number };

const Label: FC<LabelProps> = ({ title, level }) => {
  return React.createElement(`h${level}`, { className: 'aem-ui-label' }, title);
};

Label.defaultProps = {
  level: 2
}

export default Label;
