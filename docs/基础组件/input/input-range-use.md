# input-range

`区间输入`


## 代码演示

### 基础用法
<code src="./input-range-use.tsx" />

## API

```jsx | pure
<InputRange value={value} onChange={onChange} />
```


### Params
| 参数         | 说明                   | 类型                                        | 默认值   | 必填 |
| ------------ | ---------------------- | ------------------------------------------- | -------- | ---- |
| value        | 输入内容               | number[]  \|  string[]                      | [1, 2]   | 否   |
| onChange     | 输入框内容变化时的回调 | (value: number[]       \| string[]) => void | 否       |      |
| dataType     | 数据类型               | 'string' \| 'number'                        | 'number' | 否   |
| defaultValue | 默认值                 | 'string' \| 'number'                        | [1, 2]   | 否   |

InputNumberProps https://ant.design/components/input-number-cn/#API
