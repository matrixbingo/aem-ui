import { Button, Popover } from 'antd';
import React, { FC } from 'react';
import CodeEditor from '../code-editor';

interface State {
  value: string;
  title: string;
}

const PopoverCode: FC<State> = ({ value, title }) => {
  return (
    <Popover
      content={
        <CodeEditor
          value={value}
          style={{ width: 600, height: 300 }}
          contStyle={{ width: 600, height: 300 }}
        />
      }
      title={title}
      trigger="hover"
    >
      <Button>查看</Button>
    </Popover>
  );
};

export default PopoverCode;
