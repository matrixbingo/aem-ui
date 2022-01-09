import React, { FC, ReactNode, useEffect, useState } from 'react';
import { CloseOutlined, LoadingOutlined } from '@ant-design/icons';
import { Spin, Tag, TagProps, Tooltip } from 'antd';

export interface TagSingleProps extends Omit<TagProps, 'id' | 'onClose'> {
  id?: any;
  onClose?: (e: any) => void;
  children?: string | ReactNode | undefined;
}

const style = { padding: '4px 15px 4px 10px' };
/**
 * tag list
 * @param props
 * @constructor
 */
const TagSingle: FC<TagSingleProps> = (props) => {
  const { id, children, onClose = (v: any) => {}, ...rest } = props;
  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    setSpinning(false);
    return setSpinning(false);
  }, []);

  const onClick = (e) => {
    e?.preventDefault;
    onClose({ id, children });
    setSpinning(true);
  };

  if (children) {
    return (
      <Tag {...rest}>
        <Spin spinning={spinning} size="small" style={style} indicator={<LoadingOutlined spin />}>
          <span style={style}>{children}</span>
          <Tooltip title="点击删除">
            <CloseOutlined onClick={onClick} />
          </Tooltip>
        </Spin>
      </Tag>
    );
  }

  return (
    <Tag key={id} {...rest} onClose={(e) => { e?.preventDefault; onClose({ id }); }} />
  );
};

TagSingle.defaultProps = {
  onClose: (v: any) => {},
};

export default TagSingle;
