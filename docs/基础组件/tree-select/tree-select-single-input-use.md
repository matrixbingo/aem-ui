# tree-select-single-input

`TreeSelectSingle 优化版本，适用于大量数据情况下`


## 代码演示

### 基础用法

## API
<code src="./tree-select-single-input-use.tsx" />

```jsx | pure

const treeData = [
  {
    level: 1,
    value: 'v1',
    title: 'title1',
    children: [
      {
        level: 2,
        value: 'v2',
        title: 'title2',
        children: [
          { level: 4, value: 'v4', title: 'title4' },
          { level: 4, value: 'v5', title: 'title5' },
          { level: 4, value: 'v6', title: 'title6' },
        ],
      },
    ],
  },
];

```

```jsx | pure
<TreeSelectSingleInput treeData={treeData} onChange={onChange} value={value} />
```

### Params

| 参数           | 说明                   | 类型                      | 默认值 | 必填 |
| -------------- | ---------------------- | ------------------------- | ------ | ---- |
| value          | 输入内容               | string                    | ''     | 否   |
| onChange       | 输入框内容变化时的回调 | function(e)               | ''     | 否   |
| treeData       | 树形结构数据           | tree                      | ''     | 是   |
| createTreeNode | 生成treeselect函数     | 使用默认的 createTreeNode | ''     | 否   |

#### tree
```jsx | pure

export interface leaf {
  id?: string;
  level: number;
  value: string;
  title: string;
}

export type stem = leaf & { children: leaf[] };

export type branch = leaf & { children: stem[] };

export type tree = branch[];

```
