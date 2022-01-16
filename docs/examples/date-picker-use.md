---
title: date-picker
nav:
  title: 组件
  order: 3
---

# date-picker

## DatePickerFormat

```jsx | pure
<DatePickerFormat onChange={onChange} />
```

<code src="./demo/date-picker/date-picker-format-use.tsx" />

## RangePickerFormat

```jsx | pure
<RangePickerFormat onChange={onChange} />
```

<code src="./demo/date-picker/range-picker-format-use.tsx" />


## API

### DatePickerFormat

| 参数     | 说明                   | 类型        | 默认值       |
| -------- | ---------------------- | ----------- | ------------ |
| value    | 时间内容               | string      | -            |
| onChange | 输入框内容变化时的回调 | function(e) | -            |
| format   | 时间格式化             | string      | 'YYYY-MM-DD' |

其他 DatePickerProps https://ant.design/components/date-picker-cn/#DatePicker

### RangePickerFormat

| 参数     | 说明                   | 类型                            | 默认值                       |
| -------- | ---------------------- | ------------------------------- | ---------------------------- |
| value    | 开始和结束时间         | string[]                        | ['YYYY-MM-DD', 'YYYY-MM-DD'] |
| onChange | 输入框内容变化时的回调 | (dateString: string[]) => void; | -                            |
| format   | 时间格式化             | string                          | 'YYYY-MM-DD'                 |
| mixDays  | 最大天数，0为任意      | number                          | 0                            |

其他 RangePickerProps https://ant.design/components/date-picker-cn/#RangePicker
