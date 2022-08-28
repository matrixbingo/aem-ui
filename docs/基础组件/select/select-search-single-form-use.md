# select-search-single-form

`单选,切换options默认选中第一个`

## 代码演示

```jsx | pure
const options1 = [
  { value: 9, label: '北京' },
  { value: 2, label: 'v2 上海' },
  { value: '3', label: 'v3 广州' },
  { value: '4', label: 'v4 深圳' },
  { value: '5', label: '北凉' },
  { value: 6, label: '北大荒' },
];

const options2 = [
  { value: 8, label: '河北' },
  { value: 2, label: '山西' },
  { value: '3', label: '广州' },
  { value: '4', label: '福建' },
  { value: '5', label: '山东' },
  { value: 6, label: '广西' },
];
```

### 基础用法

<code src="./select-search-single-form-use.tsx" />

## API


```jsx | pure
<SelectSearchSingleForm options={options} onChange={onChange} />
```

```jsx | pure
// 过滤
const filterOption = (input, option) => {
  const { label } = option;
  return label.toLowerCase().indexOf(input.toLowerCase()) >= 0
}
```

### Params

| 参数         | 说明                                                                              | 类型                         | 默认值               | 必填 |
| ------------ | --------------------------------------------------------------------------------- | ---------------------------- | -------------------- | ---- |
| value        | 指定当前选中的条目，多选时为一个数组。（value 数组引用未变化时，Select 不会更新） | string \| number             | ''                   | 否   |
| onChange     | 选中 option，或 input 的 value 变化时，调用此函数                                 | function                     | (value: T[]) => void | 否   |
| sort         | 排序类型                                                                          | 'value' \| 'label' \| 'none' | 'label'              | 否   |
| defaultFirst | Option改变，默认选中第一个                                                        | boolean                      | true                 | 否   |

SelectProps https://ant.design/components/select-cn/#Select-props
