import React from 'react';
import AceEditor from 'react-ace';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Button, Tooltip } from 'antd';
import './CodeEditor.less';
import 'brace/mode/sql';
import 'brace/mode/java';
import 'brace/mode/json';
import 'brace/theme/monokai';
import 'brace/ext/language_tools';

import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-monokai';
import { isEmpty, isString } from 'lodash';
import { CopyOutlined } from '@ant-design/icons';

interface CustomFormProps {
  value: string;
  mode: string;
  theme: string;
  style: object;
  etOptions: object;
  contStyle: object;
  onChangeCallback: (e: any) => void;
}

type Props = CustomFormProps;

interface State {
  value: string;
}

class CodeEditor extends React.Component<Props, State> {
  static defaultProps = {
    valueLink: '',
    value: '',
    mode: 'java',
    theme: 'monokai',
    contStyle: { height: '1000px', width: '100%' },
    style: { width: '100%', height: '300px' },
    etOptions: {
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      enableSnippets: false,
      showLineNumbers: true,
      tabSize: 2,
    },
    onChangeCallback() {
    },
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { value } = this.state;
    if (value !== nextProps?.value) {
      this.setState({ value: nextProps?.value });
    }
  }

  onChange = (e) => {
    this.props.onChangeCallback(e);
  };

  creacteValue = (mode, value) => {
    if (mode === 'json') {
      return (isString(value) && !isEmpty(value) ? JSON.stringify(JSON.parse(value), null, 2) : JSON.stringify(value, null, 2));
    }
    return value;
  };

  render() {
    const { mode, theme, style, etOptions, contStyle } = this.props;
    const { value } = this.state;
    const vs = this.creacteValue(mode, value);
    if (isEmpty(vs) || vs === '""') {
      return (
        <AceEditor
          className="aceEditorstyle"
          mode={mode}
          theme={theme}
          style={style}
          value=""
          setOptions={etOptions}
          editorProps={{ $blockScrolling: true }}
        />
      );
    }
    return (
      <div className="codeEditor" style={contStyle}>
        <Tooltip placement="top" title="点击复制">
          <CopyToClipboard className="copyToClipboard" text={vs}>
            <Button type="primary" size="large" icon={<CopyOutlined />} />
          </CopyToClipboard>
        </Tooltip>
        <AceEditor
          className="aceEditorstyle"
          mode={mode}
          theme={theme}
          name="aceEditor"
          style={style}
          fontSize={12}
          showPrintMargin
          showGutter
          highlightActiveLine
          onChange={this.onChange}
          value={vs}
          setOptions={etOptions}
        />
      </div>
    );
  }
}

export default CodeEditor;
