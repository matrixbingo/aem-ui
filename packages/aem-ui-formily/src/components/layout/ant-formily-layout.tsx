import React, { FC, PropsWithChildren } from 'react';

interface rowType { asterisk?: boolean; label: React.ReactNode; content: React.ReactNode }

export interface AntFormilyLayoutProps{
  data?: rowType[];
  labelCol?: number;
  wrapperCol?: number;
}

const AntFormilyLayout: FC<PropsWithChildren<AntFormilyLayoutProps>> = ({ data = [], labelCol = 3, wrapperCol = 21 }) => {
  const labelColClass = `ant-formily-item-label ant-formily-item-item-col-${labelCol}`;
  const wrapperColClass = `ant-formily-item-control ant-formily-item-item-col-${wrapperCol}`;
  return (
    <div className="ant-formily-layout">
      {data?.map((i) => {
        return (
          <div className="ant-formily-item ant-formily-item-layout-horizontal ant-formily-item-feedback-layout-loose ant-formily-item-label-align-right ant-formily-item-control-align-left">
            <div className={labelColClass}>
              <div className="ant-formily-item-label-content">
                <span>
                  {i.asterisk ? <span className="ant-formily-item-asterisk">*</span> : null}
                  <label>{i.label}</label>
                </span>
              </div>{i.label && <span className="ant-formily-item-colon">:</span>}
            </div>
            <div className={wrapperColClass}>
              <div className="ant-formily-item-control-content">
                <div className="ant-formily-item-control-content-component">
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
