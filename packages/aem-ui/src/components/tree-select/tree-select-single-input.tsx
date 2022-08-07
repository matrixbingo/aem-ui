/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useMount, useUpdateEffect } from 'ahooks';
import { Select } from 'antd';
import { isEmpty, set } from 'lodash';
import { useCallback, useState } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';
import TreeSelectSingle, { getDefaultValue, tree, TreeSelectSingleProps } from './tree-select-single';

const defaultSelectedValue = '--请选择--';

const leafData = {} as any;

const { Option } = Select;

const getLabelByValue = (list: tree, value: string) => {
  if (!isEmpty(leafData[value])) {
    return leafData[value];
  }
  let label = '';
  const treeLength = list.length;
  for (let i = 0; i < treeLength; i++) {
    const _tree = list[i];
    const branchLength = _tree.children.length;
    for (let j = 0; j < branchLength; j++) {
      const branch = _tree.children[j];
      const item = branch.children.find((leaf) => leaf.value === value);
      if (!isEmpty(item) && !!item?.title) {
        label = item.title;
        break;
      }
    }
    if (!isEmpty(label)) {
      set(leafData, value, label);
      return label;
    }
  }
  return label ?? value;
};

/**
  * 三级目录, 一二级不可选，第三极可选
  */
const TreeSelectSingleInput = (props: TreeSelectSingleProps) => {
  const { value: selectedValue, onChange, treeData, createTreeNode: defaultCreateTreeNode, ...restProps } = props;
  const [value, setValue] = useState<string>(selectedValue || defaultSelectedValue);
  const [list, setList] = useState<tree>(treeData);
  const [editor, setEditor] = useState<boolean>(false);

  const initDefaultValue = useCallback(() => {
    if (!editor) {
      const defaultValue = getDefaultValue(treeData, value === defaultSelectedValue ? '' : value);
      if (value === defaultSelectedValue && defaultValue !== value) {
        setValue(defaultValue);
        onChange(defaultValue);
      }
    }
  }, [treeData]);

  useMount(() => {
    initDefaultValue();
  });

  useDeepCompareEffect(
    () => {
      if (!editor) {
        const defaultValue = getDefaultValue(treeData, value === defaultSelectedValue ? '' : value);
        defaultValue !== value && onChange(defaultValue);
        setList(treeData);
      }
    }, [list, treeData],
  );

  useUpdateEffect(() => {
    if (!editor) {
      if (value !== selectedValue) {
        if (!selectedValue) {
          setValue(defaultSelectedValue);
          onChange('');
        } else {
          setValue(selectedValue);
          onChange(selectedValue);
        }
      }
    }
  }, [selectedValue]);

  if (editor) {
    return (
      <TreeSelectSingle
        {...props}
        defaultOpen
      />
    );
  }

  const label = getLabelByValue(list, value);
  return (
    <Select value={label} onClick={() => setEditor(true)}>
      <Option value={label}>{label}</Option>
    </Select>
  );
};

TreeSelectSingleInput.defaultProps = {
  value: '',
  treeData: [],
  treeNodeFilterProp: 'title',
  onChange: (v) => {},
};

export default TreeSelectSingleInput;
