# range-day-radio-format

`选项和格式化区间日期选择框`


## 代码演示

### 基础用法
<code src="./range-day-radio-format-use.tsx" />


## API
```jsx | pure
<RangeDayRadioFormat onChange={onChange} />
```


### Params
| 参数        | 说明                           | 类型                    | 默认值 |
| ----------- | ------------------------------ | ----------------------- | ------ |
| onChange    | 输入框内容变化时的回调         | function(v: string\[\]) | -      |
| range       | 按钮区间                       | number[]                | [7,15] |
| radioBefore | 按钮位置是否在前               | boolean                 | true   |
| mixDays     | 最大区间                       | number                  | 15     |
| show        | 显示隐藏，监听变化初始化和重置 | boolean                 | 无     |

