import { Card, CardProps, Select, SelectProps } from 'antd';
import { ObjectType } from 'common-toolkits';
import React, { FC, PropsWithChildren, useState } from 'react';
import CodeEditor, { CodeEditorProps, defaultToValue } from './code-editor';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Button, Tooltip } from 'antd';
import { CopyOutlined } from '@ant-design/icons';


export interface CodeEditorCardProps extends Omit<CodeEditorProps, 'defaultValue' | 'onChange' | 'toValue'> {
  defaultValue?: string | ObjectType;
  onChange?: (value: string, event?: any) => void;
  contStyle?: React.CSSProperties;
  cardProps?: CardProps;
  selectProps?: SelectProps;
  toValue?: (value: string | ObjectType, mode: string) => string;
};

const defaultOptions = [{label:'json', value:'json'}, {label:'javascript', value:'javascript'}]

const CodeEditorCard: FC<PropsWithChildren<CodeEditorCardProps>> = ({defaultValue='', onChange:inputOnChange, toValue=defaultToValue, contStyle, cardProps, selectProps, ...codeEditorProps}) => {
  const { mode: inputMode, ...restCodeEditorProps } = codeEditorProps;
  const [mode, setMode] = useState(inputMode ?? 'json');
  const [value, setValue] = useState<String>(toValue(restCodeEditorProps.value ?? defaultValue, mode));

  const onChange = (value: string, event?: any) => {
    inputOnChange?.(value, event);
    setValue(value);
  };

  return <Card title={<Select {...selectProps} onSelect={setMode} defaultValue={mode} style={{ width: 200 }} />} extra={<Tooltip placement="top" title="点击复制">
      <CopyToClipboard text={value}>
        <Button icon={<CopyOutlined />} type='dashed'/>
      </CopyToClipboard>
    </Tooltip>}>
      <div style={contStyle}>
        <CodeEditor {...restCodeEditorProps} mode={mode} toValue={toValue} value={value} onChange={onChange} />
      </div>
  </Card>
};

CodeEditorCard.defaultProps = {
  onChange: (value: string, event?: any) => {},
  contStyle: { width: '100%', height: 300  },
  selectProps: { options: defaultOptions},
};

export default CodeEditorCard;
