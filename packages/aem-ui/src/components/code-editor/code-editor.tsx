import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Button, Tooltip } from 'antd';
import { isEmpty } from 'lodash';
import { CopyOutlined } from '@ant-design/icons';
import { FormatUtil } from 'common-toolkits';
import ace from 'ace-builds/src-noconflict/ace';
import AceEditor from "react-ace";
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-json';
import "ace-builds/src-noconflict/mode-java";
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';

import jsonWorkerUrl from "file-loader!ace-builds/src-noconflict/worker-json";
ace.config.setModuleUrl("ace/mode/json_worker", jsonWorkerUrl);

import cssWorkerUrl from "file-loader!ace-builds/src-noconflict/worker-css";
ace.config.setModuleUrl("ace/mode/css_worker", cssWorkerUrl);

import './code-editor.less';

export interface CodeEditorProps {
  value: string;
  mode: string;
  theme: string;
  style: object;
  etOptions: object;
  contStyle: object;
  onChange: (e: any) => void;
}

interface State {
  value: string;
}

class CodeEditor extends React.Component<CodeEditorProps, State> {
  static defaultProps = {
    value: '',
    mode: 'json',
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
    onChange() {},
  };

  constructor(props: CodeEditorProps) {
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
    this.props.onChange(e);
  };

  creacteValue = (mode, value) => {
    if (mode === 'json') {
      return FormatUtil.json(value);
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
          <div className="copyToClipboard">
            <CopyToClipboard text={vs}>
              <Button type="primary" size="large" icon={<CopyOutlined />} />
            </CopyToClipboard>
          </div>
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
