# input-search



## 代码演示

### 基础用法

<code src="./input-search-use.tsx" />


## API

```jsx | pure
<InputSearch onSearch={onSearch} />
```


### Params
| 参数       | 说明                                             | 类型                     | 默认值                  | 必填 |
| ---------- | ------------------------------------------------ | ------------------------ | ----------------------- | ---- |
| onChange   | 输入框内容变化时的回调                           | function                 | (value: string) => void | 否   |
| allowClear | 可以点击清除图标删除内容                         | boolean                  | false                   | 否   |
| size       | 控件大小。注：标准表单内的输入框大小限制为 large | large \| middle \| small | -                       | 否   |

SearchProps https://ant.design/components/input-cn/#Input.Search
