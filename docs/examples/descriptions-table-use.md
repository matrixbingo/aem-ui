---
title: descriptions-table
nav:
  title: 组件
  order: 3
---

## DescriptionsTable

```jsx | pure
const list = [
  { label: '英文名', content: 'aem-ui' },
  { label: '类型', content: 1 },
  { label: '入参', content: <span>121</span> },
];

<DescriptionsTable props={{ title: '基本信息', column: 4 }} list={list} />
```

<code src="./demo/descriptions-table-use.tsx" />

## API

### DescriptionsTable

| 参数  | 说明     | 类型                                                            | 默认值 | 必填 |
| ----- | -------- | --------------------------------------------------------------- | ------ | ---- |
| props | 时间内容 | DescriptionsProps                                               | -      | 否   |
| list  | 显示内容 | { label: string; content: any; item?: DescriptionsItemProps }[] | -      | 是   |

DatePickerProps https://ant.design/components/descriptions-cn/#Descriptions

DescriptionsItemProps https://ant.design/components/descriptions-cn/#DescriptionItem
