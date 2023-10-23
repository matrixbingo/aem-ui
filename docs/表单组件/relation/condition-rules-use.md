# condition-rules

`condition-rules`

## 代码演示

### 基础用法
<code src="./condition-rules-use.tsx" />


## API
```jsx | pure
const array = FormilyUtil.createArrayTabs({ title: '对象数组', maxItems: 3, },
{
  aaa: {
    title: 'AAA',
    required: true,
    'x-component': 'Input',
  },
  bbb: {
    title: 'BBB',
    required: true,
    'x-component': 'Input',
  },
});
```


### Params
| 参数                  | 说明        | 类型                        | 默认值 |
| --------------------- | ----------- | --------------------------- | ------ |
| arrayItemsProps       | ItemsProps  | ArrayTabsProps              | -      |
| arrayTableColumnProps | ColumnProps | ArrayTabsColumnProps        | -      |
| config                | config      | { itemConfig?: configType } | -      |
