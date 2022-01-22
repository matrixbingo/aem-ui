import { Button, Popover } from 'antd';
import React, { FC } from 'react';
import CodeEditor, { CodeEditorProps } from '../code-editor';

export interface PopoverCodeProps {
  value: string;
  title: string;
  codeEditorProps?: Partial<CodeEditorProps>;
}

const PopoverCode: FC<PopoverCodeProps> = ({ value, title , codeEditorProps }) => {
  return (
    <Popover content={<CodeEditor value={value} {...codeEditorProps} />}
      title={title}
      trigger="hover"
    >
      <Button>查看</Button>
    </Popover>
  );
};

PopoverCode.defaultProps = {
  codeEditorProps: {
    style: { width: 600, height: 300 },
  }
};

export default PopoverCode;
