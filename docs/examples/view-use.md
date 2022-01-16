---
title: view
nav:
  title: 组件
  order: 3
---

## View

```jsx | pure

<View visible={visible}>
   do something....
</View>

```

<code src="./demo/view/view-use.tsx" />

## TagsListEditor 动态添加和删除

```jsx | pure
<ViewContainer>
    page
</ViewContainer>
```

<code src="./demo/view/view-container-use.tsx" />

## API

### View

| 参数    | 说明                | 类型                | 默认值 | 必填 |
| ------- | ------------------- | ------------------- | ------ | ---- |
| visible | 可见与否            | boolean             | true   | 否   |
| destroy | 销毁与否            | boolean             | false  | 否   |
| space   | 是否使用  space     | boolean             | false  | 否   |
| style   | React.CSSProperties | React.CSSProperties | -      | 否   |

### ViewContainer

| 参数  | 说明                | 类型                | 默认值             | 必填 |
| ----- | ------------------- | ------------------- | ------------------ | ---- |
| style | React.CSSProperties | React.CSSProperties | { minWidth: 1300 } | 否   |
