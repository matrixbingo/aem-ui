# select-multiple

`多选`

## 代码演示

### 基础用法

<code src="./select-multiple-use.tsx" />


## API

```jsx | pure
const options = [
  { id: 1, name: 'v1' },
  { id: 2, name: 'v2' },
  { id: 3, name: 'v3' },
  { id: 4, name: 'v4' },
];
```

```jsx | pure
<SelectMultiple<number> options={options} value={value} onChange={onChange} />
```

### Params

| 参数          | 说明                                                                              | 类型                                 | 默认值               | 必填 |
| ------------- | --------------------------------------------------------------------------------- | ------------------------------------ | -------------------- | ---- |
| value         | 指定当前选中的条目，多选时为一个数组。（value 数组引用未变化时，Select 不会更新） | string[] \| number[]                 | ''                   | 否   |
| onChange      | 选中 option，或 input 的 value 变化时，调用此函数                                 | function                             | (value: T[]) => void | 否   |
| defaultOption | 默认Option                                                                        | { id: T; name: string } \| undefined | -                    | 否   |
| options       | select 数组                                                                       | { id: T; name: string }[]            | -                    | 否   |

SelectProps https://ant.design/components/select-cn/#Select-props
