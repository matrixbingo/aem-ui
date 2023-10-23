/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { ReactNode, useMemo } from 'react';
import { Button, Checkbox, Divider, SelectProps, Select } from 'antd';

import { DefaultOptionType } from 'antd/lib/select';
import { TransformUtil } from 'common-toolkits';
import { useSelections, useUpdateEffect } from 'ahooks';
import { isArray, isEmpty, isEqual } from 'lodash';

type SortType = 'value' | 'label' | 'none';

interface OptionType {
  value: number | string;
  label: any;
}

export interface SelectSearchMultipleProps extends Omit<SelectProps, 'value' | 'onChange' | 'sort'> {
  value?: (string | number)[];
  onChange?: (value: (string | number)[]) => void;
  sort?: SortType;
}

const toValue = (initValue) => {
  if (isArray(initValue)) {
    return initValue.filter((i) => !isEmpty(i));
  }
  return [];
};

const filterSort = (optionA: DefaultOptionType, optionB: DefaultOptionType, sort: SortType) => {
  return String(optionA?.[sort])?.toLowerCase().localeCompare(String(optionB?.[sort]).toLowerCase());
};

const createDropdownRender = (allSelectValue: ReactNode, noneSelected, allSelected: boolean, unSelectAll, toggleAll, partiallySelected) => {
  return (
    <div>
      <div style={{ padding: '4px 8px 8px 8px', cursor: 'pointer' }}>
        <Checkbox checked={allSelected} onClick={toggleAll} indeterminate={partiallySelected}>
          全选
        </Checkbox>
        <Button type="text" onClick={unSelectAll}>
          取消
        </Button>
      </div>
      <Divider style={{ margin: '0' }} />
      {/* Option 标签值 */}
      {allSelectValue}
    </div>
  );
};

/**
 * 单选，排序搜索
 */
const SelectSearchMultiple = (props: SelectSearchMultipleProps) => {
  const { filterOption, options = [], value: initValue, onChange, defaultValue, sort, ...rest } = props;
  const allIds = useMemo(() => TransformUtil.toArrByPath(options, 'value'), [options]);
  const { noneSelected, setSelected, selected, unSelectAll, allSelected, toggleAll, partiallySelected } = useSelections(allIds, toValue(initValue) || defaultValue);

  useUpdateEffect(() => {
    onChange && onChange(selected);
  }, [selected]);

  useUpdateEffect(() => {
    if (initValue?.length !== selected?.length || !isEqual(initValue, selected)) {
      setSelected(toValue(initValue) || []);
    }
  }, [initValue]);

  if (sort === 'none') {
    return (
      <Select
        showSearch
        value={selected}
        options={options}
        onChange={setSelected}
        optionFilterProp="label"
        dropdownRender={(originNode) => createDropdownRender(originNode, noneSelected, allSelected, unSelectAll, toggleAll, partiallySelected)}
        {...rest}
      />
    );
  }

  return (
    <Select
      showSearch
      value={selected}
      options={options}
      onChange={setSelected}
      optionFilterProp="label"
      dropdownRender={(originNode) => createDropdownRender(originNode, noneSelected, allSelected, unSelectAll, toggleAll, partiallySelected)}
      filterSort={(optionA, optionB) => filterSort(optionA, optionB, sort)}
      {...rest}
    />
  );
};

SelectSearchMultiple.defaultProps = {
  style: { width: '100%' },
  placeholder: '请选择',
  mode: 'multiple',
  maxTagCount: 'responsive',
  sort: 'none',
};

export default SelectSearchMultiple;
