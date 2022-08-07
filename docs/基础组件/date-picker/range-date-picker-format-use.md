# range-date-picker-format

`格式化区间日期选择框`


## 代码演示

### 基础用法
<code src="./range-date-picker-format-use.tsx" />


## API
```jsx | pure
<RangeDatePickerFormat onChange={onChange} />
```


### Params
| 参数     | 说明                   | 类型                  | 默认值       |
| -------- | ---------------------- | --------------------- | ------------ |
| value    | 时间内容               | string\[\]              | -            |
| onChange | 输入框内容变化时的回调 | function(v: string\[\]) | -            |
| format   | 时间格式化             | string                | 'YYYY-MM-DD' |
| mixDays  | 最大天数，0为任意      | number                | 0            |

其他 RangePickerProps https://ant.design/components/date-picker-cn/#RangePicker
