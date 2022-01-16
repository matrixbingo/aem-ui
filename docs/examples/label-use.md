---
title: label
nav:
  title: 组件
  order: 3
---

## DescriptionsLabel

```jsx | pure
 <DescriptionsLabel title="title" />
```
<code src="./demo/label/descriptions-label-use.tsx" />

## OmitTipLabel

#### 表格列表等缩略显示

```jsx | pure
 <OmitTipLabel title="import { OmitTipLabel } from 'aem-ui'" limit={10} />
```
<code src="./demo/label/omit-tip-label-use.tsx" />

## StarLabel

#### 加必填标志

```jsx | pure
 <StarLabel title="StarLabel" />
```

<code src="./demo/label/star-label-use.tsx" />


## API

### DescriptionsLabel

| 参数  | 说明               | 类型   | 默认值 | 必填 |
| ----- | ------------------ | ------ | ------ | ---- |
| title | 标签字体，组合使用 | string | ''     | 是   |

### OmitTipLabel

| 参数  | 说明                 | 类型   | 默认值 | 必填 |
| ----- | -------------------- | ------ | ------ | ---- |
| title | 标签字体，组合使用   | string | ''     | 是   |
| limit | 长度，超出使用省略号 | number | 30     | 否   |

TooltipProps https://ant.design/components/tooltip-cn/#API

### StarLabel

| 参数  | 说明               | 类型   | 默认值 | 必填 |
| ----- | ------------------ | ------ | ------ | ---- |
| title | 标签字体，组合使用 | string | ''     | 是   |
