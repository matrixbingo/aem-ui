# input-render-customer

`自定义输入和返回值`


## 代码演示

### 基础用法

<code src="./input-render-customer-use.tsx" />


## API

```jsx | pure
<InputRenderCustomer value={value} onChange={onChange} render={(v) => v.trim()} />
````


### Params
| 参数     | 说明                   | 类型     | 默认值             | 必填 |
| -------- | ---------------------- | -------- | ------------------ | ---- |
| value    | 输入内容               | string   | -                  | 否   |
| onChange | 输入框内容变化时的回调 | function | (value: T) => void | 否   |
| input    | 入参回调               | function | (v) => v           | 否   |
| render   | 出参回调               | function | (v) => v           | 否   |

InputRenderCustomerProps https://ant.design/components/input-cn/#Input
