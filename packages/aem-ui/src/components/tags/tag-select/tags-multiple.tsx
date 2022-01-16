import React, { FC, useMemo, useState } from 'react';
import { Tag } from 'antd';
import { isEmpty, intersection, isEqual } from 'lodash';
import { ArrayUtil } from 'common-toolkits';
import { useUpdateEffect } from 'ahooks';
import GeneralSelect from './general-select-type';

const TagsMultipleBase: FC<GeneralSelect.TagMultipleProps> = (props) => {
  const { defaultIds, list, onChange } = props;
  const activeIds: (number | string)[] =
    isEmpty(defaultIds) || defaultIds === undefined
      ? []
      : ArrayUtil.uniqueSort(defaultIds);
  const [selectedIds, setSelectedIds] =
    useState<(number | string)[]>(activeIds);

  const isExist = (ids, item) => {
    if (isEmpty(ids)) {
      return false;
    }
    return ids.includes(item.id);
  };

  /**
   * 多选
   * @param tag
   * @param checked
   */
  const multipleOnChange = (tag, checked) => {
    let arr: (number | string)[] = [];
    if (checked) {
      // 增
      if (!isExist(selectedIds, tag)) {
        arr = [...selectedIds, tag.id];
        setSelectedIds(() => {
          return arr;
        });
      }
    } else if (isExist(selectedIds, tag)) {
      //  删
      ArrayUtil.remove(selectedIds, tag.id);
      arr = [...selectedIds];
      setSelectedIds(() => {
        return arr;
      });
    }
    onChange &&
      onChange(
        list.filter((item) => arr.includes(item.id)),
        tag,
        checked,
      );
  };

  const onChangeCallBack = (tag, checked) => {
    multipleOnChange(tag, checked);
  };

  /**
   *  defaultIds effect
   */
  // TODO allIds值不变，绑定到唯一dom
  const allIds = useMemo(() => {
    return ArrayUtil.mapByKey(list);
  }, [list]);

  useUpdateEffect(() => {
    const arr = intersection(activeIds, allIds);

    if (!isEmpty(activeIds) && !isEmpty(arr)) {
      window.console.log(
        'allIds activeIds 111------->',
        arr,
        allIds,
        activeIds,
      );
      setSelectedIds(() => arr);
      // debugger;
    } else if (isEmpty(arr)) {
      window.console.log(
        'allIds activeIds 222------->',
        arr,
        allIds,
        activeIds,
      );
      setSelectedIds(() => []);
      // debugger;
    }
    window.console.log('allIds activeIds 333------->', arr, allIds, activeIds);
  }, [activeIds]);

  window.console.log(
    ' selectedIds, activeIds ----------->',
    selectedIds,
    activeIds,
  );
  return (
    <>
      {window.console.log('return ------->', selectedIds)}
      {!isEmpty(list) &&
        list.map((tag) => {
          return (
            <Tag.CheckableTag
              key={tag.id}
              checked={selectedIds.some((id) => id === tag.id)}
              onChange={(checked) => onChangeCallBack(tag, checked)}
            >
              {tag.name}
            </Tag.CheckableTag>
          );
        })}
    </>
  );
};

function TagsMultiple(props) {
  return <TagsMultipleBase {...props} />;
}

function areEqual(prevProps, nextProps) {
  window.console.log(
    'prevProps, nextProps------->',
    prevProps,
    nextProps,
    prevProps.defaultIds,
    nextProps.defaultIds,
  );
  window.console.log(
    'DataUtil.object.equals(prevProps.defaultIds, nextProps.defaultIds)------->',
    isEqual(prevProps.defaultIds, nextProps.defaultIds),
  );
  return true;
}

export default React.memo(TagsMultiple, areEqual);
