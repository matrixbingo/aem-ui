/* eslint-disable import/order */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, PropsWithChildren } from 'react';
import { Button, Col, ColProps, Row, Steps } from 'antd';
import './common-steps.css';

export interface CommonStepsProps {
  step: number;
  steps: {title: string}[];
  onSubmit: () => void;
  onCancel: () => void;
  goStep: (step: number) => void;
  loading?: boolean;
  colProps?: ColProps;
}

const { Step } = Steps;

const CommonSteps: FC<PropsWithChildren<CommonStepsProps>> = ({ step, steps, onSubmit, onCancel, goStep, loading, colProps = { span: 20, offset: 2 }, children }) => {
  return (
    <>
      <Row style={{ marginBottom: 50 }}>
        <Col span={12} offset={6}>
          <Steps current={step}>
            {steps.map((item, index) => (
              <Step key={String(index)} title={item.title} />
            ))}
          </Steps>
        </Col>
      </Row>
      <Row className="steps-content">
        <Col {...colProps}>
          {children as any}
        </Col>
      </Row>
      <Row>
        <Col {...colProps} style={{ textAlign: 'end' }}>
          <Button onClick={onCancel} loading={false}>
            取消
          </Button>
          {step > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => goStep(-1)}>
              上一步
            </Button>
          )}
          {step < steps.length - 1 && (
            <Button style={{ marginLeft: 8 }} type="primary" onClick={() => goStep(1)}>
              下一步
            </Button>
          )}
          { step === steps.length - 1 && (
            <Button type="primary" style={{ marginLeft: 8 }} loading={loading} onClick={onSubmit}>
              确定
            </Button>
          )}
        </Col>
      </Row>
    </>
  );
};

export default CommonSteps;
