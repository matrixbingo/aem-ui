# label-detail

`默认标题格式和明细`

## 代码演示

### 基础用法

<code src="./label-detail-use.tsx" />


## API
```jsx | pure
 <LabelDetail title="title" det level={2} />
```

### Params

| 参数       | 说明               | 类型       | 默认值    | 必填 |
| ---------- | ------------------ | ---------- | --------- | ---- |
| title      | 标签字体，组合使用 | string     | ReactNode | ''   | 是
| detail     | 明细               | string     | ReactNode | 无   | 否
| level      | h2,h3....          | number     | 2         | 否   |
| spaceProps | SpaceProps         | SpaceProps | 无        | 否   |
