# select-tags-input-string

`tags 入参可以是字符串，通过分隔符分割`

## 代码演示

### 基础用法

<code src="./select-tags-input-string-use.tsx" />

## API

```jsx | pure
  <SelectTagsInputString onChange={onChange} value="aa,cc,dd"/>
```

### Params

| 参数      | 说明                                              | 类型     | 默认值                  | 必填 |
| --------- | ------------------------------------------------- | -------- | ----------------------- | ---- |
| value     | 字符串                                            | string   | 无                      | 否   |
| onChange  | 选中 option，或 input 的 value 变化时，调用此函数 | function | (value: string) => void | 否   |
| separator | 分隔符                                            | string   | 英文逗号                | 否   |

SelectProps https://ant.design/components/select-cn/#Select-props
