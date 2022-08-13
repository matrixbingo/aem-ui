import React, { useState } from 'react';
import { CommonSteps, View } from 'aem-ui';
import { Typography } from 'antd';
const { Title } = Typography;

const steps = [
  {
    title: '第一步',
  },
  {
    title: '第二步',
  },
  {
    title: '第三步',
  },
];

const Demo: React.FC = () => {
  const [step, setStep] = useState(0);

  const onSubmit = () => {
    window.console.log('onSubmit ------------>');
  }

  const onCancel = () => {
    window.console.log('onCancel ------------>');
  }

  const goStep = async (currentStep: number) => {
    setStep(step + currentStep);
  };

  return (
    <>
      <CommonSteps step={step} steps={steps} onSubmit={onSubmit} onCancel={onCancel} goStep={goStep} loading={false}>
        <View visible={step === 0}>
          step 1
        </View>
        <View visible={step === 1}>
          step 2
        </View>
      </CommonSteps>
    </>
  );
};

export default Demo;
