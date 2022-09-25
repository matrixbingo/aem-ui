import React, { useRef } from 'react';
import './side-helper.less';

type SiteType = 'top' | 'bottom' | 'left' | 'right';

export interface SideHelperProps {
  onClick?: (value: SiteType) => void;
}

const SideHelper: React.FC<SideHelperProps> = ({ onClick: onClickInput }) => {

  const siteRef = useRef<SiteType>('left');

  const onClick = (site: SiteType) => {
    siteRef.current = site;
    onClickInput(site);
  }

  return <div className="_th-container">
    <div className="_th-click-hover" onClick={() => onClick(siteRef.current)}>默认</div>
    <div className="_th-item _item-x2" onClick={() => onClick('top')}>上</div>
    <div className="_th-item _item-x-2" onClick={() => onClick('bottom')}>下</div>
    <div className="_th-item _item-xx2" onClick={() => onClick('left')}>左</div>
    <div className="_th-item _item-xx-2" onClick={() => onClick('right')}>右</div>
  </div>
};

export default SideHelper;
