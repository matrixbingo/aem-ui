# select-search-single

`单选`

## 代码演示

### 基础用法

<code src="./select-search-single-use.tsx" />

## API

```jsx | pure
const options = [
  { value: 1, label: 'v1 北京' },
  { value: 2, label: 'v2 上海' },
  { value: '3', label: 'v3 广州' },
  { value: '4', label: 'v4 深圳' },
];
```

```jsx | pure
<SelectSearchSingle options={options} onChange={onChange} />
```

```jsx | pure
const filterOption = (input, option) => {
  const { label } = option;
  return label.toLowerCase().indexOf(input.toLowerCase()) >= 0
}
```

### Params

| 参数          | 说明                                                                              | 类型                                 | 默认值                                   | 必填 |
| ------------- | --------------------------------------------------------------------------------- | ------------------------------------ | ---------------------------------------- | ---- |
| value         | 指定当前选中的条目，多选时为一个数组。（value 数组引用未变化时，Select 不会更新） | string \| number                     | ''                                       | 否   |
| onChange      | 选中 option，或 input 的 value 变化时，调用此函数                                 | function                             | (value: T[]) => void                     | 否   |
| selectOption  | 选中 option，调用此函数                                                           | function                             | (option: {id: T; name: string }) => void | 否   |
| defaultOption | 默认Option                                                                        | { id: T; name: string } \| undefined | -                                        | 否   |
| options       | select 数组                                                                       | { id: T; name: string }[]            | -                                        | 否   |

SelectProps https://ant.design/components/select-cn/#Select-props
