import React, { FC, useState } from 'react';
import { TagProps } from 'antd';
import {  isEmpty } from 'lodash';
import { ArrayUtil, DataUtil, TransformUtil } from 'common-toolkits';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { CreateBaseTagProps, createBaseTags } from '../util/create-ant';

export interface TagsListEditorType {id: any; name: any}

export interface TagsListEditorProps<T = TagsListEditorType> extends Omit<TagProps, 'data' | 'value' | 'onChange'> {
  data: T[];
  onChange?: (value: T) => void;
  reset?: (value: T) => boolean;
  transform?: (data: T[]) => CreateBaseTagProps[];
}

export const toTagList = <S extends TagsListEditorType>(list: S[]): CreateBaseTagProps[] => {
  if (isEmpty(list)) return [] as CreateBaseTagProps[];
  const tagList = TransformUtil.mapKeys<any>(list, { name: 'children' });
  return ArrayUtil.add(tagList, { color: 'processing' }); // closable: 'closable'
};

/**
 * tag list
 * @param props
 * @constructor
 */
const TagsListEditor: FC<TagsListEditorProps> = (props) => {
  const { data: list, transform = toTagList, onChange, ...rest } = props;
  const inputList = transform(list);
  const [tagList, setTagList] = useState(inputList);

  useDeepCompareEffect(() => {
    setTagList(inputList);
  }, [inputList]);

  const onClose = (item) => {
    onChange?.(item);
  };

  return (
    <div key={DataUtil.uuid()}>
      {createBaseTags({ tagList: ArrayUtil.add(tagList, rest), onClose })}
    </div>
  );
};

TagsListEditor.defaultProps = {
  data: [],
  onChange: (v: any) => {},
  transform: toTagList,
};

export default TagsListEditor;
