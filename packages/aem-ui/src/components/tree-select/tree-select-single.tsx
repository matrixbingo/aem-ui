/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { TreeNodeProps, TreeSelectProps, TreeSelect } from 'antd';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { isEmpty } from 'lodash';
import copyToClipboard from 'copy-to-clipboard';
import { assertError } from '../../util/util';
import CopyButton from './copy-button';
import { getLabelByValue } from './tree-select-single-input';

// type TreeSelectProps = React.ComponentProps<typeof TreeSelect>;

export interface leaf {
  id?: string;
  key?: string;
  level: number;
  value: string;
  title: string;
}

export type stem = leaf & { children: leaf[] };

export type branch = leaf & { children: stem[] };

export type tree = branch[];

export interface TreeSelectSingleProps extends Omit<TreeSelectProps<string>, 'value' | 'onChange' | 'treeData'> {
  value?: string;
  onChange?: (value: string, labelList?: React.ReactNode[]) => void;
  treeData?: tree; // { level: number; value: string, title: string, children: { level: number; value: string, title: string, children: item[] } [] }[];
  createTreeNode?: (treeData: tree) => TreeNodeProps[];
  copy?: boolean;
}

export const isValueInTree = (treeData: tree, value: string): boolean => {
  if (isEmpty(value) || !value) return false;
  return treeData.some((branch) => branch.children.some((stem) => stem.children.some((leaf) => leaf.value === value)));
};

/**
 * 获取默认选中值
 * @param treeData
 */
export const getDefaultValue = (treeData: tree, value: string): string => {
  if (!treeData || treeData.length === 0) {
    return '';
  }
  if (value && isValueInTree(treeData, value)) return value;
  return treeData[0]?.children[0]?.children[0]?.value;
};

const defaultSelectedValue = '--请选择--';

function assertstion(props: TreeSelectSingleProps): asserts props is TreeSelectSingleProps & Required<TreeSelectSingleProps> {
  assertError(props, ['treeData', 'onChange']);
}

/**
 * 三级目录, 一二级不可选，第三极可选
 */
const TreeSelectSingle = (props: TreeSelectSingleProps) => {
  assertstion(props);
  const { value: selectedValue, onChange, treeData, createTreeNode: defaultCreateTreeNode, copy, ...restProps } = props;
  const { TreeNode } = TreeSelect;
  const [value, setValue] = useState<string>(
    selectedValue || defaultSelectedValue,
  );
  const [list, setList] = useState<tree>(treeData);

  useDeepCompareEffect(() => {
    const defaultValue = getDefaultValue(
      treeData,
      value === defaultSelectedValue ? '' : value,
    );
    defaultValue !== value && onChange(defaultValue);
    setList(treeData);
  }, [list, treeData]);

  useEffect(() => {
    if (value !== selectedValue) {
      if (!selectedValue) {
        setValue(defaultSelectedValue);
        onChange('');
      } else {
        setValue(selectedValue);
        onChange(selectedValue);
      }
    }
  }, [selectedValue]);

  const createTreeNode = (treeList: tree) => {
    if (defaultCreateTreeNode) {
      return defaultCreateTreeNode(treeList);
    }
    const treeNodes: any[] = [];
    treeList.forEach((v) => {
      treeNodes.push(
        <TreeNode key={v.key ? v.key : v.value} value={v.value} title={v.title} disabled>
          {v.children.map((c) => (
            <TreeNode key={c.key ? c.key : c.value} value={c.value} title={c.title} disabled>
              {c.children.map((g) => (
                <TreeNode key={g.key ? g.key : g.value} value={g.value} title={g.title} />
              ))}
            </TreeNode>
          ))}
        </TreeNode>,
      );
    });
    return treeNodes;
  };

  const onClick = () => {
    const label = getLabelByValue(list, value);
    copyToClipboard(label);
  }

  return (
    <CopyButton copy={copy} onClick={onClick}>
      <TreeSelect
        value={value}
        onChange={onChange}
        {...restProps}
      >
        {createTreeNode(list)}
      </TreeSelect>
    </CopyButton>
  );
};

TreeSelectSingle.defaultProps = {
  value: '',
  treeData: [],
  treeNodeFilterProp: 'title',
  onChange: (v) => {},
  style: { width: '100%' },
  showSearch: true,
  treeDefaultExpandAll: true,
  copy: true,
};

export default TreeSelectSingle;
