# button-copy

`复制按钮`


## ✨ 依赖

- "react-copy-to-clipboard": "^5.1.0"


## 代码演示

### 基础用法
<code src="./button-copy-use.tsx" />


## API
```jsx | pure
<ButtonCopy value={value} />
```


### Params
| 参数     | 说明             | 类型                        | 默认值 |
| -------- | ---------------- | --------------------------- | ------ |
| value    | 需要copy的值     | string                      | -      |
| onChange | 修改的回调       | (value: string) => void;    | -      |
| children | 提交前格式化数据 | children?: React.ReactNode; | -      |
