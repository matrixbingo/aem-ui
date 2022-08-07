# tags-single-form

## 代码演示

### 基础用法

<code src="./tags-single-form-use.tsx" />


## API

```jsx | pure
const dataList = [
  { id: 0, value: 'ALL', name: '全部' },
  { id: 2, value: 'MY', name: '我的' },
  { id: 1, value: 'music', name: '音乐' },
  { id: 3, value: 'movie', name: '电影' },
  { id: 4, value: 'OTHERS1', name: '其他1' },
];

```

```jsx | pure
<TagsSingleFrom list={dataList} onChange={onChange} />
```

### Params

| 参数     | 说明                                              | 类型                                                        | 默认值       | 必填 |
| -------- | ------------------------------------------------- | ----------------------------------------------------------- | ------------ | ---- |
| value    | 指定当前选中                                      | string \| number                                            | list第一个   | 否   |
| onChange | 选中 option，或 input 的 value 变化时，调用此函数 | function                                                    | (id) => void | 否   |
| list     | 对象数组                                          | { id: number     \| string; name: string; value: string;}[] | []           | 否   |
