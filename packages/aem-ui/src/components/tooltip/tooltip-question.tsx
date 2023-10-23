import React from 'react';
import { Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

type TooltipProps = React.ComponentProps<typeof Tooltip>;

export type TooltipQuestionPosition = 'left' | 'right';

export interface TooltipQuestionProps extends Omit<TooltipProps, 'text' | 'position'>{
  text?: any;
  position?: string;
}

const TooltipQuestion: React.FC<TooltipQuestionProps> = (props: TooltipQuestionProps) => {
  const { text, position, ...rest } = props;
  if (position === 'left') {
    return (
      <Tooltip {...rest as TooltipProps}>
        <span><QuestionCircleOutlined />{text}</span>
      </Tooltip>
    );
  }
  return (
    <Tooltip {...rest as TooltipProps}>
      <span>{text}<QuestionCircleOutlined /></span>
    </Tooltip>
  );
};

TooltipQuestion.defaultProps = {
  position: 'right',
};

export default TooltipQuestion;
