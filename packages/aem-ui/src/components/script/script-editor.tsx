import React, { PropsWithChildren, useState } from 'react';
import { Button, Input, Modal, ModalProps, Tooltip, message } from 'antd';
import { TextAreaProps } from 'antd/lib/input/TextArea';
import CopyToClipboard from 'react-copy-to-clipboard';
import { CopyOutlined } from '@ant-design/icons';
import { isEmpty } from 'lodash';

const { TextArea } = Input;

export interface ScriptEditorProps extends Omit<TextAreaProps, 'modalProps'| 'width' | 'height' | 'required'>{
  width?: number;
  modalProps?: ModalProps;
  required?: boolean;
}

const createButtons = (value, handleOk, handleCancel) => {
  return [
    <Tooltip placement="top" title="点击复制">
      <CopyToClipboard text={value}>
        <Button icon={<CopyOutlined />} type="primary">复制脚本</Button>
      </CopyToClipboard>
    </Tooltip>,
    <Button key="onCancel" onClick={handleCancel}>
      取消
    </Button>,
    <Button key="submit" type="primary" onClick={handleOk}>
      确定
    </Button>,
  ];
};

const ScriptEditor: React.FC<PropsWithChildren<ScriptEditorProps>> = ({ modalProps = {}, width = 800, required, style, ...props }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const close = () => {
    setIsModalOpen(false);
  };

  const handleOk = () => {
    if (required) {
      if (isEmpty(props?.value)) {
        message.error('脚本不能为空！');
      } else {
        close();
      }
    } else {
      close();
    }
  };

  const handleCancel = () => {
    close();
  };
  return (
    <>
      <Modal title="脚本" open={isModalOpen} onOk={handleOk} closable={false} {...modalProps} width={width + 50} footer={createButtons(props?.value, handleOk, handleCancel)}>
        <TextArea rows={8} placeholder="请输入脚本" {...props} />
      </Modal>
      <Button type="link" onClick={showModal} id="aem-ui-script-editor">
        编辑此脚本
      </Button>
    </>
  );
};

export default ScriptEditor;
