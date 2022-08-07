# tags-list-editor

`动态添加和删除`

## 代码演示

### 基础用法

<code src="./tags-list-editor-use.tsx" />


## API

```jsx | pure
const dataList = [
  { id: 'ALL', name: '全部' },
  { id: 'MY', name: '我的' },
  { id: 'music', name: '音乐' },
  { id: 'movie', name: '电影' },
  { id: 'OTHERS', name: '其他' },
];
```

```jsx | pure
 <TagsListEditor data={state} onChange={onChange} />
```

### Params

| 参数      | 说明                 | 类型                                                        | 默认值                 | 必填 |
| --------- | -------------------- | ----------------------------------------------------------- | ---------------------- | ---- |
| onChange  | 点击删除调用此函数   | function                                                    | (value: T) => void     | 否   |
| data      | 对象数组             | { id: number     \| string; name: string; value: string;}[] | []                     | 否   |
| transform | 转换函数，可以自定义 | (data: T[]) => CreateBaseTagProps[]                         | 默认使用内置 toTagList | 否   |
