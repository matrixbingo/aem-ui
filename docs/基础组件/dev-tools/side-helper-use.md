# side-helper

`side-helper`

## 代码演示

### 基础用法

<code src="./side-helper-use.tsx" />

## API

```jsx | pure
  <SideHelper onClick={onClick} />
```

### Params

| 参数     | 说明                                                                              | 类型     | 默认值               | 必填 |
| -------- | --------------------------------------------------------------------------------- | -------- | -------------------- | ---- |
| onClick | 选中 option，或 input 的 value 变化时，调用此函数                                 | function | (value: SiteType) => void | 否   |


SiteType
'top' | 'bottom' | 'left' | 'right'
