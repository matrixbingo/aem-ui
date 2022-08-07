import React, { FC } from 'react';
import { isObject, isString } from 'lodash';
import { FormatUtil, ObjectType } from 'common-toolkits';
import ace from 'ace-builds/src-noconflict/ace';
import AceEditor, { IAceEditorProps } from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-json';
import "ace-builds/src-noconflict/mode-java";
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import { cdn } from '../config/config';

// import jsonWorkerUrl from "file-loader!ace-builds/src-noconflict/worker-json";
ace.config.setModuleUrl("ace/mode/json_worker", cdn.worker_json);
// import cssWorkerUrl from "file-loader!ace-builds/src-noconflict/worker-css";
ace.config.setModuleUrl("ace/mode/css_worker", cdn.worker_css);
ace.config.setModuleUrl("ace/mode/javascript_worker", cdn.worker_javascript);

export interface CodeEditorProps extends Omit<IAceEditorProps, 'value' | 'onChange' | 'mode' | 'toValue' | 'contStyle'> {
  value?: string | ObjectType;
  onChange?: (value: string, event?: any) => void;
  /** For available modes see https://github.com/thlorenz/brace/tree/master/mode */
  mode?: string;
  toValue?: (value: string | ObjectType, mode: string) => string;
  /** For available themes see https://github.com/thlorenz/brace/tree/master/theme */
  theme?: string;
  height?: string;
  width?: string;
};

export const defaultToValue = (value: string | ObjectType, mode: string):string => {
  if(isObject(value)){
    if(mode === 'json'){
      return FormatUtil.json(value);
    }
  } else if(isString(value)){
    return value as string;
  }
  return String(value);
};

const CodeEditor: FC<CodeEditorProps> = ({value:inputValue = '', toValue=defaultToValue, mode='json', ...rest}) => {

  return (<AceEditor
    mode={mode}
    className="aceEditorstyle"
    name="aceEditor"
    value={toValue(inputValue, mode)}
    {...rest}
  />)
};

CodeEditor.defaultProps = {
  theme: 'monokai',
  fontSize: 12,
  showPrintMargin: true,
  showGutter: true,
  highlightActiveLine: true,
  height: '100%',
  width: '100%',
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
  enableSnippets: false,
  setOptions: {
    showLineNumbers: true,
    tabSize: 2,
  },

}

export default CodeEditor;
