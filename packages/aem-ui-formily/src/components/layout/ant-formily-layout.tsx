/* eslint-disable react/require-default-props */
import React, { FC, PropsWithChildren } from 'react';

interface rowType { asterisk?: boolean; label: React.ReactNode; content: React.ReactNode }

export interface AntFormilyLayoutProps{
  data?: rowType[];
  labelCol?: number;
  wrapperCol?: number;
}

const AntFormilyLayout: FC<PropsWithChildren<AntFormilyLayoutProps>> = ({ data = [], labelCol = 3, wrapperCol = 21 }) => {
  const labelColClass = `main-ant-formily-item-label main-ant-formily-item-item-col-${labelCol}`;
  const wrapperColClass = `main-ant-formily-item-control main-ant-formily-item-item-col-${wrapperCol}`;
  return (
    <div className="main-ant-formily-layout">
      {data?.map((i) => {
        return (
          <div key={`antFormilyLayout${i}`} className="main-ant-formily-item main-ant-formily-item-layout-horizontal main-ant-formily-item-feedback-layout-loose main-ant-formily-item-label-align-right main-ant-formily-item-control-align-left css-dev-only-do-not-override-t3fzgs">
            <div className={labelColClass}>
              <div className="main-ant-formily-item-label-content">
                <span>
                  {i.asterisk ? <span className="main-ant-formily-item-asterisk">*</span> : null}
                  <label>{i.label}</label>
                </span>
              </div>
              { i.label ? <span className="main-ant-formily-item-colon">:</span> : null }
            </div>
            <div className={wrapperColClass}>
              <div className="main-ant-formily-item-control-content">
                <div className="main-ant-formily-item-control-content-component">
                  {i.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AntFormilyLayout;
