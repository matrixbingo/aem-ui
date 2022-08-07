# checkbox-spin

`带加载的CheckBox，列表多用`


## 代码演示

### 基础用法


## API
```jsx | pure
<CheckboxSpin key={id} title={title} onChange={(e, setChecked, setLoading) => onChange(e, setChecked, setLoading, id)} checked={checked} />
```


### Params
| 参数             | 说明 | 类型                                                                                                                                                          | 默认值 |
| ---------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| id               | id   | stirng                                                                                                                                                        | -      |
| title            | 标题 | React.ReactNode                                                                                                                                               | -      |
| onChange         | 回调 | (e: CheckboxChangeEvent, setChecked: React.Dispatch\<React.SetStateAction<boolean\>\>, setLoading: React.Dispatch\<React.SetStateAction<boolean\>\>) => void; | -      |
| onChangeCallBack | 回调 | (rs: any, setChecked: React.Dispatch\<React.SetStateAction<boolean\>\>) => void;                                                                              | -      |
| checkboxProps    | 属性 | Omit<CheckboxProps, \'checked\' \| \'onChange\'>;                                                                                                             | -      |
| setCheckedList   | 方法 | Record<string, React.Dispatch<React.SetStateAction<boolean>>>;                                                                                                | -      |

其中 checkboxProps: https://ant.design/components/checkbox-cn/#Checkbox

