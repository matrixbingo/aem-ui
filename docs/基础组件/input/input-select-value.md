# input-select-value

`有值和无值`

## 代码演示

### 基础用法

<code src="./input-select-value.tsx" />


## API

```jsx | pure
 <InputSelectValue value={value} onChange={onChange} />
```

### Params

| 参数     | 说明                   | 类型                        | 默认值             | 必填 |
| -------- | ---------------------- | --------------------------- | ------------------ | ---- |
| value    | 输入内容               | string                      | ''                 | 是   |
| onChange | 输入框内容变化时的回调 | function                    | (value: T) => void | 是   |
| void     | 无值时的标志           | string \| undefined \| null | undefined          | 是   |

其他 InputProps https://ant.design/components/input-cn/#Input
