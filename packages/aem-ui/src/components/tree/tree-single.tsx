/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable multiline-ternary */
import React, { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import type { DataNode } from 'antd/es/tree';
import { Button, Col, Input, Row, Space, Tree, TreeProps } from 'antd';
import { SearchProps } from 'antd/lib/input';
import { View } from 'aem-ui';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { assertError } from '../../util/util';
import './tree-single.less';

export interface TreeSingleProps extends Omit<TreeProps, 'searchProps' | 'getParentKey' | 'treeData' | 'openKeys'> {
  searchProps?: SearchProps;
  getParentKey?: (key: React.Key, tree: DataNode[]) => React.Key;
  treeData?: DataNode[];
  showButton?: boolean;
  openKeys?: string[];
}

const { Search } = Input;

const defaultData: DataNode[] = [];

const generateList = (data: DataNode[], dataList = [] as any[]) => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
    const { key, title } = node;
    dataList.push({ key, title });
    if (node.children) {
      generateList(node.children, dataList);
    }
  }
  return dataList;
};

const getParentKeyDefault = (key: React.Key, tree: DataNode[]): React.Key => {
  let parentKey: React.Key;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some((item) => item.key === key)) {
        parentKey = node.key;
      } else if (getParentKeyDefault(key, node.children)) {
        parentKey = getParentKeyDefault(key, node.children);
      }
    }
  }
  return parentKey!;
};

function assertstion(props: TreeSingleProps): asserts props is TreeSingleProps & Required<Omit<TreeSingleProps, 'onChange'>> {
  assertError(props, ['treeData']);
}

const createOpenAllButton = (expandedKeys, defaultExpandedKeys, openAll, closeAll) => {
  if (expandedKeys?.[0] === defaultExpandedKeys?.[0]) {
    return (
      <Space style={{ position: 'absolute', right: 0 }} size={0}>
        <CaretDownOutlined />
        <Button style={{ width: '100%', color: 'black' }} onClick={openAll} type="link" size="small">全部展开</Button>
      </Space>
    );
  }
  return (
    <Space style={{ position: 'absolute', zIndex: 999, right: 0 }} size={0}>
      <CaretUpOutlined />
      <Button style={{ width: '100%', color: 'black' }} onClick={closeAll} type="link" size="small">全部收起</Button>
    </Space>
  );
};

const TreeSingle: React.FC<PropsWithChildren<TreeSingleProps>> = (props) => {
  assertstion(props);
  const _dataList: { key: React.Key; title: any }[] = [];
  const { getParentKey = getParentKeyDefault, treeData: defaultDataTree, showButton, openKeys = [], searchProps, defaultExpandedKeys = [], ...rest } = props;
  const [dataList, setDataList] = useState(generateList(defaultDataTree, _dataList));
  const [dataTree, setDataTree] = useState(defaultDataTree);
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>(defaultExpandedKeys);
  const [searchValue, setSearchValue] = useState('');
  const [autoExpandParent, setAutoExpandParent] = useState(true);

  useEffect(() => {
    setDataTree(defaultDataTree);
    setDataList(generateList(defaultDataTree, _dataList));
  }, [defaultDataTree]);

  const onExpand = (newExpandedKeys: React.Key[]) => {
    setExpandedKeys(newExpandedKeys);
    setAutoExpandParent(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const newExpandedKeys = dataList
      .map((item) => {
        if (typeof item.title !== 'object' && item.title.indexOf(value) > -1) {
          const parentKey = getParentKey(item.key, dataTree);
          return parentKey;
        }
        return null;
      })
      .filter((item, i, self) => item && self.indexOf(item) === i);
    setExpandedKeys(newExpandedKeys as React.Key[]);
    setSearchValue(value);
    setAutoExpandParent(true);
  };

  const treeData = useMemo(() => {
    const loop = (data: DataNode[]): DataNode[] => data.map((item) => {
      const isTitleObject = typeof item.title === 'object';
      const strTitle = isTitleObject ? item.key as string : item.title as string;
      const index = strTitle.indexOf(searchValue);
      const beforeStr = strTitle.substring(0, index);
      const afterStr = strTitle.slice(index + searchValue.length);
      const title = index > -1 ? (
        <span>
          {beforeStr}
          <span className="site-tree-search-value">{searchValue}</span>
          {afterStr}
        </span>
      ) : (
        <span>{isTitleObject ? strTitle : item.title}</span>
      );
      if (item.children) {
        const { title: titleBack, key, ...resp } = item;
        return { ...resp, title, key: item.key, children: loop(item.children) };
      }

      return {
        title,
        key: item.key,
      };
    });

    return loop(dataTree);
  }, [searchValue]);

  const openAll = () => setExpandedKeys(openKeys);

  const closeAll = () => setExpandedKeys(defaultExpandedKeys);

  return (
    <div>
      <Search style={{ marginBottom: 8 }} onChange={onChange} {...searchProps} />
      <View destroy={!showButton}>
        <Row>
          <Col span={24} style={{ padding: '3px 3px 22px 3px', position: 'relative' }}>
            {createOpenAllButton(expandedKeys, defaultExpandedKeys, openAll, closeAll) }
          </Col>
        </Row>
      </View>
      <Tree
        {...rest}
        showLine
        onExpand={onExpand}
        expandedKeys={expandedKeys}
        autoExpandParent={autoExpandParent}
        treeData={treeData}
      />
    </div>
  );
};

TreeSingle.defaultProps = {
  treeData: defaultData,
  showButton: false,
};

export default TreeSingle;
