# OmitTipLabel

`超长截取，并提示显示`

## 代码演示

### 基础用法

<code src="./omit-tip-label-use.tsx" />


## API

```jsx | pure
 <OmitTipLabel title="import { OmitTipLabel } from 'aem-ui'" limit={10} />
```

### Params

| 参数  | 说明                 | 类型   | 默认值 | 必填 |
| ----- | -------------------- | ------ | ------ | ---- |
| title | 标签字体，组合使用   | string \| string[] | ''     | 是   |
| limit | 长度，超出使用省略号 | number | 30     | 否   |
| separator | 分隔符 | string | undefined    | 否   |

TooltipProps https://ant.design/components/tooltip-cn/#API
