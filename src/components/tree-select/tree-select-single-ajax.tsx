/* eslint-disable react-hooks/exhaustive-deps */
import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { useRequest } from 'ahooks';
import TreeSelectSingle, {
  tree,
  TreeSelectSingleProps,
} from './tree-select-single';

export interface TreeSelectSingleAjaxProps extends TreeSelectSingleProps {
  promise: Promise<any>;
  transform: (data: any) => tree;
  keyword: string;
}

/**
 * 三级目录, 一二级不可选，第三极可选
 */
const TreeSelectSingleAjax = (props: TreeSelectSingleAjaxProps) => {
  const { promise, treeData, transform, keyword, ...restProps } = props;
  const [list, setlist] = useState<tree>(treeData);

  const { loading, runAsync } = useRequest(
    async () => {
      const response = await promise;
      return response;
    },
    {
      manual: true,
      cacheKey: keyword,
    },
  );

  useEffect(() => {
    if (keyword) {
      runAsync()
        .then((response) => {
          const rs = transform(response);
          setlist(rs);
        })
        .catch((error) => window.console.log('TreeSelectSingleAjax: ', error));
    }
  }, [keyword]);

  return (
    <Spin spinning={loading}>
      <TreeSelectSingle treeData={list} {...restProps} />
    </Spin>
  );
};

TreeSelectSingleAjax.defaultProps = {
  value: '',
  onChange: (v) => {},
  treeData: [],
  transform: (v) => [],
  promise: new Promise((resolve, reject) => {}),
  keyword: '',
};

export default TreeSelectSingleAjax;
