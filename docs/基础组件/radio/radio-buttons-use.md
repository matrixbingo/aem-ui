# radio-buttons

`多选`

## 代码演示

### 基础用法

<code src="./radio-buttons-use.tsx" />


## API

```jsx | pure

const buttons = [{ value: 7, children: '7天' }, { value: 15, children: '15天' }];

```

```jsx | pure
<RadioButtons buttons={buttons} onChange={onChange} />
```

### Params

| 参数     | 说明                 | 类型                       | 默认值               | 必填 |
| -------- | -------------------- | -------------------------- | -------------------- | ---- |
| buttons  | 按钮配置数组         | AbstractCheckboxProps<T>[] | ''                   | 否   |
| onChange | 选择button调用此函数 | function                   | (value: T) => void | 否   |

AbstractCheckboxProps : https://ant.design/components/radio-cn/#Radio/Radio.Button
