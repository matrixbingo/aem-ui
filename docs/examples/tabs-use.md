---
title: tabs
nav:
  title: 组件
  order: 3
---

# tabs

## BaseTabs

```jsx | pure

const dataList = [
  {
    key: 'all',
    tab: '全部',
  },
  {
    key: 'abc',
    tab: 'abc',
    children: <div>asasas</div>,
  },
  {
    key: 'ccc',
    tab: 'ccc',
    children: <Button>ccccc</Button>,
  },
];

<BaseTabs tabsProps={{ onChange }} list={dataList} />

```

<code src="./demo/base-tabs-use.tsx" />


## API

### BaseTabs

| 参数      | 说明                 | 类型                    | 默认值 | 必填 |
| --------- | -------------------- | ----------------------- | ------ | ---- |
| tabsProps | tabs属性             | TabsProps               | -      | 是   |
| list      |                      | Object[]                | -      | 是   |
| transform | 转换函数，可以自定义 | 默认使用内置 tabsFormat | 省略   | 否   |

TabsProps https://ant.design/components/tabs-cn/#Tabs
