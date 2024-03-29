import React, { FC, ReactNode, useEffect } from 'react';
import { CloseOutlined, LoadingOutlined } from '@ant-design/icons';
import { Spin, Tag, TagProps, Tooltip } from 'antd';
import { useSafeState, useUnmount } from 'ahooks';

export interface TagSingleProps extends Omit<TagProps, 'id' | 'onClose' |'children'> {
  id?: any;
  onClose?: (e: any) => void;
  children?: string | ReactNode | undefined;
}

const style = { padding: '4px 15px 4px 10px' };
const tagStyle = { margin: '0px 5px 5px 0px' };
/**
 * tag list
 * @param props
 * @constructor
 */
const TagSingle: FC<TagSingleProps> = (props) => {
  const { id, children, onClose = (v: any) => {}, ...rest } = props;
  const [spinning, setSpinning] = useSafeState(false);

  useEffect(() => {
    setSpinning(false);
  }, []);

  useUnmount(() => {
    setSpinning(false);
  });

  const onClick = (e) => {
    setSpinning(true);
    onClose({ id, children });
    e?.preventDefault();
  };

  if (children) {
    return (
      <Tag {...rest} style={tagStyle}>
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
