/* eslint-disable import/no-duplicates */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from 'react';
import { useMount, useUpdateEffect } from 'ahooks';
import { Select } from 'antd';
import { isEmpty, set } from 'lodash';
import useDeepCompareEffect from 'use-deep-compare-effect';
import TreeSelectSingle, { getDefaultValue, tree, TreeSelectSingleProps } from './tree-select-single';
import copyToClipboard from 'copy-to-clipboard';
import { assertError } from '../../util/util';
import CopyButton from './copy-button';

const defaultSelectedValue = '--请选择--';

const leafData = {} as any;

const { Option } = Select;

export const getLabelByValue = (list: tree, value: string) => {
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

function assertstion(props: TreeSelectSingleProps): asserts props is TreeSelectSingleProps & Required<TreeSelectSingleProps> {
  assertError(props, ['treeData', 'onChange']);
}

/**
  * 三级目录, 一二级不可选，第三极可选
  */
const TreeSelectSingleInput: React.FC<TreeSelectSingleProps> = (props: TreeSelectSingleProps) => {
  assertstion(props);
  const { value: selectedValue, onChange, treeData, createTreeNode: defaultCreateTreeNode, copy, ...restProps } = props;
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

  const label = getLabelByValue(list, value);

  const onClick = () => {
    copyToClipboard(label);
  }

  if (editor) {
    return (
      <TreeSelectSingle
        {...props}
        defaultOpen
      />
    );
  }

  return (
    <CopyButton copy={copy} onClick={onClick}>
      <Select value={label} onClick={() => setEditor(true)} {...restProps }>
        <Option value={label}>{label}</Option>
      </Select>
    </CopyButton>
  );
};

TreeSelectSingleInput.defaultProps = {
  value: '',
  treeData: [],
  style: { width: '100%' },
  copy: true,
  // treeNodeFilterProp: 'title',
  onChange: (v) => {},
};

export default TreeSelectSingleInput;
