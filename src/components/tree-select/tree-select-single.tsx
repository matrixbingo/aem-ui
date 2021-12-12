/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from 'react';
import { TreeNodeProps, TreeSelect } from 'antd';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { TreeSelectProps } from 'antd/lib/tree-select';

// type TreeSelectProps = React.ComponentProps<typeof TreeSelect>;

export interface leaf { level: number; value: string; title: string }

export type stem = leaf & { children: leaf[]};

export type branch = leaf & { children: stem[]};

export type tree = branch[];

export interface TreeSelectSingleProps extends Omit<TreeSelectProps<string>, 'value' | 'onChange'| 'treeData'> {
     value: string;
     onChange: (value: string, labelList?: React.ReactNode[]) => void;
     treeData: tree; // { level: number; value: string, title: string, children: { level: number; value: string, title: string, children: item[] } [] }[];
     createTreeNode?: (treeData: tree) => TreeNodeProps[];
 }

/**
 * 获取默认选中值
 * @param treeData
 */
export const getDefaultValue = (treeData: tree): string => {
  if (!treeData || treeData.length === 0) {
    return '';
  }
  return treeData[0]?.children[0]?.children[0]?.value;
};

/**
  * 三级目录, 一二级不可选，第三极可选
  */
const TreeSelectSingle = (props: TreeSelectSingleProps) => {
  const { value: selectedValue, onChange, treeData, createTreeNode: defaultCreateTreeNode, ...restProps } = props;
  const { TreeNode } = TreeSelect;
  const [value, setValue] = useState<string>(selectedValue || '--请选择--');
  const [list, setlist] = useState<tree>(treeData);

  useDeepCompareEffect(
    () => {
      setlist(treeData);
      const defaultValue = getDefaultValue(treeData);
      setValue(defaultValue);
      onChange(defaultValue);
    }, [list, treeData],
  );

  useEffect(() => {
    if (value !== selectedValue) {
      if (!selectedValue) {
        setValue('--请选择--');
        onChange('');
      } else {
        setValue(selectedValue);
        onChange(selectedValue);
      }
    }
  }, [selectedValue]);

  const createTreeNode = (treelist: tree) => {
    if (defaultCreateTreeNode) {
      return defaultCreateTreeNode(treelist);
    }
    const treeNodes: any[] = [];
    treelist.forEach((v) => {
      treeNodes.push(
        <TreeNode key={`${v.value}_${v.title}`} value={v.value} title={v.title} disabled>
          {
           v.children.map((c) => (
             <TreeNode key={`${c.value}_${c.title}`} value={c.value} title={c.title} disabled>
               {
               c.children.map((g) => <TreeNode key={`${g.value}_${g.title}`} value={g.value} title={g.title} />)
             }
             </TreeNode>
           ))
         }
        </TreeNode>,
      );
    });
    return treeNodes;
  };

  return (
    <TreeSelect
      value={value}
      onChange={onChange}
      showSearch
      treeDefaultExpandAll
      {...restProps}
    >
      {createTreeNode(list)}
    </TreeSelect>
  );
};

TreeSelectSingle.defaultProps = {
  value: '',
  onChange: (v) => window.console.error('TreeSelectSingle.onChange : ', String(v)),
  treeData: [],
};

export default TreeSelectSingle;
