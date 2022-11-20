# button-confirm

`按钮确认`


## 代码演示

### 基础用法
<code src="./button-confirm-use.tsx" />


## API

```jsx | pure
<EditableStatus title={title} onConfirm={onConfirm} checked={state} switchProps={{ ...checkedChildren, disabled }} popconfirmProps={{ disabled }} />
```


### Params
| 参数         | 说明           | 类型                           | 默认值          |
| ------------ | -------------- | ------------------------------ | --------------- |
| title        | 标题           | React.ReactNode                | RenderFunction; | -
| checked      | 选中           | boolean;                       | -               |
| onConfirm    | 回调           | (e?: React.MouseEvent) => void | -               |
| buttonProps  | switch属性     | ButtonProps                    | -               |
| confirmProps | popconfirm属性 | Omit<PopconfirmProps, 'title'  | 'onConfirm'     | 'onCancel'> | -               

buttonProps    https://ant.design/components/button-cn/#API

confirmProps   https://ant.design/components/popconfirm-cn#api
