import { DataUtil } from 'common-toolkits';
import { isEmpty } from 'lodash';
import React, { FC } from 'react';
import GeneralSelect from './general-select-type';
import TagsSingle from './tags-single';

/**
 * 单选 tags
 * @param props
 * @constructor
 */
const TagsSingleFrom: FC<GeneralSelect.Customer> = ({
  list,
  onChange,
  value,
}) => {
  const id: number | string = !isEmpty(value)
    ? DataUtil.unknown.parseValue(value)
    : (list?.[0].id as number | string);
  return (
    <TagsSingle
      list={list || []}
      defaultId={id}
      onChange={(item) => onChange && onChange(item?.id)}
    />
  );
};

export default TagsSingleFrom;
