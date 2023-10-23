/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable multiline-ternary */
import React from 'react';
import { useEffect, useState } from 'react';
import { FormOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { isEmpty } from 'lodash';
import { OmitTipLabel } from 'aem-ui';

export const EditableTabTitle = ({ text, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(text);

  useEffect(() => {
    if (text !== value) {
      setValue(text);
    }
  }, [text]);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onChange(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Space>
      {isEditing || isEmpty(value) ? (
        <Space direction="vertical" size={1}>
          <Input style={{ width: 150 }} value={value} onChange={handleChange} onBlur={handleBlur} onPressEnter={handleBlur} status={isEmpty(value) ? 'error' : ''} />
          <div className="ant-formily-item-error-help ant-formily-item-help ant-formily-item-help-enter ant-formily-item-help-enter-active" style={{ display: isEmpty(value) ? 'block' : 'none' }}>该字段是必填字段</div>
        </Space>
      ) : (
        <OmitTipLabel title={text} limit={30} />
      )}
      <FormOutlined
        onClick={handleDoubleClick}
        style={{ marginLeft: 10, color: '#000', marginRight: 0, padding: 0 }}
      />
    </Space>
  );
};
