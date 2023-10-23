import React, { useState } from 'react';
import { CommonSteps, View } from 'aem-ui';
import { Button, Typography } from 'antd';
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

  const customerButton = (buttons: any[], step, loading) => {
    window.console.log('---------------->', step, buttons);
    if(step === 2){
      buttons.splice(2, 0, <Button>TEST</Button>);
    }
    return buttons;
  }

  return (
    <>
      <CommonSteps step={step} steps={steps} onSubmit={onSubmit} onCancel={onCancel} goStep={goStep} loading={false} customerButton={customerButton}>
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
