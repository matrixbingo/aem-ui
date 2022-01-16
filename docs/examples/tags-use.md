---
title: Tags
nav:
  title: 组件
  order: 3
---

## TagsSingleFrom 单选

```jsx | pure
const dataList = [
  { id: 0, value: 'ALL', name: '全部' },
  { id: 2, value: 'MY', name: '我的' },
  { id: 1, value: 'music', name: '音乐' },
  { id: 3, value: 'movie', name: '电影' },
  { id: 4, value: 'OTHERS1', name: '其他1' },
];

<TagsSingleFrom list={dataList} onChange={onChange} />
```

<code src="./demo/tag/tags-single-form-use.tsx" />

## TagsListEditor 动态添加和删除

```jsx | pure
const dataList = [
  { id: 'ALL', name: '全部' },
  { id: 'MY', name: '我的' },
  { id: 'music', name: '音乐' },
  { id: 'movie', name: '电影' },
  { id: 'OTHERS', name: '其他' },
];

 <TagsListEditor data={state} onChange={onChange} />
```

<code src="./demo/tag/tags-list-editor-use.tsx" />

## API

### TagsSingleFrom

| 参数     | 说明                                              | 类型                                                        | 默认值       | 必填 |
| -------- | ------------------------------------------------- | ----------------------------------------------------------- | ------------ | ---- |
| value    | 指定当前选中                                      | string \| number                                            | list第一个   | 否   |
| onChange | 选中 option，或 input 的 value 变化时，调用此函数 | function                                                    | (id) => void | 否   |
| list     | 对象数组                                          | { id: number     \| string; name: string; value: string;}[] | []           | 否   |

### TagsListEditor

| 参数      | 说明                 | 类型                                                        | 默认值                 | 必填 |
| --------- | -------------------- | ----------------------------------------------------------- | ---------------------- | ---- |
| onChange  | 点击删除调用此函数   | function                                                    | (value: T) => void     | 否   |
| data      | 对象数组             | { id: number     \| string; name: string; value: string;}[] | []                     | 否   |
| transform | 转换函数，可以自定义 | (data: T[]) => CreateBaseTagProps[]                         | 默认使用内置 toTagList | 否   |

#### CreateBaseTagProps

```jsx | pure
export interface CreateBaseTagProps extends Omit<TagProps, 'id' | 'onClose'> {
  id: string | number;
  children: string | ReactNode | undefined;
}
```
TagProps https://ant.design/components/tag-cn/#Tag
