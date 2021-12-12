import React, { FC } from 'react';
import { isEmpty, isString } from 'lodash';
import { Input } from 'antd';

/**
 * Form
 */
const TextAreaJson: FC<{value?: any; onChange?: any}> = ({ value, onChange, ...rest }) => {
  try {
    if (!isEmpty(value)) {
      value = (isString(value) && !isEmpty(value) ? JSON.stringify(JSON.parse(value), null, 2) : JSON.stringify(value, null, 2));
    }
  } catch (e) {
    window.console.error('非JSON数据异常: ', e, value);
  }

  const onChangeCallback = ({ target: { value: v } }) => {
    onChange(v);
  };

  return <Input.TextArea autoSize={{ minRows: 3, maxRows: 6 }} value={value} onChange={onChangeCallback} {...rest} />;
};

export default TextAreaJson;
