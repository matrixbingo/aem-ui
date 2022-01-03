import React, { FC, useMemo, useState } from 'react';
import { Tag } from 'antd';
import { isEmpty, isBoolean, isNumber, isString } from 'lodash';
import { useUpdateEffect } from 'ahooks';
import { ArrayUtil } from 'common-toolkits';
import GeneralSelect from './general-select-type';

/**
 * 单选 tags
 * @param props
 * @constructor
 */
const TagsSingle: FC<GeneralSelect.TagSingleProps> = (props) => {
  const { defaultId, list, onChange, isPick } = props;
  const activeId: number | string = isNumber(defaultId) || isString(defaultId) ? defaultId : list[0].id;
  const _isPick = isBoolean(isPick) ? isPick : false;
  const [selectedIds, setSelectedIds] = useState<(number | string)[]>([ activeId ]);

  const isExist = (ids, item): boolean => {
    if (isEmpty(ids)) {
      return false;
    }
    return ids.includes(item.id);
  };

  const singleOnChange = (tag, checked) => {
    if (checked) {
      // 增
      if (
        selectedIds.length !== 1 ||
        (selectedIds.length === 1 && selectedIds[0] !== tag.id)
      ) {
        setSelectedIds(() => [tag.id]);
        onChange && onChange(tag, checked);
      }
    } else if (_isPick) {
      //  删
      isExist(selectedIds, tag) &&
        setSelectedIds(() => []) &&
        onChange &&
        onChange(tag, checked);
    }
  };

  const onChangeCallBack = (tag, checked) => {
    singleOnChange(tag, checked);
  };

  /**
   *  defaultId effect
   */
  // todo allIds值不变，绑定到唯一dom
  const allIds = useMemo(() => ArrayUtil.mapByKey(list), [list]);

  useUpdateEffect(() => {
    if (isNumber(activeId) && allIds.includes(activeId)) {
      setSelectedIds(() => [activeId]);
    } else {
      setSelectedIds(() => []);
    }
  }, [allIds, activeId]);

  return (
    <>
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

export default TagsSingle;
