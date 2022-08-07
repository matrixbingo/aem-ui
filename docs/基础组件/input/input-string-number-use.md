# input-string-number

`返回数据类型,数组或字符串`

## 代码演示

### 基础用法

<code src="./input-string-number-use.tsx" />


## API

```jsx | pure
 <InputStringNumber onChange={onChange1} dataType="string" />
```

### Params

| 参数     | 说明                   | 类型                 | 默认值          | 必填 |
| -------- | ---------------------- | -------------------- | --------------- | ---- |
| value    | 输入内容               | 'string' \| 'number' | '1'             | 否   |
| onChange | 输入框内容变化时的回调 | (value: string       | number) => void | 否   |
| dataType | 返回数据类型           | 'string' \| 'number' | 'number'        | 否   |

InputNumberProps https://ant.design/components/input-number-cn/#API
