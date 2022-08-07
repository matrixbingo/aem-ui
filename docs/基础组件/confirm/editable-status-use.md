# editable-status

`状态选择`


## 代码演示

### 基础用法
<code src="./editable-status-use.tsx" />


## API

```jsx | pure
<EditableStatus title={title} onConfirm={onConfirm} checked={state} switchProps={{ ...checkedChildren, disabled }} popconfirmProps={{ disabled }} />
```


### Params
| 参数            | 说明           | 类型                                               | 默认值          |
| --------------- | -------------- | -------------------------------------------------- | --------------- |
| title           | 标题           | React.ReactNode                                    | RenderFunction; | -
| checked         | 选中           | boolean;                                           | -               |
| onConfirm       | 回调           | (e?: React.MouseEvent) => void                     | -               |
| switchProps     | switch属性     | Omit<SwitchProps, \'checked\'>                     | -               |
| popconfirmProps | popconfirm属性 | Omit<PopconfirmProps, \'onConfirm\' \| \'title\' > | -               |

switchProps     https://ant.design/components/switch-cn/#API
ssss
popconfirmProps https://ant.design/components/popconfirm-cn/#API
