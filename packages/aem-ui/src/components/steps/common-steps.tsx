/* eslint-disable import/order */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, PropsWithChildren } from 'react';
import { Button, Col, ColProps, Row, StepProps, Steps, StepsProps } from 'antd';
import './common-steps.css';

export interface CommonStepsProps {
  step: number;
  steps: StepProps[];
  onSubmit?: () => void;
  onCancel: () => void;
  goStep: (step: number) => void;
  loading?: boolean;
  colProps?: ColProps;
  customerButton?: (any, step, loading) => any;
  stepsProps?:  Omit<StepsProps, 'current'>
}

const createButton = (steps, step, goStep, loading, onCancel, onSubmit, customerButton = (any, step, _loading) => any) => {
  const cancelButton = <Button key="cancel-button" onClick={onCancel} loading={false}>取消</Button>;
  const prevButton = <Button key="prev-button" style={{ marginLeft: 8 }} onClick={() => goStep(-1)}>上一步</Button>;
  const nextButton = <Button key="next-button" style={{ marginLeft: 8 }} type="primary" onClick={() => goStep(1)}>下一步</Button>;
  const submitButton = <Button key="submit-button" type="primary" style={{ marginLeft: 8 }} loading={loading} onClick={onSubmit}>确定</Button>;
  const buttons = [cancelButton] as any;

  if(step > 0){
    buttons.push(prevButton);
  }
  if(step < steps.length - 1){
    buttons.push(nextButton);
  }
  if(step === steps.length - 1 && onSubmit){
    buttons.push(submitButton);
  }
  return customerButton(buttons, step, loading);
};

const CommonSteps: FC<PropsWithChildren<CommonStepsProps>> = ({ step, steps, onSubmit, onCancel, goStep, loading, colProps = { span: 20, offset: 2 }, customerButton = (any, step, _loading) => any, children, stepsProps = {} }) => {
  return (
    <>
      <Row key="steps-row" style={{ marginBottom: 50 }}>
        <Col span={12} offset={6}>
          <Steps current={step} items={steps} {...stepsProps} />
        </Col>
      </Row>
      <Row key="children-row" className="steps-content">
        <Col {...colProps}>
          {children as any}
        </Col>
      </Row>
      <Row key="button-row">
        <Col {...colProps} style={{ textAlign: 'end' }}>
          {createButton(steps, step, goStep, loading, onCancel, onSubmit, customerButton)}
        </Col>
      </Row>
    </>
  );
};

CommonSteps.defaultProps = {
  colProps: { span: 24, offset: 0 }
}

export default CommonSteps;
